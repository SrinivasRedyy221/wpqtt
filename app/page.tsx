import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import '@/styles/globals.css'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: 'WPQTT',
}
 
export default function Page() {
  return (
    <main
      className={`flex min-h-screen  ${inter.className}`}
    >  
    <div className="">
        <Navbar/>
        <Header/>
        <Hero/>
        <Footer/>
    </div> 
    </main>
  )
}