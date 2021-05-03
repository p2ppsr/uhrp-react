import React, { useState, useEffect } from 'react'
import { resolve } from 'nanoseek'

const Img = ({ src, ...props } = {}) => {
  const [correctURL, setCorrectURL] = useState('')

  useEffect(() => {
    (async () => {
      const URLs = await resolve({ URL: src })
      setCorrectURL(URLs[0])
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