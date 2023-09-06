import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainNav from "@/components/main-nav"
import Hero from "@/components/hero"
import Tools from "@/components/tools"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <MainNav />
      <Hero />
      <Tools />
    </main>
  )
}
