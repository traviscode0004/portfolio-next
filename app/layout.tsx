import { ReactNode } from 'react'
import './globals.css' // Make sure this points to your globals.css
import { Metadata } from 'next'
// In layout.tsx (client component) or a top-level file:
import '@fortawesome/fontawesome-free/css/all.min.css'


export const metadata: Metadata = {
  title: 'Travis Code',
  description:
    'Travis Decker—Web Developer using React, GraphQL, AWS, and more. Portfolio showcasing modern web development.',
  keywords: [
    'Web Development',
    'React',
    'GraphQL',
    'AWS',
    'JavaScript',
    'Portfolio',
    'Next.js',
  ],
  authors: [{ name: 'Travis Decker' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Travis Code',
    description:
      'Travis Decker—Software/Web Developer and Dad Joke Connoisseur. Specializing in JavaScript with React, blending the magic of GraphQL with the power of AWS.',
    url: 'https://www.yoursite.com', // Replace with your domain
    siteName: 'Travis Code',
    images: [
      {
        url: 'https://www.traviscode.com/hero_background.png', // Example, update if desired
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
