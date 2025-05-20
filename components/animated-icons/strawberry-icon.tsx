"use client"

import { useEffect, useRef } from "react"

interface StrawberryIconProps {
  size?: number
  isAnimated?: boolean
  className?: string
}

export function StrawberryIcon({ size = 80, isAnimated = true, className = "" }: StrawberryIconProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (isAnimated && svgRef.current) {
      const strawberry = svgRef.current.querySelector(".strawberry-body") as SVGElement
      const leaves = svgRef.current.querySelector(".strawberry-leaves") as SVGElement
      const seeds = svgRef.current.querySelector(".strawberry-seeds") as SVGElement

      const strawberryAnimation = () => {
        if (strawberry) {
          strawberry.animate(
            [
              { transform: "rotate(0deg)" },
              { transform: "rotate(3deg)" },
              { transform: "rotate(0deg)" },
              { transform: "rotate(-3deg)" },
              { transform: "rotate(0deg)" },
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
              { transform: "rotate(0deg)", transformOrigin: "50px 30px" },
              { transform: "rotate(-5deg)", transformOrigin: "50px 30px" },
              { transform: "rotate(0deg)", transformOrigin: "50px 30px" },
              { transform: "rotate(5deg)", transformOrigin: "50px 30px" },
              { transform: "rotate(0deg)", transformOrigin: "50px 30px" },
            ],
            {
              duration: 2000,
              iterations: Number.POSITIVE_INFINITY,
              easing: "ease-in-out",
            },
          )
        }
      }

      const seedsAnimation = () => {
        if (seeds) {
          seeds.animate([{ opacity: 0.7 }, { opacity: 1 }, { opacity: 0.7 }], {
            duration: 2500,
            iterations: Number.POSITIVE_INFINITY,
            easing: "ease-in-out",
          })
        }
      }

      strawberryAnimation()
      leavesAnimation()
      seedsAnimation()
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
      <g className="strawberry-body">
        <path
          d="M50 30 C 30 30, 20 50, 30 70 C 40 85, 60 85, 70 70 C 80 50, 70 30, 50 30 Z"
          fill="#E53935"
          stroke="#C62828"
          strokeWidth="2"
        />
      </g>
      <g className="strawberry-seeds">
        <circle cx="35" cy="45" r="2" fill="#FFEB3B" />
        <circle cx="45" cy="40" r="2" fill="#FFEB3B" />
        <circle cx="55" cy="40" r="2" fill="#FFEB3B" />
        <circle cx="65" cy="45" r="2" fill="#FFEB3B" />
        <circle cx="40" cy="55" r="2" fill="#FFEB3B" />
        <circle cx="50" cy="50" r="2" fill="#FFEB3B" />
        <circle cx="60" cy="55" r="2" fill="#FFEB3B" />
        <circle cx="35" cy="65" r="2" fill="#FFEB3B" />
        <circle cx="50" cy="70" r="2" fill="#FFEB3B" />
        <circle cx="65" cy="65" r="2" fill="#FFEB3B" />
      </g>
      <g className="strawberry-leaves">
        <path
          d="M40 30 C 35 20, 45 15, 50 25 C 55 15, 65 20, 60 30 Z"
          fill="#4CAF50"
          stroke="#388E3C"
          strokeWidth="1"
        />
        <path d="M45 30 C 40 25, 50 20, 50 30 C 50 20, 60 25, 55 30 Z" fill="#66BB6A" />
      </g>
    </svg>
  )
}
