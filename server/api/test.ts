export default defineEventHandler((event) => {
  const cookieValue = getCookie(event, 'testCookie')
  return cookieValue
})
