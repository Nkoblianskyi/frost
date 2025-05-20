"use client"

import { useEffect, useRef } from "react"

interface CabbageIconProps {
  size?: number
  isAnimated?: boolean
  className?: string
}

export function CabbageIcon({ size = 80, isAnimated = true, className = "" }: CabbageIconProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (isAnimated && svgRef.current) {
      const cabbage = svgRef.current.querySelector(".cabbage-body") as SVGElement
      const leaves = svgRef.current.querySelector(".cabbage-leaves") as SVGElement

      const cabbageAnimation = () => {
        if (cabbage) {
          cabbage.animate([{ transform: "scale(1)" }, { transform: "scale(1.03)" }, { transform: "scale(1)" }], {
            duration: 3000,
            iterations: Number.POSITIVE_INFINITY,
            easing: "ease-in-out",
          })
        }
      }

      const leavesAnimation = () => {
        if (leaves) {
          leaves.animate(
            [
              { transform: "rotate(0deg)" },
              { transform: "rotate(5deg)" },
              { transform: "rotate(0deg)" },
              { transform: "rotate(-5deg)" },
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

      cabbageAnimation()
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
      <g className="cabbage-body">
        <circle cx="50" cy="50" r="30" fill="#A5D6A7" stroke="#66BB6A" strokeWidth="2" />
        <circle cx="50" cy="50" r="25" fill="#C8E6C9" />
      </g>
      <g className="cabbage-leaves">
        <path d="M30 40 C 35 30, 45 25, 50 35" stroke="#66BB6A" strokeWidth="3" fill="none" />
        <path d="M70 40 C 65 30, 55 25, 50 35" stroke="#66BB6A" strokeWidth="3" fill="none" />
        <path d="M30 60 C 35 70, 45 75, 50 65" stroke="#66BB6A" strokeWidth="3" fill="none" />
        <path d="M70 60 C 65 70, 55 75, 50 65" stroke="#66BB6A" strokeWidth="3" fill="none" />
      </g>
    </svg>
  )
}
