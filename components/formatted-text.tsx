'use client'

import React, { useState } from 'react'
import TypingEffect from '@/components/typing-effect'

interface FormattedTextProps {
  text: string
}

const FormattedText: React.FC<FormattedTextProps> = ({ text }) => {
  const [currentParagraph, setCurrentParagraph] = useState<number>(0)
  const [completedParagraphs, setCompletedParagraphs] = useState<string[]>([])

  const paragraphs = text.split(/(?=\d+\.\s|-{1}\s)/).filter(Boolean)

  const handleComplete = () => {
    if (currentParagraph < paragraphs.length - 1) {
      setCompletedParagraphs(prev => [...prev, paragraphs[currentParagraph]])
      setCurrentParagraph(currentParagraph + 1)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      {completedParagraphs.map((paragraph, index) => (
        <div key={index} className="p-4 mb-4 text-gray-500">
          {paragraph}
        </div>
      ))}
      {currentParagraph < paragraphs.length && (
        <div className="p-4 mb-4 text-gray-500">
          <TypingEffect
            text={paragraphs[currentParagraph].trim()}
            onComplete={handleComplete}
          />
        </div>
      )}
    </div>
  )
}

export default FormattedText
