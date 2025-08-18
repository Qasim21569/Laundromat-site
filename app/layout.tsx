import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, DM_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Clarkson Laundry and Shipping | Complete Service Center in Clarkston, GA",
  description:
    "Modern laundromat with premium amenities, plus UPS shipping, private mailboxes, and business services. Your complete convenience solution in Clarkston, Georgia.",
  generator: "v0.app",
  keywords: "laundromat, laundry service, UPS shipping, mailbox rental, Clarkston GA, wash and fold",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${dmSans.variable} antialiased`}>
      <head>
        <style>{`
html {
  --font-sans: ${inter.style.fontFamily};
  --font-heading: ${poppins.style.fontFamily};
  --font-body: ${inter.style.fontFamily};
  --font-accent: ${dmSans.style.fontFamily};
}
        `}</style>
      </head>
      <body className="font-body" suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
