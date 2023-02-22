import { siteName } from '@/constants/settings'

const Footer = () => {
  return (
    <div className='w-screen h-14 border-t border-gray-200 dark:border-gray-800'>
      <div className='container flex justify-between items-center h-full text-sm text-gray-400 dark:text-gray-600'>
        <div>© 2022 {siteName}</div>
        <div>Created By: Sim</div>
      </div>
    </div>
  )
}

export default Footer
