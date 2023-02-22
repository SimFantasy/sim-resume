import Image from 'next/image'
import Link from 'next/link'

const FeatureProjectItem = ({ id, name, coverImage, expand: { category } }) => {
  return (
    <Link href={`/portfolios/${id}`} className='flex flex-col w-full group'>
      <div className='w-full relative'>
        <Image
          src={coverImage}
          alt='name'
          width={768}
          height={432}
          className='w-full h-auto rounded'
        />
        <div className=' absolute top-2 right-2 px-2 py-1 rounded bg-gray-700/60 text-white text-sm'>
          {category?.name}
        </div>
      </div>
      <h2 className='py-2 line-clamp-1 text-md text-gray-800 dark:text-gray-200 group-hover:text-gray-500'>
        {name}
      </h2>
    </Link>
  )
}

export default FeatureProjectItem
