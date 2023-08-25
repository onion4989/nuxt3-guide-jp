<script setup>
definePageMeta({
  layout: "manual",
});
</script>

<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">Nuxt3の導入と構築</h1>
      <p>
        ここではNuxt3の導入から簡易的なデモサイト構築までを行います。<br />
        Nuxt3には多くの機能がありますが、あくまでもデモサイトに必要な機能に絞って進めていきます。
      </p>
      <ul class="list-none border rounded-xl shadow-sm p-6 bg-gray-50 dark:border-gray-700 my-6">
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink
            :to="{ path: '/manual/nuxt3-build', hash: '#create-pj' }"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >Nuxtのプロジェクト作成</NuxtLink
          >
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink
            :to="{ path: '/manual/nuxt3-build', hash: '#directory-build' }"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >ディレクトリ構成と構築</NuxtLink
          >
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink
            :to="{ path: '/manual/nuxt3-build', hash: '#create-pages' }"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >ページ制作</NuxtLink
          >
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink
            :to="{ path: '/manual/nuxt3-build', hash: '#data-fetching' }"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >データ取得</NuxtLink
          >
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink
            :to="{ path: '/manual/nuxt3-build', hash: '#create-sitemap' }"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >Sitemaps生成</NuxtLink
          >
        </li>
      </ul>
    </section>

    <section id="create-pj">
      <h2 class="text-lg lg:text-2xl font-bold mb-4">1. プロジェクト作成</h2>
      <div class="ml-6 my-6">
        <p>VS Codeのターミナルを利用して、PowerShellで一連のコマンドを打ち込んでいきます。</p>
        <p>
          下記は、ストレージの指定、ディレクトリの作成、プロジェクトの作成、npmのインストール、Nuxt3の起動までのコマンドです。
          <div class="text-sm">※下記の例ではEドライブを指定していますが、環境に合わせて選択してください。</div>
        </p>
        <ContentDoc path="manual/nuxt3-pj-setup/setup" class="markdown-body" />
        <p>
          最後の「npm run dev -- -o」を実行すると、自動的にブラウザ(http://localhost:3000)が起動します。
        </p>
        <p>
          もしブラウザが正常に起動しない場合は、どこかでミスをしている可能性があります。もう一度、コマンドを試してみましょう。
        </p>
      </div>
    </section>

    <section id="directory-build">
      <h2 class="text-lg lg:text-2xl font-bold mb-4">2. ディレクトリ構成と構築</h2>
      <div class="ml-6 my-6">
        <p>
          VS Code 上部メニュー「ファイル」 > 「フォルダーを開く」 > 「作成したプロジェクト」フォルダを選択してください。
          <div class="text-sm">※今回の場合だと、Eドライブ内のNuxtWorkdirフォルダ内にあるnuxt3-demoプロジェクトを選択。</div>
        </p>
        <p>まずは、インストールしたNuxt3のフォルダを確認してみましょう。</p>
        <ContentDoc path="manual/nuxt3-pj-setup/file-directory" class="markdown-body" />
        <p>
          Nuxt3では、<code class="word-highlight text-sm">page/</code>（index / about など） , <code class="word-highlight text-sm">layout/</code>（cssなど） , <code class="word-highlight text-sm">compornents/</code>（header / footerなど）をそれぞれ分離して管理・構築します。
        </p>
        <p>
          下記は、それぞれのファイルの基本的な関係性を視覚的にしたものです。
          <div class="text-sm">※理解した範囲で作っているので、間違っていたら申し訳ない！</div>
          <div class="text-sm">※server/ や assets/ ディレクトリもありますが、簡潔に視覚化するためにここでは除外しています。</div>
        </p>
        <img src="/img/img_nuxt3-structure.gif" alt="Nuxt3の構造" width="800" />
      </div>

      <h3 class="text-lg font-bold"><span class="w-2 h-2 inline-block bg-red-500 rounded-full mr-2"></span>app.vueとは</h3>
      <div class="ml-6 mb-6">
        <p>
          app.vueはNuxt3のメインファイルであり、<code class="word-highlight text-sm">vue-router</code>を利用する際には必ず必要になります。
          <div class="text-sm">※app.vueはルーティングを必要としないWebサイトの場合は削除することも可。</div>
        </p>
        <p>
          また、app.vueに追加したコード（JavaScriptやCSS）は、すべてグローバルな扱い（すべてのページに適用）になります。
        </p>
        <p>
          app.vueの使い分けとしては…、
        </p>
        <ul class="list-disc my-4 ml-6">
          <li>ルーティングが必要なWebサイト（複数ページが存在するサイト）では、app.vue を使用。</li>
          <li>ランディングページ（ペライチ）のようなワンページで構築するような場合は、app.vueは不要。</li>
        </ul>
        <p>
          というような感じで使い分けると良さそうです。詳細は、下記ページをご参照ください。
        </p>
        <div class="list-none border rounded-xl shadow-sm p-6 bg-gray-50 dark:border-gray-700 my-6">
          <NuxtLink to="/guide/directory-stracture/pages" class="underline decoration-dashed decoration-1 underline-offset-4">app.vue ガイド</NuxtLink>
        </div>
      </div>

      <h3 class="text-lg font-bold mt-12 my-2"><span class="w-2 h-2 inline-block bg-red-500 rounded-full mr-2"></span>pages/ディレクトリ</h3>
      <div class="ml-6 mb-6">
        <p>
          <code class="word-highlight text-sm">pages/</code> は、indexやabout、contactなどのWebサイトを構成する各種ページのファイルを格納するディレクトリです。また、サブディレクトリを使用して、ファイルを配置することもできます。
        </p>
        <p>
          動的ルーティングによるページ表示なども、こちらのディレクトリで行うことになります。
        </p>
        <p>詳細は、下記ページをご参照ください。</p>
        <div class="list-none border rounded-xl shadow-sm p-6 bg-gray-50 dark:border-gray-700 my-6">
          <NuxtLink to="/guide/directory-stracture/pages" class="underline decoration-dashed decoration-1 underline-offset-4">pages ディレクトリ ガイド</NuxtLink>
        </div>
      </div>

      <h3 class="text-lg font-bold mt-12 my-2"><span class="w-2 h-2 inline-block bg-red-500 rounded-full mr-2"></span>layouts/ディレクトリ</h3>
      <div class="ml-6 mb-6">
        <p>
          <code class="word-highlight text-sm">layouts/</code> は、ページのレイアウトを適用させるためのファイルを格納するディレクトリです。ページのレイアウトは複数作ることができ、各ページでレイアウトを変更することもできます。
        </p>
        <p>
          画像では、index と about ページは、defaultというレイアウトを適用し、contact ページは custom というレイアウトを適用しています。
        </p>
        <p>詳細は、下記ページをご参照ください。</p>
        <div class="list-none border rounded-xl shadow-sm p-6 bg-gray-50 dark:border-gray-700 my-6">
          <NuxtLink to="/guide/directory-stracture/layouts" class="underline decoration-dashed decoration-1 underline-offset-4">layouts ディレクトリ ガイド</NuxtLink>
        </div>
      </div>

      <h3 class="text-lg font-bold mt-12 my-2"><span class="w-2 h-2 inline-block bg-red-500 rounded-full mr-2"></span>compornents/ディレクトリ</h3>
      <div class="ml-6 mb-6">
        <p>
          <code class="word-highlight text-sm">compornents/</code> は、各ページで使用する(使いまわしの)ファイルを格納するディレクトリです。例えば、ヘッダー や フッター 、グローバルナビ、ページ共通の情報(例えば、広告など)を
        </p>
        <p>
          画像では、index と about ページは、defaultというレイアウトを適用し、contact ページは custom というレイアウトを適用しています。
        </p>
        <p>詳細は、下記ページをご参照ください。</p>
        <div class="list-none border rounded-xl shadow-sm p-6 bg-gray-50 dark:border-gray-700 my-6">
          <NuxtLink to="/guide/directory-stracture/components" class="underline decoration-dashed decoration-1 underline-offset-4">compornents ディレクトリ ガイド</NuxtLink>
        </div>
      </div>

      <h3 class="text-lg font-bold mt-12 my-2"><span class="w-2 h-2 inline-block bg-red-500 rounded-full mr-2"></span>server/ディレクトリ</h3>
      <div class="ml-6 mb-6">
        <p>
          <code class="word-highlight text-sm">server/</code> は、apiやmiddleware(ミドルウェア)、pluginなどを配置するディレクトリです。
        </p>
        <p>詳細は、下記ページをご参照ください。</p>
        <div class="list-none border rounded-xl shadow-sm p-6 bg-gray-50 dark:border-gray-700 my-6">
          <NuxtLink to="/guide/directory-stracture/server" class="underline decoration-dashed decoration-1 underline-offset-4">server ディレクトリ ガイド</NuxtLink>
        </div>
      </div>
    </section>

    <section id="create-pages">
      <h2 class="text-lg lg:text-2xl font-bold mb-4">3.ページ制作</h2>
      <p>ここでは、Topページを含め、各種ページを制作していきます。</p>
      <p></p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </section>

  </div>
</template>
