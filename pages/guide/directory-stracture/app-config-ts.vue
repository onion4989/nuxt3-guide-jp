<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">App Config ファイル</h1>
      <p>
        Nuxt 3 は、アプリケーション内のリアクティブ構成を公開するための app.config
        構成ファイルを提供し、ライフサイクル内の実行時に更新するか、nuxt プラグインを使用して HMR (ホットモジュール置換)
        で編集する機能を備えています。
      </p>
      <p>
        app.config.tsファイルを使用して、ランタイムのアプリケーション設定を簡単に提供できます。 拡張子は
        .ts、.js、または .mjs のいずれかになります。
      </p>
      <ContentDoc path="guide/directry-stracture/appconfigts/app-config-file" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">アプリ構成の設定</h2>
      <p>
        アプリケーションの設定や環境変数をアプリ全体に公開するには、app.configファイルで設定を定義する必要があります。
      </p>
      <p>例:</p>
      <ContentDoc path="guide/directry-stracture/appconfigts/defining-app-config" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">アプリケーションの設定を手動で記述</h2>
      <p>Nuxtは、提供されたアプリケーションの設定から自動的にTypeScriptインターフェースを生成しようとします。</p>
      <p>アプリケーションの設定を手動で型付けすることも可能です。型付けしたい可能性がある2つの項目があります。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">アプリケーションの設定の入力の型付け</h2>
      <p>
        AppConfigInputは、アプリケーションの設定を設定する際に有効な入力オプションを宣言するモジュールの作者によって使用される可能性があります。これはuseAppConfig()の型には影響しません。
      </p>
      <ContentDoc path="guide/directry-stracture/appconfigts/typing-app-config-input" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">useAppConfig()から返される型</h2>
      <p>useAppConfig()の結果を型指定したい場合は、AppConfigを拡張（extend）することによって行います。</p>
      <div class="bg-yellow-500 border border-orange-200 text-sm rounded-md my-4 p-4" role="alert">
        <span class="sr-only">Info</span>
        AppConfigを型指定する際は注意してください。実際に定義されたapp
        configからNuxtが推論した型が上書きされる可能性があります。
      </div>
      <ContentDoc path="guide/directry-stracture/appconfigts/typing-app-config-output" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">LayersにおけるApp Configのマージ戦略</h2>
      <p>
        Nuxtはアプリケーションのレイヤー内でAppConfigのカスタムマージ戦略を使用します。この戦略は、Function
        Mergerを使用して実装されており、app.config内の配列を値として持つキーに対してカスタムのマージ戦略を定義することができます。
      </p>
      <div class="bg-yellow-500 border border-orange-200 text-sm rounded-md my-4 p-4" role="alert">
        <span class="sr-only">Info</span>
        Function Mergerはアプリケーションの基本的なapp.configでのみ使用するべきです。
      </div>
      <p>以下は使用例です：</p>
      <ContentDoc
        path="guide/directry-stracture/appconfigts/app-config-merging-strategy-in-layers"
        class="markdown-body"
      />
    </section>
  </div>
</template>
