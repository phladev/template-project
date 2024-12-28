import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
})

export const metadata: Metadata = {
  title: 'Template',
  description: 'Um template Next.js otimizado e moderno.',
  keywords: ['Next.js', 'Template', 'React', 'TypeScript'],
  authors: [{ name: 'Pedro', url: 'https://github.com/phladev' }],
  openGraph: {
    title: 'Template',
    description: 'Template Next.js com TypeScript e TailwindCSS',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Meu Site',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#171C28] antialiased text-white`}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
