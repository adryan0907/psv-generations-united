import type { Metadata } from "next"
import './globals.css'
import { Inter } from "next/font/google"

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "PSV Generations United",
  description: "Connect with fellow PSV supporters across generations",
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      {
        url: "/idfewo20xH_1740486009112.png",
        href: "/idfewo20xH_1740486009112.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Increase default font size for better readability */}
        <style>{`
          :root {
            font-size: 18px;
          }
        `}</style>
        <link rel="icon" href="/idfewo20xH_1740486009112.png" />
      </head>
      <body className="font-inter">
        <main>{children}</main>
      </body>
    </html>
  )
} 