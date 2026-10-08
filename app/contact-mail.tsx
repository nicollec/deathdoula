'use client';

import { useState } from 'react';
import './contact-mail.css';

const WEB3FORMS_KEY = 'eea49a3c-22ee-4863-b1b4-5bbf4e93aaf7';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactMail() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('from_name', 'DeathDoula.ro — Formular de contact');
    formData.append('subject', 'Mesaj nou de pe deathdoula.ro');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="mail-reveal">
        <p>Mulțumesc</p>
        <p className="mail-success-msg">Mesajul a fost trimis. O să îți răspund cât de curând posibil.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="cf-name">Nume</label>
      <input id="cf-name" name="name" type="text" placeholder="Cum te numești" required disabled={status === 'sending'} />

      <label htmlFor="cf-email">E-mail</label>
      <input id="cf-email" name="email" type="email" placeholder="Adresa ta de e-mail" required disabled={status === 'sending'} />

      <label htmlFor="cf-message">Mesaj</label>
      <textarea id="cf-message" name="message" rows={4} placeholder="Scrie-mi câteva rânduri despre ce se întâmplă" required disabled={status === 'sending'} />

      {/* Spam trap: hidden from real users, filled only by bots. Rejected server-side by the form provider. */}
      <label className="hp-field" aria-hidden="true">
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
      </label>

      {status === 'error' && (
        <p className="form-error">Nu am putut trimite mesajul. Te rog să încerci din nou sau să-mi scrii direct pe e-mail.</p>
      )}

      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Se trimite…' : 'Trimite mesajul'} <span>↗</span>
      </button>
    </form>
  );
}
