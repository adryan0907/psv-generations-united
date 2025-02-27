import type { Metadata } from "next"
import './globals.css'

export const metadata: Metadata = {
  title: "PSV Generations",
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
    <html lang="en">
      <head>
        {/* Increase default font size for better readability */}
        <style>{`
          :root {
            font-size: 18px;
          }
        `}</style>
        <link rel="icon" href="/idfewo20xH_1740486009112.png" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
} 