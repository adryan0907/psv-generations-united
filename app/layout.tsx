import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PSV Campaign for Seniors',
  description: 'Information about PSV tailored for seniors aged 65 and above',
  viewport: 'width=device-width, initial-scale=1',
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
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
} 