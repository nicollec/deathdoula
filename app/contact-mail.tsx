'use client';

import { useState } from 'react';
import './contact-mail.css';

export function ContactMail() {
  const [revealed, setRevealed] = useState(false);
  const address = ['nicole.chiru', 'gmail.com'].join('@');

  if (revealed) {
    return <div className="mail-reveal"><p>Îmi poți scrie la</p><a href={`mailto:${address}`}>{address} <span>↗</span></a></div>;
  }

  return <div className="mail-intro"><p>Nu trebuie să formulezi perfect mesajul. Poți scrie doar câteva rânduri.</p><button className="reveal-mail" type="button" onClick={() => setRevealed(true)}>Arată adresa de e-mail <span>↗</span></button></div>;
}
