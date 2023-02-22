import Head from 'next/head'
import { siteName } from '@/constants/settings'
import { fetchProjects, fetchProjectCategories } from '@/service/apis'
import { ListTitlebar, ProjectList } from '@/components'

const Portfolios = ({ projects, categories, page }) => {
  return (
    <>
      <Head>
        <title>作品集 - {siteName}</title>
      </Head>
      <div className='flex flex-col gap-10'>
        <ListTitlebar title='作品集' categories={categories} />
        <ProjectList projects={projects} page={page} />
      </div>
    </>
  )
}

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const pageParams = +page === undefined || +page === 1 ? 1 : page
  const projects = await fetchProjects(pageParams, '')
  const categories = await fetchProjectCategories()
  return {
    props: { projects, categories, page: +page },
  }
}

export default Portfolios
