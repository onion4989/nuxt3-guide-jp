<script setup>
definePageMeta({
  layout: "manual",
});
</script>

<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">Tainwind CSS の導入</h1>
      <p>ここではTainwind CSSのインストールから開発環境の構築と設定までを行います。</p>
      <p>
        Tainwind CSSはオリジナリティの高いWebデザインを簡単に構築できるCSSフレームワークです。<br />
        Bootstrapなどに慣れているユーザーにとっては簡単に扱うことができますが、初学者の方は、やや難しく感じるかもしれません。<br />
      </p>
      <p>
        とはいえ、Nuxt3ではTainwind CSSをサポートしているため、導入から実装まで用意に行うことができます。
      </p>
      <ul class="list-none border rounded-xl shadow-sm p-6 bg-gray-50 dark:border-gray-700 my-6">
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink :to="{ path: '/manual/tailwind-css', hash: '#install'}" class="underline decoration-dashed decoration-1 underline-offset-4">Tainwind CSSのインストール</NuxtLink>
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink :to="{ path: '/manual/tailwind-css', hash: '#nuxt-config-js-settings'}" class="underline decoration-dashed decoration-1 underline-offset-4">nuxt.config.tsの設定</NuxtLink>
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink :to="{ path: '/manual/tailwind-css', hash: '#tailwind-config-js-settings'}" class="underline decoration-dashed decoration-1 underline-offset-4">tailwind.config.jsの設定</NuxtLink>
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink :to="{ path: '/manual/tailwind-css', hash: '#create-main-css'}" class="underline decoration-dashed decoration-1 underline-offset-4">main.cssの作成とインポート</NuxtLink>
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink :to="{ path: '/manual/tailwind-css', hash: '#add-class'}" class="underline decoration-dashed decoration-1 underline-offset-4">classへの記述</NuxtLink>
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink :to="{ path: '/manual/tailwind-css', hash: '#cheat-sheet'}" class="underline decoration-dashed decoration-1 underline-offset-4">Tainwind Cheat Sheetの活用</NuxtLink>
        </li>
      </ul>
    </section>

    <section id="install">
      <h2 class="text-lg lg:text-2xl font-bold">1. Tainwind CSSのインストール</h2>
      <div class="ml-5">
        <p>
          VS Codeのターミナルから、下記コマンドを入力します。
        </p>
        <ContentDoc path="manual/tailwind-css/install" class="markdown-body" />
      </div>
    </section>

    <section id="nuxt-config-js-settings">
      <h2 class="text-lg lg:text-2xl font-bold">2. nuxt.config.tsの設定</h2>
      <div class="ml-5">
        <p>
          まずはassetsディレクトリを作成してから、nuxt.config.tsを設定してください。
        </p>
        <ContentDoc path="manual/tailwind-css/nuxt-config-ts-settings" class="markdown-body" />
      </div>
    </section>


    <section id="tailwind-config-js-settings">
      <h2 class="text-lg lg:text-2xl font-bold">3.tailwind.config.jsの設定</h2>
      <div class="ml-5">
        <p>
          次に、tailwind.config.js に下記の設定を行います。
        </p>
        <ContentDoc path="manual/tailwind-css/tailwind-config-js-settings" class="markdown-body" />
      </div>
    </section>

    <section id="create-main-css">
      <h2 class="text-lg lg:text-2xl font-bold">4.main.cssの作成</h2>
      <div class="ml-5">
        <p>
          まずは、assets/ ディレクトリにcssフォルダを作成します。その後、cssフォルダ内にmain.css を作成してください。main.cssのインポートに関しては、「3.tailwind.config.jsの設定」ですでに行っている状態です。
        </p>
        <ContentDoc path="manual/tailwind-css/create-main-css" class="markdown-body" />
      </div>
    </section>

    <section id="add-class">
      <h2 class="text-lg lg:text-2xl font-bold">5.classへの記述</h2>
      <div class="ml-5">
        <p>
          Tailwind CSS がキチンと有効になっているかどうかは、classにtailwind cssのコードを記述して、実際にブラウザで確認する必要があります。
        </p>
        <p>app.vue下記コードを設定し、確認してみてください。</p>
        <ContentDoc path="manual/tailwind-css/add-class" class="markdown-body" />
        <p>
          もしブラウザで確認してもTailwind CSSが有効になっていない場合は、1から見直すか、<NuxtLink to="https://tailwindcss.com/docs/installation" class="underline decoration-dashed decoration-1 underline-offset-4">公式サイト</NuxtLink>を参照してください。
        </p>
      </div>
    </section>

    <section id="cheat-sheet">
      <h2 class="text-lg lg:text-2xl font-bold">6.Tainwind Cheat Sheetの活用</h2>
      <div class="ml-5">
        <p>
          Tailwind CSSには非常に多くのコードがあり、すべて覚えるのは不可能です。馴れないうちは、下記のサイトを参考にしながら進めてみましょう。
        </p>
        <ul class="list-disc ml-6">
          <li>
            <NuxtLink to="https://tailwindcomponents.com/cheatsheet/" class="underline decoration-dashed decoration-1 underline-offset-4">Tailwind CSS Cheat Sheet</NuxtLink>        
          </li>
        </ul>

      </div>
    </section>


    
  </div>
</template>
