import './globals.css'


export const metadata = {
  title: 'Cardbalances',
  description: 'Verify any Card with confidence ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
