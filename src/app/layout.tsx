import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'
import { Bebas_Neue } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400' as const], variable: '--bebas-font' })
export const metadata: Metadata = {
  title: 'Mega Shop',
  description: 'By Rakibul Islam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bebasNeue.variable}`}>
        {children}
      </body>
    </html>
  )
}
