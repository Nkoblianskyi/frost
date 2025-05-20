"use client"

import { useEffect, useRef } from "react"

interface AppleIconProps {
  size?: number
  isAnimated?: boolean
  className?: string
}

export function AppleIcon({ size = 80, isAnimated = true, className = "" }: AppleIconProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (isAnimated && svgRef.current) {
      const apple = svgRef.current.querySelector(".apple-body") as SVGElement
      const stem = svgRef.current.querySelector(".apple-stem") as SVGElement
      const shine = svgRef.current.querySelector(".apple-shine") as SVGElement

      const appleAnimation = () => {
        if (apple) {
          apple.animate(
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

      const stemAnimation = () => {
        if (stem) {
          stem.animate(
            [
              { transform: "rotate(0deg)", transformOrigin: "50px 25px" },
              { transform: "rotate(-10deg)", transformOrigin: "50px 25px" },
              { transform: "rotate(0deg)", transformOrigin: "50px 25px" },
              { transform: "rotate(10deg)", transformOrigin: "50px 25px" },
              { transform: "rotate(0deg)", transformOrigin: "50px 25px" },
            ],
            {
              duration: 2000,
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

      appleAnimation()
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
      <g className="apple-body">
        <circle cx="50" cy="60" r="30" fill="#F44336" stroke="#D32F2F" strokeWidth="2" />
        <path
          className="apple-shine"
          d="M35 45 C 40 40, 50 40, 55 45"
          stroke="#FFCDD2"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>
      <g className="apple-stem">
        <path d="M50 30 C 45 25, 55 20, 50 15" stroke="#795548" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M50 30 L 50 35" stroke="#795548" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 30 C 45 30, 40 25, 35 25" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  )
}
