import Header from '../components/Header'
import { ArrowUpIcon } from "lucide-react"
import { Button } from '@/components/ui/button'

export function ButtonRounded() {
  return (
    <div className="flex gap-2">
      <Button className="rounded-full">Get Started</Button>
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center pt-24 sm:pt-28">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Home
        </h1>
        <p className="text-zinc-400 text-lg mb-6">
          Welcome to the portfolio. Explore projects, experience, and contact details.
        </p>
        <ButtonRounded />
      </main>
    </div>
  )
}
