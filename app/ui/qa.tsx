"use client"
import { useEffect } from 'react';
import { QandAs } from '../lib/data';

export default function Qa({categoryName}: {categoryName: string}) {
  return (
    <div className="my-8 md:px-10">
      {QandAs.categories.
      filter(category => category.name === categoryName)
      .map((category, index) => (
        <div key={index}>
          {category.questions.map((qanda, index) => (
            <div key={index}>
              <h3 className="text-md lg:text-2xl my-4  border-primary text-accent"><span className="text-xl lg:text-3xl">Q: </span>{qanda.question}</h3>
              <p><span className="text-primary text-lg lg:text-3xl">A: </span>{qanda.answer}</p>
              <div className="divider divider-neutral"></div>
            </div>
          ))}
        </div>
      ))}
  </div>
  )
}