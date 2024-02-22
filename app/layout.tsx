import './globals.css'
import type { Metadata } from 'next'
import { ReactLenis } from '@studio-freight/react-lenis'

export const metadata: Metadata = {
  title: "Kaylee's portfolio",
  description: "TBD",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="wrapper">
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  )
}
