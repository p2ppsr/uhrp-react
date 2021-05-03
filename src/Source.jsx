import React, { useState, useEffect } from 'react'
import { resolve } from 'nanoseek'

const Source = ({ src, ...props } = {}) => {
  const [correctURL, setCorrectURL] = useState('')

  useEffect(() => {
    (async () => {
      const URLs = await resolve({ URL: src })
      console.log(URLs)
      setCorrectURL(URLs[0])
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
