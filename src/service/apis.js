import baseApi from '@/service/pbApis'
import { authorId, pageLimit } from '@/constants/settings'
import { serializingData } from '@/utils'

export const fetchAuthor = async () =>
  serializingData(await baseApi.view('users', authorId))

export const fetchWorks = async () =>
  serializingData(
    await baseApi.all('work', {
      sort: '-created',
    })
  )

export const fetchFeatureProjects = async () =>
  serializingData(
    await baseApi.all('project', {
      sort: '-created',
      filter: 'isFeature = true',
      expand: 'category',
    })
  )

export const fetchProjects = async (page, filter) =>
  serializingData(
    await baseApi.list('project', page, pageLimit, {
      sort: '-created',
      filter,
      expand: 'category',
    })
  )

export const fetchProjectCategories = async () =>
  serializingData(await baseApi.all('projectCategories'))

export const fetchProject = async id =>
  serializingData(
    await baseApi.view('project', id, {
      expand: 'category',
    })
  )

export const fetchSkills = async () =>
  serializingData(
    await baseApi.all('skill', {
      sort: '-created',
    })
  )
