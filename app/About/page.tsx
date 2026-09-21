import Link from 'next/link'
import React from 'react'

export default function NeonHome() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <header className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center flex flex-col items-center gap-6 shadow-xl">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Next Level Design
        </h1>
        <p className="text-slate-400 text-base">
          Experience the symposium of mechanical department
        </p>
        <Link
          href="/Explorepages"
          className="w-full py-3 px-6 rounded-lg font-semibold text-sm text-white bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors"
        >
          Explore symposium
        </Link>
      </header>
    </main>
  )
}