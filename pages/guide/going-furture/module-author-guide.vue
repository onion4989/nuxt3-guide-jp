<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">モジュール作成者ガイド</h1>
      <p>Nuxt アプリケーションを統合、強化、拡張するための Nuxt モジュールを作成する方法を学びます。</p>
      <p>
        Nuxt の設定およびフック システムにより、Nuxt のあらゆる側面をカスタマイズし、必要な統合 (Vue
        プラグイン、CMS、サーバー ルート、コンポーネント、ロギングなど) を追加することができます。
      </p>
      <p>
        Nuxt モジュールは、nuxi dev を使用して開発モードで Nuxt を起動するとき、または nuxi build
        で本番用のプロジェクトをビルドするときに順次実行される関数です。
        モジュールを使用すると、プロジェクトに不要なボイラープレートを追加したり、Nuxt
        自体に変更を加えたりすることなく、カスタム ソリューションをカプセル化し、適切にテストし、npm
        パッケージとして共有できます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">クイックスタート</h2>
      <p>スターター テンプレートを使用して Nuxt モジュールの使用を開始することをお勧めします。</p>
      <p>例:</p>
      <ContentDoc path="guide/going-furture/module-author-guide/quick-start" class="markdown-body" />
      <p>
        これにより、モジュールの開発と公開に必要なすべてのボイラープレートを含む my-module プロジェクトが作成されます。
      </p>
      <p>次のステップ:</p>
      <ul class="list-decimal">
        <li>選択した IDE で my-module を開きます。</li>
        <li>お気に入りのパッケージ マネージャーを使用して依存関係をインストールする。</li>
        <li>npm run dev:prepare を使用して開発用のローカル ファイルを準備する。</li>
        <li>Nuxt モジュールの詳細については、このドキュメントに従ってください。</li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">スターターの使用方法</h2>
      <p>モジュール スターターを使用して基本的なタスクを実行する方法を学びます。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">開発方法</h2>
      <p>
        モジュールのソース コードは src ディレクトリ内に存在しますが、ほとんどの場合、モジュールを開発するには、 Nuxt
        アプリケーション。 それがプレイグラウンドディレクトリの目的です。
        これは、モジュールで実行するようにすでに設定されている、いじることができる Nuxt アプリケーションです。
      </p>
      <p>他の Nuxt アプリケーションと同様に、プレイグラウンドを操作できます。</p>
      <ul class="list-disc">
        <li>
          npm run dev を使用して開発サーバーを起動します。src
          ディレクトリ内のモジュールに変更を加えると、開発サーバー自体がリロードされます。
        </li>
        <li>npm run dev:build でビルドします。</li>
      </ul>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          他のすべての nuxi コマンドは、プレイグラウンド ディレクトリに対して使用できます (例: nuxi &lt;COMMAND&gt;
          playground)。 便宜上、package.json 内で追加の dev:* スクリプトを参照して自由に宣言してください。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">テスト方法</h2>
      <p>モジュール スターターには、基本的なテスト スイートが付属しています。</p>
      <ul class="list-disc">
        <li>ESLint : npm run lint で実行します。</li>
        <li>Vitest : npm run test または npm run test:watch で実行します。</li>
      </ul>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>ニーズに合わせて、このデフォルトのテスト戦略を自由に拡張してください。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">構築方法</h2>
      <p>
        Nuxt モジュールには、@nuxt/module-builder によって提供される独自のビルダーが付属しています。
        このビルダーには何も必要ありませんTypeScriptをサポートし、他のNuxtアプリケーションに配布できるようにアセットが適切にバンドルされていることを確認します。
      </p>
      <p>npm run prepack を実行してモジュールをビルドできます。</p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          モジュールのビルドが役立つ場合もありますが、ほとんどの場合、自分でモジュールをビルドする必要はありません。開発中はプレイグラウンドが処理し、公開時にはリリース
          スクリプトもサポートします。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">公開の方法</h2>
      <div class="bg-orange-50 border border-orange-200 text-sm rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        モジュールを npm に公開する前に、npmjs.com アカウントを持っていること、および npm
        ログインを使用してローカルで認証されていることを確認してください。
      </div>
      <p>
        バージョンを上げて npm pub コマンドを使用することでモジュールを公開できますが、モジュール スターター リリース
        スクリプトが付属しており、モジュールの動作バージョンを npm などに確実に公開するのに役立ちます。
      </p>
      <p>
        リリース スクリプトを使用するには、まずすべての変更をコミットします (従来のコミットに従って、 自動バージョン
        バンプと変更ログ更新を利用して)、npm run release でリリース スクリプトを実行します。
      </p>
      <p>リリース スクリプトを実行すると、次のことが起こります:</p>
      <ul class="list-disc">
        <li>まず、次の方法でテスト スイートを実行します:</li>
        <li>
          <ul>
            <li>リンターの実行 (npm run lint)</li>
            <li>単体テスト、統合テスト、および e2e テストの実行 (npm 実行テスト)</li>
            <li>モジュールのビルド (npm run prepack)</li>
          </ul>
        </li>
        <li>その後、テスト スイートがうまくいった場合は、モジュールの公開が続行されます。</li>
        <li>
          <ul>
            <li>従来のコミットに従ってモジュールのバージョンを上げ、変更ログを生成する</li>
            <li>
              モジュールを npm に公開します
              (そのために、モジュールは再度ビルドされ、更新されたバージョン番号が公開されたアーティファクトで確実に考慮されます)
            </li>
            <li>新しく公開されたバージョンを表すgitタグをgitリモートのoriginにプッシュする</li>
          </ul>
        </li>
      </ul>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          他のスクリプトと同様に、必要に応じて package.json 内のデフォルトのリリース
          スクリプトを自由に微調整してください。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">モジュールの開発</h2>
      <p>
        Nuxt モジュールには、さまざまな強力な API とパターンが付属しており、可能な限りあらゆる方法で Nuxt
        アプリケーションを変更できます。 このセクションでは、それらを活用する方法を説明します。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">モジュールの構造</h2>
      <p>2 種類の Nuxt モジュールが考えられます:</p>
      <ul class="list-disc">
        <li>
          公開されたモジュールは npm で配布されます。Nuxt Web サイトでいくつかのコミュニティ
          モジュールのリストを確認できます。
        </li>
        <li>
          「ローカル」モジュール。それらは Nuxt プロジェクト自体内に存在し、Nuxt 設定にインライン化されるか、モジュール
          ディレクトリの一部として存在します。
        </li>
      </ul>
      <p>どちらの場合でも、それらの解剖学的構造は似ています。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">モジュール定義</h2>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>スターターを使用する場合、モジュール定義は src/module.ts で入手できます。</div>
      </div>
      <p>
        モジュール定義は、モジュールのエントリ ポイントです。 これは、モジュールが Nuxt 設定内で参照されるときに Nuxt
        によってロードされるものです。
      </p>
      <p>
        低レベルでは、Nuxtモジュールの定義は、インラインのユーザーオプションとnuxtオブジェクトを受け取る、シンプルで潜在的に非同期な関数です。この関数はNuxtと対話するために使用されます。
      </p>
      <ContentDoc path="guide/going-furture/module-author-guide/1.module-definition" class="markdown-body" />
      <ul class="list-disc">
        <li>モジュールオプションを自動的にマージするためのデフォルトとmeta.configKeyをサポート</li>
        <li>型ヒントと自動型推論</li>
        <li>基本的な Nuxt 2 互換性のためにシムを追加する</li>
        <li>
          meta.name または meta.configKey から計算された一意のキーを使用してモジュールが 1
          回だけインストールされるようにする
        </li>
        <li>Nuxt フックを自動的に登録する</li>
        <li>モジュールメタに基づいて互換性の問題を自動的にチェックします</li>
        <li>Nuxt の内部使用のために getOptions と getMeta を公開する</li>
        <li>
          モジュールが最新のdefineNuxtModuleを使用している限り、下位互換性と上位互換性を確保します。@nuxt/kitのバージョン
        </li>
        <li>モジュールビルダーツールとの統合</li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ランタイム ディレクトリ</h2>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>スターターを使用する場合、ランタイム ディレクトリは src/runtime で利用できます。</div>
      </div>
      <p>
        モジュールは、Nuxt 構成内のすべてのものと同様、アプリケーション ランタイムには含まれません。
        ただし、モジュールがインストールされているアプリケーションにランタイムコードを提供したり、モジュールを挿入したりすることが必要になる場合があります。
        それが、ランタイム ディレクトリによって可能になります。
      </p>
      <p>ランタイム ディレクトリ内では、Nuxt アプリに関連するあらゆる種類のアセットを提供できます:</p>
      <ul class="list-disc">
        <li>Vue components</li>
        <li>Composables</li>
        <li>Nuxt plugins</li>
      </ul>
      <p>サーバー エンジン Nitro に対して:</p>
      <ul class="list-disc">
        <li>API routes</li>
        <li>Middlewares</li>
        <li>Nitro plugins</li>
      </ul>
      <p>または、ユーザーの Nuxt アプリケーションに挿入したいその他の種類のアセット:</p>
      <ul class="list-disc">
        <li>Stylesheets</li>
        <li>3D models</li>
        <li>Images</li>
        <li>etc.</li>
      </ul>
      <p>その後、モジュール定義からアプリケーション内にこれらすべてのアセットを挿入できるようになります。</p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>アセットインジェクションの詳細については、「レシピ」セクションをご覧ください。</div>
      </div>
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        <p>
          公開されたモジュールは、ランタイム
          ディレクトリ内のアセットの自動インポートを利用できません。代わりに、#imports
          などから明示的にインポートする必要があります。
        </p>
        <p>
          実際、自動インポートは、パフォーマンス上の理由から、node_modules (公開されたモジュールが保存される場所)
          内のファイルに対しては有効になっていません。 最終的にはライブになります。 そのため、モジュール
          スターターはモジュールの開発中に意図的にそれらを無効にします。
        </p>
        <p>モジュール スターターを使用している場合、プレイグラウンドでも自動インポートは有効になりません。</p>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ツール</h2>
      <p>モジュールには、開発に役立つ一連のファーストパーティ ツールが付属しています。</p>

      <h3 class="font-bold">@nuxt/module-builder</h3>
      <div>
        Nuxt Module Builder は、モジュールを構築して出荷するためのすべての面倒な作業を引き受ける、ゼロ構成のビルド
        ツールです。これにより、モジュール ビルド アーティファクトと
        Nuxtアプリケーションとの適切な互換性が保証されます。
      </div>

      <h3 class="font-bold">@nuxt/kit</h3>
      <div>
        Nuxt Kit は、モジュールが Nuxt アプリケーションと対話するのに役立つコンポーザブル ユーティリティを提供します。
        モジュールの互換性とコードの可読性を高めるために、可能な限り手動ではなくNuxt
        Kitユーティリティを使用することをお勧めします。
      </div>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>詳細は、API > Advanced > Kit. を参照してください。</div>
      </div>

      <h3 class="font-bold">@nuxt/test-utils</h3>
      <div>
        Nuxt Test Utils は、モジュール テスト内で Nuxt
        アプリケーションをセットアップして実行するのに役立つユーティリティのコレクションです。
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-bold">レシピ</h2>
      <p>モジュールの作成に使用される一般的なレシピはこちらでお探しください。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Nuxt 構成の変更</h2>
      <p>
        Nuxt
        設定はモジュールによって読み取ったり、変更したりできます。以下は、実験的な機能を有効にするモジュールの例です。
      </p>
      <ContentDoc path="guide/going-furture/module-author-guide/2.altering-nuxt-configuration" class="markdown-body" />
      <p>より複雑な構成変更を処理する必要がある場合は、defuの使用を検討してください。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ランタイムへのオプションの公開</h2>
      <p>
        モジュールはアプリケーション ランタイムの一部ではないため、そのオプションも同様ではありません。
        ただし、多くの場合、ランタイムコード内でこれらのモジュールオプションの一部にアクセスする必要がある場合があります。NuxtのruntimeConfigを使用して必要な構成を公開することをお勧めします。
      </p>
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        プライベート API キーなどの機密モジュール構成はパブリック バンドルに含まれるため、パブリック
        ランタイム構成で公開しないように注意してください。
      </div>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>詳細は、Guide > Going Further > Runtime Config を参照ください。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">addPlugin を使用したプラグインの挿入</h2>
      <p>
        プラグインは、モジュールにランタイム ロジックを追加する一般的な方法です。
        addPluginユーティリティを使用して、モジュールからそれらを登録できます。
      </p>
      <ContentDoc
        path="guide/going-furture/module-author-guide/3.injecting-plugins-with-addplugin"
        class="markdown-body"
      />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>詳細は、API > Advanced > Kit. を参照してください。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">addComponent による Vueコンポーネントの挿入</h2>
      <p>
        モジュールがVueコンポーネントを提供する必要がある場合は、addComponentユーティリティを使用して、それらを
        Nuxtが解決する自動インポートとして追加できます。
      </p>
      <ContentDoc
        path="guide/going-furture/module-author-guide/4.injecting-vue-components-with-addcomponent"
        class="markdown-body"
      />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">addImports および addImportsDir を使用したコンポーザブルの挿入</h2>
      <p>
        モジュールがコンポーザブルを提供する必要がある場合は、addImports ユーティリティを使用して、それらを Nuxt
        の自動インポートとして追加して解決できます。
      </p>
      <ContentDoc
        path="guide/going-furture/module-author-guide/5.injecting-composables-with-addimports-and-add0mportsdir"
        class="markdown-body"
      />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">他のアセットの挿入</h2>
      <p>
        モジュールが他の種類のアセットを提供する必要がある場合は、それらを注入することもできます。 これは、Nuxt の css
        配列を通じてスタイルシートを挿入する簡単なモジュールの例です。
      </p>
      <ContentDoc path="guide/going-furture/module-author-guide/6.injecting-other-assets" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">モジュール内で他のモジュールを使用する</h2>
      <p>
        モジュールが他のモジュールに依存している場合は、Nuxt Kit の installModule
        ユーティリティを使用してモジュールを追加できます。たとえば、モジュールで Nuxt
        Tailwindを使用したい場合は、以下のように追加できます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">フックの使用</h2>
      <p>
        ライフサイクルフックを使用すると、Nuxt のほぼすべての側面を拡張できます。
        モジュールはプログラム的に、または定義内のフック マップを通じてモジュールにフックできます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">テンプレート / 仮想ファイルの追加</h2>
      <p>
        ユーザーのアプリにインポートできる仮想ファイルを追加する必要がある場合は、addTemplate
        ユーティリティを使用できます。
      </p>
      <ContentDoc
        path="guide/going-furture/module-author-guide/7.adding-templates-virtual-files"
        class="markdown-body"
      />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">型宣言の追加</h2>
      <p>
        ユーザーのプロジェクトに型宣言を追加することもできます (たとえば、Nuxt
        インターフェイスを拡張したり、独自のグローバル型を提供したりするため)。 このために、Nuxt
        は、テンプレートをディスクに書き込み、生成された nuxt.d.ts ファイルにテンプレートへの参照を追加する
        addTypeTemplate ユーティリティを提供します。
      </p>
      <p>
        モジュールが Nuxt によって処理される型を拡張する必要がある場合は、addTypeTemplate
        を使用してこの操作を実行できます:
      </p>
      <ContentDoc path="guide/going-furture/module-author-guide/8.adding-type-declarations" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">テンプレートの更新</h2>
      <p>
        テンプレート/仮想ファイルを更新する必要がある場合は、次のように updateTemplates ユーティリティを利用できます:
      </p>
      <ContentDoc path="guide/going-furture/module-author-guide/9.updating-templates" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">テスト</h2>
      <p>
        テストは、さまざまな設定を考慮してモジュールが期待どおりに動作することを確認するのに役立ちます。
        このセクションでは、モジュールに対してさまざまな種類のテストを実行する方法を説明します。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ユニットと統合</h2>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          <p>
            私たちは、Nuxtモジュールでの単体テストと統合テストを容易にする方法について、引き続き議論し、模索しています。
          </p>
          <p>会話に参加するには、このRFCを確認してください。</p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">エンドツーエンド</h2>
      <p>
        Nuxt Test Utils は、エンドツーエンドの方法でモジュールをテストするのに役立つ頼りになるライブラリです。
        これを採用するワークフローは次のとおりです:
      </p>
      <ul class="list-decimal">
        <li>test/fixtures/* 内で「フィクスチャ」として使用する Nuxt アプリケーションを作成します。</li>
        <li>テストファイル内でこのフィクスチャを使用して Nuxt をセットアップします</li>
        <li>I@nuxt/test-utils のユーティリティを使用してフィクスチャと対話します (ページのフェッチなど)</li>
        <li>このフィクスチャに関連するチェックを実行します (例: 「HTML には ... が含まれています」)</li>
        <li>リピート</li>
      </ul>
      <p>実際には、フィクスチャは次のようになります:</p>
      <ContentDoc path="guide/going-furture/module-author-guide/10.end-to-end" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>このようなワークフローの例は、モジュール スターターで入手できます。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Playground および外部でのマニュアルQA</h2>
      <p>
        開発時にモジュールをテストするためのプレイグラウンド Nuxt アプリケーションがあると、非常に便利です。 モジュール
        スターターは、その目的のために 1 つを統合します。
      </p>
      <p>
        別の Nuxt
        アプリケーション（モジュールリポジトリの一部ではないアプリケーション）で、モジュールをローカルにテストすることができます。これを行うには、npm
        pack コマンド、またはそれに相当するパッケージマネージャを使用して、モジュールから tarball
        を作成します。その後、テストプロジェクトで、パッケージ.json の packages にモジュールを追加できます。例:
        "my-module": "file:/path/to/tarball.tgz"。
      </p>
      <p>その後、通常のプロジェクトと同様に my-module を参照できるようになります。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ベストプラクティス</h2>
      <p>
        大きな力には大きな責任が伴います。
        モジュールは強力ですが、アプリケーションのパフォーマンスと開発者のエクスペリエンスを向上させるために、モジュールを作成する際に留意すべきベスト
        プラクティスがいくつかあります。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Async モジュール</h2>
      <p>
        これまで見てきたように、Nuxt モジュールは非同期にすることができます。 たとえば、API
        を取得したり、非同期関数を呼び出したりする必要があるモジュールを開発したい場合があります。
      </p>
      <p>
        ただし、Nuxt はモジュールがセットアップされるまで待機してから、次のモジュールに進み、開発サーバーやビルド
        プロセスなどを開始するため、非同期動作には注意してください。時間のかかるロジックは Nuxt
        フックに延期することをお勧めします。
      </p>
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        モジュールのセットアップに 1 秒以上かかる場合、Nuxt はそれに関する警告を発します。
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">常に公開されるインターフェースには常に接頭辞を付けてください</h2>
      <p>
        Nuxt
        モジュールは、他のモジュールや内部モジュールとの競合を避けるために、公開された設定、プラグイン、API、コンポーザブル、またはコンポーネントに明示的なプレフィックスを提供する必要があります。
      </p>
      <p>
        理想的には、モジュール名をプレフィックスとして付ける必要があります (たとえば、モジュールが nuxt-foo
        の場合、&lt;Button&gt; と useBar() ではなく、&lt;FooButton&gt; と useFooBar() を公開します)。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">TypeScript フレンドリー</h2>
      <p>Nuxt 3 には、最高の開発者エクスペリエンスを実現するファーストクラスの TypeScript 統合が備わっています。</p>
      <p>
        型を公開し、TypeScript を使用してモジュールを開発することは、TypeScript
        を直接使用しない場合でもユーザーに利益をもたらします。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">CommonJS 構文の回避</h2>
      <p>Nuxt 3 はネイティブ ESM に依存します。 詳細については、「ネイティブ ES モジュール」を参照してください。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ドキュメントモジュールの使用法</h2>
      <p>モジュールの使用法を Readme ファイルに文書化することを検討してください。</p>
      <ul class="list-decimal">
        <li>このモジュールを使用する理由</li>
        <li>このモジュールの使い方は?</li>
        <li>このモジュールは何をするのでしょうか?</li>
      </ul>
      <p>統合Webサイトとドキュメントにリンクすることは常に良い考えです。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">StackBlitzデモ or ボイラープレート</h2>
      <p>モジュールと、モジュールの Readme に追加した StackBlitz を使用して最小限の再現を行うことをお勧めします。</p>
      <p>
        これにより、モジュールの潜在的なユーザーがモジュールを試すための迅速かつ簡単な方法が提供されるだけでなく、問題が発生したときに送信できる最小限の複製を作成する簡単な方法も提供されます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">特定の Nuxt バージョンを宣伝しないでください</h2>
      <p>
        Nuxt 3、Nuxt Kit、およびその他の新しいツールは、前方互換性と後方互換性の両方を念頭に置いて作成されています。
      </p>
      <p>
        エコシステムの断片化を回避し、Nuxt バージョンの制約を設定する場合は、meta.compatibility
        を使用することを優先するため、「X for Nuxt 3」ではなく「X for Nuxt」を使用してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">スターターのデフォルト使用</h2>
      <p>
        モジュール スターターには、デフォルトのツールと設定のセット (ESLint 設定など) が付属しています。
        モジュールをオープンソース化する予定がある場合は、これらのデフォルトを維持することで、モジュールが他のコミュニティ
        モジュールと一貫したコーディング スタイルを共有できるようになり、他の人が貢献しやすくなります。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">エコシステム</h2>
      <p>
        Nuxt Module エコシステムは、月間 1,500 万を超える NPM
        ダウンロードを表し、拡張機能とあらゆる種類のツールとの統合を提供します。
        あなたもこのエコシステムの一員になることができます!
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">モジュールの種類</h2>
      <p>
        公式モジュールは、@nuxt/ というプレフィックスが付いた (スコープされた) モジュールです (例: @nuxt/content)。
        これらは、Nuxt チームによって積極的に作成および保守されています。
        フレームワークと同様に、フレームワークを改善するためにコミュニティからの貢献を大歓迎です。
      </p>
      <p>
        コミュニティ モジュールは、@nuxtjs/ というプレフィックスが付けられた (スコープが設定された) モジュールです
        (例:@nuxtjs/tailwindcss)。これらは、コミュニティのメンバーによって作成および保守されている実証済みのモジュールです。
        繰り返しになりますが、誰からの貢献も歓迎します。
      </p>
      <p>
        サードパーティおよびその他のコミュニティ モジュールは、(多くの場合) プレフィックス nuxt-
        が付いたモジュールです。 誰でも作成でき、このプレフィックスを使用すると、これらのモジュールを npm
        で検出できるようになります。 これは、アイデアの下書きや試してみるのに最適な出発点です。
      </p>
      <p>
        プライベート モジュールまたは個人モジュールは、独自のユースケースまたは会社のために作成されたモジュールです。
        Nuxt で動作するために命名規則に従う必要はなく、多くの場合、npm 組織 (例: @my-company/nuxt-auth)
        の下でスコープされます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">コミュニティモジュールをリストする</h2>
      <p>
        どんなコミュニティモジュールでもモジュールリストに掲載されることが歓迎されます。掲載するには、nuxt/modules
        リポジトリで問題を開いてください。Nuxtチームは、掲載前にベストプラクティスを適用するお手伝いをすることができます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">nuxt-modules と @nuxtjs/ を結合する</h2>
      <p>
        モジュールを nuxt-modules に移行すると、いつでも誰かが助けてくれるので、私たちは力を合わせて 1
        つの完璧なソリューションを作ることができます。
      </p>
      <p>
        すでに公開されて動作しているモジュールを nuxt-modules に移行したい場合は、nuxt/modules で問題を開いてください。
      </p>
      <p>
        nuxt-modules に参加することで、コミュニティモジュールを @nuxtjs/
        スコープの下で名前を変更し、そのドキュメント用にサブドメイン（例：my-module.nuxtjs.org）を提供できます。
      </p>
    </section>
  </div>
</template>
