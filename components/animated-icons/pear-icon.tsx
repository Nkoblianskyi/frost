"use client"

import { useEffect, useRef } from "react"

interface PearIconProps {
  size?: number
  isAnimated?: boolean
  className?: string
}

export function PearIcon({ size = 80, isAnimated = true, className = "" }: PearIconProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (isAnimated && svgRef.current) {
      const pear = svgRef.current.querySelector(".pear-body") as SVGElement
      const stem = svgRef.current.querySelector(".pear-stem") as SVGElement
      const shine = svgRef.current.querySelector(".pear-shine") as SVGElement

      const pearAnimation = () => {
        if (pear) {
          pear.animate(
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

      pearAnimation()
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
      <g className="pear-body">
        <path
          d="M50 35 C 35 35, 25 50, 30 65 C 35 80, 65 80, 70 65 C 75 50, 65 35, 50 35 Z"
          fill="#CDDC39"
          stroke="#AFB42B"
          strokeWidth="2"
        />
        <path
          className="pear-shine"
          d="M40 45 C 45 40, 55 40, 60 45"
          stroke="#F0F4C3"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>
      <g className="pear-stem">
        <path d="M50 35 C 50 30, 55 25, 50 20" stroke="#795548" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M50 20 C 45 20, 40 15, 35 15" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  )
}
