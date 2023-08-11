<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">TypeScript 設定ファイル</h1>
      <p>
        Nuxtは、Nuxtプロジェクトで使用している解決済みのエイリアスと他の適切なデフォルトを含む.nuxt/tsconfig.jsonファイルを自動的に生成します。次の内容を持つtsconfig.jsonをプロジェクトのルートに作成することで、これを活用できます。
      </p>
      <ContentDoc path="guide/directry-stracture/tsconfigjson/typescript-configuration-file" class="markdown-body" />
      <p>
        必要に応じて、このファイルの内容をカスタマイズすることができます。ただし、target、module、moduleResolutionを上書きしないようにすることを推奨します。また、パスをカスタマイズする必要がある場合、これは自動生成されたパスのエイリアスを上書きしてしまいます。その代わりに、nuxt.config内のaliasプロパティに必要なパスのエイリアスを追加することをお勧めします。これにより、自動生成されたtsconfigに追加されます。
      </p>
    </section>
  </div>
</template>
