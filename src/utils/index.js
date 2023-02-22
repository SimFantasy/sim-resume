import dayjs from 'dayjs'

export const dateFormat = date => dayjs(date).format('YYYY-MM-DD')

export const serializingData = data => JSON.parse(JSON.stringify(data))

export const pathnameRouter = router => {
  const pathnameArr = router.split('/').slice(1, 2)
  if (pathnameArr.length === 1) {
    return `/${pathnameArr[0]}`
  } else {
    return `/${pathnameArr[0]}/${pathnameArr[1]}`
  }
}
