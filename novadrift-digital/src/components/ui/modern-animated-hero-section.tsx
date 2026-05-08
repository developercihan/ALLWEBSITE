import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { TextScramble } from "../../lib/text-scramble"

const ScrambledTitle: React.FC = () => {
  const elementRef = useRef<HTMLHeadingElement>(null)
  const scramblerRef = useRef<TextScramble | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (elementRef.current && !scramblerRef.current) {
      scramblerRef.current = new TextScramble(elementRef.current)
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    if (mounted && scramblerRef.current) {
      const phrases = [
        'İnsanlar markanızı',
        'web sitenize bakarak',
        'yargılıyor.',
        'Sadece site değil,',
        'dijital itibar.',
        'İlk izlenim artık dijital.'
      ]
      
      let counter = 0
      const next = () => {
        if (scramblerRef.current) {
          scramblerRef.current.setText(phrases[counter]).then(() => {
            setTimeout(next, 2000)
          })
          counter = (counter + 1) % phrases.length
        }
      }

      next()
    }
  }, [mounted])

  return (
    <h1 
      ref={elementRef}
      className="text-white text-2xl sm:text-4xl md:text-6xl font-bold tracking-wider text-center md:text-left px-4 md:px-0 leading-tight uppercase min-h-[3em] md:min-h-0"
      style={{ fontFamily: 'monospace' }}
    >
      NOVADRIFT
    </h1>
  )
}

/**
 * Canvas-based raining letters background.
 * Replaces the old setState-per-frame approach which caused 18k object allocations/sec.
 * Now uses a single <canvas> with requestAnimationFrame for smooth 60fps rendering.
 */
const RainingLettersBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
    const isMobile = window.innerWidth < 768

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const charCount = isMobile ? 120 : 300
    const chars: { char: string; x: number; y: number; speed: number }[] = []
    for (let i = 0; i < charCount; i++) {
      chars.push({
        char: allChars[Math.floor(Math.random() * allChars.length)],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random() * 0.6,
      })
    }

    // Active "flicker" indices
    let activeSet = new Set<number>()
    let flickerTimer = 0

    let animId: number
    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update flicker every ~50ms
      if (time - flickerTimer > 50) {
        flickerTimer = time
        activeSet = new Set<number>()
        const numActive = Math.floor(Math.random() * 3) + 3
        for (let i = 0; i < numActive; i++) {
          activeSet.add(Math.floor(Math.random() * charCount))
        }
      }

      const fontSize = isMobile ? 13 : 22

      for (let i = 0; i < chars.length; i++) {
        const c = chars[i]
        c.y += c.speed

        if (c.y > canvas.height + 20) {
          c.y = -20
          c.x = Math.random() * canvas.width
          c.char = allChars[Math.floor(Math.random() * allChars.length)]
        }

        const isActive = activeSet.has(i)

        if (isActive) {
          ctx.font = `bold ${fontSize + 4}px monospace`
          ctx.fillStyle = 'rgba(0, 209, 255, 0.9)'
          ctx.shadowColor = 'rgba(0, 209, 255, 0.6)'
          ctx.shadowBlur = 12
        } else {
          ctx.font = `300 ${fontSize}px monospace`
          ctx.fillStyle = 'rgba(30, 41, 59, 0.3)'
          ctx.shadowColor = 'transparent'
          ctx.shadowBlur = 0
        }

        ctx.fillText(c.char, c.x, c.y)
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.2 }}
    />
  )
}

const HeroContent: React.FC = () => {
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-center px-6 md:px-12 z-10">
      <div className="relative z-20 flex flex-col items-center text-center gap-8 md:gap-10 max-w-5xl w-full mx-auto">
        <div className="flex items-center justify-center space-x-4 md:space-x-6 animate-in fade-in slide-in-from-top-5 duration-700">
          <div className="h-[1px] w-12 md:w-16 bg-[#00D1FF]"></div>
          <span className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#00D1FF] text-[10px] md:text-xs font-bold whitespace-nowrap">PREMIUM DİJİTAL VARLIK</span>
          <div className="h-[1px] w-12 md:w-16 bg-[#00D1FF]"></div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both w-full flex justify-center">
          <ScrambledTitle />
        </div>
        
        <p className="text-slate-400 text-lg md:text-2xl max-w-2xl font-light leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000 fill-mode-both delay-300">
           Modern, hızlı ve dönüşüm odaklı web siteleriyle markanızı dijitalde <span className="text-white italic">premium</span> gösteriyoruz.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 mt-4 animate-in fade-in zoom-in-95 duration-1000 fill-mode-both delay-500 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-[#00D1FF] text-black font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(0,209,255,0.4)] hover:scale-110 transition-transform active:scale-95 text-sm md:text-base">
            Ücretsiz Görüşme
          </button>
          <div className="text-slate-500 font-mono text-[10px] md:text-sm tracking-widest leading-none">
            [7-14 GÜN TESLİMAT SÜRESİ]
          </div>
        </div>
      </div>
    </div>
  );
}

export { RainingLettersBackground, HeroContent };
