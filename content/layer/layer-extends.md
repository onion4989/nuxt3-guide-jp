```ts [nuxt.config.ts]
export default defineNuxtConfig({
  extends: [
    '../base',                     // Extend from a local layer
    '@my-themes/awesome',          // Extend from an installed npm package
    'github:my-themes/awesome#v1', // Extend from a git repository
  ]
})
```