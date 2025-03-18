import React, { FC, useEffect } from 'react'
import { useStore } from './store'

type ImgProps = {
  src: string
  fallback?: React.ReactNode
} & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'>

const Img: FC<ImgProps> = ({ src, fallback, ...props }) => {
  const resolvedUrl = useStore(state => state.urls[src] || '')
  const setResolvedURL = useStore(state => state.setResolvedURL)

  useEffect(() => {
    setResolvedURL(src).catch(() => {})
  }, [src, setResolvedURL])

  return resolvedUrl
    ? <img src={resolvedUrl} {...props} />
    : <>{fallback || null}</>
}

export default Img