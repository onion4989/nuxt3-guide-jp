<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">Nuxt Config ファイル</h1>
      <p>
        Nuxt は、.js、.ts、または .mjs のいずれかの拡張子を持つ単一の nuxt.config ファイルを使用して簡単に構成できます。
      </p>
      <ContentDoc path="guide/directry-stracture/nuxtconfigts/nuxt-config-file" class="markdown-body" />
      <p>
        設定が最新であることを確認するために、Nuxt はメイン設定ファイル (.env、.nuxtignore、および .nuxtrc ドットファイル) の変更を検出すると完全に再起動します。
      </p>
    </section>
    <div
      class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      <span class="sr-only">Info</span>
      <div>詳細については、「ドキュメント」>「API」>「構成」>「Nuxt Config」を参照してください。</div>
    </div>
  </div>
</template>
