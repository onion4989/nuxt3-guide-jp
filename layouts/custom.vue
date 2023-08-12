<template>
  <div class="content_wrap">
    <header class="fixed top-0 left-0 w-full shadow-xl z-50 text-center">
      <GlobalNavi />
    </header>
    <main class="container flex m-auto">
      <div>
        <slot />
      </div>
    </main>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s - Nuxt3 Guide JP",
});
</script>

<style>
.content_wrap {
  max-width: 100%;
}
.container {
  max-width: 1280px;
  padding: 0 2rem;
}
nav {
  width: 100%;
  height: 50px;
  text-align: center;
  /*display: flex;
  align-items: center;*/
  border-bottom: solid 1px gray;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.6);
}
nav a {
  margin: 0 5px;
}
</style>
