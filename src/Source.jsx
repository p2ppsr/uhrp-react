import React, { useState, useEffect } from 'react'
import { resolve } from 'nanoseek'
import { isValidURL } from 'uhrp-url'

const Source = ({ src, ...props } = {}) => {
  const [correctURL, setCorrectURL] = useState('')

  useEffect(() => {
    (async () => {
      if (!isValidURL(src)) {
        setCorrectURL(src)
      } else {
        let URLs = []
        do {
          try {
            URLs = await resolve({ URL: src })
            setCorrectURL(URLs[0])
          } finally {
            await new Promise(resolve => setTimeout(resolve, 5000))
          }
        } while (URLs.length === 0)
      }
    })()
  }, [src])

  return (
    <source
      src={correctURL}
      {...props}
    />
  )
}

export default Source
