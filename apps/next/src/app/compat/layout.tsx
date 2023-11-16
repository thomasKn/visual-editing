import '../../tailwind.css'
import VisualEditing from './VisualEditing'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <VisualEditing />
      </body>
    </html>
  )
}