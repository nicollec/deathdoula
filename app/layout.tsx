import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Death doula în București | Însoțire la finalul vieții',
  description: 'Însoțire conversațională non-medicală, în persoană, pentru oameni care se apropie de finalul vieții și pentru conversațiile care contează.',
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
