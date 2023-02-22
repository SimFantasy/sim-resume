import PocketBase from 'pocketbase'

export const pbApiUrl = process.env.POCKETBASE_API_URL
export const pb = new PocketBase(pbApiUrl)
