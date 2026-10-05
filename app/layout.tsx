import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'deathdoula.ro — București',
  description: 'Însoțire non-medicală, în persoană, pentru conversațiile dificile din apropierea morții.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
