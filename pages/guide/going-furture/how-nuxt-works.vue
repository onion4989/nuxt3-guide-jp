<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">Nuxt はどのように機能するのか?</h1>
      <p>
        Nuxt は、Web アプリケーションを構築するための最小限だが高度にカスタマイズ可能なフレームワークです。 このガイドは、Nuxt の内部をより深く理解し、Nuxt 上で新しいソリューションやモジュール統合を開発するのに役立ちます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Nuxt インターフェース</h2>
      <p>
        nuxi devを使用して開発モードでNuxtを起動するか、nuxi buildを使用して実稼働アプリケーションを構築すると、内部的にnuxtと呼ばれる共通コンテキストが作成されます。 これには、nuxt.configファイルとマージされた正規化されたオプション、いくつかの内部状態、およびさまざまなコンポーネントが相互に通信できるようにするunjs/hookableを利用した強力なフッキング システムを利用することができます。これは、ビルドのコアシステムです。
      </p>
      <p>このコンテキストは、nuxt/kit コンポーザブルで使用するためにグローバルに利用可能です。したがって、プロセスごとに実行できる Nuxt のインスタンスは 1 つだけです。</p>
      <p>Nuxtインターフェイスを拡張し、ビルド プロセスのさまざまな段階にフックするには、Nuxt モジュールを使用できます。</p>
      <p>詳細については、ソースコードを確認してください。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">NuxtApp インターフェース</h2>
      <p>ブラウザやサーバーでページをレンダリングする際に、nuxtAppと呼ばれる共有のコンテキストが作成されます。このコンテキストには、Vueインスタンス、ランタイムフック、ssrContext、およびハイドレーションのためのpayloadなどの内部状態が保持されます。これはランタイムコアと考えることができます。</p>
      <p>このコンテキストは、Nuxtプラグインや&lt;script setup&gt;、Vueコンポーザブル内でuseNuxtApp()コンポーザブルを使用してアクセスすることができます。ブラウザではグローバルな使用が可能ですが、サーバーではコンテキストをユーザー間で共有しないようにするために制限されています。</p>
      <p>nuxtAppインターフェースを拡張し、異なるステージにフックしたり、コンテキストにアクセスしたりするためには、Nuxtプラグインを使用することができます。</p>
      <p>Nuxt Appには、このインターフェースに関する詳細な情報があります。</p>
      <p>nuxtAppは次のプロパティを持っています：</p>
      <ContentDoc path="guide/going-furture/how-to-works/the-nuxtapp-interface" class="markdown-body" />
      <p>詳細については、ソースコードを確認してください。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ランタイムコンテキスト と ビルドコンテキスト</h2>
      <p>NuxtはNode.jsを使用してプロジェクトをビルドおよびバンドルしますが、ランタイム側も持っています。</p>
      <p>nuxt.config と Nuxt モジュールを使用してビルド コンテキストを拡張でき、Nuxt プラグインを使用してランタイムを拡張できます。</p>
      <p>本番向けにアプリケーションをビルドする際、nuxi buildは.outputディレクトリにスタンドアロンのビルドを生成します。このビルドはnuxt.configやNuxtモジュールに依存しないものです。</p>
    </section>

  </div>
</template>
