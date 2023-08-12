<script setup>
definePageMeta({
  layout: "guide",
});
</script>

<template>
  <div>
    <section>
      <h2 class="text-lg lg:text-3xl font-bold">サーバー ディレクトリ</h2>
      <p>
        Nuxtはこれらのディレクトリ内のファイルを自動的にスキャンして、APIやサーバーハンドラーをHMR（Hot Module
        Replacement）対応で登録します。
      </p>
      <ul class="list-disc">
        <li>~/server/api</li>
        <li>~/server/routes</li>
        <li>~/server/middleware</li>
      </ul>
      <p>
        各ファイルは、defineEventHandler() または
        eventHandler()（エイリアス）で定義されたデフォルトの関数をエクスポートする必要があります。
      </p>
      <p>
        ハンドラーは、直接JSONデータを返すか、Promiseを使用するか、event.node.res.end()を使ってレスポンスを送信することができます。
      </p>
      <ContentDoc path="guide/directry-stracture/server/server-directory" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>「Nitroルートハンドリングドキュメント」を参照する。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">サーバー ルート</h2>
      <p>~/server/api 内のファイルは、自動的にそのルートに/apiが前置されます。</p>
      <p>/apiの接頭辞なしでサーバールートを追加するには、~/server/routesディレクトリに配置してください。</p>
      <ContentDoc path="guide/directry-stracture/server/server-routes" class="markdown-body" />
      <p>上記の例の場合、http://localhost:3000/helloでアクセスできます。</p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>現時点では、サーバールートはページと同様の完全な動的ルートの機能をサポートしていません。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">サーバーミドルウェア</h2>
      <p>
        Nuxtは、プロジェクトのサーバーミドルウェアを作成するために、~/server/middlewareディレクトリ内のすべてのファイルを自動的に読み込みます。
      </p>
      <p>
        ミドルウェアハンドラーは、他のサーバールートの前にすべてのリクエストで実行され、ヘッダーの追加や確認、リクエストの記録、イベントのリクエストオブジェクトの拡張などが行われます。
      </p>
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        ミドルウェアハンドラーは、何も返さないで（リクエストを終了または応答しないで）、リクエストのコンテキストを検査または拡張するか、エラーをスローするだけであるべきです。
      </div>
      <ContentDoc path="guide/directry-stracture/server/server-middleware" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">サーバー プラグイン</h2>
      <p>
        Nuxtは、~/server/pluginsディレクトリ内のファイルを自動的に読み込んで、それらをNitroのプラグインとして登録します。これにより、Nitroのランタイム動作を拡張したり、ライフサイクルイベントにフックしたりすることが可能になります。
      </p>
      <ContentDoc path="guide/directry-stracture/server/server-plugins" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>「Nitroプラグイン」の詳細は、Nitroプラグインのドキュメントをお読みください。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">サーバー ユーティリティ</h2>
      <p>サーバールートは、便利なヘルパーを備えたunjs/h3によって動作します。</p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>「利用可能なH3リクエストヘルパー」については、こちらをご覧ください。</div>
      </div>
      <p>~/server/utilsディレクトリ内に自分でさらなるヘルパーを追加することができます。</p>
      <p>
        例えば、カスタムのハンドラーユーティリティを定義することができます。このユーティリティは元のハンドラーを包み込み、最終的な応答を返す前に追加の操作を実行します。
      </p>
      <ContentDoc path="guide/directry-stracture/server/server-utilities" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">サーバー タイプ</h2>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200 mt-5"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>この機能は、Nuxtのバージョンが3.5以上で利用可能です。</div>
      </div>
      <p>
        IDE内で'nitro'と'vue'からの自動インポートの区別を明確にするために、以下の内容で~/server/tsconfig.jsonを追加することができます。
      </p>
      <ContentDoc path="guide/directry-stracture/server/server-types" class="markdown-body" />
      <p>
        現時点では、これらの値は型チェック（nuxi
        typecheck）時には尊重されませんが、IDE内でより良い型ヒントを取得できるはずです。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">使用例</h2>
      <h3 class="text-lg lg:text-2xl font-bold my-4">マッチングのルートパラメタ</h3>
      <p>
        サーバールートでは、ファイル名内のブラケット内に動的なパラメーターを使用することができます。例えば、/api/hello/[name].tsのように、これらのパラメーターはevent.context.paramsを介してアクセスできます。
      </p>
      <p>例:</p>
      <ContentDoc path="guide/directry-stracture/server/matching-route-parameters" class="markdown-body" />
      <p>
        これにより、await $fetch('/api/hello/nuxt')を使ってこのAPIを汎用的に呼び出し、「Hello, nuxt!」を取得できます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">HTTPメソッドのマッチング</h2>
      <p>
        ハンドルファイル名は、.get、.post、.put、.deleteなどの接尾辞を付けることで、リクエストのHTTPメソッドに一致させることができます。
      </p>
      <ContentDoc path="guide/directry-stracture/server/matching-http-method" class="markdown-body" />
      <p>上記の例を考えると、/testを以下のようにフェッチします：</p>
      <ul class="list-disc">
        <li>GETメソッド：Testのgetハンドラーを返します。</li>
        <li>POSTメソッド：Testのpostハンドラーを返します。</li>
        <li>他のどんなメソッドでも、405エラーを返します。</li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">キャッチオール ルート</h2>
      <p>
        キャッチオールルートは、フォールバックルートの処理に役立ちます。例えば、~/server/api/foo/[...].tsというファイルを作成すると、/api/foo/bar/bazなど、いずれのルートハンドラーにも一致しないすべてのリクエストに対してキャッチオールルートが登録されます。
      </p>
      <ContentDoc path="guide/directry-stracture/server/catch-all-route" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">リクエストのボディ処理</h2>
      <ContentDoc path="guide/directry-stracture/server/handling-requests-with-body" class="markdown-body" />
      <p>
        これにより、$fetch('/api/submit', { method: 'post', body: { test: 123 }
        })を使ってこのAPIを汎用的に呼び出すことができます。
      </p>
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        submit.post.tsというファイル名を使用するのは、リクエストボディを受け入れることができるPOSTメソッドに一致するためです。GETリクエスト内でreadBodyを使用すると、readBodyは405
        Method Not Allowed HTTPエラーをスローします。
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">クエリパラメーターを使ったリクエスト処理</h2>
      <p>サンプルクエリ /api/query?param1=a&amp;param2=b</p>
      <ContentDoc
        path="guide/directry-stracture/server/handling-requests-with-query-parameters"
        class="markdown-body"
      />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">エラー処理</h2>
      <p>
        エラーが発生しない場合、ステータスコードとして200 OKが返されます。未処理のエラーがある場合は、500 Internal
        Server Error HTTPエラーが返されます。
      </p>
      <p>他のエラーコードを返す場合は、createErrorで例外をスローしてください。</p>
      <ContentDoc path="guide/directry-stracture/server/error-handling" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">他のステータスコードを返す</h2>
      <p>他のステータスコードを返すためには、setResponseStatusユーティリティを使用できます。</p>
      <p>例えば、202 Acceptedを返す場合、以下のようになります</p>
      <ContentDoc path="guide/directry-stracture/server/returning-other-status-codes" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ランタイム構成へのアクセス</h2>
      <ContentDoc path="guide/directry-stracture/server/accessing-runtime-config" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">リクエストクッキーへのアクセス</h2>
      <ContentDoc path="guide/directry-stracture/server/accessing-request-cookies" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">高度な使用例</h2>
      <h3 class="text-lg lg:text-2xl font-bold my-5">Nitroの設定</h3>
      <p>nuxt.configでnitroキーを使用することで、Nitroの設定を直接設定することができます。</p>
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        これは高度なオプションです。カスタム構成は本番デプロイに影響を与える可能性があります。なぜなら、NitroがNuxtのセマンティックバージョンのマイナーバージョンでアップグレードされると、構成インターフェースが変更されることがあるからです。
      </div>
      <ContentDoc path="guide/directry-stracture/server/nitro-configuration" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ネストされたルーターの使用</h2>
      <ContentDoc path="guide/directry-stracture/server/using-a-nested-router" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ストリームの送信（実験的）</h2>
      <p>注意: これは実験的な機能であり、Node.js環境内でのみ利用可能です。</p>
      <ContentDoc path="guide/directry-stracture/server/sending-streams" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">リダイレクトの送信</h2>
      <ContentDoc path="guide/directry-stracture/server/sending-redirect" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">レガシーハンドラーまたはミドルウェアの返却</h2>
      <ContentDoc path="guide/directry-stracture/server/return-a-legacy-handler-or-middleware" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">サーバーストレージ</h2>
      <p>
        Nitroはクロスプラットフォームのストレージレイヤーを提供しています。追加のストレージマウントポイントを構成するには、nitro.storageまたはサーバープラグインを使用することができます。
      </p>
      <h3 class="text-lg lg:text-2xl font-bold my-5">例：Redisの使用</h3>
      <ContentDoc path="guide/directry-stracture/server/server-storage" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>「ドキュメント > ガイド > ディレクトリ構造 > サーバー」を参照してください。</div>
      </div>
    </section>
  </div>
</template>
