import './globals.css'
import type { Metadata } from 'next'
import { Victor_Mono } from 'next/font/google';
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Kaylee's portfolio",
  description: "A freelance coder, weavin' magic in the digital realm.",
  themeColor: "#0b0a0a"
}

const victor_mono = Victor_Mono({
  subsets: ['latin'],
  style: ["normal", "italic"],
  display: "swap"
});

const major_mono = localFont({
  src: "../public/MajorMono.ttf",
  variable: "--font-title",
  display: "swap"
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`wrapper ${major_mono.variable} ${victor_mono.className}`}>
        <svg>
          <filter id="grainy">
            <feTurbulence type="turbulence" baseFrequency="0.65" />
          </filter>
        </svg>
        {children}
      </body>
    </html>
  )
}
