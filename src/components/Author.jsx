import Image from 'next/image'
import Link from 'next/link'

import {
  RiFileDownloadLine,
  RiWechatLine,
  RiMailLine,
  RiSmartphoneLine,
  RiGlobalLine,
} from 'react-icons/ri'
import { MarkdownContent } from '@/components'

const Author = ({ data }) => {
  const { avatar, bio, phone, mail, wechat, website, resumeUrl } = data
  return (
    <div className='w-full min-h-[480px] flex justify-between items-start gap-0 md:gap-20 pb-20 border-b border-gray-200 dark:border-gray-700'>
      <div>
        <MarkdownContent source={bio} />

        <Link
          href={resumeUrl}
          download={resumeUrl}
          target='_blank'
          className='flex justify-center items-center gap-2 mt-8 py-2 bg-gray-800 hover:bg-gray-500 dark:bg-gray-500 dark:hover:bg-gray-400 text-white rounded-full text-lg w-[260px]'
        >
          <RiFileDownloadLine size={24} /> 下载我的简历 (PDF)
        </Link>

        <div className='w-full flex flex-col gap-5 mt-10'>
          <div className='w-full text-lg text-black dark:text-white'>
            我的联系方式：
          </div>
          <div className='w-full flex justify-start flex-col md:flex-row items-start md:items-center gap-6 text-gray-500 text-md'>
            <div className='flex justify-start items-center gap-2'>
              <RiSmartphoneLine /> {phone}
            </div>
            <div className='flex justify-start items-center gap-2'>
              <RiMailLine /> {mail}
            </div>
            <div className='flex justify-start items-center gap-2'>
              <RiWechatLine /> {wechat}
            </div>
            <div className='flex justify-start items-center gap-2'>
              <RiGlobalLine />
              <Link
                href={website}
                target='_blank'
                className='hover:text-gray-700 dark:hover:text-white'
              >
                {website}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='w-0 md:w-0 xl:w-[393px] h-[424px]'>
        <Image
          src={avatar}
          alt=''
          width={393}
          height={424}
          className='w-full h-auto'
          priority
        />
      </div>
    </div>
  )
}

export default Author
