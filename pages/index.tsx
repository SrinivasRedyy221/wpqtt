import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <main
      className={`flex min-h-screen  ${inter.className}`}
    >
    <Head>
      <title>WPQTT</title>

    </Head>
    <div className="flex">
        <Header/>
 
    </div>
    
    </main>
  )
}
