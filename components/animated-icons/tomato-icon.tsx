"use client"

import { useEffect, useRef } from "react"

interface TomatoIconProps {
  size?: number
  isAnimated?: boolean
  className?: string
}

export function TomatoIcon({ size = 80, isAnimated = true, className = "" }: TomatoIconProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (isAnimated && svgRef.current) {
      const tomato = svgRef.current.querySelector(".tomato-body") as SVGElement
      const stem = svgRef.current.querySelector(".tomato-stem") as SVGElement
      const shine = svgRef.current.querySelector(".tomato-shine") as SVGElement

      const tomatoAnimation = () => {
        if (tomato) {
          tomato.animate([{ transform: "scale(1)" }, { transform: "scale(1.05)" }, { transform: "scale(1)" }], {
            duration: 2000,
            iterations: Number.POSITIVE_INFINITY,
            easing: "ease-in-out",
          })
        }
      }

      const stemAnimation = () => {
        if (stem) {
          stem.animate(
            [
              { transform: "rotate(0deg)", transformOrigin: "50px 30px" },
              { transform: "rotate(-5deg)", transformOrigin: "50px 30px" },
              { transform: "rotate(0deg)", transformOrigin: "50px 30px" },
              { transform: "rotate(5deg)", transformOrigin: "50px 30px" },
              { transform: "rotate(0deg)", transformOrigin: "50px 30px" },
            ],
            {
              duration: 3000,
              iterations: Number.POSITIVE_INFINITY,
              easing: "ease-in-out",
            },
          )
        }
      }

      const shineAnimation = () => {
        if (shine) {
          shine.animate([{ opacity: 0.3 }, { opacity: 0.7 }, { opacity: 0.3 }], {
            duration: 2500,
            iterations: Number.POSITIVE_INFINITY,
            easing: "ease-in-out",
          })
        }
      }

      tomatoAnimation()
      stemAnimation()
      shineAnimation()
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
      <g className="tomato-body">
        <circle cx="50" cy="60" r="30" fill="#F44336" stroke="#D32F2F" strokeWidth="2" />
        <path
          className="tomato-shine"
          d="M35 45 C 40 40, 50 40, 55 45"
          stroke="#FFCDD2"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>
      <g className="tomato-stem">
        <path d="M50 30 C 45 25, 55 20, 50 15" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M50 30 L 50 35" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 30 C 45 30, 40 25, 35 25" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M50 30 C 55 30, 60 25, 65 25" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  )
}
