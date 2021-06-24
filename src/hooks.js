import { useEffect, useState } from 'react'

const getWindowSize = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize())
  useEffect(() => {
    const onResize = () => {
      setWindowSize(getWindowSize)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return windowSize
}

export const useShowConfetti = (delay = 1500) => {
  const [show, setShow] = useState(false)

  const updateShow = (columnTitle) => {
    if (columnTitle === 'Done') {
      setShow(true)
      setTimeout(() => setShow(false), delay)
    }
  }
  return { show, updateShow }
}
