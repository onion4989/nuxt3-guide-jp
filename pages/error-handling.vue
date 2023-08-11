<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">エラー処理</h1>
      <p>異なるライフサイクルでエラーをキャッチする方法を学びましょう。</p>
    </section>
    <section>
      <h2 class="text-lg lg:text-2xl font-bold">エラー処理</h2>
      <p>
        Nuxt3はフルスタックのフレームワークです。そのため、さまざまなコンテキストで発生するユーザーのランタイムエラーは、防止できないソースから発生する可能性があります。
      </p>
      <ul class="list-decimal ml-5">
        <li>Vueのレンダリングライフサイクル中のエラー（SSR + SPA）</li>
        <li>APIやNitroサーバーのライフサイクル中のエラー</li>
        <li>サーバーおよびクライアントの起動エラー（SSR + SPA）</li>
        <li>JSチャンク(データの細分化)のダウンロードエラー</li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Vueのレンダリングライフサイクル中のエラー（SSR + SPA）</h2>
      <p>
        <code class="word-highlight text-sm">onErrorCaptured</code>を使用してVueのエラーにフックすることができます。
      </p>
      <p>
        さらに、Nuxtは<code class="word-highlight text-sm">vue:error</code
        >フックも提供しており、エラーがトップレベルまで伝播した場合に呼び出されます。
      </p>
      <p>
        エラーレポートフレームワークを使用している場合は、<code class="word-highlight text-sm"
          >vueApp.config.errorHandler</code
        >を介してグローバルなハンドラを提供することができます。これにより、処理されているエラーも含めて、すべてのVueのエラーを受け取ることができます。
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-bold">グローバルエラーリポートフレームワークの事例</h2>
      <ContentDoc path="error/global-error-reporting-framework-example" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">サーバーとクライアントセットアップエラー (SSR + SPA)</h2>
      <p>
        Nuxtアプリケーションの起動中にエラーが発生した場合、Nuxtは<code class="word-highlight text-sm">app:error</code
        >フックを呼び出します。
      </p>
      <p>これには以下が含まれます。:</p>
      <ul class="list-disc ml-5">
        <li>Nuxtプラグインの実行</li>
        <li>
          <code class="word-highlight text-sm">app:created</code>と<code class="word-highlight text-sm"
            >app:beforeMount</code
          >フックの処理
        </li>
        <li>VueアプリケーションをHTMLにレンダリングする（サーバーサイド）</li>
        <li>
          アプリケーションのマウント（クライアントサイド）。ただし、このケースは<code class="word-highlight"
            ><code class="word-highlight text-sm">onErrorCaptured</code></code
          >または<code class="word-highlight text-sm">vue:error</code>で処理する必要があります。
        </li>
        <li>app:mountedフックの処理</li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">APIまたはNitroサーバーライフサイクル中のエラー</h2>
      <p>
        これらのエラーに対しては、現在サーバーサイドのハンドラを定義することはできませんが、エラーページをレンダリングすることは可能です（次のセクションを参照）。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">JavaScriptのダウンロードエラー</h2>
      <p>
        ネットワーク接続障害または新しいデプロイメント (古いハッシュ化された JS チャンク URL が無効になる)
        が原因で、チャンク読み込みエラーが発生する可能性があります。 Nuxt は、ルート
        ナビゲーション中にチャンクのロードに失敗した場合にハード リロードを実行することにより、チャンクのロード
        エラーを処理するための組み込みサポートを提供します。
      </p>
      <p>
        この動作を変更するには、<code class="word-highlight text-sm">experimental.emitRouteChunkError</code>を<code
          class="word-highlight text-sm"
          >false</code
        >に設定する（これにより、これらのエラーにフックが行われなくなる）か、<code class="word-highlight text-sm"
          >manual</code
        >に設定することで自分自身で処理できます。チャンクの読み込みエラーを手動で処理する場合は、自動的な実装を参考にすることができます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">エラーページのレンダリング</h2>
      <p>
        Nuxtが致命的なエラーに遭遇した場合、サーバーライフサイクル中またはVueアプリケーションのレンダリング中（SSRおよびSPAの両方）、JSONレスポンス（<code
          class="word-highlight text-sm"
          >Accept: application/json</code
        >ヘッダーでリクエストされた場合）またはHTMLのエラーページをレンダリングします。
      </p>
      <p>
        エラーページをカスタマイズするには、アプリケーションのソースディレクトリに<code class="word-highlight text-sm"
          >app.vue</code
        >と同じ階層に<code class="word-highlight text-sm">~/error.vue</code
        >を追加します。このページは単一のプロパティ<code class="word-highlight text-sm">error</code
        >を持ち、ハンドリングするためのエラーオブジェクトが含まれています。
      </p>
      <div class="bg-yellow-500 border border-orange-200 text-sm rounded-md my-4 p-4" role="alert">
        <span class="sr-only">Info</span>
        <div>
          Nuxtプラグインに依存するもの（$routeやuseRouterなど）を使用する前に、プラグインがエラーをスローした場合は、エラーをクリアするまで再実行されないことを確認してください。
        </div>
      </div>
      <div class="bg-yellow-500 border border-orange-200 text-sm rounded-md my-4 p-4" role="alert">
        <span class="sr-only">Info</span>
        <div>
          Node
          16で実行していて、エラーページのレンダリング時にクッキーを設定する場合、以前に設定されたクッキーは上書きされます。Node
          16は2023年9月に終了予定となるため、より新しいバージョンのNodeを使用することをおすすめします。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">事例</h2>
      <ContentDoc path="error/rendering-error-page-example" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-3xl font-bold">エラーの補助メソッド</h2>
      <h3 class="text-2xl font-bold mt-4">useError</h3>
      <p>
        <code class="word-highlight text-sm"
          >function useError (): Ref&lt;Error | { url, statusCode, statusMessage, message, description, data }&gt;</code
        >
      </p>
      <p>この関数は、処理されているグローバルな Nuxt エラーを返します。</p>
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は「Docs > API > Composables >
        <NuxtLink
          to="https://nuxt.com/docs/api/composables/use-error"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Use Error</NuxtLink
        >」を参照してください。
      </p>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">createError</h3>
      <p>
        <code class="word-highlight text-sm"
          >function createError (err: { cause, data, message, name, stack, statusCode, statusMessage, fatal }):
          Error</code
        >
      </p>
      <p>
        この関数を使用して、追加のメタデータを持つエラーオブジェクトを作成できます。これは、Vue ポーションと Nitro
        ポーションの両方で使用でき、スローするために意図されています。
      </p>
      <p>もし、<code class="word-highlight text-sm">createError</code>で作成されたエラーをスローする場合：</p>
      <ul class="list-disc ml-5">
        <li>
          サーバーサイドでは、フルスクリーンのエラーページが表示され、<code class="word-highlight text-sm"
            >clearError</code
          >でクリアすることができます。
        </li>
        <li>
          クライアントサイドでは、ハンドルするために非致命的なエラーがスローされます。フルスクリーンのエラーページをトリガーする必要がある場合は、<code
            class="word-highlight text-sm"
            >fatal:true</code
          >を設定することもできます。
        </li>
      </ul>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">事例</h3>
      <ContentDoc path="error/create-error" class="markdown-body" />
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">showError</h3>
      <p>
        <code class="word-highlight text-sm"
          >function showError (err: string | Error | { statusCode, statusMessage }): Error</code
        >
      </p>
      <p>
        この関数はクライアントサイドのどのタイミングでも呼び出すことができます。また、サーバーサイドでは、ミドルウェアやプラグイン、setup()
        関数の中で直接呼び出すことができます。これにより、フルスクリーンのエラーページがトリガーされます。エラーページは
        clearError を使用してクリアすることができます。
      </p>
      <p>代わりに、throw createError() を使用することをおすすめします。</p>
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は「Docs > API > Utils >
        <NuxtLink
          to="https://nuxt.com/docs/api/utils/show-error"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Show Error</NuxtLink
        >」を参照してください。
      </p>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">clearError</h3>
      <p>
        <code class="word-highlight text-sm"
          >function clearError (options?: { redirect?: string }): Promise&lt;void&gt;</code
        >
      </p>
      <p>
        この関数は現在処理中の Nuxt
        エラーをクリアします。オプションでリダイレクト先のパスを指定することもできます（例えば、'安全な'
        ページに移動する場合など）。
      </p>
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は「Docs > API > Utils >
        <NuxtLink
          to="https://nuxt.com/docs/api/utils/clear-error"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Clear Error</NuxtLink
        >」を参照してください。
      </p>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">アプリ内でエラーをレンダリング</h3>
      <p>
        Nuxtは、<code class="word-highlight text-sm">&lt;NuxtErrorBoundary&gt;</code
        >コンポーネントも提供しており、これを使用すると、エラーページ全体を置き換えることなく、アプリ内でクライアントサイドのエラーを処理できます。
      </p>
      <p>
        このコンポーネントは、デフォルトのスロット内で発生するエラーを処理する責任があります。クライアントサイドでは、エラーをトップレベルに伝播させず、代わりに
        <code class="word-highlight text-sm">#error</code>スロットをレンダリングします。
      </p>
      <p>
        <code class="word-highlight text-sm">#error</code>スロットは、エラーをプロップとして受け取ります（<code
          class="word-highlight text-sm"
          >error = null</code
        >に設定するとデフォルトのスロットを再レンダリングします。ただし、エラーが完全に解決されていない場合、エラースロットは2回レンダリングされる可能性があるため、最初にエラーが完全に解決されていることを確認する必要があります）。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>別のルートに移動すると、エラーは自動的にクリアされます。</div>
      </div>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">Example</h3>
      <ContentDoc path="error/rendering-error-your-app-example" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細と事例は「Docs > Examples > Advanced >
        <NuxtLink
          to="https://nuxt.com/docs/examples/advanced/error-handling"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Error Handling</NuxtLink
        >」から確認することができます。
      </p>
    </section>
  </div>
</template>
