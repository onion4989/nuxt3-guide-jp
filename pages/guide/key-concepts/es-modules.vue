<script setup>
definePageMeta({
  layout: "guide",
});
</script>

<template>
  <div>
    <section>
      <h2 class="text-lg lg:text-3xl font-bold">ESモジュール</h2>
      <p>
        このガイドは、ESモジュールとは何か、またNuxtアプリ（またはアップストリームライブラリ）をESモジュールと互換性があるようにする方法について説明します。
      </p>
    </section>

    <section>
      <h2 class="text-3xl font-bold">バックグラウンド</h2>
      <h3 class="text-lg lg:text-2xl font-bold pt-4">CommonJS モジュール</h3>
      <p>
        CommonJS
        (CJS)は、Node.jsによって導入されたフォーマットであり、孤立したJavaScriptモジュール間で機能を共有することを可能にします（詳細はこちらを参照）。おそらくこの構文には既におなじみかもしれません：
      </p>
      <ContentDoc path="guide/keyconcept/es-modules/common-js-modules" class="markdown-body"/>
      <p>
        WebpackやRollupなどのバンドラーは、この構文をサポートしており、CommonJSで書かれたモジュールをブラウザで使用することができます。
      </p>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">ESMシンタックス</h3>
      <p>
        ほとんどの場合、ESM（ECMAScript
        Modules）とCJS（CommonJS）について話す際は、異なるモジュール記述の構文について言及しています。
      </p>
      <ContentDoc path="guide/keyconcept/es-modules/esm-syntax" class="markdown-body"/>
      <p>
        ECMAScript
        Modules（ESM）が標準となる前（それには10年以上かかりました！）、webpackなどのツールやTypeScriptなどの言語は、いわゆるESM構文をサポートし始めました。しかし、実際の仕様といくつかの重要な違いがあります。詳細な説明はこちらを参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-3xl font-bold">ネイティブESMとは？</h2>
      <p>
        長い間、ESM構文を使用してアプリを書いているかもしれません。なぜなら、ブラウザでネイティブにサポートされており、またNuxt
        2では書いたコードを適切な形式にコンパイルしています（サーバー向けにはCJS、ブラウザ向けにはESM）。
      </p>
      <p>
        モジュールをパッケージにインストールする場合、事情は少し異なります。サンプルライブラリの場合、CJSとESMの両方のバージョンを公開し、どちらを選択するかを選ぶことができます。
      </p>
      <ContentDoc path="guide/keyconcept/es-modules/native-esm" class="markdown-body"/>
      <p>
        そうです、Nuxt
        2では、バンドラー（webpack）はサーバービルドにCJSファイル（'main'）を取り込み、クライアントビルドにはESMファイル（'module'）を使用します。
      </p>
      <p>
        最近のNode.jsのLTSリリースでは、ネイティブESMモジュールをNode.js内で使用することが可能になりました。つまり、Node.js自体がESM構文を使ってJavaScriptを処理できるようになりましたが、デフォルトではそのように動作しません。ESM構文を有効にする最も一般的な方法は2つあります：
      </p>
      <ul class="list-disc">
        <li>package.json内で"type:module"を設定し、ESMファイルの拡張子として.jsを引き続き使用します。</li>
        <li>.mjsファイル拡張子を使用することもできます（推奨）。</li>
      </ul>
      <p>
        Nuxt
        Nitroでは、.output/server/index.mjsファイルを出力します。これにより、Node.jsはこのファイルをネイティブのESモジュールとして扱うようになります。
      </p>
    </section>

    <section>
      <h2 class="text-3xl font-bold">Node.jsのコンテキストで有効なインポートは何ですか？</h2>
      <p>
        モジュールをrequireではなくimportでインポートする場合、Node.jsは異なる方法でそれを解決します。例えば、sample-libraryをimportする場合、Node.jsはそのライブラリのpackage.json内のexportsまたはmoduleエントリーを参照します。
      </p>
      <p>動的インポート（const b = await import('sample-library')のような）についても同様です。</p>
      <p>Nodeは次の種類のインポートをサポートしています（ドキュメントを参照）：</p>
      <ul class="list-decimal">
        <li>.mjsで終わるファイル - これらはESM構文を使用することが期待されています。</li>
        <li>.cjsで終わるファイル - これらはCJS構文を使用することが期待されています。</li>
        <li>
          .jsで終わるファイル - これらは、package.jsonに"type":
          "module"が設定されていない限り、CJS構文を使用することが期待されています。ただし、"type":
          "module"が設定されている場合はESM構文を使用します。
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-3xl font-bold">どのような問題が発生する可能性がありますか？</h2>
      <p>
        長い間、モジュールの作成者はESM構文のビルドを生成してきましたが、.esm.jsや.es.jsなどの規約を使用して、これらをpackage.jsonのmoduleフィールドに追加していました。これまで、これらのファイル拡張子は特に問題にならなかったのは、webpackなどのバンドラーが使用しており、ファイル拡張子に特別な関心を持っていないためです。
      </p>
      <p>
        しかし、Node.jsのESMコンテキストで.esm.jsファイルを持つパッケージをインポートしようとすると、うまく動作せず、次のようなエラーが発生します：
      </p>
      <ContentDoc path="guide/keyconcept/es-modules/esm-error" class="markdown-body"/>
      <p>
        もしNode.jsがESM構文としてではなくCJSと認識してしまったESM構文ビルドからの名前付きインポートを行うと、同様のエラーが発生することがあります。
      </p>
      <ContentDoc path="guide/keyconcept/es-modules/cjs" class="markdown-body"/>
    </section>

    <section>
      <h2 class="text-3xl font-bold">ESMのトラブルシューティング</h2>
      <p>
        もし上記のようなエラーが発生した場合、問題はほとんど確実にアップストリームのライブラリにあります。そのライブラリをNodeでのインポートに対応するように修正する必要があります。
      </p>
    </section>

    <section>
      <h2 class="text-3xl font-bold">ライブラリのトランスパイル</h2>
      <p>
        その間、これらのライブラリをNuxtがインポートしようとしないように、build.transpileにそれらを追加することで指定できます。
      </p>
      <ContentDoc path="guide/keyconcept/es-modules/transpile" class="markdown-body"/>
      <p>はい、これらのライブラリによってインポートされている他のパッケージも追加する必要があるかもしれません。</p>
    </section>

    <section>
      <h2 class="text-3xl font-bold">ライブラリのエイリアス化</h2>
      <p>場合によっては、ライブラリをCJSバージョンに手動でエイリアスする必要があるかもしれません。例えば：</p>
      <ContentDoc path="guide/keyconcept/es-modules/alias" class="markdown-body"/>
    </section>

    <section>
      <h2 class="text-3xl font-bold">デフォルトエクスポート</h2>
      <p>
        CommonJS形式の依存関係は、module.exportsまたはexportsを使用してデフォルトエクスポートを提供することができます。
      </p>
      <ContentDoc path="guide/keyconcept/es-modules/module-exports-1" class="markdown-body"/>
      <p>通常、このような依存関係をrequireする場合はうまく動作します。</p>
      <ContentDoc path="guide/keyconcept/es-modules/require-2" class="markdown-body"/>
      <p>
        Node.jsのネイティブESMモード、esModuleInteropを有効にしたTypeScript、およびWebpackなどのバンドラーは、「interop
        require
        default」としてよく知られる互換性メカニズムを提供し、このようなライブラリをデフォルトでインポートできるようにしています。
      </p>
      <ContentDoc path="guide/keyconcept/es-modules/cjs-pkg-3" class="markdown-body"/>
      <p>
        しかし、構文の検出と異なるバンドル形式の複雑さのため、常にinterop
        defaultが失敗する可能性があり、次のような問題に直面することがあります：
      </p>
      <ContentDoc path="guide/keyconcept/es-modules/cjs-pkg-3" class="markdown-body"/>
      <p>動的インポート構文を使用する場合（CJSとESMの両方のファイルで）、常にこのような状況に直面します。</p>
      <ContentDoc path="guide/keyconcept/es-modules/cjs-pkg-in-both-4" class="markdown-body"/>
      <p>この場合、デフォルトエクスポートを手動でInteropする必要があります。</p>
      <ContentDoc path="guide/keyconcept/es-modules/cjs-pkg-default-export-5" class="markdown-body"/>
      <p>
        より複雑な状況を処理し、より安全に対応するために、Nuxt
        3ではmllyを推奨しており、内部で使用しています。mllyは名前付きエクスポートを保持することができます。
      </p>
      <ContentDoc path="guide/keyconcept/es-modules/mlly-6" class="markdown-body"/>
    </section>

    <section>
      <h2 class="text-3xl font-bold">ライブラリ作成者ガイド</h2>
      <p>良いニュースは、ESMの互換性の問題を修正するのは比較的簡単だということです。主なオプションは2つあります：</p>
      <ul class="list-decimal">
        <li>
          ESMファイルの拡張子を.mjsで終わるようにリネームできる
          <div>
            これは推奨されている最も簡単なアプローチです。ライブラリの依存関係やビルドシステムの問題を整理する必要があるかもしれませんが、ほとんどの場合、これで問題が解決するでしょう。また、CJSファイルの拡張子も.cjsで終わるようにリネームすることを推奨します。これにより、最も明確な表現になります。
          </div>
        </li>
        <li>
          ライブラリ全体をESMのみにすることも選択肢としてあります。
          <div>
            その場合、package.jsonに"type":
            "module"を設定し、ビルドされたライブラリがESM構文を使用するようにする必要があります。ただし、依存関係に問題が発生する可能性があります。また、このアプローチではライブラリはESMコンテキストでのみ利用可能になります。
          </div>
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-3xl font-bold">移行</h2>
      <p>CJSからESMへの最初のステップは、requireの使用をimportに更新することです。</p>
      <ContentDoc path="guide/keyconcept/es-modules/migration-before-after-1" class="markdown-body"/>
      <ContentDoc path="guide/keyconcept/es-modules/migration-mylib-before-after-2" class="markdown-body"/>
      <p>
        ESMモジュールでは、CJSとは異なり、require、require.resolve、__filename、__dirnameのグローバル変数は使用できず、代わりにimport()とimport.meta.filenameに置き換える必要があります。
      </p>
      <ContentDoc path="guide/keyconcept/es-modules/esm-module-3" class="markdown-body"/>
      <ContentDoc path="guide/keyconcept/es-modules/esm-module-4" class="markdown-body"/>
    </section>

    <section>
      <h2 class="text-3xl font-bold">ベストプラクティス</h2>
      <ul class="list-disc">
        <li>
          デフォルトエクスポートよりも名前付きエクスポートを優先してください。これにより、CJSの競合が減少します。（デフォルトエクスポートのセクションを参照してください）
        </li>
        <li>
          できる限り、Node.jsのビルトインやCommonJS、Node.js専用の依存関係に依存しないようにしてください。これにより、Nitroのポリフィルを必要とせずに、ライブラリをブラウザやEdge
          Workersで使用できるようになります。
        </li>
        <li>
          新しいexportsフィールドを使用して条件付きエクスポートを行ってください。（<NuxtLink
            to="https://nodejs.org/api/packages.html#conditional-exports"
            about="_blank"
            >詳細はこちらを参照</NuxtLink
          >）
        </li>
      </ul>
      <ContentDoc path="guide/keyconcept/es-modules/best-practices" class="markdown-body"/>
    </section>
  </div>
</template>
