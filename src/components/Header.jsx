import { Link } from 'react-router-dom'
import Nav from './Nav'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60 px-4 sm:px-8 py-3.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left side: Large elegant serif name matching reference screenshot */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-serif font-extrabold tracking-[0.25em] uppercase text-white hover:text-zinc-300 transition-colors no-underline select-none"
        >
          khushboo
        </Link>

        {/* Right side: Nav component & Button with hover/pressed states */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Nav />
          <a href="mailto:khushisatpute65@gmail.com" className="no-underline">
            <Button className="rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-200 hover:shadow-lg active:scale-95 active:translate-y-0 cursor-pointer">
              let's explore
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
