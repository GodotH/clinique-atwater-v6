import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Clinique Chiropratique Atwater - Dr. Simon Tanguay',
    template: '%s | Clinique Chiropratique Atwater'
  },
  description: 'Professional pain relief and chiropractic treatment in Montreal. Dr. Simon Tanguay specializes in chronic pain, sports injuries, and natural healing.',
  keywords: ['chiropractor', 'Montreal', 'pain relief', 'chronic pain', 'sports injuries', 'applied kinesiology'],
  authors: [{ name: 'Dr. Simon Tanguay' }],
  creator: 'Clinique Chiropratique Atwater',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://chiroatwater.com',
    title: 'Clinique Chiropratique Atwater - Montreal Pain Relief',
    description: 'Professional chiropractic care and pain relief treatments in Montreal. Book your consultation with Dr. Simon Tanguay.',
    siteName: 'Clinique Chiropratique Atwater',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinique Chiropratique Atwater - Montreal Pain Relief',
    description: 'Professional chiropractic care and pain relief treatments in Montreal.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}