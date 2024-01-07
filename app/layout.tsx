import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import NavBar from './ui/navbar'
import Footer from './ui/footer'
const noto = Noto_Sans_JP({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: {
//     template: 'TSKaigi 2024 | %s',
//   },
//   description: '日本最大級のTypeScriptカンファレンス',
// }
export const metadata: Metadata = {
  title: {
    template: 'TSKaigi 2024 | %s',
    default: 'TSKaigi 2024',
  },
  description: 'TSKaigi 2024は、日本最大級のTypeScriptカンファレンスです。',
  applicationName: 'TSKaigi 2024',
  authors: [
    { name: 'TSKaigi', url: '' },
    { name: '', url: '' },
  ],
  keywords: ['TypeScript', 'カンファレンス', 'イベント', 'オンライン',],
  themeColor: '#3498db',
  creator: 'ウェブページの作成者',
  publisher: 'TSKaigi.org',
  robots: 'index, follow',
  icons: {
    icon: '',
    apple: '',
  },
};


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
