import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import NavBar from './ui/navbar'
import Footer from './ui/footer'
const noto = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TSKaigi 2024',
  description: '日本最大級のTypeScriptカンファレンス',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <body className={noto.className}>
        <header><NavBar /></header>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen'>
        {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
