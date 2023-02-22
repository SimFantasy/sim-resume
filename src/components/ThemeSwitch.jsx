import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) {
    return null
  }

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div
      className='w-14 h-full flex justify-center items-center cursor-pointer text-gray-500'
      onClick={handleClick}
    >
      {theme === 'light' ? <RiSunLine size={24} /> : <RiMoonLine size={24} />}
    </div>
  )
}

export default ThemeSwitch
