<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">レイアウト ディレクトリ</h1>
      <p>
        Nuxtはカスタマイズ可能なレイアウトフレームワークを提供しており、アプリケーション全体で使用できます。共通のUIやコードパターンを再利用可能なレイアウトコンポーネントに抽出するのに最適です。
      </p>
      <p>
        レイアウトは<code class="text-sm inline-block rounded bg-gray-600 text-white p-1">layouts/</code
        >ディレクトリに配置され、使用時に非同期インポートを介して自動的にロードされます。レイアウトは、app.vueに
        <code class="text-sm inline-block rounded bg-gray-600 text-white p-1">&lt;NuxtLayout&gt;</code
        >を追加することで使用されます。<code class="text-sm inline-block rounded bg-gray-600 text-white p-1"
          >~/pages</code
        >の統合を使用している場合は、ページのメタデータの一部として layout プロパティを設定するか、<code
          class="text-sm inline-block rounded bg-gray-600 text-white p-1"
          >&lt;NuxtLayout&gt;</code
        >
        のプロップスとして手動で指定します。（注：レイアウト名はケバブケースに正規化されるため、<code
          class="text-sm inline-block rounded bg-gray-600 text-white p-1"
          >someLayout</code
        >は <code class="text-sm inline-block rounded bg-gray-600 text-white p-1">some-layout</code>になります。）
      </p>
      <p>もしアプリケーションに1つのレイアウトしかない場合は、app.vue を使用することをおすすめします。</p>
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        他のコンポーネントとは異なり、レイアウトはレイアウトの変更間でトランジションを適用するために、1つのルート要素を持つ必要があります。そして、このルート要素は
        <code class="text-sm inline-block rounded bg-gray-600 text-white p-1">&lt;slot /&gt;</code
        >であってはなりません。
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">デフォルトのレイアウトを有効にする</h2>
      <p><code class="text-sm inline-block rounded bg-gray-600 text-white p-1">~/layouts/default.vue</code>を追加：</p>
      <ContentDoc path="guide/directry-stracture/layouts/default-vue" class="markdown-body"/>
      <p>
        レイアウトファイルでは、レイアウトのコンテンツは<span
          class="text-sm inline-block rounded bg-gray-600 text-white p-1"
          >&lt;slot /&gt;</span
        >
        にロードされます。特別なコンポーネントを使用する必要はありません。
      </p>
      <p>
        もし<code class="text-sm inline-block rounded bg-gray-600 text-white p-1">app.vue</code>を使用する場合、<code
          class="text-sm inline-block rounded bg-gray-600 text-white p-1"
          >&lt;NuxtLayout&gt;</code
        >も追加する必要があります。
      </p>
      <ContentDoc path="guide/directry-stracture/layouts/nuxt-layout" class="markdown-body"/>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">別のレイアウトを設定する</h2>
      <ContentDoc path="guide/directry-stracture/layouts/layout-file-stracture" class="markdown-body"/>
      <p>次のようにして、デフォルトのレイアウトを直接上書きできます:</p>
      <ContentDoc path="guide/directry-stracture/layouts/layout-directly-override" class="markdown-body"/>
      <p>また、次のようにしてページごとにデフォルトのレイアウトを上書きすることもできます:</p>
      <ContentDoc path="guide/directry-stracture/layouts/layout-define-pagemeta" class="markdown-body"/>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>ページメタデータの定義について詳しく学ぶ。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">動的にレイアウトを変更する</h2>
      <p>
        レイアウトには<code class="text-sm inline-block rounded bg-gray-600 text-white p-1">ref</code>や<code
          class="text-sm inline-block rounded bg-gray-600 text-white p-1"
          >computed</code
        >プロパティを使用することもできます。
      </p>
      <ContentDoc path="guide/directry-stracture/layouts/dynamically-layout" class="markdown-body"/>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>ドキュメント > 例 > 機能 > レイアウト にあるライブの例を読み込んで編集してください。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ページごとにレイアウトを上書きする。</h2>
      <p>
        <code class="text-sm inline-block rounded bg-gray-600 text-white p-1">~/pages</code
        >の統合を使用している場合、<code class="text-sm inline-block rounded bg-gray-600 text-white p-1"
          >layout: false</code
        >を設定して、ページ内で<code class="text-sm inline-block rounded bg-gray-600 text-white p-1"
          >&lt;NuxtLayout&gt;</code
        >コンポーネントを使用することで、完全な制御を取ることができます。
      </p>
      <ContentDoc path="guide/directry-stracture/layouts/layout-false" class="markdown-body"/>
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        ページ内で<code class="text-sm inline-block rounded bg-gray-600 text-white p-1">&lt;NuxtLayout&gt;</code>
        を使用する場合は、ルート要素にならないようにしてください（またはレイアウト/ページのトランジションを無効にしてください）。
      </div>
    </section>
  </div>
</template>
