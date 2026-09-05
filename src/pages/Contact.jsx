import Header from '../components/Header'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center pt-24 sm:pt-28">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Contact
        </h1>
        <p className="text-zinc-400 text-lg mb-6">
          Get in touch for collaborations, inquiries, or just to say hi.
        </p>
        <a href="mailto:khushisatpute65@gmail.com">
          <Button className="rounded-full">Send Email (khushisatpute65@gmail.com)</Button>
        </a>
      </main>
    </div>
  )
}

