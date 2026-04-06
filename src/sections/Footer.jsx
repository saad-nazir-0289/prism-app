import { Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal'

function Footer({ data, brand }) {
  return (
    <footer className="section-divider relative z-10 mx-auto max-w-[1920px] px-8 py-18 md:px-16">
      <Reveal>
        <div className="grid gap-12 xl:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Sparkles className="h-9 w-9 text-cyan-400" strokeWidth={1.9} />
              <span className="font-display text-[34px] tracking-[0.22em] text-white">{brand}</span>
            </div>
            <p className="mt-10 max-w-[420px] text-[24px] leading-[1.5] text-white/55">{data.description}</p>
          </div>

          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              {data.quickLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-list">
              {data.resources.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Connect</h3>
            <div className="mt-8 flex items-center gap-7 text-[22px] text-white/58">
              <span className="social-chip">X</span>
              <span className="social-chip">in</span>
              <span className="social-chip">gh</span>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/8 pt-14 text-center text-[20px] text-white/36">
          &copy; 2026 PRISM. A Digital Collectible Experience. All rights reserved.
        </div>
      </Reveal>
    </footer>
  )
}

export default Footer
