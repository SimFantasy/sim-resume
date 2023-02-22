import { ProjectItem, Pagination } from '@/components'

const ProjectList = ({ projects, page }) => {
  return (
    <div>
      <div className='flex flex-col gap-10'>
        {projects?.items.map(project => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
      {page && <Pagination page={page} totalPages={projects.totalPages} />}
    </div>
  )
}

export default ProjectList
