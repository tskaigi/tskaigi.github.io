import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import NavBar from './ui/navbar'
import Footer from './ui/footer'
const noto = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'TSKaigi 2024 | %s',
    default: 'TSKaigi 2024',
  },
  metadataBase: new URL('https://tskaigi.org/'),
  description: 'TSKaigi 2024は、日本最大級のTypeScriptカンファレンスを開催します。',
  applicationName: 'TSKaigi 2024',
  authors: [
    { name: '一般社団法人TSKaigi Association', url: 'https://association.tskaigi.org/' },
  ],
  keywords: ['TypeScript', 'TSKaigi', 'TS会議', 'カンファレンス', 'イベント', 'オンライン',],
  publisher: 'TSKaigi.org',
  robots: 'index, follow',
  twitter: {
    title: 'TSKaigi 2024',
    card: 'summary_large_image',
    site: '@tskaigi',
    creator: '@tskaigi',
    images: ['/banner.png'],
  },
  openGraph: {
    title: 'TSKaigi 2024',
    url: 'https://tskaigi.org/',
    description: 'TSKaigi 2024は、日本最大級のTypeScriptカンファレンスを開催します。',
    type: 'website',
    images: ['/banner.png'],
  },

  manifest: '/manifest.json',

export const viewport: Viewport = {
  themeColor: '#345DA7',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={noto.className}>
        <div>
          <NavBar />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  )
}
