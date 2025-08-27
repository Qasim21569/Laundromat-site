import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Dancing_Script, Fredoka } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dancing-script",
})

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cartoon",
})

export const metadata: Metadata = {
  title: "Clarkston Laundry and Shipping | Complete Service Center in Clarkston, GA",
  description:
    "Modern laundromat with premium amenities, plus UPS Authorized Service Center, private mailboxes, and business services. Your complete convenience solution in Clarkston, Georgia.",
  generator: "v0.app",
  keywords: "laundromat, laundry service, UPS Authorized Service Center, mailbox rental, Clarkston GA, wash and fold",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${dancingScript.variable} ${fredoka.variable} antialiased`}>
      <head>
        <style>{`
html {
  --font-sans: ${inter.style.fontFamily};
  --font-heading: ${fredoka.style.fontFamily};
  --font-body: ${inter.style.fontFamily};
  --font-accent: ${dancingScript.style.fontFamily};
  --font-cartoon: ${fredoka.style.fontFamily};
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
