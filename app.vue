<script setup>
const cookieValue = await useX()

function setCookie() {
  const cookie = useCookie('testCookie', {
    maxAge: 365 * 24 * 60 * 60,
    sameSite: 'lax'
  })
  cookie.value = "Test 123123123"
}
</script>

<template>
  <div>
    <pre>{{ cookieValue || 'No value has been set yet' }}</pre>
    <button @click="setCookie">Set cookie value</button>
  </div>
</template>
