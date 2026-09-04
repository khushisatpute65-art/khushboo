import Nav from '../components/Nav'

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center">
      <Nav />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          About
        </h1>
        <p className="text-zinc-400 text-lg">
          Background, technical skills, design philosophy, and biography.
        </p>
      </main>
    </div>
  )
}

