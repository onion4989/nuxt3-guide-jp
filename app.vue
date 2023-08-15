<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: "ja",
  },
  title: "Nuxt3 Guide JP",
  titleTemplate: "%s - Nuxt3 ガイド 日本語版",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "description", content: "Nuxt3 リファレンスガイド 日本語版" },
    { name: "google-site-verification", content: "6AT5cb6SvDsE-s2o166F3p2K2O4N2_h3_7Pv6TTXYXA" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
  script: [
    {
      src: "/preline.js",
      body: true,
      defer: true,
    },
  ],
});
</script>
