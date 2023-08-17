<script setup>
definePageMeta({
  layout: "manual",
});
</script>

<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl text-bold">Nuxt3 構築ガイド</h1>
      <p>Nuxt3でWebサイトを構築・公開するまでの導入手順を記載しています。</p>
      <p class="text-red-800">※現在、準備中のため未完成</p>
      <ul class="list-none my-6">
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <span class="w-2 h-2 inline-block bg-blue-500 rounded-full mr-2"></span>
          <span class="text-lg font-bold">VS Code（Visual Studio Code）の導入</span>
          <p>
            最低限、下記のプラグインを導入しておくと、開発がスムーズになります。<br />
            <NuxtLink to="/manual/vscode" class="underline decoration-dashed decoration-1 underline-offset-4"
              >開発環境の構築と設定</NuxtLink
            >はこちらから。
          </p>
          <ul class="text-sm ml-4 my-2">
            <li>- VS Codeのインストール</li>
            <li>- 必要プラグインのインストール</li>
            <li>- ESLint</li>
            <li>- 環境設定</li>
            <li>- 画面の簡易説明と使い方</li>
          </ul>
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <span class="w-2 h-2 inline-block bg-yellow-500 rounded-full mr-2"></span>
          <span class="text-lg font-bold">Tailwind CSS の導入</span>
          <p>
            Tailwind CSSフレームワークの導入で、開発をより加速させることができます。<br />
            <NuxtLink to="/manual/tailwind-css" class="underline decoration-dashed decoration-1 underline-offset-4"
              >Tailwind CSS の導入と設定</NuxtLink
            >はこちらから。
          </p>
          <ul class="text-sm ml-4 my-2">
            <li>- インストール</li>
            <li>- nuxt.config.tsの設定</li>
            <li>- tailwind.config.jsの設定</li>
            <li>- main.cssの作成</li>
            <li>- classへの記述</li>
            <li>- Tainwind Cheat Sheetの活用</li>
          </ul>
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <span class="w-2 h-2 inline-block bg-indigo-500 rounded-full mr-2"></span>
          <span class="text-lg font-bold">Nuxt3 の導入</span>
          <p>VS Codeのターミナル（bash）を利用して、プロジェクトの作成から構築まで行います。</p>
          <ul class="text-sm ml-4 my-2">
            <li>- プロジェクト作成</li>
            <li>- 各種設定</li>
            <li>- デモサイト構築（プラクティス）</li>
          </ul>
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <span class="w-2 h-2 inline-block bg-purple-500 rounded-full mr-2"></span>
          <span class="text-lg font-bold">Github との連携</span>
          <p>Githubのリポジトリを利用することで、Vercelと連携します。</p>
          <ul class="text-sm ml-4 my-2">
            <li>- アカウント制作</li>
            <li>- リポジトリ作成</li>
          </ul>
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800"
          style="counter-increment: step 1"
        >
          <span class="w-2 h-2 inline-block bg-gray-500 rounded-full mr-2"></span>
          <span class="text-lg font-bold">Vercel との連携</span>
          <p>Githubのリポジトリを利用してデプロイすることで、簡単にWebサイトを管理できます。</p>
          <ul class="text-sm ml-4 my-2">
            <li>- アカウント制作</li>
            <li>- インポート</li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>
