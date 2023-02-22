import Image from 'next/image'
import Link from 'next/link'
import {
  RiFolder3Line,
  RiUserLine,
  RiCalendarTodoLine,
  RiLinkM,
} from 'react-icons/ri'
import { MarkdownContent } from '@/components'

const ProjectItem = ({
  id,
  coverImage,
  name,
  time,
  link,
  role,
  description,
  expand: { category },
}) => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start gap-8'>
      <Link href={`/portfolios/${id}`} className='w-full md:w-auto'>
        <Image
          src={coverImage}
          alt={name}
          width={768}
          height={432}
          className='w-full h-auto rounded'
        />
      </Link>
      <div className='flex-1 flex flex-col'>
        <Link
          href={`/portfolios/${id}`}
          className='text-xl text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400'
        >
          {name}
        </Link>
        <div className='flex justify-start items-center gap-6 text-gray-500 text-md h-10 mb-2'>
          <div className='flex justify-start items-center gap-2 h-full md:hidden xl:flex'>
            <RiFolder3Line size={16} />
            <Link href={`/portfolios/category/${category.id}`} title='项目类别'>
              {category?.name}
            </Link>
          </div>
          <div
            className='flex justify-start items-center gap-2 h-full md:hidden xl:flex'
            title='项目角色'
          >
            <RiUserLine size={16} />
            {role}
          </div>
          {time && (
            <div
              className='flex justify-start items-center gap-2 h-full'
              title='项目时长'
            >
              <RiCalendarTodoLine size={16} />
              {time}
            </div>
          )}
          {link && (
            <div
              className='flex justify-start items-center gap-2 h-full'
              title='产品文档'
            >
              <RiLinkM size={16} />
              <Link href={link} target='_blank'>
                产品文档
              </Link>
            </div>
          )}
        </div>
        <article>
          <MarkdownContent source={description} />
        </article>
      </div>
    </div>
  )
}

export default ProjectItem
