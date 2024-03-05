import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kaylee's portfolio",
  description: "A freelance coder, weavin' magic in the digital realm.",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <svg>
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency="0.65" />
        </filter>
      </svg>
      <body className="wrapper">
          {children}
      </body>
    </html>
  )
}
