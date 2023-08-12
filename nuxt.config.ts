// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    componentIslands: true,
  },
  modules: ["@nuxt/devtools", "@nuxt/content"],
  components: [
    {
      path: "~/components",
      global: true,
    },
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration/
    highlight: {
      // テーマ設定
      theme: "dark-plus",
    },
  },
  pages: true,
  css: [
    "~/assets/css/main.css",
    //"~/assets/css/destyle.css"
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      title: "Nuxt3 Guide JP",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "description", content: "Nuxt3 リファレンスガイド 日本語版" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          src: "/assets/js/preline/preline.js",
          body: true,
          defer: true,
        },
      ],
    },
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    esbuild: {
      pure: ["console.log", "console.info"],
    },
  },
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
    ],
  },
});
