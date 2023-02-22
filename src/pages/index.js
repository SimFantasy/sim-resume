import Head from 'next/head'
import { siteName } from '@/constants/settings'
import { Author, WorkList, FeatureProjectList, SkillList } from '@/components'
import {
  fetchAuthor,
  fetchWorks,
  fetchFeatureProjects,
  fetchSkills,
} from '@/service/apis'

const Home = ({ author, works, projects, skills }) => {
  return (
    <>
      <Head>
        <title>主页 - {siteName}</title>
      </Head>
      <div className='w-full h-full'>
        <Author data={author} />
        <WorkList data={works} />
        <FeatureProjectList data={projects} />
        <SkillList data={skills} />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const author = await fetchAuthor()
  const works = await fetchWorks()
  const projects = await fetchFeatureProjects()
  const skills = await fetchSkills()

  return {
    props: { author, works, projects, skills },
  }
}

export default Home
