import fetcher from '@/service/fetcher'
import { pb } from '@/constants/config'

const BaseApi = {
  all: async (collection, options) =>
    await pb.collection(collection).getFullList(200, options),
  list: async (collection, page, perPage, options) =>
    await pb.collection(collection).getList(page, perPage, options),
  view: async (collection, id, options) =>
    await pb.collection(collection).getOne(id, options),
}

export default BaseApi
