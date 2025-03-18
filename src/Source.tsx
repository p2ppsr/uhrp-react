import React, { FC, useEffect } from 'react'
import { useStore } from './store'

interface SourceProps extends React.SourceHTMLAttributes<HTMLSourceElement> {
  src: string
  loading?: React.ReactNode
}

const Source: FC<SourceProps> = ({ src, loading, ...props }) => {
  const resolvedUrl = useStore(state => state.urls[src] || '')
  const setResolvedURL = useStore(state => state.setResolvedURL)

  useEffect(() => {
    setResolvedURL(src).catch(() => {})
  }, [src, setResolvedURL])

  if (resolvedUrl || !loading) {
    return <source src={resolvedUrl} {...props} />
  }
  return <>{loading}</>
}

export default Source