import { useRouter } from 'next/router'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'
import { pathnameRouter } from '@/utils'

const Pagination = ({ page, totalPages }) => {
  const router = useRouter()
  const pathname = pathnameRouter(router.pathname)

  const handlePrevPage = () => {
    if (router.query.id) {
      router.push(`/portfolios/category/${router.query.id}?page=${+page - 1}`)
    } else {
      router.push(`/portfolios?page=${+page - 1}`)
    }
  }
  const handleNextPage = () => {
    if (router.query.id) {
      router.push(`/portfolios/category/${router.query.id}?page=${+page + 1}`)
    } else {
      router.push(`/portfolios?page=${+page + 1}`)
    }
  }
  return (
    <div className='flex justify-end items-center gap-6 mt-6 w-full h-10'>
      {page > 1 && (
        <button
          className='flex justify-center items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-500 text-white rounded'
          onClick={handlePrevPage}
        >
          <TbChevronLeft />
          上一页
        </button>
      )}
      {page < totalPages && (
        <button
          className='flex justify-center items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-500 text-white rounded'
          onClick={handleNextPage}
        >
          下一页 <TbChevronRight />
        </button>
      )}
    </div>
  )
}

export default Pagination
