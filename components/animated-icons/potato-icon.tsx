"use client"

import { useEffect, useRef } from "react"

interface PotatoIconProps {
  size?: number
  isAnimated?: boolean
  className?: string
}

export function PotatoIcon({ size = 80, isAnimated = true, className = "" }: PotatoIconProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (isAnimated && svgRef.current) {
      const potato = svgRef.current.querySelector(".potato-body") as SVGElement
      const eyes = svgRef.current.querySelector(".potato-eyes") as SVGElement

      const potatoAnimation = () => {
        if (potato) {
          potato.animate(
            [
              { transform: "rotate(0deg)" },
              { transform: "rotate(3deg)" },
              { transform: "rotate(0deg)" },
              { transform: "rotate(-3deg)" },
              { transform: "rotate(0deg)" },
            ],
            {
              duration: 4000,
              iterations: Number.POSITIVE_INFINITY,
              easing: "ease-in-out",
            },
          )
        }
      }

      const eyesAnimation = () => {
        if (eyes) {
          eyes.animate([{ transform: "scale(1)" }, { transform: "scale(0.9)" }, { transform: "scale(1)" }], {
            duration: 3000,
            iterations: Number.POSITIVE_INFINITY,
            easing: "ease-in-out",
          })
        }
      }

      potatoAnimation()
      eyesAnimation()
    }
  }, [isAnimated])

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g className="potato-body">
        <ellipse
          cx="50"
          cy="50"
          rx="35"
          ry="25"
          fill="#D7CCC8"
          stroke="#A1887F"
          strokeWidth="2"
          transform="rotate(15, 50, 50)"
        />
        <path d="M30 45 C 35 35, 65 35, 70 45" stroke="#BCAAA4" strokeWidth="2" fill="none" />
        <path d="M30 55 C 35 65, 65 65, 70 55" stroke="#BCAAA4" strokeWidth="2" fill="none" />
      </g>
      <g className="potato-eyes">
        <circle cx="40" cy="45" r="3" fill="#795548" />
        <circle cx="60" cy="45" r="3" fill="#795548" />
        <circle cx="50" cy="60" r="2" fill="#795548" />
      </g>
    </svg>
  )
}
