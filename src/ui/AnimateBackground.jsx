import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function AnimatedBackground() {
  const starsCount = 350
  const [stars, setStars] = useState([])

  useEffect(() => {
    const createStars = () => {
      const newStars = Array.from({ length: starsCount }, (_, index) => ({
        id: index,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        opacity: Math.random(),
        duration: Math.random() * 5 + 2,
      }))
      setStars(newStars)
    }

    createStars()

    const handleResize = () => {
      createStars()
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '0',
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }}
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0, y: star.y, x: star.x }}
          animate={{
            opacity: [0, 1],
            y: [star.y, star.y - 10],
            x: [star.x, star.x],
          }}
          transition={{
            duration: star.duration,
            loop: Infinity,
            delay: Math.random(),
          }}
          style={{
            position: 'absolute',
            top: star.y,
            left: star.x,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            background: 'white',
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground
