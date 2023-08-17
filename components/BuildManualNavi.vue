<template>
  <div>
    <nav class="lg:sticky lg:top-16 lg:self-start overflow-x-hidden overflow-y-auto h-full">
      <ul class="list-decimal flex flex-col m-auto">
        <li><NuxtLink to="/install-build-manual" data-hs-overlay="#hs-overlay-body-scrolling">構築ガイド</NuxtLink></li>
        <li><NuxtLink to="/manual/vscode" data-hs-overlay="#hs-overlay-body-scrolling">VS Code</NuxtLink></li>
        <li><NuxtLink to="/manual/tailwind-css" data-hs-overlay="#hs-overlay-body-scrolling">Tailwind CSS</NuxtLink></li>
        <li><span class="line-through">Nuxt3</span></li>
        <li><span class="line-through">Github</span></li>
        <li><span class="line-through">Vercel</span></li>
      </ul>
    </nav>
  </div>
</template>

<style>
.container .router-link-active {
  text-decoration: underline;
}
</style>
