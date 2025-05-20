"use client"

import { useEffect, useRef } from "react"

interface CornIconProps {
  size?: number
  isAnimated?: boolean
  className?: string
}

export function CornIcon({ size = 80, isAnimated = true, className = "" }: CornIconProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (isAnimated && svgRef.current) {
      const corn = svgRef.current.querySelector(".corn-body") as SVGElement
      const leaves = svgRef.current.querySelector(".corn-leaves") as SVGElement

      const cornAnimation = () => {
        if (corn) {
          corn.animate(
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
              { transform: "rotate(0deg)", transformOrigin: "50px 50px" },
              { transform: "rotate(-5deg)", transformOrigin: "50px 50px" },
              { transform: "rotate(0deg)", transformOrigin: "50px 50px" },
              { transform: "rotate(5deg)", transformOrigin: "50px 50px" },
              { transform: "rotate(0deg)", transformOrigin: "50px 50px" },
            ],
            {
              duration: 4000,
              iterations: Number.POSITIVE_INFINITY,
              easing: "ease-in-out",
            },
          )
        }
      }

      cornAnimation()
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
      <g className="corn-body">
        <ellipse cx="50" cy="50" rx="15" ry="30" fill="#FFF176" stroke="#FBC02D" strokeWidth="2" />
        <ellipse cx="50" cy="50" rx="10" ry="25" fill="#FFF59D" />
        <circle cx="45" cy="35" r="2" fill="#FBC02D" />
        <circle cx="55" cy="35" r="2" fill="#FBC02D" />
        <circle cx="45" cy="45" r="2" fill="#FBC02D" />
        <circle cx="55" cy="45" r="2" fill="#FBC02D" />
        <circle cx="45" cy="55" r="2" fill="#FBC02D" />
        <circle cx="55" cy="55" r="2" fill="#FBC02D" />
        <circle cx="45" cy="65" r="2" fill="#FBC02D" />
        <circle cx="55" cy="65" r="2" fill="#FBC02D" />
      </g>
      <g className="corn-leaves">
        <path d="M35 40 C 25 30, 30 20, 40 30" stroke="#4CAF50" strokeWidth="3" fill="none" />
        <path d="M65 40 C 75 30, 70 20, 60 30" stroke="#4CAF50" strokeWidth="3" fill="none" />
        <path d="M35 60 C 25 70, 30 80, 40 70" stroke="#4CAF50" strokeWidth="3" fill="none" />
        <path d="M65 60 C 75 70, 70 80, 60 70" stroke="#4CAF50" strokeWidth="3" fill="none" />
      </g>
    </svg>
  )
}
