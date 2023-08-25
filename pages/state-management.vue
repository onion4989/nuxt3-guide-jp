<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">状態管理 / State Management</h1>
      <p>
        Nuxtは、コンポーネント間で共有される反応性のある状態を作成するための<code class="word-highlight text-sm"
          >useState</code
        >コンポーザブルを提供しています。
      </p>
      <p>
        <code class="word-highlight text-sm">useState</code>は、SSRに対応した<code class="word-highlight text-sm"
          >ref</code
        >の代替となるものです。
        その値は、サーバーサイドレンダリング後（クライアントサイドのハイドレーション中）に保持され、一意のキーを使用してすべてのコンポーネント間で共有されます。
      </p>
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は「Docs > API > Composables >
        <NuxtLink
          to="https://nuxt.com/docs/api/composables/use-state"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Use State</NuxtLink
        >」を参照してください。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-400 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-100"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>useState はセットアップ中またはライフサイクル フック中にのみ機能します。</div>
      </div>
      <div class="bg-yellow-500 border border-orange-200 text-sm rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        useState内のデータはJSONにシリアル化されるため、クラス、関数、シンボルなど、シリアル化できないものが含まれていないことが重要です。
      </div>
    </section>
    <section>
      <h2 class="text-lg lg:text-2xl font-bold">useStateの書式</h2>
      <ContentDoc path="state/use-state" class="markdown-body" />
      <ul class="list-disc ml-5">
        <li>
          <code class="word-highlight text-sm">key</code
          >:データフェッチングが正しく重複排除されることを保証する一意のキーです。キーを指定しない場合、useStateのインスタンスのファイルと行番号に固有のキーが自動的に生成されます。
        </li>
        <li>
          <code class="word-highlight text-sm">init</code
          >:初期化されていない場合に状態の初期値を提供する関数です。この関数は Ref を返すこともできます。
        </li>
        <li><code class="word-highlight text-sm">T</code>:(TypeScriptのみ) 状態の型を指定します。</li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ベストプラクティス</h2>
      <ul class="list-disc ml-5">
        <li>
          ページ構造の適切な設計:
          Nuxtでは、pagesディレクトリ内のVueファイルがURLとしてマッピングされます。適切なディレクトリ構造とファイル命名規則を使用して、ページを効果的に管理します。
        </li>
        <li>
          モジュールの使用:
          Nuxtは機能を拡張するための多くのモジュールを提供しています。必要な機能を実装するために適切なモジュールを選択し、活用しましょう。
        </li>
        <li>
          データのフェッチング:
          ページコンポーネント内でのデータフェッチングは、useFetchやuseAsyncDataなどのNuxtのコンポーザブルを活用して行います。データのフェッチングを適切に管理し、パフォーマンスとキャッシュを最適化しましょう。
        </li>
        <li>
          SEOの最適化:
          ページのメタ情報やHTML構造を適切に設定して、SEOを最適化しましょう。Nuxtの機能を活用して、メタタグやページ構造を簡単にカスタマイズできます。
        </li>
        <li>
          ページトランジションの使用:
          ページ間のトランジションを活用して、ユーザーエクスペリエンスを向上させましょう。Nuxtのトランジション機能を使用するか、カスタムのJavaScriptトランジションを作成することができます。
        </li>
        <li>
          セキュリティ対策:
          Nuxtはセキュリティに重要な機能を提供しています。適切なセキュリティ対策を実装し、脆弱性や攻撃に対してアプリケーションを保護しましょう。
        </li>
        <li>
          デプロイの最適化:
          Nuxtはさまざまなデプロイプラットフォームとの互換性があります。適切なデプロイ設定を行い、アプリケーションのパフォーマンスとスケーラビリティを最適化しましょう。
        </li>
      </ul>
      <p>
        これらのベストプラクティスに従うことで、Nuxtをより効果的に使用し、堅牢で高パフォーマンスなアプリケーションを構築することができます。
      </p>

      <div class="bg-red-100 border border-red-400 text-red-700 p-4 mb-4 rounded relative" role="alert">
        <span class="block sm:inline">
          正しい使用法では、const state = ref()の定義は&lt;script setup&gt;ブロックまたはsetup()関数内で行ってください。
          （これは、Vue3のコンポーネントセットアップの仕組みに従ったものです。&lt;script&gt;ブロックの外部での定義は正しく機能せず、意図したとおりにリアクティブな状態を管理することができません。）
        </span>
      </div>

      <div
        class="flex p-4 mb-4 text-sm text-white rounded-lg bg-blue-50 dark:bg-green-900 dark:text-white"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>代わりに、const useX = () => useState('x') を使用してください。</div>
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-bold">事例</h2>
      <h3 class="text-lg lg:text-2xl font-bold my-4">基本的な使用方法 / Basic Usage</h3>
      <p>
        この例では、コンポーネント内でカウンターの状態を管理します。
        useState('counter')を使用する他のコンポーネントでも、同じリアクティブな状態を共有します。
      </p>
      <ContentDoc path="state/basic-usage" class="markdown-body" />

      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は「Docs > Examples > Features >
        <NuxtLink
          to="https://nuxt.com/docs/examples/features/state-management"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >State Management</NuxtLink
        >」を参照してください。
      </p>

      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は「Docs > API > Composables >
        <NuxtLink
          to="https://nuxt.com/docs/api/composables/use-state"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Use State</NuxtLink
        >」を参照してください。
      </p>

      <div
        class="flex p-4 mb-4 text-sm text-blue-400 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-100 mt-4"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          グローバルにキャッシュされた状態を無効化するには、<code class="word-highlight">clearNuxtState</code
          >を使用してください。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">高度な使用方法 / Advanced Usage</h2>
      <p>
        この例では、HTTPリクエストヘッダーからユーザーのデフォルトのロケール（年月日）を検出し、ロケールの状態を保持するコンポーザブルを使用しています。
      </p>
      <ContentDoc path="state/advanced-usage" class="markdown-body" />

      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は「Docs > Examples > Advanced >
        <NuxtLink
          to="https://nuxt.com/docs/examples/advanced/locale"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Locale</NuxtLink
        >」を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">共有状態 / Shared State</h2>
      <p>
        <NuxtLink
          to="/guide/directory-stracture/composables"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >自動インポートされるコンポーザブル</NuxtLink
        >を使用することで、グローバルな型安全な状態を定義し、それらをアプリケーション全体でインポートすることができます。
      </p>
      <ContentDoc path="state/shared-state" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">
        サードパーティープラグインの使用について / Using third-party libraries
      </h2>
      <p>
        Nuxtは以前、グローバルな状態管理のためにVuexライブラリを使用していました。Nuxt2から移行する場合は、<NuxtLink
          to="https://nuxt.com/docs/migration/configuration#vuex"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >移行ガイド</NuxtLink
        >を参照してください。
      </p>
      <p>
        Nuxtは状態管理のライブラリが初期状態ではインストールされていないため、必要に応じて適切なソリューションを選択してください。
        最も人気のある状態管理ライブラリとの複数の統合が用意されています。
      </p>
      <ul class="list-disc ml-5">
        <li>
          <NuxtLink
            to="https://nuxt.com/modules/pinia"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >Pinia</NuxtLink
          >
          - VuexはNuxtのデフォルトの状態管理ライブラリでしたが、Nuxt3からはオプションとなりました。
        </li>
        <li>
          <NuxtLink
            to="https://nuxt.com/modules/harlem"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >Harlem</NuxtLink
          >
          - イミュータブル (英: immutable) なグローバルオブジェクトを状態管理プラグイン
        </li>
        <li>
          <NuxtLink
            to="https://nuxt.com/modules/xstate"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >XState</NuxtLink
          >
          - ビジュアライズや状態ロジックのテストに便利なツールを備えたプラグイン
        </li>
      </ul>
    </section>
  </div>
</template>
