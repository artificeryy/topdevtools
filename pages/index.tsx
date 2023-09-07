import { Inter } from 'next/font/google'
import MainNav from "@/components/main-nav"
import Hero from "@/components/hero"
import Tools from "@/components/tools"
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Head>
        <title>TopDev.tools</title>
      </Head>
      <MainNav />
      <Hero />
      <Tools />
    </main>
  )
}
