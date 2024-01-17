import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TSKaigi 2024',
    short_name: 'TSKaigi 2024',
    description: 'TSKaigiは、日本最大級のTypeScriptカンファレンスを開催します。',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
