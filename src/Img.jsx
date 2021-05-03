import React, { useState, useEffect } from 'react'
import { resolve } from 'nanoseek'
import { isValidURL } from 'uhrp-url'

const Img = ({ src, ...props } = {}) => {
  const [correctURL, setCorrectURL] = useState('')

  useEffect(() => {
    (async () => {
      if (!isValidURL(src)) {
        setCorrectURL(src)
      } else {
        const URLs = await resolve({ URL: src })
        setCorrectURL(URLs[0])
      }
    })()
  }, [src])

  return (
    <img
      src={correctURL}
      {...props}
    />
  )
}

export default Img
