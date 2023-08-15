<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">Nuxtキット</h1>
      <p>
        Nuxt Kit は、<NuxtLink
          to="https://nuxt.com/docs/api/advanced/hooks"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Nuxt Hooks</NuxtLink
        >および<NuxtLink
          to="/guide/going-furture/how-nuxt-works"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Nuxt Builder Core</NuxtLink
        >とのやり取りや
        <NuxtLink
          to="/guide/going-furture/module-author-guide"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Nuxtモジュールの開発</NuxtLink
        >を非常に簡単にするコンポーザブル ユーティリティを提供します。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">使用方法</h2>
      <h3 class="font-bold my-4">依存関係のインストール</h3>
      <p>
        最新のNuxtキットを<code class="word-highlight text-sm">package.json</code
        >の依存関係セクションに追加することで、インストールできます。 ただし、<code class="word-highlight text-sm"
          >@nuxt/kit</code
        >パッケージが既にNuxtによってインストールされている場合でも、常に明示的にインストールすることを検討してください。
      </p>
      <ContentDoc path="guide/going-furture/nuxt-kit/install-dependency" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-3xl font-bold">Kitユーティリティのインポート</h2>
      <ContentDoc path="guide/going-furture/nuxt-kit/import-kit-utilities" class="markdown-body" />
    </section>
  </div>
</template>
