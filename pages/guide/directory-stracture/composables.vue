<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">コンポーザブル ディレクトリ</h1>
      <p>
        Nuxt
        3では、composables/ディレクトリを使用して、Vueのコンポーザブルを自動的にアプリケーションにインポートします。これは、自動的なインポートを利用しています。
      </p>
      <p>裏側では、Nuxtは .nuxt/imports.d.ts というファイルを自動生成して型を宣言します。</p>
      <p>
        Nuxtが型を生成するためには、nuxi prepare、nuxi dev、またはnuxi
        buildを実行する必要があることに注意してください。開発サーバーを起動せずにコンポーザブルを作成すると、TypeScriptが
        'useBar' という名前が見つからないなどのエラーをスローします。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">使用方法</h2>
      <p>方法1: 名前付きエクスポートを使用する</p>
      <ContentDoc path="guide/directry-stracture/composables/method-1" class="markdown-body" />

      <p>方法2: デフォルトエクスポートを使用する</p>
      <ContentDoc path="guide/directry-stracture/composables/method-2" class="markdown-body" />

      <p>使用方法: 現在、.js、.ts、および.vueファイルで自動的にインポートされたコンポーザブルを使用できます。</p>
      <ContentDoc path="guide/directry-stracture/composables/usage" class="markdown-body" />

      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>「ドキュメント > 例 > 機能 > 自動インポート」にあるライブの例をご参照ください。</div>
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-bold">事例</h2>
      <h3 class="text-lg lg:text-2xl font-bold py-4">ネストされたコンポーザブル</h3>
      <p>自動インポートを使用して、別のコンポーザブル内でコンポーザブルを使用することができます:</p>
      <ContentDoc path="guide/directry-stracture/composables/nested-conmosables" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">プラグインのインジェクションにアクセスする</h2>
      <p>コンポーザブルからプラグインのインジェクションにアクセスできます:</p>
      <ContentDoc path="guide/directry-stracture/composables/access-plugin-injections" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-3xl font-bold">ファイルのスキャンについて</h2>
      <p>Nuxtはcomposables/ディレクトリのトップレベルのファイルのみをスキャンします。例えば、次のようなファイルです:</p>
      <ContentDoc path="guide/directry-stracture/composables/composables-file-stracture" class="markdown-body" />
      <p>composables/index.ts と composables/useFoo.ts のみがインポートの対象となります。</p>
      <p>
        ネストされたモジュールに対して自動インポートを機能させるには、それらを再エクスポート（推奨）するか、あるいはスキャナーを設定してネストされたディレクトリを含めることができます。
      </p>
      <p>例: composables/index.ts ファイルから必要なコンポーザブルを再エクスポートする方法:</p>
      <ContentDoc path="guide/directry-stracture/composables/composables-utils" class="markdown-body" />
      <p>例: composables/フォルダ内のネストされたディレクトリをスキャンする方法:</p>
      <ContentDoc path="guide/directry-stracture/composables/composables-imports-dirs" class="markdown-body" />
    </section>
  </div>
</template>
