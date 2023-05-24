import { Header } from '@/components/header/Header'
import '../styles/globals.scss'
import '../styles/header.scss'
import '../styles/main.scss'
import '../styles/common.scss'
import '../styles/footer.scss'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Холодосы с прусаками',
  description: 'Холодосы с прусаками',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
