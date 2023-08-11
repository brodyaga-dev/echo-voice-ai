import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '@/context/Provider'
import { ModalProvider } from '@/components/modal-provider'
import 'regenerator-runtime/runtime'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Echo Sounds AI',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
     <Provider session={session}>
      <body className={inter.className}>
        <ModalProvider />
        {children}
        </body>
      </Provider>
    </html>
  )
}
