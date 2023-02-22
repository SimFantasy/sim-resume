import { Titlebar, WorkItem } from '@/components'

const WorkList = ({ data }) => {
  return (
    <div className='flex flex-col gap-10 mt-10 pb-10 border-b border-gray-300 dark:border-gray-700'>
      <Titlebar title='工作经历' />
      {data?.map(work => (
        <WorkItem key={work.id} {...work} />
      ))}
    </div>
  )
}

export default WorkList
