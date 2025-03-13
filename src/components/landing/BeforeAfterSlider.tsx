"use client"

import { useState, useRef, useEffect } from "react"
import { BsArrows } from "react-icons/bs"
import Image from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  title?: string
  subtitle?: string
  className?: string
  rightCornerImage?: string
}

function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  title = "Expert Enhancement",
  subtitle = "Advanced techniques for color, clarity, and composition.",
  className,
  rightCornerImage,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const newPosition = (x / rect.width) * 100
    setSliderPosition(newPosition)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
    const newPosition = (x / rect.width) * 100
    setSliderPosition(newPosition)
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("touchend", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging])

  return (
    <div className={`w-full rounded-3xl overflow-hidden p-6 ${className} relative`}>
      <div className="mb-4 px-4 pb-4">
        <h2 className="text-4xl font-bold text-gray-900 py-4">{title}</h2>
        <p className="text-sm text-gray-500 pb-4">{subtitle}</p>
      </div>

      <div ref={containerRef} className="relative h-[400px] rounded-xl overflow-hidden">
        {/* After Image (Full) */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${afterImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Before Image (Partial) */}
        <div
          className="absolute inset-0 h-full"
          style={{
            width: `${sliderPosition}%`,
            backgroundImage: `url(${beforeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRight: "1px solid white",
          }}
        />

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-10 cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 20px)`,
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <BsArrows className="w-5 h-5" />
          </div>
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white"></div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full text-lg font-medium">
          {beforeLabel}
        </div>
        <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full text-lg font-medium">
          {afterLabel}
        </div>
        {rightCornerImage && (
          <div className="absolute top-4 right-4 w-24 h-24">
            <Image
              src={rightCornerImage}
              alt="Corner Image"
              width={96}
              height={96}
              className="object-contain w-full h-full"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default BeforeAfterSlider 