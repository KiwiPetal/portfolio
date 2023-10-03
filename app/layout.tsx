import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kaylee's portfolio",
  description: 'TBD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="wrapper">{children}</body>
    </html>
  )
}
