import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://deathdoula.ro';
const siteName = 'deathdoula.ro';
const description = 'Însoțire conversațională non-medicală, în persoană, pentru oameni care se apropie de finalul vieții și pentru conversațiile care contează.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Death doula în București | Însoțire la finalul vieții',
  description,
  applicationName: siteName,
  authors: [{ name: 'Nicole' }],
  creator: 'Nicole',
  publisher: siteName,
  category: 'Servicii de însoțire non-medicală la finalul vieții',
  keywords: [
    'death doula București',
    'doula de final de viață',
    'însoțire la finalul vieții',
    'sprijin non-medical finalul vieții',
    'conversații despre moarte București',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: siteUrl,
    siteName,
    title: 'Death doula în București | Însoțire la finalul vieții',
    description,
    images: [{ url: '/media/tea-hero-poster.png', alt: 'deathdoula.ro — însoțire conversațională non-medicală în București' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Death doula în București | Însoțire la finalul vieții',
    description,
    images: ['/media/tea-hero-poster.png'],
  },
  other: { 'format-detection': 'telephone=no, address=no, email=no' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: 'ro-RO',
      description,
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#service`,
      name: 'Însoțire conversațională non-medicală la finalul vieții',
      url: siteUrl,
      description,
      areaServed: { '@type': 'City', name: 'București' },
      availableLanguage: 'ro',
      serviceType: 'Însoțire conversațională non-medicală',
      provider: { '@type': 'Person', name: 'Nicole' },
      isRelatedTo: { '@type': 'Thing', name: 'Însoțire la finalul vieții' },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
