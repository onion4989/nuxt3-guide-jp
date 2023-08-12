<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">ライフサイクル フック</h1>
      <p>
        Nuxtは、ほぼすべての側面を拡張するための強力なフックシステムを提供しています。この機能は、unjs/hookableによって提供されています。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Nuxt フック(Build Time)</h2>
      <p>これらのフックは、Nuxtモジュールとビルドコンテキストで利用可能です。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">nuxt.configの使用方法</h2>
      <ContentDoc path="guide/going-furture/lifecycle-hooks/usage-with-nuxt-config" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Nuxt モジュールの使用方法</h2>
      <ContentDoc path="guide/going-furture/lifecycle-hooks/usage-with-nuxt-config" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">App フック(Runtime)</h2>
      <p>
        アプリフックは主に Nuxt プラグインによってレンダリング ライフサイクルにフックするために使用されますが、Vue
        コンポーザブルでも使用できます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Pluginsの使用方法</h2>
      <ContentDoc path="guide/going-furture/lifecycle-hooks/usage-with-plugins" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Nitro App フック(Runtime)</h2>
      <p>これらのフックは、Nitro プラグインが Nitro のランタイム動作にフックするために使用できます。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Nitro プラグイン内での使用方法</h2>
      <ContentDoc path="guide/going-furture/lifecycle-hooks/usage-within-a-nitro-plugin" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>利用可能な Nitro ライフサイクル フックの詳細をご覧ください。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">追加のフック</h2>
      <p>
        モジュールには、Nuxtが提供する型を拡張して追加のフックを追加することができます。これはモジュールにとって便利です。
      </p>
      <ContentDoc path="guide/going-furture/lifecycle-hooks/add-additional-hooks" class="markdown-body" />
    </section>
  </div>
</template>
