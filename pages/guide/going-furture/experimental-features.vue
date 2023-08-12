<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">実験的な機能</h1>
      <p>
        Nuxtの実験的な機能は、Nuxtの設定ファイルで有効にすることができます。内部的には、Nuxtは@nuxt/schemaを使用してこれらの実験的な機能を定義しています。詳細については、APIドキュメントまたはソースコードを参照してください。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>これらの機能は実験的なものであり、将来的に削除されるか変更される可能性があることに注意してください。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">asyncEntry</h2>
      <p>
        このオプションは、Vueバンドルの非同期エントリーポイントの生成を有効にし、モジュールフェデレーションのサポートを支援します。
      </p>
      <p>例:</p>
      <ContentDoc path="guide/going-furture/experimental-features/async-entry" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">reactivityTransform</h2>
      <p>
        Vueのリアクティビティ変換を有効にします。ただし、この機能はVue 3.3で非推奨とされ、Vue
        3.4からコアから削除される予定です。
      </p>
      <ContentDoc path="guide/going-furture/experimental-features/reactivity-transform" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>詳細については、ドキュメント > 入門 > 設定 #実験的なVueの機能を有効にするを参照してください。</div>
      </div>
    </section>
  </div>
</template>
