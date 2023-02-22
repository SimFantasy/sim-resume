import Link from 'next/link'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { FeatureProjectItem, Titlebar } from '@/components'

const FeatureProjectList = ({ data }) => {
  return (
    <div className='flex flex-col gap-10 mt-10 pb-10 border-b border-gray-300 dark:border-gray-700'>
      <Titlebar title='项目经历' />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
        {data?.map(project => (
          <FeatureProjectItem key={project.id} {...project} />
        ))}
      </div>
      <div className='mt-10 h-12 flex justify-center items-center'>
        <Link
          href='/portfolios'
          className='flex justify-center items-center gap-1 w-[160px] py-2 border border-gray-800 hover:bg-gray-200 hover:border-gray-400 rounded-full text-gray-700 dark:border-gray-200 dark:text-gray-300 dark:hover:bg-gray-800'
        >
          查看更多项目 <RiArrowDropRightLine size={24} />
        </Link>
      </div>
    </div>
  )
}

export default FeatureProjectList
