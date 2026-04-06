import { Sparkles } from 'lucide-react'
import Reveal from './Reveal'

function Navbar({ brand, navLinks }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/92 backdrop-blur-xl">
      <Reveal className="mx-auto flex max-w-[1920px] items-center justify-between px-12 py-4 md:px-16">
        <a href="#top" className="flex items-center gap-4">
          <Sparkles className="h-9 w-9 text-cyan-400" strokeWidth={1.9} />
          <span className="font-display text-[34px] tracking-[0.22em] text-white">{brand}</span>
        </a>

        <div className="hidden items-center gap-12 lg:flex">
          <nav className="flex items-center gap-12 text-[20px] text-white/68">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition duration-300 hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#final-cta" className="button-primary nav-cta px-9">
            Register Now
          </a>
        </div>
      </Reveal>

      <nav className="scrollbar-hidden flex gap-6 overflow-x-auto px-8 pb-4 text-sm text-white/60 lg:hidden">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="whitespace-nowrap transition hover:text-white">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
