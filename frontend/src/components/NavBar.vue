<template>
<div v-if="$route.path == '/'" class="bg-gray-800 h-20 flex justify-center items-center">
  <img src="../images/logo.jpeg" alt="Logo" class="max-h-full max-w-80">
</div>
<div v-else class="bg-gray-800 h-20 flex justify-center items-center">
  <img src="../images/logoEnlarged.png" alt="Logo" class="max-h-full max-w-80">
  <h1 class="text-3xl text-white font-bold">Registrati</h1>
</div>

</template>

<script>

export default {
  name: 'NavBar',
}

</script>
