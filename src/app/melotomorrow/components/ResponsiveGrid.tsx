import { useState } from 'react'
import Image from 'next/image'

const images = [
  { src: '/carousel1.jpg', alt: 'homepage' },
  { src: '/carousel2.png', alt: 'model picture of melotomorrow' },
  { src: '/carousel3.png', alt: 'product page' },
  { src: '/carousel4.png', alt: 'solo model' },
  { src: '/carousel5.jpg', alt: 'order confirmation' },
  { src: '/carousel6.png', alt: 'rapper model' },
  { src: '/carousel7.png', alt: 'order check' },
  { src: '/carousel8.png', alt: 'behind the scenes' },
  { src: '/carousel9.png', alt: 'product pics' }
]

export default function ResponsiveGrid() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="mb-5 md:mb-8">
      {/* Mobile Carousel */}
      <div className="md:hidden relative">
        <div className="relative aspect-square">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="object-cover"
            fill
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-black w-10 h-full text-center hover:scale-125 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          disabled={currentIndex === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-20 -ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="sr-only">Prev</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-black w-10 h-full text-center hover:scale-125 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          disabled={currentIndex === images.length - 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-20 -ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>

      {/* Tablet and Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-square relative">
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  )
} 