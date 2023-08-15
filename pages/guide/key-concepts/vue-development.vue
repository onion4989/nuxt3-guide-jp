<script setup>
definePageMeta({
  layout: "guide",
});
</script>

<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">Vue.js 開発</h1>
      <p>
        NuxtはVueをフロントエンドフレームワークとして使用し、コンポーネントの自動インポートやファイルベースのルーティングなどの機能を追加します。Nuxt
        3はVueの新しいメジャーリリースであるVue 3を統合しており、Nuxtユーザーに新しいパターンを可能にしています。
      </p>

      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          Nuxtを使用する際にVueの深い知識は必要ありませんが、vuejs.orgのドキュメントを読み、いくつかの例を試してみることをおすすめします。
        </div>
      </div>

      <p>
        Nuxtは常にVueをフロントエンドフレームワークとして使用してきました。以下の理由から、私たちはNuxtをVueの上に構築することを選択しました：
      </p>
      <ul>
        <li>Vueのリアクティビティモデルは、データの変更が自動的にインターフェースの変更をトリガーする仕組みです。</li>
        <li>
          コンポーネントベースのテンプレートは、HTMLをウェブの共通言語として保持しながら、直感的なパターンを可能にし、インターフェースを一貫性のあるままで強力に保つことができます。
        </li>
        <li>
          小規模なプロジェクトから大規模なウェブアプリケーションまで、Vueはスケールにおいても高いパフォーマンスを維持し、アプリケーションがユーザーに価値を提供し続けることを保証します。
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">NuxtでのVue</h2>
      <h3 class="text-lg font-bold py-2">シングルファイルコンポーネント</h3>
      <p>
        Vueのシングルファイルコンポーネント（SFC、または*.vueファイル）は、Vueコンポーネントのマークアップ（&lt;template&gt;）、ロジック（&lt;script&gt;）、およびスタイリング（&lt;style&gt;）をカプセル化します。NuxtはSFCに対してゼロ設定の体験を提供し、Hot
        Module Replacementを利用してシームレスな開発者体験を提供します。
      </p>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">コンポーネントの自動インポート</h3>
      <p>
        Nuxtプロジェクトの<code class="word-highlight text-sm">components/</code
        >ディレクトリに作成されたすべてのVueコンポーネントは、インポートすることなくプロジェクトで利用できます。もしコンポーネントを使用しない場合は、コードには含まれません。
      </p>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">Vueルーター</h3>
      <p>
        ほとんどのアプリケーションは複数のページとそれらの間を移動する方法が必要です。これをルーティングと呼びます。Nuxtでは、<code
          class="word-highlight text-sm"
          >pages/</code
        >ディレクトリと命名規則を使用して、公式のVue
        Routerライブラリを介してファイルにマッピングされるルートを直接作成します。
      </p>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">事例</h3>
      <ul class="flex gap-4 my-3">
        <li>
          <NuxtLink
            to="https://stackblitz.com/github/nuxt/starter/tree/v3/?file=README.md"
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            target="_blank"
            >Play on StackBlitz</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://codesandbox.io/p/sandbox/github/nuxt/starter/tree/v3"
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            target="_blank"
            >Play on CodeSandbox</NuxtLink
          >
        </li>
      </ul>
      <p>app.vueファイルはエントリーポイントであり、ブラウザウィンドウに表示されるページを表します。</p>
      <p>
        コンポーネントの<code class="word-highlight text-sm">&lt;template&gt;</code>内では、<code
          class="word-highlight text-sm"
          >components/</code
        >ディレクトリに作成した<code class="word-highlight text-sm">&lt;Welcome&gt;</code
        >コンポーネントをインポートすることなく使用します。
      </p>
      <p>
        <code class="word-highlight text-sm">&lt;template&gt;</code
        >の内容をカスタムのウェルカムメッセージで置き換えてみてください。右側のブラウザウィンドウは自動的にリロードせずに変更内容を表示します。
      </p>

      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          Vueに詳しい方は、Vueアプリケーションのインスタンスを作成するmain.jsファイルを探しているかもしれません。Nuxtはこれを自動的に裏側で処理します。
        </div>
      </div>

      <p>
        もし以前にNuxt2やVue2を使用したことがある場合は、Vue2とVue3の違い、およびNuxtがこれらの進化をどのように統合しているかについての理解を深めるために読み進めてください。
      </p>
      <p>
        それ以外の場合は、次の章に進んでNuxtのもう一つの重要な機能である「レンダリングモード」を知ることができます。
      </p>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">Nuxt2 / Vue2 との違い</h3>
      <p>
        Nuxt 3はVue
        3をベースにしています。新しいメジャーバージョンのVueでは、いくつかの変更が導入されており、Nuxtはこれを活用しています。
      </p>
      <ul class="list-decimal ml-12">
        <li class="my-2">より良いパフォーマンス</li>
        <li class="my-2">Composition API</li>
        <li class="my-2">TypeScriptサポート</li>
      </ul>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">高速なレンダリング</h3>
      <p>
        VueのVirtual
        DOM（VDOM）は一から書き直され、より優れたレンダリングパフォーマンスを実現しています。さらに、コンパイルされたシングルファイルコンポーネントを使用する際には、Vueコンパイラがビルド時に静的なマークアップと動的なマークアップを分離してさらに最適化することができます。
      </p>
      <p>
        これにより、初回のレンダリング（コンポーネントの作成）と更新がより高速になり、メモリの使用量も減少します。Nuxt3では、サーバーサイドレンダリングもより高速になります。
      </p>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">より小さなバンドル</h3>
      <p>
        Vue3とNuxt3では、バンドルサイズの削減に重点が置かれています。バージョン3では、Vueのほとんどの機能、テンプレートディレクティブや組み込みコンポーネントを含め、tree-shakable（未使用のコードを除外してバンドルサイズを最適化することができる）になっています。使用しない場合、本番のバンドルには含まれません。
      </p>
      <p>このようにして、最小限のVue3アプリケーションは、gzip圧縮後に12KBまで削減されることがあります。</p>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">コンポジション API</h3>
      <p>
        Vue2では、コンポーネントにデータとロジックを提供する唯一の方法はOptions APIでした。Options
        APIは、dataやmethodsなどの事前定義されたプロパティを使用して、テンプレートにデータとメソッドを返すことを可能にします。
      </p>
      <ContentDoc path="guide/keyconcept/vue-devlopment/composition-api-methods" class="markdown-body" />
      <p>
        Vue3で導入されたComposition APIはOptions
        APIの置き換えではありませんが、アプリケーション全体での論理の再利用を可能にし、複雑なコンポーネント内でコードを最適化できるようにした方法なのです。
      </p>
      <p>
        <code class="word-highlight text-sm">&lt;script&gt;</code>の定義内で<code class="word-highlight text-sm"
          >setup</code
        >キーワードを使用して、以下のコンポーネントをComposition APIとNuxt3の自動インポートされたReactivity
        APIを使用して書き直したものです:
      </p>

      <ContentDoc path="guide/keyconcept/vue-devlopment/composition-api-reactivity" class="markdown-body" />
      <p>Nuxt3の目標は、Composition APIを中心に優れた開発者体験を提供することです。</p>
      <ul class="list-disc ml-6">
        <li class="my-2">
          Vueと<NuxtLink
            to="https://nuxt.com/docs/api/composables/use-async-data"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >Nuxt3の組み込みコンポーザブル</NuxtLink
          >から自動的にインポートされる<NuxtLink
            to="https://vuejs.org/api/reactivity-core.html"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >リアクティビティ関数</NuxtLink
          >を使用してください。
        </li>
        <li class="my-2">
          <code class="word-highlight text-sm">composables/</code
          >ディレクトリに自分自身で自動インポートされる再利用可能な関数を書いてください。
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">TypeScript Support</h2>
      <p>
        Vue3とNuxt3の両方はTypeScriptで書かれています。完全に型付けされたコードベースは、ミスを防止しAPIの使用方法をドキュメント化します。しかし、これはアプリケーションをTypeScriptで書く必要があるという意味ではありません。Nuxt3では、ファイルの拡張子を
        .js から .ts に変更するか、コンポーネント内に<code class="word-highlight text-sm">&lt;script lang="ts"&gt;</code
        >を追加することで、TypeScriptを選択的に利用することができます。
      </p>

      <p class="tips">
        <span class="sr-only">Info</span> Nuxt3における<NuxtLink
          to="/guide/key-concepts/typescript"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >TypeScriptの詳細</NuxtLink
        >について読む
      </p>
    </section>
  </div>
</template>
