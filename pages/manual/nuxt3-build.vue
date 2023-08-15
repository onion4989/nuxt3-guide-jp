<script setup>
definePageMeta({
  layout: "manual",
});
</script>

<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">Nuxt3の導入と構築</h1>
      <p>ここではNuxt3の導入から簡易的なデモサイト構築までを行います。</p>
      <p>Nuxt3には多くの機能がありますが、あくまでもデモサイトに必要な機能に絞って進めていきます。</p>
      <ul class="list-none border rounded-xl shadow-sm p-6 bg-gray-50 dark:border-gray-700 my-6">
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink
            :to="{ path: '/manual/vscode', hash: '#vs-code-install' }"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >Nuxtのプロジェクト作成</NuxtLink
          >
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink
            :to="{ path: '/manual/vscode', hash: '#plugin-install' }"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >ディレクトリ構成と構築</NuxtLink
          >
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink
            :to="{ path: '/manual/vscode', hash: '#configuration-settings' }"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >Topページ制作</NuxtLink
          >
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink
            :to="{ path: '/manual/vscode', hash: '#how-to-use' }"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >データ取得</NuxtLink
          >
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink
            :to="{ path: '/manual/vscode', hash: '#how-to-use' }"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >Sitemaps生成</NuxtLink
          >
        </li>
      </ul>
    </section>
  </div>
</template>
