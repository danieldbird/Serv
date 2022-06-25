import dayjs from 'dayjs'

export function mySQLDateTime(time) {
  return dayjs(time).format('DD-MM-YY HH:mm:ss')
}
