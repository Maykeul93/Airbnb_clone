import './globals.css'
import Navbar from './components/Navbar/Navbar'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Modal from './components/Modals/Modal'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Modal isOpen/>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
