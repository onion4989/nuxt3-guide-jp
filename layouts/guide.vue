<template>
  <div class="content_wrap">
    <header class="bg-white bg-opacity-80 fixed top-0 left-0 w-full h-12 shadow-xl z-50">
      <GlobalNavi />
    </header>
    <main class="container my-24 mx-auto px-4 md:px-8 z-10">
      <section class="grid grid-cols-10 gap-4">
        <aside
          class="hidden col-span-2 overflow-x-hidden overflow-y-auto lg:block lg:self-start lg:max-h-100 lg:top-16 lg:sticky pl-10"
        >
          <GuideNavi />
        </aside>
        <div class="content col-span-10 lg:col-span-8">
          <UpDateDays />
          <slot />
        </div>
      </section>
    </main>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<style>
.content_wrap {
  max-width: 100%;
}
.container {
  max-width: 1280px;
}

.left-area {
  width: 30%;
  max-width: 200px;
  height: auto;
}
.right-area {
  width: 70%;
}
</style>
