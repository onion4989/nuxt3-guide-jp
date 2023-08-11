<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">Nuxt Ignore ファイル</h1>
      <p>
        .nuxtignoreファイルを使用すると、Nuxt はビルド段階でプロジェクトのルート ディレクトリ (rootDir) 内のレイアウト、ページ、コンポーネント、コンポーザブル、ミドルウェア ファイルを無視できます。 .nuxtignore ファイルは、.gitignore ファイルおよび .eslintignore ファイルと同じ仕様に従い、各行はどのファイルを無視する必要があるかを示す glob パターンです。
      </p>
      <p>注: nuxt.configファイルでignoreOptions、ignorePrefix、ignoreを設定することもできます。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">例</h2>
      <ContentDoc path="guide/directry-stracture/nuxtignore/nuxt-ignore-file" class="markdown-body" />
      <p>詳細については、gitignore ドキュメントを参照してください。</p>
    </section>
  </div>
</template>
