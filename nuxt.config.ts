// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    componentIslands: true,
  },
  /*plugins: [
    {
      src: "~/plugins/vercel.ts",
      mode: "client",
    },
  ],*/
  site: {
    url: 'https://nuxt3-guide-jp.vercel.app/',
  },
  modules: [
    "@nuxt/devtools",
    "@nuxt/content",
    "nuxt-simple-sitemap",
  ],
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
      preload: ["sass", "scss", "prisma", "shell", "bash", "vue", "xml"],
    },
  },
  pages: true,
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
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
  /*nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },*/
});
