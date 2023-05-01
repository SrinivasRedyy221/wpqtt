import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <h1>Hello this is srinivas project</h1>
    <Link href="./header">
      <h1>link to the header page</h1>
    </Link>
    </main>
  )
}
