import './globals.css'

export const metadata = {
  title: 'Issa - Frontend Engineer',
  description: 'Professional Frontend Engineer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
