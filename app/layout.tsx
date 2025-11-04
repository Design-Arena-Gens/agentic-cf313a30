import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Etsy T-Shirt Niche Intelligence',
  description: 'Actionable research on profitable, low-spend Etsy t-shirt niches to reach $3K monthly revenue.',
  openGraph: {
    title: 'Etsy T-Shirt Niche Intelligence',
    description: 'Actionable research on profitable, low-spend Etsy t-shirt niches to reach $3K monthly revenue.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Etsy T-Shirt Niche Intelligence',
    description: 'Actionable research on profitable, low-spend Etsy t-shirt niches to reach $3K monthly revenue.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950">
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 pb-20 pt-10 sm:px-10">
          {children}
        </main>
      </body>
    </html>
  );
}
