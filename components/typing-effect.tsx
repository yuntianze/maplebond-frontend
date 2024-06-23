'use client'

import React, { useState, useEffect } from 'react'

interface TypingEffectProps {
  text: string
  onComplete: () => void
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState<string>('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(currentIndex + 1)
      }, 50) // Adjust the speed of the typing effect here (in milliseconds)

      return () => clearTimeout(timeoutId)
    } else {
      onComplete()
    }
  }, [currentIndex, text, onComplete])

  return <span>{displayedText}</span>
}

export default TypingEffect
