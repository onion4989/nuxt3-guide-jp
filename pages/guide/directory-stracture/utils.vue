<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">ユーティリティ(utils) ディレクトリ</h1>
      <p>
        Nuxt 3では、utils/ディレクトリを使用して、ヘルパー関数やその他のユーティリティを自動的にインポートし、自動インポートを使用してアプリケーション全体で利用できるようにしています！
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          <p>
            utils/ディレクトリの主な目的は、Vueのcomposableと他の自動インポートされたユーティリティ関数との間に意味的な区別を許可することです。
          </p>
          <p>
            utils/ディレクトリの自動インポートとスキャンの動作は、composables/ディレクトリと同じです。その動作についての詳細な情報や例については、ドキュメントのそのセクションを参照してください。
          </p>
        </div>
      </div>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          これらのutilsは、Vueの部分のアプリケーション内でのみ使用できます。serverディレクトリ内では、~/server/utilsからエクスポートされた関数と変数を自動的にインポートします。
        </div>
      </div>
    </section>
  </div>
</template>
