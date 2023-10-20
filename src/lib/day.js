import dayjs from "dayjs"

export function toDateTime(timestamp) {
    return dayjs(timestamp).format("MMM DD, YYYY H:mm")
}

export function toDate(timestamp) {
    return dayjs(timestamp).format("YYYY-MM-DD")
}

export function toDateDay(timestamp) {
    return dayjs(timestamp).format("MMM DD, ddd")
}