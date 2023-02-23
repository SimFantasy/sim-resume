import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { siteName } from '@/constants/settings'
import {
  RiFolder3Line,
  RiUserLine,
  RiCalendarTodoLine,
  RiLinkM,
} from 'react-icons/ri'
import { fetchProjects, fetchProject } from '@/service/apis'
import { MarkdownContent } from '@/components'

const Portfolio = ({ project }) => {
  const {
    name,
    coverImage,
    gallery,
    content,
    link,
    role,
    time,
    expand: { category },
  } = project
  return (
    <>
      <Head>
        <title>
          {name} - 作品集 - {siteName}
        </title>
      </Head>
      <div className='flex flex-col'>
        {coverImage && (
          <div className='w-full max-h-[320px] overflow-hidden rounded'>
            <Image
              src={coverImage}
              alt={name}
              width={768}
              height={432}
              className='w-full h-auto rounded'
              priority
            />
          </div>
        )}
        <h2 className='mt-10 mb-4 text-2xl text-black dark:text-white'>
          {name}
        </h2>
        <div className='flex justify-start items-center gap-6 text-gray-500 text-md h-10'>
          <div className='flex justify-start items-center gap-2 h-full'>
            <RiFolder3Line size={16} />
            <Link
              href={`/portfolios/category/${category.id}`}
              title='项目类别'
              className='hover:text-700 dark:hover:text-gray-300'
            >
              {category?.name}
            </Link>
          </div>
          <div
            className='flex justify-start items-center gap-2 h-full'
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
        <article className='mt-10 mb-10 pb-10 border-b border-gray-200 dark:border-gray-700'>
          <MarkdownContent source={content} />
        </article>
        <div className='flex flex-col gap-10'>
          {gallery?.images?.map(item => (
            <div key={item.image}>
              <Image
                src={item.image}
                alt={item.title}
                width={768}
                height={480}
                priority
                className='w-full h-auto rounded'
              />
              <h4 className='w-full py-4 text-md text-gray-700 dark:text-gray-300 text-center'>
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const projects = await fetchProjects(1, '')
  const paths = projects?.items?.map(project => ({
    params: { id: project.id },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const project = await fetchProject(id)
  return {
    props: { project },
    revalidate: 10,
  }
}

export default Portfolio
