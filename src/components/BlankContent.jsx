import { RiInboxLine } from 'react-icons/ri'

const BlankContent = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='mx-auto p-12 w-full flex flex-col text-gray-300 bg-gray-50 text-center border border-gray-300 border-dashed rounded dark:text-gray-700 dark:bg-gray-800 dark:border-gray-700'>
        <div className='w-full flex justify-center items-center'>
          <RiInboxLine size={48} />
        </div>
        <h2 className='text-md'>暂无内容</h2>
      </div>
    </div>
  )
}

export default BlankContent
