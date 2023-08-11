<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">ページ ディレクトリ</h1>
      <p>
        Nuxtは、Vue
        Routerを内部で使用してウェブアプリケーション内にルートを作成するためのファイルベースのルーティングを提供しています。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          このディレクトリはオプションです。つまり、app.vueのみを使用する場合は（nuxt.configでpages:
          trueを設定するか、app/router.options.tsを持つ場合を除いて）、vue-routerは含まれません。これにより、アプリケーションのバンドルサイズが削減されます。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">使用方法</h2>
      <p>
        ページはVueコンポーネントであり、Nuxtがデフォルトでサポートする有効な拡張子（.vue、.js、.jsx、.mjs、.ts、.tsxなど）を持つことができます。Nuxtは自動的に~/pages/ディレクトリ内の各ページに対してルートを作成します。
      </p>
      <ContentDoc path="guide/directry-stracture/pages/usage" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">動的なルート</h2>
      <p>
        もし角括弧内に何かを配置すると、それは動的なルートパラメーターに変換されます。ファイル名やディレクトリ内に複数のパラメーターを組み合わせたり、動的でないテキストを含めることもできます。
      </p>
      <p>
        もし、パラメータをオプションにしたい場合は、ダブルスクエアブラケットで囲む必要があります。例えば、~/pages/[[slug]]/index.vue
        や ~/pages/[[slug]].vue は、両方とも / や /test にマッチします。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">例</h2>
      <ContentDoc path="guide/directry-stracture/pages/pages-example" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">キャッチオール ルート</h2>
      <p>
        キャッチオールルートを必要とする場合は、[...slug].vue
        というようなファイルを作成します。これにより、そのパス以下のすべてのルートにマッチします。
      </p>
      <ContentDoc path="guide/directry-stracture/pages/catch-all-route" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ネステッドルート</h2>
      <p>&lt;NuxtPage&gt;を使用して、ネステッドルートを表示することが可能です。</p>
      <ContentDoc path="guide/directry-stracture/pages/nested-route" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">チャイルドルートキー</h2>
      <p>
        &lt;NuxtPage&gt;コンポーネントが再レンダリングされるタイミングをより細かく制御したい場合（例:トランジション用）、pageKey
        プロップを介して文字列または関数を渡すか、definePageMeta を使用して key 値を定義することができます。
      </p>
      <ContentDoc path="guide/directry-stracture/pages/child-route-key" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>「ドキュメント > 例 > ルーティング > ページ」をご参照ください。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold" id="page-metadata">ページのメタデータ</h2>
      <p>
        アプリの各ルートにメタデータを定義したい場合があるかもしれません。definePageMeta
        マクロを使用することで、これを実現できます。このマクロは、&lt;script&gt; および&lt;script
        setup&gt;の両方で動作します。
      </p>
      <ContentDoc path="guide/directry-stracture/pages/page-meta" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">特別なメタデータ</h2>
      <p>
        もちろん、アプリ全体で独自の目的でメタデータを定義することはできますが、definePageMetaで定義された一部のメタデータには特定の目的があります：
      </p>
      <ul class="list-disc">
        <li class="pb-5">
          <div class="font-bold">エイリアス</div>
          ページのエイリアスを定義することができます。これにより、異なるパスから同じページにアクセスできます。これは、vue-routerのドキュメントで定義されているように、文字列または文字列の配列であることができます。
        </li>
        <li class="pb-5">
          <div class="font-bold">KeepAlive</div>
          <p>
            definePageMeta で keepalive: true
            を設定すると、Nuxtは自動的にVueの&lt;KeepAlive&gt;コンポーネントでページをラップします。これは、例えば、動的な子ルートを持つ親ルートでページの状態をルートの変更を保持したい場合に便利です。
          </p>
          <p>
            親ルートの状態を保持することが目的の場合は、次の構文を使用します：&lt;NuxtPage keepalive
            /&gt;。また、&lt;KeepAlive&gt;に渡すプロップスを設定することもできます（詳細なリストはこちらを参照してください）。
          </p>
          <p>このプロパティのデフォルト値をnuxt.configで設定することができます。</p>
        </li>
        <li class="pb-5">
          <div class="font-bold">key</div>
          上記を参照してください。
        </li>
        <li class="pb-5">
          <div class="font-bold">layout</div>
          ルートのレンダリングに使用するレイアウトを定義することができます。これは、false（レイアウトを無効にするため）、文字列、またはref/computedのいずれかであり、リアクティブにする場合はref/computedを使用できます。レイアウトについての詳細はこちらを参照してください。
        </li>
        <li class="pb-5">
          <div class="font-bold">レイアウトトランジション と ページトランジション</div>
          <p>
            &lt;transition&gt;コンポーネントのトランジションプロパティを定義したり、特定のルートの&lt;transition&gt;ラッパーを無効にするために、nuxt.config.jsのpageTransitionとlayoutTransitionオプションを使用できます。これらのオプションを使用して、ページとレイアウトのトランジション効果をカスタマイズすることができます。
          </p>
          <p>プロパティのデフォルト値をnuxt.config.jsで設定することができます。</p>
        </li>
        <li class="pb-5">
          <div class="font-bold">middleware</div>
          ページを読み込む前に適用するミドルウェアを定義できます。このミドルウェアは、一致する親/子ルートのミドルウェアと結合されます。ミドルウェアは文字列、関数（グローバルなbeforeガードのパターンに従った無名/インラインのミドルウェア関数）、または文字列/関数の配列として定義することができます。詳細については、名前付きミドルウェアに関するドキュメントをご覧ください。
        </li>
        <li class="pb-5">
          <div class="font-bold">name</div>
          ページのルートに名前を定義することができます。
        </li>
        <li class="pb-5">
          <div class="font-bold">path</div>
          ファイル名で表現することができないより複雑なパターンがある場合、パスマッチャーを定義することができます。詳細はvue-routerのドキュメントを参照してください。
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">カスタムメタデータの型</h2>
      <p>
        ページにカスタムメタデータを追加する場合、型安全な方法で行いたい場合があります。definePageMetaで受け入れられるオブジェクトの型を拡張することができます。
      </p>
      <ContentDoc path="guide/directry-stracture/pages/typing-page-meta" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ナビゲーション</h2>
      <p>アプリ内のページ間を移動するには、&lt;NuxtLink&gt;コンポーネントを使用する必要があります。</p>
      <p>このコンポーネントはNuxtに含まれているため、他のコンポーネントと同様にインポートする必要はありません。</p>
      <p>pagesフォルダー内のindex.vueページへの簡単なリンク：</p>
      <ContentDoc path="guide/directry-stracture/pages/navigation" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>&lt;NuxtLink&gt;の使用方法について詳しくは、詳細を学ぶを参照してください。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">プログラムによるナビゲーション</h2>
      <p>
        Nuxt 3では、navigateTo()
        ユーティリティメソッドを介してプログラムによるナビゲーションが可能です。このユーティリティメソッドを使用することで、ユーザーをプログラムでナビゲートできます。これは、ユーザーからの入力を取得してアプリケーション内で動的にナビゲーションする場合に非常に便利です。以下の例では、シンプルな
        navigate() メソッドがあり、ユーザーが検索フォームを送信したときに呼び出されます。
      </p>
      <p>
        注意: navigateTo メソッドを使用する際には、常に await するか、その結果を関数から返すようにチェーンしてください。
      </p>
      <ContentDoc path="guide/directry-stracture/pages/programmatic-navigation" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">カスタムルーティング</h2>
      <p>
        アプリが大きくなり、複雑になると、ルーティングがより柔軟性を必要とする場合があります。そのため、Nuxtは直接ルーター、ルート、およびルーターオプションをカスタマイズするためにさまざまな方法で公開しています。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>「ドキュメント」 > 「ガイド」 > 「さらに進む」 > 「カスタムルーティング」をご覧ください。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">複数のページディレクトリ</h2>
      <p>
        デフォルトでは、すべてのページはプロジェクトのルートにある1つのpagesディレクトリに配置されるべきです。しかし、Layersを使用してアプリのページをグループ化することができます。
      </p>
      <ContentDoc path="guide/directry-stracture/pages/multiple-pages-directories" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>詳細については、ドキュメントの「ガイド」>「さらに進む」>「Layers」をご覧ください。</div>
      </div>
    </section>
  </div>
</template>
