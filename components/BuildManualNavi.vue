<template>
  <div>
    <nav class="lg:sticky lg:top-16 lg:self-start overflow-x-hidden overflow-y-auto h-full">
      <ul class="list-decimal flex flex-col m-auto">
        <li><NuxtLink to="/manual/install-build-manual" data-hs-overlay="#hs-overlay-body-scrolling">構築ガイド</NuxtLink></li>
        <li><NuxtLink to="/manual/vscode" data-hs-overlay="#hs-overlay-body-scrolling">VS Codeの導入</NuxtLink></li>
        <li><NuxtLink to="/manual/tailwind-css" data-hs-overlay="#hs-overlay-body-scrolling">Tailwind CSSの導入</NuxtLink></li>
        <li><span class="line-through">Nuxt3の構築state-management</span></li>
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
