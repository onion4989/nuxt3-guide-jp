<script setup>
definePageMeta({
  layout: "guide",
});
</script>

<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">コンポーネント ディレクトリ</h1>
      <p>
        <code class="word-highlight text-sm">components/</code>
        ディレクトリは、Vueコンポーネントを配置する場所です。これらのコンポーネントは、ページや他のコンポーネントの内部でインポートして使用することができます（詳細はこちらをご覧ください）。
      </p>
      <p>
        Nuxtは、<code class="word-highlight text-sm">components/</code
        >ディレクトリ内のすべてのコンポーネント（および使用しているモジュールによって登録されたコンポーネントも含む）を自動的にインポートします。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-tree" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">カスタム ディレクトリ</h2>
      <p>
        デフォルトでは、<code class="word-highlight text-sm">~/components</code
        >ディレクトリのみがスキャンされます。他のディレクトリを追加したり、このディレクトリのサブフォルダ内のコンポーネントに変更したりする場合は、追加のディレクトリを設定する必要があります。
      </p>
      <ContentDoc path="guide/directry-stracture/components/custom-directories" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>ネストされたディレクトリは、スキャンされる順序で最初に追加する必要があります。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">コンポーネントの拡張子</h2>
      <p>
        デフォルトでは、<code class="word-highlight text-sm">nuxt.config.ts</code
        >のextensionsキーで指定された拡張子を持つすべてのファイルがコンポーネントとして扱われます。コンポーネントとして（登録されるべき）ファイルの拡張子を制限する必要がある場合は、componentsディレクトリ宣言の拡張形式とそのextensionsキーを使用することができます。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-extensions" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">コンポーネント名</h2>
      <p>もし、ネストされたディレクトリ内にコンポーネントがある場合は、次のようになります：</p>
      <ContentDoc path="guide/directry-stracture/components/components-tree-names" class="markdown-body" />
      <p>
        その場合、コンポーネントの名前は、ディレクトリパスとファイル名に基づいて作成されますが、重複するセグメントは削除されます。したがって、コンポーネントの名前は次のようになります：
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-button" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          明確にするために、コンポーネントのファイル名がその名前と一致するようにしてください。（上記の例では、Button.vue
          を BaseFooButton.vue にリネームしています。）
        </div>
      </div>
      <p>
        コンポーネントを、パスではなく名前だけを基準に自動的にインポートしたい場合は、設定オブジェクトの拡張形式で
        <code class="word-highlight text-sm">pathPrefix</code>オプションを<code class="word-highlight text-sm"
          >false</code
        >に設定する必要があります。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-path-prefix" class="markdown-body" />
      <p>
        これにより、Nuxt2で使用されていたものと同じ方法でコンポーネントが登録できます。例えば、~/components/Some/MyComponent.vue
        は<code class="word-highlight text-sm">&lt;SomeMyComponent&gt;</code>ではなく<code
          class="word-highlight text-sm"
          >&lt;MyComponent&gt;</code
        >として使用できるようになります。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">動的なコンポーネント</h2>
      <p>
        Vueの &lt;component :is="someComputedComponent"&gt;
        構文を使用したい場合は、Vueが提供するresolveComponentヘルパーを使用するか、直接#componentsから（コンポーネントを）インポートしてisプロパティに渡す必要があります。
      </p>
      <span>事例：</span>
      <ContentDoc path="guide/directry-stracture/components/components-is" class="markdown-body" />
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        resolveComponentを使用して動的なコンポーネントを処理する場合は、コンポーネントの名前以外のものは挿入しないようにしてください。コンポーネントの名前は文字列である必要があり、変数ではないことを確認してください。
      </div>
      <p>
        代替案としてはお勧めしませんが、すべてのコンポーネントをグローバルに登録することもできます。これにより、すべてのコンポーネントに対して非同期のチャンクが作成され、アプリケーション全体で利用可能になります。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-global" class="markdown-body" />
      <p>
        また、特定のコンポーネントを選択してグローバルに登録する場合は、~/components/globalディレクトリに配置することもできます。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          globalオプションは、各コンポーネントディレクトリごとに設定することもできます。つまり、特定のコンポーネントディレクトリ内のコンポーネントのみをグローバルに登録することができます。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">動的なインポート</h2>
      <p>
        コンポーネントを動的にインポートするために（コンポーネントの遅延読み込み）、コンポーネントの名前の前にLazyプレフィックスを追加するだけです。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-lazy-layout" class="markdown-body" />
      <p>
        Lazyプレフィックスを使用すると、コンポーネントが常に必要ではない場合に特に便利です。Lazyプレフィックスを使うことで、コンポーネントのコードを必要なタイミングまで遅延させることができます。これはJavaScriptバンドルのサイズを最適化するのに役立ちます。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-lazy-prefix-pages" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">直接的なインポート</h2>
      <p>
        必要に応じて、Nuxtの自動インポート機能をバイパスするために、#components
        から明示的にコンポーネントをインポートすることもできます。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-direct-imports" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">&lt;ClientOnly&gt; コンポーネント</h2>
      <p>
        Nuxtは、意図的にクライアント側のみでコンポーネントをレンダリングするための&lt;ClientOnly&gt;コンポーネントを提供します。クライアント側のみでコンポーネントをインポートする場合は、クライアント側のみのプラグイン内でコンポーネントを登録します。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-client-only" class="markdown-body" />
      <p>&lt;ClientOnly&gt;がクライアント側でマウントされるまで、スロットをフォールバックとして使用します。</p>
      <ContentDoc path="guide/directry-stracture/components/components-client-only-fallback" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">.client コンポーネント</h2>
      <p>
        コンポーネントがクライアント側でのみレンダリングされるようにしたい場合、コンポーネントの名前に .client
        接尾辞を追加することができます。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-file-name-client-only" class="markdown-body" />
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        この機能は、Nuxtの自動インポートと #components
        からのインポートでのみ機能します。これらのコンポーネントを実際のパスから明示的にインポートすると、それらがクライアント側のみのコンポーネントに変換されるわけではありません。
      </div>
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md my-4 p-4" role="alert">
        <span class="sr-only">Warning</span>
        .client コンポーネントは、マウントされた後にのみレンダリングされます。onMounted()
        を使用してレンダリングされたテンプレートにアクセスするには、onMounted() フックのコールバック内に await
        nextTick() を追加してください。
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">.server コンポーネント</h2>
      <p>
        .server コンポーネントは、単独で使用することも、.client コンポーネントと組み合わせて使用することもできます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">スタンドアロンのサーバーコンポーネント</h2>
      <p>
        スタンドアロンのサーバーコンポーネントは常にサーバー上でレンダリングされます。そのプロップスが更新されると、レンダリングされたHTMLをその場で更新するためのネットワークリクエストが発生します。
      </p>
      <p class="font-bold">■ Nuxtドキュメントのための動画</p>
      <NuxtLink to="https://www.youtube.com/watch?v=u1yyXe86xJM" class="hover:border-b-2"
        >Nuxt サーバー コンポーネント動画</NuxtLink
      >
      <p>
        Server componentsは現在実験的な機能であり、これを使用するには、nuxt.configで 'component islands'
        機能を有効にする必要があります。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-experimental" class="markdown-body" />
      <p>
        現在では、ファイル名に.serverを付与した（サーバーオンリーな）コンポーネントを登録することで、アプリケーション内のどこでも自動的に使用することができます。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-highlighted-markdown" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>スロットは対話的であり、display: contents; を持つ &lt;div&gt; で囲まれています。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">.client コンポーネントとの組み合わせ</h2>
      <p>
        この場合、.server + .client
        コンポーネントはコンポーネントの2つの「ハーフ」であり、サーバーとクライアント側で別々の実装を行う高度な使用例で使用することができます。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-comments" class="markdown-body" />
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        コンポーネントのクライアント側の部分がサーバーでレンダリングされたHTMLを正しくハイドレート（復元）できることが重要です。つまり、初回のロード時に同じHTMLをレンダリングする必要があります。そうしないと、ハイドレーションの不一致が発生する可能性があります。
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">&lt;DevOnly&gt; コンポーネント</h2>
      <p>Nuxtは、開発中にのみコンポーネントをレンダリングするための &lt;DevOnly&gt; コンポーネントを提供します。</p>
      <p>このコンテンツは、本番ビルドおよびツリーシェイキングに含まれません。</p>
      <ContentDoc path="guide/directry-stracture/components/components-dev-only" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">&lt;NuxtClientFallback&gt; コンポーネント</h2>
      <p>
        Nuxtは、&lt;NuxtClientFallback&gt;
        コンポーネントを提供しています。このコンポーネントは、その子要素のいずれかがSSRでエラーを引き起こした場合に、クライアント側でその内容をレンダリングします。もしサーバー上でレンダリングに失敗した場合は、fallbackTagを指定して特定のタグをレンダリングさせることができます。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-nuxt-client-fallback" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ライブラリの作者</h2>
      <p>Vueコンポーネントライブラリを自動的なツリーシェイキングとコンポーネント登録で作成することはとても簡単です。</p>
      <p>
        Nuxtモジュール内で、ユーザーの設定を必要とせずにディレクトリリストを拡張するために、components:dirsフックを使用することができます。
      </p>
      <p>以下のようなディレクトリ構造を想像してください：</p>
      <ContentDoc path="guide/directry-stracture/components/components-imagine-structure" class="markdown-body" />
      <p>その後、awesome-ui/nuxt.js 内で components:dirs フックを使用できます：</p>
      <ContentDoc path="guide/directry-stracture/components/components-dirs-hook" class="markdown-body" />
      <p>
        以上で完了です！これでプロジェクト内で、UIライブラリを nuxt.config ファイルで
        Nuxtモジュールとしてインポートすることができます。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-awesome-ui" class="markdown-body" />
      <p>
        ...そして、pages/index.vue でモジュールのコンポーネント（awesome-
        でプレフィックスされたコンポーネント）を直接使用することができます。
      </p>
      <ContentDoc path="guide/directry-stracture/components/components-awesome-module" class="markdown-body" />
      <p>
        これにより、コンポーネントが使用されている場合にのみ自動的にインポートされ、また、node_modules/awesome-ui/components/
        内のコンポーネントを更新する際にHMR（ホットモジュールリローディング）がサポートされます。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>「ドキュメント > 例 > 機能 > 自動インポート」のセクションにあるライブの例をご参照ください。</div>
      </div>
    </section>
  </div>
</template>
