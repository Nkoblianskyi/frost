"use client"

import { useEffect, useRef } from "react"
export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Функція для анімації фону
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Встановлюємо розмір canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Викликаємо при завантаженні та при зміні розміру вікна
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Створюємо сніжинки
    const snowflakes: { x: number; y: number; radius: number; speed: number; opacity: number }[] = []
    const createSnowflakes = () => {
      const count = Math.floor(window.innerWidth / 10) // Кількість сніжинок залежить від ширини екрану
      for (let i = 0; i < count; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 4 + 1,
          speed: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.3,
        })
      }
    }

    createSnowflakes()

    // Функція для анімації сніжинок
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Малюємо градієнтний фон
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#1a365d") // Темно-синій
      gradient.addColorStop(1, "#2c5282") // Синій
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Малюємо сніжинки
      snowflakes.forEach((snowflake) => {
        ctx.beginPath()
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`
        ctx.fill()

        // Рух сніжинок
        snowflake.y += snowflake.speed
        snowflake.x += Math.sin(snowflake.y / 30) * 0.5

        // Якщо сніжинка вийшла за межі екрану, повертаємо її нагору
        if (snowflake.y > canvas.height) {
          snowflake.y = 0
          snowflake.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Прибираємо слухач подій при розмонтуванні компонента
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section className="relative w-full overflow-hidden pb-16 pt-24 text-white">
      {/* Анімований фон */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          FROSTPLAY NETWORK
        </h1>
        <p className="animate-fade-up text-xl font-medium opacity-90 sm:text-2xl md:text-3xl [animation-delay:200ms]">
          Bondens eventyr
        </p>
        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg opacity-80 [animation-delay:400ms]">
          Styr gården din, dyrk forskjellige grønnsaker og frukter, høst avlingen og se den vokse i dette engasjerende
          og avslappende spillet.
        </p>
        <div className="mt-8 animate-fade-up rounded-lg bg-white/10 px-4 py-2 text-sm [animation-delay:800ms]">
          <p className="font-medium">KUN FOR UNDERHOLDNING - Sosialt spill for avslapping</p>
        </div>
      </div>

      {/* Декоративні елементи */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block h-12 w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </section>
  )
}
