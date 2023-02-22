import { MarkdownContent } from '@/components'

const WorkItem = ({ name, time, title, content }) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-start items-center gap-10 h-12 text-gray-500'>
        <h2 className='text-xl text-gray-800 dark:text-gray-200'>{name}</h2>
        <div className='text-md text-gray-400'>{time}</div>
      </div>
      <div className='h-10 text-gray-700 dark:text-gray-400'>{title}</div>
      <article>
        <MarkdownContent source={content} />
      </article>
    </div>
  )
}

export default WorkItem
