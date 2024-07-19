export async function useX() {
  const value = await $fetch('/api/test')
  console.log('Fetching the value...', { value })

  return value
}
