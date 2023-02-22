import { useRef, useEffect, useState, use } from 'react'

const SkillItem = ({ name, degree }) => {
  const [isMounted, setIsMounted] = useState(false)
  const [progressWidth, setProgressWidth] = useState(null)
  const [percent, setPercent] = useState(0)
  const progressRef = useRef(null)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    setProgressWidth(progressRef?.current?.clientWidth)
    if (progressWidth) {
      setPercent(progressWidth * (degree / 100))
    }
  }, [degree, progressWidth])

  if (!isMounted) {
    return null
  }
  return (
    <div className='flex flex-col gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded hover:shadow-xl hover:cursor-pointer'>
      <div className='flex justify-between items-center mb-6'>
        <div>{name}</div>
        <div>{degree}%</div>
      </div>
      <div className='w-full h-2 bg-gray-100 rounded-full' ref={progressRef}>
        <div
          className='h-full bg-blue-300 dark:bg-blue-700 rounded-full'
          style={{ width: percent }}
        ></div>
      </div>
    </div>
  )
}

export default SkillItem
