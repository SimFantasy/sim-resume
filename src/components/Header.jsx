import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'clsx'
import { TbRoute } from 'react-icons/tb'
import { siteName } from '@/constants/settings'
import { headerNavs } from '@/constants/navs'
import { ThemeSwitch } from '@/components'

const Header = () => {
  const { asPath } = useRouter()

  return (
    <div className='w-screen h-14 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800'>
      <Link href='/' className='flex justify-start items-center gap-2 h-full'>
        <TbRoute size={24} />
        <span className='text-xl text-gray-800 dark:text-gray-200'>
          {siteName}
        </span>
      </Link>
      <nav className='flex-1 flex justify-end items-center gap-4 text-gray-500'>
        {headerNavs.map(nav => (
          <Link
            href={nav.route}
            key={nav.route}
            className={cx({
              'text-black dark:text-white': nav.route === asPath,
            })}
          >
            {nav.name}
          </Link>
        ))}
      </nav>
      <ThemeSwitch />
    </div>
  )
}

export default Header
