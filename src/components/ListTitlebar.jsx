import Link from 'next/link'
import { useRouter } from 'next/router'
import { pathnameRouter } from '@/utils'
import cx from 'clsx'

const ListTitlebar = ({ title, categories }) => {
  const router = useRouter()
  const pathname = pathnameRouter(router.pathname)
  const currentCategory = router.query.id !== undefined ? router.query.id : ''

  return (
    <div className='mb-10 md:mb-0 w-full h-12 flex flex-col md:flex-row justify-between items-center'>
      <h2 className='text-xl text-black mb-6 md:mb-0 dark:text-white'>
        {title}
      </h2>
      <nav className='flex-1 flex justify-end items-center gap-4 h-full'>
        <Link
          href='/portfolios'
          className={cx(
            'px-2 py-1 bg-gray-300 dark:bg-gray-800 rounded text-sm text-white dark:text-gray-400',
            {
              'bg-gray-900 dark:bg-gray-400 dark:text-white':
                currentCategory === '',
            }
          )}
        >
          全部
        </Link>
        {categories?.map(category => (
          <Link
            href={`/portfolios/category/${category.id}`}
            key={category.id}
            className={cx(
              'px-2 py-1 bg-gray-300 dark:bg-gray-800 rounded text-sm text-white dark:text-gray-400',
              {
                'bg-gray-900 dark:bg-gray-400 dark:text-white':
                  currentCategory === category.id,
              }
            )}
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default ListTitlebar
