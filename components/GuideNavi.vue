<template>
  <div>
    <nav class="overflow-x-hidden overflow-y-auto h-full text-cyan-600">
      <div class="hs-accordion-group">
        <div class="hs-accordion active" id="hs-basic-with-arrow-heading-one">
          <button
            class="hs-accordion-toggle hs-accordion-active:text-blue-600 group pb-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-white sm:text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500"
            aria-controls="hs-basic-with-arrow-collapse-one"
          >
            <svg
              class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-white sm:text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <svg
              class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            主要概念
          </button>
          <div
            id="hs-basic-with-arrow-collapse-one"
            class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-arrow-heading-one"
          >
            <ul class="list-disc list-guide">
              <li>
                <NuxtLink to="/guide/key-concepts/auto-import" data-hs-overlay="#hs-overlay-body-scrolling"
                  >自動インポート</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/key-concepts/vue-development" data-hs-overlay="#hs-overlay-body-scrolling"
                  >Vue.jsの開発</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/key-concepts/rendering-modes" data-hs-overlay="#hs-overlay-body-scrolling"
                  >レンダリングモード</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/key-concepts/server-engine" data-hs-overlay="#hs-overlay-body-scrolling"
                  >サーバーエンジン</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/key-concepts/modules" data-hs-overlay="#hs-overlay-body-scrolling"
                  >モジュール</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/key-concepts/es-modules" data-hs-overlay="#hs-overlay-body-scrolling"
                  >ESモジュール</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/key-concepts/typescript" data-hs-overlay="#hs-overlay-body-scrolling"
                  >TypeScript</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="hs-accordion" id="hs-basic-with-arrow-heading-two">
          <button
            class="hs-accordion-toggle hs-accordion-active:text-blue-600 group pb-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-white sm:text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500"
            aria-controls="hs-basic-with-arrow-collapse-two"
          >
            <svg
              class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <svg
              class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            ディレクトリ構造
          </button>
          <div
            id="hs-basic-with-arrow-collapse-two"
            class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-arrow-heading-two"
          >
            <ul class="list-disc list-guide">
              <li>
                <NuxtLink to="/guide/directory-stracture/nuxt" data-hs-overlay="#hs-overlay-body-scrolling"
                  >.nuxt</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/output" data-hs-overlay="#hs-overlay-body-scrolling"
                  >.output</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/assets" data-hs-overlay="#hs-overlay-body-scrolling"
                  >assets</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/components" data-hs-overlay="#hs-overlay-body-scrolling"
                  >components</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/composables" data-hs-overlay="#hs-overlay-body-scrolling"
                  >composables</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/content" data-hs-overlay="#hs-overlay-body-scrolling"
                  >content</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/layouts" data-hs-overlay="#hs-overlay-body-scrolling"
                  >layouts</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/middleware" data-hs-overlay="#hs-overlay-body-scrolling"
                  >middleware</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/modules" data-hs-overlay="#hs-overlay-body-scrolling"
                  >modules</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/node-modules" data-hs-overlay="#hs-overlay-body-scrolling"
                  >node_modules</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/pages" data-hs-overlay="#hs-overlay-body-scrolling"
                  >pages</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/plugins" data-hs-overlay="#hs-overlay-body-scrolling"
                  >plugins</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/public" data-hs-overlay="#hs-overlay-body-scrolling"
                  >public</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/server" data-hs-overlay="#hs-overlay-body-scrolling"
                  >server</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/utils" data-hs-overlay="#hs-overlay-body-scrolling"
                  >utils</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/env" data-hs-overlay="#hs-overlay-body-scrolling"
                  >.env</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/gitignore" data-hs-overlay="#hs-overlay-body-scrolling"
                  >.gitignore</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/nuxtignore" data-hs-overlay="#hs-overlay-body-scrolling"
                  >.nuxtignore</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/app-config-ts" data-hs-overlay="#hs-overlay-body-scrolling"
                  >app.config.ts</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/app-vue" data-hs-overlay="#hs-overlay-body-scrolling"
                  >app.vue</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/nuxt-config-ts" data-hs-overlay="#hs-overlay-body-scrolling"
                  >nuxt.config.ts</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/package-json" data-hs-overlay="#hs-overlay-body-scrolling"
                  >package.json</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/directory-stracture/tsconfig-json" data-hs-overlay="#hs-overlay-body-scrolling"
                  >tsconfig.json</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="hs-accordion" id="hs-basic-with-arrow-heading-three">
          <button
            class="hs-accordion-toggle hs-accordion-active:text-blue-600 group pb-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-white sm:text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500"
            aria-controls="hs-basic-with-arrow-collapse-three"
          >
            <svg
              class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <svg
              class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            さらに進む
          </button>
          <div
            id="hs-basic-with-arrow-collapse-three"
            class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-arrow-heading-three"
          >
            <ul class="list-disc list-guide">
              <li>
                <NuxtLink to="/guide/going-furture/experimental-features" data-hs-overlay="#hs-overlay-body-scrolling"
                  >実験的な機能</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/going-furture/how-nuxt-works" data-hs-overlay="#hs-overlay-body-scrolling"
                  >Nuxtはどのように機能するのか?</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/going-furture/lifecycle-hooks" data-hs-overlay="#hs-overlay-body-scrolling"
                  >ライフサイクル フック</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/going-furture/module-author-guide" data-hs-overlay="#hs-overlay-body-scrolling"
                  >モジュール作成者ガイド</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/guide/going-furture/nuxt-kit" data-hs-overlay="#hs-overlay-body-scrolling"
                  >Nuxtキット</NuxtLink
                >
              </li>
              <li>NuxtApp</li>
              <li>Authoring Nuxt Layers</li>
              <li>custom routes</li>
              <li>Debugging</li>
              <li>Runtime Config</li>
              <li>Edge Release Channel</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.list-guide li {
  margin-left: -0.5rem;
}
</style>
