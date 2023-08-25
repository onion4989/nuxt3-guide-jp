<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">モジュール作成者ガイド</h1>
      <p>アプリケーションを統合、強化、拡張するためのNuxtモジュールを作成する方法を学びます。</p>
      <p>
        Nuxtの設定およびフックにより、Nuxt のあらゆる側面をカスタマイズし、必要な統合 (Vueプラグイン、CMS、サーバー
        ルート、コンポーネント、ロギングなど) を追加することができます。
      </p>
      <p>
        Nuxt モジュールは、<code class="word-highlight text-sm">nuxi dev</code>を使用して開発モードで Nuxt
        を起動するとき、または<code class="word-highlight text-sm">nuxi build</code>
        で本番用のプロジェクトをビルドするときに順次実行される関数です。
        モジュールを使用すると、プロジェクトに不要なボイラープレート(あまり変化することがない、複数の場所で繰り返される定型コードのセクションのこと)を追加したり、Nuxt自体に変更を加えたりすることなく、カスタム
        ソリューションをカプセル化し、適切にテストし、npmパッケージとして共有できます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">クイックスタート</h2>
      <p>
        <NuxtLink
          to="https://github.com/nuxt/starter/tree/module"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >スターターテンプレート</NuxtLink
        >を使用してNuxtモジュールの使用を開始することをお勧めします。
      </p>
      <ContentDoc path="guide/going-furture/module-author-guide/quick-start" class="markdown-body" />
      <p>
        これにより、モジュールの開発と公開に必要なすべてのボイラープレートを含む<code class="word-highlight text-sm"
          >my-module</code
        >プロジェクトが作成されます。
      </p>
      <p>次のステップ:</p>
      <ul class="list-decimal ml-12 my-6">
        <li class="my-2">選択した IDE で<code class="word-highlight text-sm">my-module</code>を開きます。</li>
        <li class="my-2">お気に入りのパッケージ マネージャーを使用して依存関係をインストールする。</li>
        <li class="my-2">
          <code class="word-highlight text-sm">npm run dev:prepare</code>を使用して開発用のローカル ファイルを準備する。
        </li>
        <li class="my-2">Nuxt モジュールの詳細については、このドキュメントに従ってください。</li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">スターターの使用方法</h2>
      <p>モジュール スターターを使用して基本的なタスクを実行する方法を学びます。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">開発方法</h2>
      <p>
        モジュールのソース コードは<code class="word-highlight text-sm">src</code
        >ディレクトリ内に存在しますが、ほとんどの場合、モジュールを開発するには、 Nuxt アプリケーション。 それが<code
          class="word-highlight text-sm"
          >playground</code
        >ディレクトリの目的です。 これは、モジュールで実行するようにすでに設定されている、いじることができる Nuxt
        アプリケーションです。
      </p>
      <p>他の Nuxt アプリケーションと同様に、プレイグラウンドを操作できます。</p>
      <ul class="list-disc ml-10 my-6">
        <li class="my-2">
          <code class="word-highlight text-sm">npm run dev</code>を使用して開発サーバーを起動します。src
          ディレクトリ内のモジュールに変更を加えると、開発サーバー自体がリロードされます。
        </li>
        <li class="my-2"><code class="word-highlight text-sm">npm run dev:build</code>でビルドします。</li>
      </ul>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          他のすべての<code class="word-highlight text-sm">nuxi</code>コマンドは、プレイグラウンド
          ディレクトリに対して使用できます (例:
          <code class="word-highlight text-sm">nuxi &lt;COMMAND&gt; playground</code>)。 便宜上、<code
            class="word-highlight text-sm"
            >package.json</code
          >内で追加の<code class="word-highlight text-sm">dev:*</code>スクリプトを参照して自由に宣言してください。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">テスト方法</h2>
      <p>モジュール スターターには、基本的なテスト スイートが付属しています。</p>
      <ul class="list-disc ml-10 my-6">
        <li class="my-2">ESLint : <code class="word-highlight text-sm">npm run lint</code>で実行します。</li>
        <li class="my-2">
          Vitest : <code class="word-highlight text-sm">npm run test</code>または<code class="word-highlight text-sm"
            >npm run test:watch</code
          >で実行します。
        </li>
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
        Nuxt モジュールには、<code class="word-highlight text-sm">@nuxt/module-builder</code
        >によって提供される独自のビルダーが付属しています。
        このビルダーには何も必要ありませんTypeScriptをサポートし、他のNuxtアプリケーションに配布できるようにアセットが適切にバンドルされていることを確認します。
      </p>
      <p><code class="word-highlight text-sm">npm run prepack</code>を実行してモジュールをビルドできます。</p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          モジュールのビルドが役立つ場合もありますが、ほとんどの場合、自分でモジュールをビルドする必要はありません。開発中は<code
            class="word-highlight text-sm"
            >playground</code
          >が処理し、公開時にはリリース スクリプトもサポートします。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">公開の方法</h2>
      <div class="bg-yellow-500 border border-orange-200 text-sm rounded-md my-4 p-4" role="alert">
        <span class="sr-only">Info</span>
        モジュールを npm に公開する前に、npmjs.com アカウントを持っていること、および<code
          class="word-highlight text-sm"
          >npm login</code
        >
        を使用してローカルで認証されていることを確認してください。
      </div>
      <p>
        バージョンを上げて<code class="word-highlight text-sm">npm publish</code
        >コマンドを使用することでモジュールを公開できますが、モジュール スターター リリース
        スクリプトが付属しており、モジュールの動作バージョンを npm などに確実に公開するのに役立ちます。
      </p>
      <p>
        リリース スクリプトを使用するには、まずすべての変更をコミットします (<NuxtLink
          to="https://www.conventionalcommits.org/en/v1.0.0/"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Conventional Commits</NuxtLink
        >に従って、バージョンのバンプと変更ログの自動更新も利用することをお勧めします。)、<code
          class="word-highlight text-sm"
          >npm run release</code
        >でリリース スクリプトを実行します。
      </p>
      <p>リリース スクリプトを実行すると、次のことが起こります:</p>
      <p>まず、次の方法でテスト スイートを実行します:</p>
      <ul class="list-disc ml-10 my-4">
        <li class="my-2">リンターの実行 (<code class="word-highlight text-sm">npm run lint</code>)</li>
        <li class="my-2">
          単体テスト、統合テスト、および e2e テストの実行 (<code class="word-highlight text-sm">npm run test</code>)
        </li>
        <li class="my-2">モジュールのビルド (<code class="word-highlight text-sm">npm run prepack</code>)</li>
      </ul>
      <p>その後、テスト スイートがうまくいった場合は、モジュールの公開が続行されます。</p>
      <ul class="list-disc ml-10 my-4">
        <li class="my-2">従来のコミットに従ってモジュールのバージョンを上げ、変更ログを生成する</li>
        <li class="my-2">
          モジュールを npm に公開します
          (そのために、モジュールは再度ビルドされ、更新されたバージョン番号が公開されたアーティファクトで確実に考慮されます)
        </li>
        <li class="my-2">新しく公開されたバージョンを表すgitタグをgitリモートのoriginにプッシュする</li>
      </ul>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          他のスクリプトと同様に、必要に応じて<code class="word-highlight text-sm">package.json</code
          >内のデフォルトの<code class="word-highlight text-sm">release</code>
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
      <ul class="list-disc ml-10 my-6">
        <li class="my-2">
          公開されたモジュールは npm で配布されます。Nuxt Web サイトでいくつかのコミュニティ
          モジュールのリストを確認できます。
        </li>
        <li class="my-2">
          「ローカル」モジュール。それらは Nuxt プロジェクト自体内に存在し、
          <NuxtLink
            to="https://nuxt.com/docs/api/configuration/nuxt-config#modules"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >Nuxtの設定にインライン化</NuxtLink
          >されるか、<code class="word-highlight text-sm">modules</code>ディレクトリの一部として存在します。
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
        <div>
          スターターを使用する場合、モジュール定義は<code class="word-highlight text-sm">src/module.ts</code
          >で入手できます。
        </div>
      </div>
      <p>
        モジュール定義は、モジュールのエントリ ポイントです。 これは、モジュールが Nuxt 設定内で参照されるときに Nuxt
        によってロードされるものです。
      </p>
      <p>
        低レベルでは、Nuxtモジュールの定義は、インラインのユーザーオプションと<code class="word-highlight text-sm"
          >nuxt</code
        >オブジェクトを受け取る、シンプルで潜在的に非同期な関数です。この関数はNuxtと対話するために使用されます。
      </p>
      <ContentDoc path="guide/going-furture/module-author-guide/module-definition" class="markdown-body" />
      <p>
        最終的に、<code class="word-highlight text-sm">defineNuxtModule</code> は、より低レベルの（<code
          class="word-highlight text-sm"
          >inlineOptions、nuxt</code
        >）モジュールシグネチャを持つラッパー関数を返します。このラッパー関数は、デフォルト値やその他の必要なステップを適用してから、<code
          class="word-highlight text-sm"
          >setup</code
        >関数を呼び出します。
      </p>
      <ul class="list-disc ml-10 my-6">
        <li class="my-2">
          モジュールオプションを自動的にマージするための<code class="word-highlight text-sm">defaults</code>と<code
            class="word-highlight text-sm"
            >meta.configKey</code
          >をサポート
        </li>
        <li class="my-2">型ヒントと自動型推論</li>
        <li class="my-2">基本的な Nuxt 2 互換性のためにシムを追加する</li>
        <li class="my-2">
          meta.name または meta.configKey から計算された一意のキーを使用してモジュールが 1
          回だけインストールされるようにする
        </li>
        <li class="my-2">Nuxt フックを自動的に登録する</li>
        <li class="my-2">モジュールメタに基づいて互換性の問題を自動的にチェックします</li>
        <li class="my-2">Nuxt の内部使用のために getOptions と getMeta を公開する</li>
        <li class="my-2">
          モジュールが最新のdefineNuxtModuleを使用している限り、下位互換性と上位互換性を確保します。@nuxt/kitのバージョン
        </li>
        <li class="my-2">モジュールビルダーツールとの統合</li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ランタイム ディレクトリ</h2>
      <div
        class="flex my-4 p-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
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
      <ul class="list-disc ml-10 my-6">
        <li class="my-2">Vue components</li>
        <li class="my-2">Composables</li>
        <li class="my-2">Nuxt plugins</li>
      </ul>
      <p>
        <NuxtLink
          to="https://nuxt.com/docs/guide/concepts/server-engine"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >サーバーエンジン Nitro</NuxtLink
        >に対して:
      </p>
      <ul class="list-disc ml-10 my-6">
        <li class="my-2">API routes</li>
        <li class="my-2">Middlewares</li>
        <li class="my-2">Nitro plugins</li>
      </ul>
      <p>または、ユーザーの Nuxt アプリケーションに挿入したいその他の種類のアセット:</p>
      <ul class="list-disc ml-10 my-6">
        <li class="my-2">Stylesheets</li>
        <li class="my-2">3D models</li>
        <li class="my-2">Images</li>
        <li class="my-2">etc.</li>
      </ul>
      <p>その後、モジュール定義からアプリケーション内にこれらすべてのアセットを挿入できるようになります。</p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>アセットインジェクションの詳細については、「レシピ」セクションをご覧ください。</div>
      </div>
      <div class="bg-yellow-500 border border-orange-200 text-sm rounded-md my-4 p-4" role="alert">
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

      <code class="word-highlight text-sm font-bold">@nuxt/module-builder</code>
      <div class="my-4">
        <NuxtLink
          to="https://github.com/nuxt/module-builder#readme"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Nuxt Module Builder</NuxtLink
        >は、モジュールを構築して出荷するためのすべての面倒な作業を引き受ける、ゼロ構成のビルド
        ツールです。これにより、モジュール ビルド アーティファクトと
        Nuxtアプリケーションとの適切な互換性が保証されます。
      </div>

      <code class="word-highlight text-sm font-bold">@nuxt/kit</code>
      <div class="my-4">
        <NuxtLink to="/guide/going-furture/nuxt-kit" class="underline decoration-dashed decoration-1 underline-offset-4"
          >Nuxt Kit</NuxtLink
        >は、モジュールが Nuxt アプリケーションと対話するのに役立つコンポーザブル ユーティリティを提供します。
        モジュールの互換性とコードの可読性を高めるために、可能な限り手動ではなくNuxt
        Kitユーティリティを使用することをお勧めします。
      </div>
      <p class="tips my-6">
        <span class="sr-only">Info</span>
        詳細は、API > Advanced >
        <NuxtLink
          to="https://nuxt.com/docs/api/advanced/kit"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Kit.</NuxtLink
        >
        を参照してください。
      </p>

      <code class="word-highlight text-sm font-bold">@nuxt/test-utils</code>
      <div class="my-4">
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
      <ContentDoc path="guide/going-furture/module-author-guide/altering-nuxt-configuration" class="markdown-body" />
      <p>
        より複雑な構成変更を処理する必要がある場合は、
        <NuxtLink to="https://github.com/unjs/defu" class="underline decoration-dashed decoration-1 underline-offset-4"
          >defu</NuxtLink
        >の使用を検討してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ランタイムへのオプションの公開</h2>
      <p>
        モジュールはアプリケーション ランタイムの一部ではないため、そのオプションも同様ではありません。
        ただし、多くの場合、ランタイムコード内でこれらのモジュールオプションの一部にアクセスする必要がある場合があります。Nuxtの<code
          class="word-highlight text-sm font-bold"
          >runtimeConfig</code
        >を使用して必要な構成を公開することをお勧めします。
      </p>
      <ContentDoc path="guide/going-furture/module-author-guide/exposing-options-to-runtime" class="markdown-body" />
      <div class="bg-yellow-500 border border-orange-200 text-sm rounded-md my-4 p-4" role="alert">
        <span class="sr-only">Info</span>
        プライベート API キーなどの機密モジュール構成はパブリック バンドルに含まれるため、パブリック
        ランタイム構成で公開しないように注意してください。
      </div>
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は、Guide > Going Further > Runtime Config を参照ください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">addPlugin を使用したプラグインの挿入</h2>
      <p>
        プラグインは、モジュールにランタイム ロジックを追加する一般的な方法です。
        <code class="word-highlight text-sm font-bold">addPlugin</code
        >ユーティリティを使用して、モジュールからそれらを登録できます。
      </p>
      <ContentDoc
        path="guide/going-furture/module-author-guide/injecting-plugins-with-addplugin"
        class="markdown-body"
      />
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は、API > Advanced >
        <NuxtLink
          to="https://nuxt.com/docs/api/advanced/kit"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Kit.</NuxtLink
        >
        を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">addComponent による Vueコンポーネントの挿入</h2>
      <p>
        モジュールがVueコンポーネントを提供する必要がある場合は、<code class="word-highlight text-sm font-bold"
          >addComponent</code
        >ユーティリティを使用して、それらを Nuxtが解決する自動インポートとして追加できます。
      </p>
      <ContentDoc
        path="guide/going-furture/module-author-guide/injecting-vue-components-with-addcomponent"
        class="markdown-body"
      />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">addImports および addImportsDir を使用したコンポーザブルの挿入</h2>
      <p>
        モジュールがコンポーザブルを提供する必要がある場合は、<code class="word-highlight text-sm font-bold"
          >addImports</code
        >ユーティリティを使用して、それらを Nuxt の自動インポートとして追加して解決できます。
      </p>
      <ContentDoc
        path="guide/going-furture/module-author-guide/injecting-composables-with-addimports-and-addimportsdir"
        class="markdown-body"
      />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">addServerHandler を使用したサーバールートの挿入</h2>
      <ContentDoc
        path="guide/going-furture/module-author-guide/injecting-server-routes-with-addserverhandler"
        class="markdown-body"
      />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">他のアセットの挿入</h2>
      <p>
        モジュールが他の種類のアセットを提供する必要がある場合は、それらを注入することもできます。 これは、Nuxt の<code
          class="word-highlight text-sm font-bold"
          >css</code
        >
        配列を通じてスタイルシートを挿入する簡単なモジュールの例です。
      </p>
      <ContentDoc path="guide/going-furture/module-author-guide/injecting-other-assets" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">モジュール内で他のモジュールを使用する</h2>
      <p>
        モジュールが他のモジュールに依存している場合は、Nuxt Kit の<code class="word-highlight text-sm font-bold"
          >installModule</code
        >
        ユーティリティを使用してモジュールを追加できます。たとえば、モジュールで Nuxt
        Tailwindを使用したい場合は、以下のように追加できます。
      </p>
      <ContentDoc
        path="guide/going-furture/module-author-guide/using-other-modules-in-your-module"
        class="markdown-body"
      />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">フックの使用</h2>
      <p>
        <NuxtLink
          to="/guide/going-furture/lifecycle-hooks"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >ライフサイクルフック</NuxtLink
        >を使用すると、Nuxt のほぼすべての側面を拡張できます。 モジュールはプログラム的に、または定義内の<code
          class="word-highlight text-sm font-bold"
          >hooks</code
        >を通じてモジュールにフックできます。
      </p>
      <ContentDoc path="guide/going-furture/module-author-guide/using-hooks" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">テンプレート / 仮想ファイルの追加</h2>
      <p>
        ユーザーのアプリにインポートできる仮想ファイルを追加する必要がある場合は、<code class="word-highlight text-sm"
          >addTemplate</code
        >
        ユーティリティを使用できます。
      </p>
      <ContentDoc path="guide/going-furture/module-author-guide/adding-templates-virtual-files" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">型宣言の追加</h2>
      <p>
        ユーザーのプロジェクトに型宣言を追加することもできます (たとえば、Nuxt
        インターフェイスを拡張したり、独自のグローバル型を提供したりするため)。 このために、Nuxt
        は、テンプレートをディスクに書き込み、生成された<code class="word-highlight text-sm">nuxt.d.ts</code
        >ファイルにテンプレートへの参照を追加する
        <code class="word-highlight text-sm">addTypeTemplate</code>ユーティリティを提供します。
      </p>
      <p>
        モジュールが Nuxt によって処理される型を拡張する必要がある場合は、<code class="word-highlight text-sm"
          >addTypeTemplate</code
        >
        を使用してこの操作を実行できます:
      </p>
      <ContentDoc path="guide/going-furture/module-author-guide/adding-type-declarations" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">テンプレートの更新</h2>
      <p>
        テンプレート/仮想ファイルを更新する必要がある場合は、次のように<code class="word-highlight text-sm"
          >updateTemplates</code
        >ユーティリティを利用できます:
      </p>
      <ContentDoc path="guide/going-furture/module-author-guide/updating-templates" class="markdown-body" />
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
        class="flex p-4 my-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
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
        <NuxtLink to="/testing" class="underline decoration-dashed decoration-1 underline-offset-4"
          >Nuxt Test Utils</NuxtLink
        >は、エンドツーエンドの方法でモジュールをテストするのに役立つ頼りになるライブラリです。
        これを採用するワークフローは次のとおりです:
      </p>
      <ul class="list-decimal ml-12 my-6">
        <li class="my-2">
          <code class="word-highlight text-sm">test/fixtures/*</code>内で「フィクスチャ」として使用する Nuxt
          アプリケーションを作成します。
        </li>
        <li class="my-2">テストファイル内でこのフィクスチャを使用して Nuxt をセットアップします</li>
        <li class="my-2">
          <code class="word-highlight text-sm">@nuxt/test-utils</code>のユーティリティを使用してフィクスチャと対話します
          (ページのフェッチなど)
        </li>
        <li class="my-2">このフィクスチャに関連するチェックを実行します (例: 「HTML には ... が含まれています」)</li>
        <li class="my-2">リピート</li>
      </ul>
      <p>実際には、フィクスチャは次のようになります:</p>
      <ContentDoc path="guide/going-furture/module-author-guide/end-to-end" class="markdown-body" />
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
        アプリケーション（モジュールリポジトリの一部ではないアプリケーション）で、モジュールをローカルにテストすることができます。これを行うには、<code
          class="word-highlight text-sm"
          >npm pack</code
        >コマンド、またはそれに相当するパッケージマネージャを使用して、モジュールから tarball
        を作成します。その後、テストプロジェクトで、<code class="word-highlight text-sm">package.json</code>の packages
        にモジュールを追加できます。例:
        <code class="word-highlight text-sm">"my-module": "file:/path/to/tarball.tgz"</code>。
      </p>
      <p>
        その後、通常のプロジェクトと同様に<code class="word-highlight text-sm">my-module</code
        >を参照できるようになります。
      </p>
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

      <div class="bg-yellow-500 border border-orange-200 text-sm rounded-md my-4 p-4" role="alert">
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
      <ul class="list-decimal ml-12 my-6">
        <li class="my-2">このモジュールを使用する理由</li>
        <li class="my-2">このモジュールの使い方は?</li>
        <li class="my-2">このモジュールは何をするのでしょうか?</li>
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
        エコシステムの断片化を回避し、Nuxt バージョンの制約を設定する場合は、<code class="word-highlight text-sm"
          >meta.compatibility</code
        >
        を使用することを優先するため、「X for Nuxt 3」ではなく「X for Nuxt」を使用してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">スターターのデフォルト使用</h2>
      <p>
        モジュール スターターには、デフォルトのツールと設定のセット (ESLint 設定など) が付属しています。
        モジュールをオープンソース化する予定がある場合は、これらのデフォルトを維持することで、モジュールが他の
        <NuxtLink to="https://nuxt.com/modules" class="underline decoration-dashed decoration-1 underline-offset-4"
          >コミュニティモジュール</NuxtLink
        >と一貫したコーディング スタイルを共有できるようになり、他の人が貢献しやすくなります。
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
        公式モジュールは、<code class="word-highlight text-sm">@nuxt/</code>というプレフィックスが付いた
        (スコープされた) モジュールです (例: <code class="word-highlight text-sm">@nuxt/content</code>)。 これらは、Nuxt
        チームによって積極的に作成および保守されています。
        フレームワークと同様に、フレームワークを改善するためにコミュニティからの貢献を大歓迎です。
      </p>
      <p>
        コミュニティ モジュールは、<code class="word-highlight text-sm">@nuxtjs/</code>というプレフィックスが付けられた
        (スコープが設定された) モジュールです (例:<code class="word-highlight text-sm">@nuxtjs/tailwindcss</code
        >)。これらは、コミュニティのメンバーによって作成および保守されている実証済みのモジュールです。
        繰り返しになりますが、誰からの貢献も歓迎します。
      </p>
      <p>
        サードパーティおよびその他のコミュニティ モジュールは、(多くの場合) プレフィックス<code
          class="word-highlight text-sm"
          >nuxt-</code
        >
        が付いたモジュールです。 誰でも作成でき、このプレフィックスを使用すると、これらのモジュールを npm
        で検出できるようになります。 これは、アイデアの下書きや試してみるのに最適な出発点です。
      </p>
      <p>
        プライベート モジュールまたは個人モジュールは、独自のユースケースまたは会社のために作成されたモジュールです。
        Nuxt で動作するために命名規則に従う必要はなく、多くの場合、npm 組織 (例:
        <code class="word-highlight text-sm">@my-company/nuxt-auth</code>) の下でスコープされます。
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
        すでに公開されて動作しているモジュールを<code class="word-highlight text-sm">nuxt-modules</code
        >に移行したい場合は、nuxt/modules で問題を開いてください。
      </p>
      <p>
        nuxt-modules に参加することで、コミュニティモジュールを<code class="word-highlight text-sm">@nuxtjs/</code>
        スコープの下で名前を変更し、そのドキュメント用にサブドメイン（例:<code class="word-highlight text-sm"
          >my-module.nuxtjs.org</code
        >）を提供できます。
      </p>
    </section>
  </div>
</template>
