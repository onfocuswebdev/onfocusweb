import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'on focus web',
  description: 'Showcase, discover, request and create new remarkable and amazing app and website projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
        {/* <!-- Start cookieyes banner -->  */}
        <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/92d8ab746d7e85a9d58794dd/script.js"></script> 
        {/* <!-- End cookieyes banner --> */}
        </head>
        <body>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
