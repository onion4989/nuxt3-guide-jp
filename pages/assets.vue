<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">アセット</h1>
      <p>Nuxtは、スタイルシート、フォント、画像などのアセットを処理するために2つのディレクトリを使用します。</p>
      <ul class="list-disc ml-5">
        <li>
          <code class="word-highlight text-sm">public/</code
          >ディレクトリのコンテンツは、そのままサーバールートで提供されます。
        </li>
        <li>
          <code class="word-highlight text-sm">assets/</code
          >ディレクトリには、ビルドツール（Viteまたはwebpack）に処理させたいすべてのアセットが一般的に格納されます。
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">public/ ディレクトリ</h2>
      <p>
        <code class="word-highlight text-sm">public/</code
        >ディレクトリは、アプリケーションの特定のURLで公開される静的アセットのための公開サーバーとして使用されます。
      </p>
      <p>
        アプリケーションのコードやブラウザから、<code class="word-highlight text-sm">public/</code
        >ディレクトリ内のファイルをルートURL（/）から取得することができます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">例</h2>
      <p>
        下記の例では、<code class="word-highlight text-sm">public/img/</code
        >ディレクトリ内の画像ファイルを参照する場合、そのファイルは<code class="word-highlight text-sm"
          >img/nuxt.png</code
        >
        で利用できます。
      </p>
      <ContentDoc path="assets/assets-appvue" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">assets/ ディレクトリ</h2>
      <p>
        NuxtはViteまたはWebpackを使用してアプリケーションをビルドおよびバンドルします。
        これらのビルドツールの主な機能はJavaScriptファイルの処理ですが、プラグイン（Vite用）やローダー（Webpack用）を通じてスタイルシート、フォント、SVGなどの他の種類のアセットを処理することも可能です。
        このステップでは、元のファイルをパフォーマンスやキャッシュの目的（スタイルシートの最小化やブラウザのキャッシュ無効化など）で変換します。
      </p>
      <p>
        Nuxtは、慣例としてassets/ディレクトリを使用してこれらのファイルを保存しますが、
        このディレクトリの自動スキャン機能は存在せず、任意の他の名前を使用することもできます。
      </p>
      <p>
        アプリケーションのコードでは、<code class="word-highlight text-sm">assets/</code
        >ディレクトリ内のファイルを参照するためには、<code class="word-highlight text-sm">~/assets/</code>を使用します。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">例</h2>
      <p>
        たとえば、ビルドツールがこのファイル拡張子を処理するように設定されている場合、画像ファイルを参照する方法は次のとおりです。
      </p>
      <ContentDoc path="assets/assets-dir-example" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          Nuxtは、assets/ディレクトリ内のファイルを /assets/my-file.png
          のような静的URLで提供しません。静的URLが必要な場合は、public/ディレクトリを使用してください。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">グローバルスタイルのインポート</h2>
      <p>
        Nuxtのコンポーネントスタイルにグローバルなステートメントを挿入するためには、nuxt.config.tsファイルでViteオプションを使用することができます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">例</h2>
      <p>この例では、Nuxtのページやコンポーネントで使用されるカラー変数を含むSassのパーシャルファイルがあります。</p>
      <ContentDoc path="assets/assets-global-colors-sass" class="markdown-body" />
      <ContentDoc path="assets/assets-nuxtconfig-sass" class="markdown-body" />
    </section>
  </div>
</template>
