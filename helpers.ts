const today = new Date()
const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)
function checkDay() {
  if (yesterday.getDay() === 6) {
    yesterday.setDate(yesterday.getDate() - 1)
  }
  if (yesterday.getDay() === 0) {
    yesterday.setDate(yesterday.getDate() - 2)
  }
}
export function getYesterday() {
  checkDay()
  return yesterday.toISOString().split("T")[0]
}