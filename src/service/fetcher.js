import axios from 'axios'
import { pbApiUrl } from '@/constants/config'

const createInstence = () => {
  const instance = axios.create({
    baseURL: `${pbApiUrl}/api`,
    timeout: 50000,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  instance.interceptors.request.use(handleRequest)
  instance.interceptors.response.use(handleResponse, handleError)
  return instance
}

const handleRequest = config => config

const handleResponse = response => {
  if (response && response.data) {
    return response.data
  }
  return response
}

const handleError = error => {
  const { response, message } = error
  return Promise.reject(
    response ? new Error(response.message || message) : error
  )
}

const fetcher = createInstence()

export default fetcher
