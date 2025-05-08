"use client"

import { useState, useRef, useEffect } from "react"
import { BsArrows } from "react-icons/bs"
import Image from "next/image"

interface Slide {
  beforeImage: string
  afterImage: string
  title: string
  subtitle: string
}

interface MultiSlideSliderProps {
  slides: Slide[]
  className?: string
  beforeLabel?: string
  afterLabel?: string
}

function MultiSlideSlider({
  slides,
  className,
  beforeLabel = "לפני",
  afterLabel = "אחרי",
}: MultiSlideSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setSliderPosition(50)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setSliderPosition(50)
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
    <div className={`w-full max-w-6xl mx-auto rounded-3xl overflow-hidden p-6 ${className} relative`}>
      <div className="mb-4 px-4 pb-4">
        <h2 className="text-4xl font-bold text-gray-900 py-4">{slides[currentSlide].title}</h2>
        <p className="text-sm text-gray-500 pb-4">{slides[currentSlide].subtitle}</p>
      </div>

      <div ref={containerRef} className="relative aspect-[16/9] rounded-xl overflow-hidden">
        {/* Before Image (Partial) */}
        <div
          className="absolute inset-y-0 left-0 h-full"
          style={{
            width: `${sliderPosition}%`,
            backgroundImage: `url(${slides[currentSlide].beforeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRight: "1px solid white",
          }}
        />

        {/* After Image (Partial) */}
        <div
          className="absolute inset-y-0 right-0 h-full"
          style={{
            width: `${100 - sliderPosition}%`,
            backgroundImage: `url(${slides[currentSlide].afterImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderLeft: "1px solid white",
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

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Slide Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index)
                setSliderPosition(50)
              }}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MultiSlideSlider 