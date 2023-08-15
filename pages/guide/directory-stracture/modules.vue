<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">モジュール ディレクトリ</h1>
      <p>
        Nuxtはmodules/ディレクトリをスキャンし、アプリケーションの開始前にそれらを読み込みます。このディレクトリは、アプリケーションを構築する際に開発したローカルモジュールを配置するのに適した場所です。
      </p>
      <p>自動登録されるファイルのパターンは次のとおりです:</p>
      <ul class="list-disc ml-6 my-6">
        <li class="my-2">modules/*/index.ts</li>
        <li class="my-2">modules/*.ts</li>
      </ul>
      <p>それらのローカルモジュールをnuxt.config.tsに別途追加する必要はありません。</p>
      <ContentDoc path="guide/directry-stracture/modules/define-nuxt-module" class="markdown-body" />
      <p>Nuxtを起動する際に、helloモジュールが登録され、/api/helloルートが利用可能になります。</p>
      <p>
        ローカルモジュールはアルファベット順に登録されます。各ディレクトリの前に数字を付けることで順序を変更することができます。
      </p>
      <ContentDoc path="guide/directry-stracture/modules/modules-stracture" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>「ドキュメント > ガイド > さらに進む > モジュール」を参照する。</div>
      </div>
    </section>
  </div>
</template>
