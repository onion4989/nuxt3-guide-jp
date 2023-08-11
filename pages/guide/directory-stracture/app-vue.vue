<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">App ファイル</h1>
      <p>app.vueファイルはNuxt 3アプリケーションのメインコンポーネントです。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">最小限の使用例</h2>
      <p>
        Nuxt 3では、pages/ディレクトリはオプションです。存在しない場合、Nuxtはvue-routerの依存関係を含めません。これは、ルーティングが必要ないランディングページやアプリケーションを開発する際に便利です。
      </p>
      <ContentDoc path="guide/directry-stracture/appvue/minimal-usage" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ページでの使用法</h2>
      <p>
        もしpages/ディレクトリが存在する場合、現在のページを表示するためには &lt;NuxtPage&gt;コンポーネントを使用します。
      </p>
      <ContentDoc path="guide/directry-stracture/appvue/usage-with-pages" class="markdown-body" />

      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          Nuxt 3では、&lt;NuxtPage&gt;内部で&lt;Suspense&gt;を使用しているため、&lt;NuxtPage&gt;はルート要素として設定できません。
        </div>
      </div>

      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        app.vueはNuxtアプリケーションのメインコンポーネントとして機能します。app.vueに追加したすべてのコード（JavaScriptとCSS）はグローバルであり、すべてのページに含まれます。
      </div>
      <p>
        もしページごとにページの周りの構造をカスタマイズしたい場合は、layouts/ディレクトリを確認してください。
      </p>
    </section>
  </div>
</template>
