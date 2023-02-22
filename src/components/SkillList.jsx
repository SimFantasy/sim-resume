import { SkillItem, Titlebar } from '@/components'

const SkillList = ({ data }) => {
  return (
    <div className='flex flex-col gap-10 mt-10 pb-10'>
      <Titlebar title='专业技能' />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
        {data?.map(skill => (
          <SkillItem key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  )
}

export default SkillList
