import type { Metadata } from 'next'
import type { Viewport } from 'next'
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
  description: 'TSKaigi 2024は、日本最大級のTypeScriptカンファレンスを開催します。',
  applicationName: 'TSKaigi 2024',
  authors: [
    { name: '一般社団法人TSKaigi Association', url: 'https://association.tskaigi.org/' },
  ],
  keywords: ['TypeScript', 'カンファレンス', 'イベント', 'オンライン',],
  publisher: 'TSKaigi.org',
  robots: 'index, follow',
  icons: {
    icon: '',
    apple: '',
  },
}

export const viewport: Viewport = {
  themeColor: '#345DA7',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp" className="scroll-smooth">
      <body className={noto.className}>
        <header><NavBar /></header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
