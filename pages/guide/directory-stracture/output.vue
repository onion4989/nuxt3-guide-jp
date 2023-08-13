<script setup>
definePageMeta({
  layout: "guide",
});
</script>

<template>
  <div>
    <section>
      <h2 class="text-lg lg:text-3xl font-bold">出力ディレクトリ</h2>
      <p>Nuxtは、アプリケーションを本番環境向けにビルドする際に .output/ ディレクトリを作成します。</p>
      <div class="bg-yellow-500 border border-orange-200 text-sm rounded-md my-4 p-4" role="alert">
        <span class="sr-only">Info</span>
        .nuxt/ ディレクトリ内のファイルには手を触れないでください。nuxt build
        を実行する際には、このディレクトリ全体が再作成されるためです。
      </div>
      <p>
        このディレクトリを使用して、Nuxtアプリケーションを本番環境にデプロイしてください。詳細については、デプロイメントセクションをご参照ください。
      </p>
    </section>
  </div>
</template>
