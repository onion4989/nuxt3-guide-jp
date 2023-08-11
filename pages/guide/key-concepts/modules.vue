<script setup>
definePageMeta({
  layout: "guide",
});
</script>

<template>
  <div>
    <section>
      <h2 class="text-lg lg:text-3xl font-bold">モジュール</h2>
      <p>
        Nuxtは、フレームワークのコアを拡張し、統合を簡素化するためのモジュールシステムを提供しています。すでにNuxtモジュールがある場合、すべてをゼロから開発したりボイラープレートを維持する必要はありません。Nuxtモジュールを追加することは、nuxt.configを使用して可能です。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Nuxtモジュールの探索</h2>
      <p>
        Nuxtを使用して本番向けのアプリケーションを開発する際には、フレームワークのコア機能だけでは十分でない場合があります。Nuxtは設定オプションやプラグインを使って拡張することができますが、これらのカスタマイズを複数のプロジェクトで維持することは手間がかかり、繰り返しの作業で時間がかかることがあります。一方で、すべてのプロジェクトのニーズに対応することができるようにすると、Nuxtは非常に複雑で使いづらくなる可能性があります。
      </p>
      <p>
        これがNuxtがモジュールシステムを提供する理由の一つです。Nuxtモジュールは非同期関数であり、nuxi
        devを使用して開発モードでNuxtを起動したり、nuxi
        buildを使用してプロジェクトを本番用にビルドする際に順次実行されます。これらのモジュールはテンプレートを上書きしたり、Webpackのローダーを設定したり、CSSライブラリを追加したり、他にも多くの便利なタスクを実行することができます。
      </p>
      <p>
        Nuxtモジュールは、何よりも嬉しいことに、npmパッケージとして配布することができます。これにより、モジュールを複数のプロジェクトで再利用したり、コミュニティと共有したりすることができます。これにより、高品質なアドオンのエコシステムを構築し、共有できるようになります。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>詳細は「Nuxt 3対応のモジュール」を参照してください。</div>
      </div>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">モジュールのプロパティ</h3>
      <p>
        モジュールをインストールした後、それらをnuxt.config.tsファイルのmodulesプロパティに追加できます。モジュールの開発者は通常、使用方法に関する追加の手順や詳細を提供します。
      </p>
      <ContentDoc path="guide/keyconcept/modules/module-property" class="markdown-body"/>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>詳細は「モジュール作成者ガイド」を参照してください。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">モジュール開発</h2>
      <p>
        誰もがモジュールを開発する機会があります。モジュールの開発については、モジュール作成者ガイドを読んでください。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>「モジュール作成者ガイド」を読む。</div>
      </div>
    </section>
  </div>
</template>
