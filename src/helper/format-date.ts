// import DateFnsUtils from "@date-io/date-fns"
import { format,isToday } from 'date-fns'

export const formatDate= (date:string) => {
  const formatedDate = format(new Date(date), "dd/MM/yyyy")
  return formatedDate
}

export const formatLongDate= (date:string) => {
  const formatedDate = format(new Date(date), "EEEE',' dd/MM/yyyy")
  return formatedDate
}

export const formatDateHour= (date:string) => {
  const formatedDate = format(new Date(date), "dd/MM/yyyy',' HH:mm")
  return formatedDate
}

export const formatDateHourChat= (date:string) => {
  
  const formatedDate =isToday(new Date(date))? format(new Date(date),"HH:mm"):format(new Date(date), "dd/MM/yyyy")
  return formatedDate
}

export const formatDateHourChatMessage= (date:string) => {
  const formatedDate =isToday(new Date(date))? format(new Date(date),"HH:mm"):format(new Date(date),  "dd/MM/yyyy',' HH:mm")
  return formatedDate
}