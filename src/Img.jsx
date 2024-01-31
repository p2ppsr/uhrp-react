import React, { useEffect } from 'react'
import useStore from './store'

const Img = ({ src, loading, confederacyHost, ...props } = {}) => {
  const { setCorrectURL } = useStore()
  const getCorrectURL = useStore(state => state.urls[src] || '')

  useEffect(() => {
    (async () => {
      await setCorrectURL(src, confederacyHost)
    })()
  }, [src, getCorrectURL, setCorrectURL])

  if (getCorrectURL || !loading) {
    return (
      <img
        src={getCorrectURL}
        {...props}
      />
    )
  } else {
    return loading
  }
}

export default Img
