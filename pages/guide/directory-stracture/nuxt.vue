<script setup>
definePageMeta({
  layout: "guide",
});
</script>

<template>
  <div>
    <section>
      <h2 class="text-lg lg:text-3xl font-bold">.nuxt ディレクトリ</h2>
      <p>Nuxtは開発時に .nuxt/ ディレクトリを使用してVueアプリケーションを生成します。</p>
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        .nuxt/ ディレクトリ内のファイルには手を触れないでください。nuxt dev
        を実行する際には、このディレクトリ全体が再作成されるためです。
      </div>
      <p>
        このディレクトリは、ディレクトリ構造に基づいてNuxtが生成するファイルについて学びたい場合に興味深いものです。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">仮想ファイルシステム</h2>
      <p>
        Nuxtは、モジュールがテンプレートをディスクに書き込まずにこのディレクトリに追加するための仮想ファイルシステム（VFS）も提供しています。
      </p>
      <p>生成されたファイルを確認するには、下記のURLにアクセスしてください。</p>
      <NuxtLink to="http://localhost:3000/_vfs">http://localhost:3000/_vfs</NuxtLink>
    </section>
  </div>
</template>
