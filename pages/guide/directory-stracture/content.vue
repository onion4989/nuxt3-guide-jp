<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">コンテンツ ディレクトリ</h1>
      <p>
        Nuxt Content モジュールは、プロジェクト内の
        <code class="text-sm inline-block rounded bg-gray-600 text-white p-1">content/</code>
        ディレクトリを読み取り、<code class="text-sm inline-block rounded bg-gray-600 text-white p-1">.md</code>、<code
          class="text-sm inline-block rounded bg-gray-600 text-white p-1"
          >.yml</code
        >、<code class="text-sm inline-block rounded bg-gray-600 text-white p-1">.csv</code>、および
        <code class="text-sm inline-block rounded bg-gray-600 text-white p-1">.json</code>
        ファイルを解析して、アプリケーション用のファイルベースのCMSを作成します。
      </p>
      <ul class="list-disc">
        <li>組み込みのコンポーネントを使用してコンテンツをレンダリングします。</li>
        <li>MongoDBのようなAPIを使用してコンテンツをクエリします。</li>
        <li>MDC構文を使用して、Markdownファイル内でVueコンポーネントを使用します。</li>
        <li>自動的にナビゲーションを生成します。</li>
      </ul>
    </section>

    <section>
      <h1 class="text-lg lg:text-3xl font-bold">始めに</h1>
      <h2 class="text-lg lg:text-2xl font-bold">インストール</h2>
      <p>
        プロジェクトに<code class="text-sm inline-block rounded bg-gray-600 text-white p-1">@nuxt/content</code
        >モジュールをインストールしてください：
      </p>
      <ContentDoc path="guide/directry-stracture/content/content-install" class="markdown-body"/>
      <p>次に、nuxt.config.tsのmodulesセクションに@nuxt/contentを追加してください：</p>
      <ContentDoc path="guide/directry-stracture/content/content-modules" class="markdown-body"/>
    </section>

    <section>
      <h2 class="text-3xl font-bold">コンテンツを作成する</h2>
      <p>
        Markdownファイルをプロジェクトのルートディレクトリ内の<code
          class="text-sm inline-block rounded bg-gray-600 text-white p-1"
          >content/</code
        >ディレクトリに配置してください。
      </p>
      <ContentDoc path="guide/directry-stracture/content/create-content" class="markdown-body"/>
      <p>このモジュールは自動的に読み込み、解析します。</p>
    </section>

    <section>
      <h2 class="text-3xl font-bold">ページをレンダリングする</h2>
      <p>
        コンテンツページをレンダリングするには、<code class="text-sm inline-block rounded bg-gray-600 text-white p-1"
          >ContentDoc</code
        >
        コンポーネントを使用してキャッチオールルートを追加してください。
      </p>
      <ContentDoc path="guide/directry-stracture/content/render-pages" class="markdown-body"/>
    </section>

    <section>
      <h2 class="text-3xl font-bold">ドキュメンテーション</h2>
      <p>
        以下のURLにアクセスして、Contentモジュールの機能について詳細を学びましょう。
        クエリの構築方法やMDC構文を使用してMarkdownファイル内でVueコンポーネントをどのように利用するかなどを確認することができます。
      </p>
      <p>
        <NuxtLink to="https://content.nuxtjs.org">https://content.nuxtjs.org</NuxtLink>
      </p>
    </section>
  </div>
</template>
