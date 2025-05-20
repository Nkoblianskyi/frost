"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

// Анімований компонент сільської місцевості для About-секції
function AnimatedFarmScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Налаштування canvas
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Хмари
    const clouds: { x: number; y: number; width: number; speed: number; opacity: number }[] = []
    for (let i = 0; i < 5; i++) {
      clouds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height / 3),
        width: Math.random() * 100 + 50,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.3 + 0.4,
      })
    }

    // Поля
    const fields = [
      {
        x: 0,
        y: canvas.height * 0.4,
        width: canvas.width,
        height: canvas.height * 0.6,
        color: "#8BC34A",
      },
      {
        x: 0,
        y: canvas.height * 0.5,
        width: canvas.width,
        height: canvas.height * 0.5,
        color: "#689F38",
      },
      {
        x: 0,
        y: canvas.height * 0.6,
        width: canvas.width,
        height: canvas.height * 0.4,
        color: "#558B2F",
      },
    ]

    // Дерева
    const trees = [
      { x: canvas.width * 0.1, y: canvas.height * 0.5, size: 40 },
      { x: canvas.width * 0.2, y: canvas.height * 0.45, size: 30 },
      { x: canvas.width * 0.8, y: canvas.height * 0.5, size: 35 },
      { x: canvas.width * 0.9, y: canvas.height * 0.45, size: 45 },
    ]

    // Трактор
    const tractor = {
      x: -100,
      y: canvas.height * 0.55,
      width: 60,
      height: 40,
      speed: 1,
    }

    // Анімаційний цикл
    let animationFrame: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Небо
      const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.4)
      skyGradient.addColorStop(0, "#87CEEB")
      skyGradient.addColorStop(1, "#B3E5FC")
      ctx.fillStyle = skyGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height * 0.4)

      // Сонце
      ctx.beginPath()
      ctx.arc(canvas.width * 0.8, canvas.height * 0.15, 30, 0, Math.PI * 2)
      ctx.fillStyle = "#FFD54F"
      ctx.fill()

      // Промені сонця
      ctx.save()
      ctx.translate(canvas.width * 0.8, canvas.height * 0.15)
      for (let i = 0; i < 12; i++) {
        ctx.rotate(Math.PI / 6)
        ctx.beginPath()
        ctx.moveTo(35, 0)
        ctx.lineTo(45, 0)
        ctx.strokeStyle = "#FFD54F"
        ctx.lineWidth = 2
        ctx.stroke()
      }
      ctx.restore()

      // Малюємо хмари
      clouds.forEach((cloud) => {
        ctx.beginPath()
        ctx.arc(cloud.x, cloud.y, cloud.width / 3, 0, Math.PI * 2)
        ctx.arc(cloud.x + cloud.width / 4, cloud.y - cloud.width / 6, cloud.width / 4, 0, Math.PI * 2)
        ctx.arc(cloud.x + cloud.width / 2, cloud.y, cloud.width / 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${cloud.opacity})`
        ctx.fill()

        // Рухаємо хмари
        cloud.x += cloud.speed
        if (cloud.x > canvas.width + cloud.width) {
          cloud.x = -cloud.width
          cloud.y = Math.random() * (canvas.height / 3)
        }
      })

      // Малюємо поля
      fields.forEach((field) => {
        ctx.fillStyle = field.color
        ctx.fillRect(field.x, field.y, field.width, field.height)

        // Додаємо текстуру полів (рядки посівів)
        ctx.strokeStyle = `${field.color}88`
        ctx.lineWidth = 1
        for (let i = 0; i < field.width; i += 20) {
          ctx.beginPath()
          ctx.moveTo(i, field.y)
          ctx.lineTo(i, field.y + field.height)
          ctx.stroke()
        }
      })

      // Малюємо дерева
      trees.forEach((tree) => {
        // Стовбур
        ctx.fillStyle = "#795548"
        ctx.fillRect(tree.x - tree.size / 10, tree.y, tree.size / 5, tree.size / 2)

        // Крона
        ctx.beginPath()
        ctx.arc(tree.x, tree.y - tree.size / 4, tree.size / 2, 0, Math.PI * 2)
        ctx.fillStyle = "#43A047"
        ctx.fill()
      })

      // Малюємо трактор
      ctx.fillStyle = "#F44336"
      ctx.fillRect(tractor.x, tractor.y, tractor.width, tractor.height)

      // Колеса трактора
      ctx.beginPath()
      ctx.arc(tractor.x + tractor.width * 0.2, tractor.y + tractor.height, tractor.height / 2, 0, Math.PI * 2)
      ctx.arc(tractor.x + tractor.width * 0.8, tractor.y + tractor.height, tractor.height / 2, 0, Math.PI * 2)
      ctx.fillStyle = "#424242"
      ctx.fill()

      // Кабіна трактора
      ctx.fillStyle = "#1976D2"
      ctx.fillRect(
        tractor.x + tractor.width * 0.6,
        tractor.y - tractor.height / 2,
        tractor.width * 0.3,
        tractor.height / 2,
      )

      // Рухаємо трактор
      tractor.x += tractor.speed
      if (tractor.x > canvas.width + 100) {
        tractor.x = -100
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    // Обробка зміни розміру вікна
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className="h-full w-full rounded-lg" />
}

export function About() {
  return (
    <section className="w-full bg-muted/50 py-16">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Про "Щедрий Врожай"</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-lg lg:aspect-auto lg:h-full">
            <Image
              src="/farm-team.jpg"
              alt="Команда розробників Щедрий Врожай"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-4">
              "Щедрий Врожай" створений, щоб подарувати вам захоплюючий та розслабляючий досвід фермерства. Наша
              платформа поєднує мальовничі сільські пейзажі з цікавими активностями, де ви можете вирощувати
              різноманітні культури та насолоджуватися плодами своєї праці.
            </p>
            <p className="mb-4">
              Наша віддана команда розробників та дизайнерів створила світ, де зелені поля, яскраві овочі та фрукти, та
              мінливі сезони створюють автентичний фермерський досвід. Кожна деталь ретельно продумана, щоб забезпечити
              вам захоплюючий та розслабляючий досвід.
            </p>
            <p>
              У "Щедрому Врожаї" йдеться про відкриття та насолоду красою сільського життя. Тут ви не знайдете стресових
              елементів - лише спокійну втечу у фермерську фантазію, де ви можете досліджувати у власному темпі та
              насолоджуватися дивовижними чудесами природи та сільського господарства.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
