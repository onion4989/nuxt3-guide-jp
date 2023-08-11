<script setup>
definePageMeta({
  layout: "guide",
});
</script>

<template>
  <div>
    <section>
      <h2 class="text-lg lg:text-3xl font-bold">サーバーエンジン</h2>
      <p>Nuxt 3は新しいサーバーエンジンであるNitroによって動作しています。</p>
      <ul class="list-disc">
        <li>Node.js、ブラウザ、サービスワーカーなど、さまざまなプラットフォームに対応しています。</li>
        <li>サーバーレスのサポートもデフォルトで提供されています。</li>
        <li>APIルートサポート。</li>
        <li>自動的なコード分割と非同期読み込みされるチャンクに対応しています。</li>
        <li>
          静的サイトとサーバーレスサイトのハイブリッドモードに対応しています。これにより、静的な部分と動的な部分を組み合わせたウェブサイトを構築することができます。
        </li>
        <li>
          ホットモジュールリローディングを備えた開発用サーバーが提供されています。これにより、コードの変更を即座に反映させながら開発を行うことができます。
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">APIレイヤー</h2>
      <p>Nitroによって追加されるサーバーのAPIエンドポイントとミドルウェアは、内部的にh3を使用しています。</p>
      <p>主な特徴には次のようなものがあります：</p>

      <ul class="list-desc">
        <li>
          ハンドラ（処理が発生した時にプログラム処理を中断して要求に応じて呼び出されるプログラム）は、自動的に処理されるJSONレスポンスのために直接オブジェクト/配列を返すことができます。
        </li>
        <li>
          ハンドラは、プロミスを返すことができます。返されたプロミスは待機されます（res.end()とnext()もサポートされています）。
        </li>
        <li>ボディの解析、クッキーの処理、リダイレクト、ヘッダーなどのためのヘルパー関数が用意されています。</li>
      </ul>

      <p>詳細はh3のドキュメントを参照してください。</p>

      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>サーバー/ディレクトリ内のAPIレイヤーについては、Vueのドキュメントを参照してください。</div>
      </div>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">直接的なAPI呼び出し</h3>
      <p>
        Nitroでは、グローバルに利用可能な$fetchヘルパーを介してルートを「直接」呼び出すことができます。これにより、ブラウザ上で実行される場合はサーバーに対してAPI呼び出しが行われますが、サーバー上で実行される場合は関連する関数が直接呼び出され、追加のAPI呼び出しが省略されます。
      </p>
      <p>$fetch APIはofetchを使用しており、主な特徴は次のとおりです：</p>
      <ul class="list-disc">
        <li>
          JSONレスポンスの自動的なパース（必要に応じて生のレスポンスへのアクセスも可能）
          <div class="text-sm">※パースとはデータを解析し、データの構造の集合体に変換すること</div>
        </li>
        <li>リクエストボディとパラメーターは自動的に処理され、適切なContent-Typeヘッダーが設定されます。</li>
      </ul>
      <p>$fetchの詳細な機能については、ofetchを確認してください。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">型付きのAPIルート</h2>
      <p>
        APIルート（またはミドルウェア）を使用する際、Nitroは、レスポンスを送信するためにres.end()を使用する代わりに値を返す場合に、これらのルートのために型情報を自動生成します。
      </p>
      <p>$fetch()やuseFetch()を使用する際に、これらの型情報にアクセスすることができます。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">スタンドアロンサーバー</h2>
      <p>Nitroは、node_modulesに依存しない独立したスタンドアロンサーバーのディストリビューションを生成します。</p>
      <p>
        Nuxt 2のサーバーはスタンドアロンではなく、nuxt
        start（nuxt-startまたはnuxtディストリビューションを使用）を実行するか、カスタムのプログラムで使用する必要があります。これは脆弱で故障しやすく、サーバーレスやサービスワーカーの環境には適していません。
      </p>
      <p>
        Nuxt 3では、nuxt
        buildコマンドを使用して.outputディレクトリにビルドすると、このようなディストリビューションが生成されます。
      </p>
      <p>
        Nuxt
        3の出力には、実験的なブラウザサービスワーカーを含むあらゆる環境でNuxtサーバーを実行し、静的ファイルを提供するためのランタイムコードが含まれており、これによりJAMstack向けの真のハイブリッドフレームワークになっています。さらに、Nuxtはネイティブのストレージレイヤーを実装しており、複数のソースドライバーやローカルアセットをサポートしています。
      </p>

      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>NitroエンジンをGitHubでチェックしてください：unjs/nitro.</div>
      </div>
    </section>
  </div>
</template>
