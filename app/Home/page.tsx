import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-50 grid place-items-center p-8">
      <header className="w-full max-w-md bg-slate-800/70 backdrop-blur-md border border-white/10 rounded-2xl p-10 text-center shadow-2xl flex flex-col items-center gap-6">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
          Hello World
        </h1>

        <Link
          href="/About"
          className="inline-block px-7 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-200 ease-in-out hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40 active:translate-y-0"
        >
          About
        </Link>
      </header>
    </main>
  )
}

export default Home