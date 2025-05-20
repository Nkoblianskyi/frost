"use client"

import { useEffect, useRef } from "react"

interface CarrotIconProps {
  size?: number
  isAnimated?: boolean
  className?: string
}

export function CarrotIcon({ size = 80, isAnimated = true, className = "" }: CarrotIconProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (isAnimated && svgRef.current) {
      const carrot = svgRef.current.querySelector(".carrot-body") as SVGElement
      const leaves = svgRef.current.querySelector(".carrot-leaves") as SVGElement

      const carrotAnimation = () => {
        if (carrot) {
          carrot.animate(
            [
              { transform: "translateY(0)" },
              { transform: "translateY(-2px)" },
              { transform: "translateY(0)" },
              { transform: "translateY(2px)" },
              { transform: "translateY(0)" },
            ],
            {
              duration: 3000,
              iterations: Number.POSITIVE_INFINITY,
              easing: "ease-in-out",
            },
          )
        }
      }

      const leavesAnimation = () => {
        if (leaves) {
          leaves.animate(
            [
              { transform: "rotate(0deg)", transformOrigin: "50px 20px" },
              { transform: "rotate(-5deg)", transformOrigin: "50px 20px" },
              { transform: "rotate(0deg)", transformOrigin: "50px 20px" },
              { transform: "rotate(5deg)", transformOrigin: "50px 20px" },
              { transform: "rotate(0deg)", transformOrigin: "50px 20px" },
            ],
            {
              duration: 2000,
              iterations: Number.POSITIVE_INFINITY,
              easing: "ease-in-out",
            },
          )
        }
      }

      carrotAnimation()
      leavesAnimation()
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
      <g className="carrot-body">
        <path d="M50 30 L60 90 L40 90 Z" fill="#FF7043" stroke="#E64A19" strokeWidth="2" />
        <path d="M50 40 L55 85 L45 85 Z" fill="#FF8A65" />
      </g>
      <g className="carrot-leaves">
        <path d="M40 20 C 35 10, 45 5, 50 15 C 55 5, 65 10, 60 20 Z" fill="#4CAF50" stroke="#388E3C" strokeWidth="1" />
        <path d="M45 20 C 40 15, 50 10, 50 20 C 50 10, 60 15, 55 20 Z" fill="#66BB6A" />
      </g>
    </svg>
  )
}
