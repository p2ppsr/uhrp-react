import React, { useState, useEffect } from 'react'
import { resolve } from 'nanoseek'
import { isValidURL } from 'uhrp-url'

const Source = ({ src, loading, confederacyHost, ...props } = {}) => {
  const [correctURL, setCorrectURL] = useState('')

  useEffect(() => {
    (async () => {
      if (!isValidURL(src)) {
        setCorrectURL(src)
      } else {
        try {
          const [url] = await resolve({ confederacyHost, UHRPUrl: src })
          setCorrectURL(url)
        } catch (e) { /* ignore */ }
      }
    })()
  }, [src])

  if (correctURL || !loading) {
    return (
      <source
        src={correctURL}
        {...props}
      />
    )
  } else {
    return loading
  }
}

export default Source
