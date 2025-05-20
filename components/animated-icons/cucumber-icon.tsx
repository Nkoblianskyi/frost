"use client"

import { useEffect, useRef } from "react"

interface CucumberIconProps {
  size?: number
  isAnimated?: boolean
  className?: string
}

export function CucumberIcon({ size = 80, isAnimated = true, className = "" }: CucumberIconProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (isAnimated && svgRef.current) {
      const cucumber = svgRef.current.querySelector(".cucumber-body") as SVGElement
      const pattern = svgRef.current.querySelector(".cucumber-pattern") as SVGElement

      const cucumberAnimation = () => {
        if (cucumber) {
          cucumber.animate(
            [
              { transform: "rotate(0deg)" },
              { transform: "rotate(2deg)" },
              { transform: "rotate(0deg)" },
              { transform: "rotate(-2deg)" },
              { transform: "rotate(0deg)" },
            ],
            {
              duration: 3500,
              iterations: Number.POSITIVE_INFINITY,
              easing: "ease-in-out",
            },
          )
        }
      }

      const patternAnimation = () => {
        if (pattern) {
          pattern.animate([{ opacity: 0.5 }, { opacity: 0.8 }, { opacity: 0.5 }], {
            duration: 2000,
            iterations: Number.POSITIVE_INFINITY,
            easing: "ease-in-out",
          })
        }
      }

      cucumberAnimation()
      patternAnimation()
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
      <g className="cucumber-body">
        <ellipse cx="50" cy="50" rx="40" ry="15" fill="#66BB6A" stroke="#43A047" strokeWidth="2" />
        <ellipse cx="50" cy="50" rx="35" ry="10" fill="#81C784" />
      </g>
      <g className="cucumber-pattern">
        <circle cx="30" cy="45" r="2" fill="#2E7D32" />
        <circle cx="40" cy="45" r="2" fill="#2E7D32" />
        <circle cx="50" cy="45" r="2" fill="#2E7D32" />
        <circle cx="60" cy="45" r="2" fill="#2E7D32" />
        <circle cx="70" cy="45" r="2" fill="#2E7D32" />
        <circle cx="35" cy="55" r="2" fill="#2E7D32" />
        <circle cx="45" cy="55" r="2" fill="#2E7D32" />
        <circle cx="55" cy="55" r="2" fill="#2E7D32" />
        <circle cx="65" cy="55" r="2" fill="#2E7D32" />
      </g>
    </svg>
  )
}
