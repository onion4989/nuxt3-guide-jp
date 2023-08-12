<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">スタイリング</h1>
      <p>
        Nuxtは非常に柔軟にスタイリングすることができます。
        独自のスタイル、ローカルや外部のスタイルシートを利用することもできます。
        また、CSSプリプロセッサ、CSSフレームワーク、UIライブラリ、そしてNuxtモジュールを使用してアプリケーションのスタイルを設定することができます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ローカルのスタイルシート</h2>
      <p>
        ローカルのスタイルシートを作成する場合、<code class="word-highlight text-sm">assets/</code
        >ディレクトリに配置してください。。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">コンポーネント内でのインポート</h2>
      <p>
        スタイルシートは、ページ、レイアウト、コンポーネントなどから直接インポートすることができます。
        JavaScriptのimport文やCSSの<code class="word-highlight text-sm">@import</code>文を使用することができます。
      </p>
      <ContentDoc path="styling/with-conponents" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>スタイルシートはNuxtによってレンダリングされるHTMLにインラインで組み込まれます。</div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">CSSプロパティ</h2>
      <p>
        また、<code class="word-highlight text-sm">nuxt.config.ts</code>で<code class="word-highlight text-sm">css</code
        >プロパティを設定することで簡単に利用ができます。スタイルシートの配置場所は<code class="word-highlight text-sm"
          >assets/</code
        >ディレクトリです。 下記のように記述することで、すべてのページでmain.cssが適用されます。
      </p>
      <ContentDoc path="styling/css-property" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          スタイルシートはNuxtによってレンダリングされるHTMLにインラインで組み込まれ、グローバルに注入され、すべてのページに存在します。
        </div>
      </div>
    </section>

    <section>
      <h1 class="text-3xl font-bold">フォントの扱い方</h1>
      <p>
        ローカルのフォントファイルは、<code class="word-highlight text-sm">~/public/</code
        >ディレクトリ（例：~/public/fonts）に配置します。 その後、スタイルシート内で<code class="word-highlight text-sm"
          >url()</code
        >を使用してください。
      </p>
      <ContentDoc path="styling/with-fonts-main-css" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">NPMを使用したスタイルシートの適用</h2>
      <p>
        npmで配布されているスタイルシートを参照することもできます。ここでは、人気のある<code
          class="word-highlight text-sm"
          >animate.css</code
        >ライブラリを例に使用しましょう。
      </p>
      <ContentDoc path="styling/nmp-stylesheet" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">外部スタイルシート</h2>
      <p>
        外部のスタイルシートをアプリケーションに含めるには、nuxt.configファイルのheadセクションにlink要素を追加します。
        これを実現するために、異なる方法があります。
        また、ローカルのスタイルシートも同様にこの方法で含めることができます。
      </p>
      <p>
        Nuxtの設定ファイルの<code class="word-highlight text-sm">app.head</code
        >プロパティを使用して、headセクションを操作することができます。
      </p>
      <ContentDoc path="styling/nuxt-config" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">動的に追加するスタイルシート</h2>
      <p>useHeadコンポーザブルを使用すると、コード内でheadに動的な値を設定することができます。</p>
      <ContentDoc path="styling/use-head" class="markdown-body" />
      <p>Nuxtは内部でunheadを使用しており、その詳細なドキュメントについてはこちらを参照してください。</p>
      <p class="tips">
        <span class="sr-only">Info</span>
        「API」 > 「Composables」 > 「<NuxtLink
          to="https://nuxt.com/docs/api/composables/use-head"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Use Head</NuxtLink
        >」を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Nitroプラグインを使用した（レンダリングされた）ヘッドの変更</h2>
      <p>
        より高度な制御が必要な場合は、フックを使用してレンダリングされたHTMLをインターセプト（割込み制御）し、ヘッドをプログラムで変更することができます。
      </p>
      <p>
        次のように、<code class="word-highlight text-sm">~/server/plugins/my-plugin.ts</code>にプラグインを作成します。
      </p>
      <ContentDoc path="styling/my-plugin" class="markdown-body" />
      <p>
        外部のスタイルシートは、レンダリングをブロックするリソースです。
        ブラウザがページをレンダリングする前に、それらが読み込まれて処理される必要があります。
        不必要に大きなスタイルを含むWebページは、レンダリングに時間がかかる可能性があります。 詳細については、<NuxtLink
          to="https://web.dev/defer-non-critical-css/"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >web.dev</NuxtLink
        >を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">プリプロセッサの使用</h2>
      <p>SCSS、Sass、Less、Stylusなどのプリプロセッサを使用するには、まずそれをインストールする必要があります。</p>
      <ContentDoc path="styling/preprocessors-install-sass" class="markdown-body" />
      <p>
        デフォルトでは、NuxtはViteを使用します。Webpackを代わりに使用したい場合は、各プリプロセッサローダーの
        <NuxtLink
          to="https://vitejs.dev/config/shared-options.html#css-preprocessoroptions"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >ドキュメント</NuxtLink
        >を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">シングルファイルコンポーネント（SFC）のスタイリング</h2>
      <p>
        VueとSFCの素晴らしい点の一つは、スタイリングの取り扱いが自然であることです。
        コンポーネントファイルのstyleブロックに直接CSSまたはプリプロセッサのコードを記述することができます。
        そのため、CSS-in-JSのようなものを使用する必要はありません。
        ただし、CSS-in-JSを使用したい場合は、pinceauなどのサードパーティのライブラリやモジュールを使用することができます。
      </p>
      <p>
        SFCでコンポーネントのスタイリングについての包括的な参照については、<NuxtLink
          to="https://vuejs.org/api/sfc-css-features.html"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Vueのドキュメント</NuxtLink
        >を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">クラスとスタイルのバインディング</h2>
      <p>
        VueのSFC（Single File
        Components）の機能を活用して、クラスやスタイル属性を使用してコンポーネントにスタイルを適用することができます。
      </p>
      <ContentDoc path="styling/class-style-binding" class="markdown-body" />
      <p>
        <NuxtLink
          to="https://vuejs.org/api/sfc-css-features.html"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Vueのドキュメント</NuxtLink
        >を参照して、詳細な情報を確認してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">v-bindを利用した動的スタイル</h2>
      <p>
        v-bind関数を使用して、スタイルブロック内でJavaScriptの変数や式を参照することができます。
        バインディングは動的であり、変数の値が変更されるとスタイルも更新されます。
      </p>
      <ContentDoc path="styling/v-bind" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">スコープ付きスタイル</h2>
      <p>
        scoped属性を使用すると、コンポーネントを隔離してスタイルを適用することができます。
        この属性で宣言されたスタイルは、このコンポーネントにのみ適用されます。
      </p>
      <ContentDoc path="styling/scoped-styles" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">CSS モジュール</h2>
      <p>
        module属性を使用して<NuxtLink
          to="https://github.com/css-modules/css-modules"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >CSSモジュール</NuxtLink
        >を利用することができます。<code class="word-highlight text-sm">$style</code
        >という注入された変数を使ってアクセスすることができます。
      </p>
      <ContentDoc path="styling/css-modules" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">プリプロセッサのサポート</h2>
      <p>
        SFC（Single File Components）のスタイルブロックは、プリプロセッサの構文をサポートしています。
        Viteは、.scss、.sass、.less、.styl、および.stylusファイルの組み込みサポートを提供しており、追加の設定は必要ありません。
        まずそれらをインストールし、lang属性を使用してSFC内で直接利用することができます。
      </p>
      <ContentDoc path="styling/preprocessors-support" class="markdown-body" />
      <p>
        <NuxtLink
          to="https://vitejs.dev/guide/features.html#css"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >ViteのCSSドキュメント</NuxtLink
        >と<NuxtLink
          to="https://vitejs.dev/guide/features.html#css"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >@vitejs/plugin-vue</NuxtLink
        >のドキュメントを参照してください。 Webpackを使用している場合は、
        <NuxtLink to="https://vue-loader.vuejs.org/" class="underline decoration-dashed decoration-1 underline-offset-4"
          >vue-loaderのドキュメント</NuxtLink
        >を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">PostCSSの利用</h2>
      <p>Nuxtには組み込みのPostCSSが付属しています。nuxt.configファイルで設定することができます。</p>
      <ContentDoc path="styling/using-post-css" class="markdown-body" />
      <p>
        ViteのCSSドキュメントと@vitejs/plugin-vueドキュメントを参照してください。
        Webpackを使用している場合は、vue-loaderのドキュメントを参照してください。
      </p>
      <ContentDoc path="styling/using-style-post-css" class="markdown-body" />
      <p>デフォルトで、Nuxtには以下のプラグインが事前に設定されています:</p>
      <ul>
        <li>
          <NuxtLink
            to="https://github.com/postcss/postcss-import"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >postcss-import</NuxtLink
          >: @importルールを改善します。
        </li>
        <li>
          <NuxtLink
            to="https://github.com/postcss/postcss-url"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >postcss-url</NuxtLink
          >: url()ステートメントを変換します。
        </li>
        <li>
          <NuxtLink
            to="https://github.com/postcss/autoprefixer"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >autoprefixer</NuxtLink
          >: ベンダープレフィックスを自動的に追加します。
        </li>
        <li>
          <NuxtLink to="https://cssnano.co/" class="underline decoration-dashed decoration-1 underline-offset-4"
            >cssnano</NuxtLink
          >: 最小化とパージ（不要なコードの削除）を行います。
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">複数のスタイルを活用するためのレイアウト</h2>
      <p>
        もしアプリケーションの異なる部分を完全に異なるスタイルで装飾したい場合は、レイアウトを使用することができます。
        異なるレイアウトに対して異なるスタイルを適用します。
      </p>
      <ContentDoc path="styling/multiple-styles" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span> 詳細は、「ガイド」 > 「ディレクトリ構築」 > 「<NuxtLink
          to="/guide/directory-stracture/layouts"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >レイアウト</NuxtLink
        >」をご覧ください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">サードパーティのライブラリやモジュール</h2>
      <p>
        Nuxtはスタイリングに関しては意見を持っておらず、さまざまな選択肢を提供しています。 UnoCSSやTailwind
        CSSなどの人気のあるライブラリなど、好きなスタイリングツールを使用することができます。
      </p>
      <p>
        コミュニティとNuxtチームは、統合を容易にするために多くのNuxtモジュールを開発しています。
        ウェブサイトのモジュールセクションでそれらを見つけることができます。
        以下は、始めるのに役立ついくつかのモジュールです:
      </p>
      <ul class="list-disc">
        <li>
          <NuxtLink
            to="https://nuxt.com/modules/unocss"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >UnoCSS</NuxtLink
          >: 即座に利用できるオンデマンドのCSSエンジン
        </li>
        <li>
          <NuxtLink
            to="https://nuxt.com/modules/tailwindcss"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >Tailwind CSS</NuxtLink
          >: ユーティリティファーストのCSSフレームワーク
        </li>
        <li>
          <NuxtLink
            to="https://github.com/nuxt-modules/fontaine"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >Fontaine</NuxtLink
          >: フォントメトリックのフォールバック
        </li>
        <li>
          <NuxtLink to="https://pinceau.dev/" class="underline decoration-dashed decoration-1 underline-offset-4"
            >Pinceau</NuxtLink
          >: スタイリングフレームワーク
        </li>
        <li>
          <NuxtLink
            to="https://nuxt.com/modules/nuxtlabs-ui"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >NuxtLabs UI</NuxtLink
          >
        </li>
      </ul>
      <p>
        Nuxtモジュールは、使いやすい開発体験を提供していますが、お気に入りのツールがモジュールとして提供されていない場合でも、それをNuxtと一緒に使用することはできます。
        プロジェクトに合わせて自分で設定することができます。
        ツールによっては、Nuxtプラグインを使用したり、独自のモジュールを作成する必要があるかもしれません。
        自分が作成したものをコミュニティと共有しましょう！
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Webフォントの簡単な読み込み</h2>
      <p>Nuxt Google Fonts モジュールを使用して、Google フォントを読み込むことができます。</p>
      <p>
        UnoCSSを使用している場合は、一般的なプロバイダー（Google
        Fontsなど）からフォントを便利に読み込むためのWebフォントプリセットが付属していることに注意してください。
      </p>
    </section>

    <section>
      <h1 class="text-3xl font-bold">高度な設定</h1>
      <h2 class="text-lg lg:text-2xl font-bold mt-4">トランジション</h2>
      <p>NuxtはVueと同様に<code>&ltTransition&gt</code>要素を持っており、View Transitions APIにも対応しています。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">フォントの高度な最適化</h2>
      <p>
        CLSを削減するためには、Fontaineの使用をお勧めします。
        さらに高度な操作が必要な場合は、Nuxtのビルドプロセスやランタイムを拡張するためのNuxtモジュールを作成することを検討してください。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          常にWebエコシステム全体で利用可能なさまざまなツールやテクニックを活用して、アプリケーションのスタイリングをより簡単かつ効率的に行うことを忘れないでください。
          ネイティブなCSS、プリプロセッサ、PostCSS、UIライブラリ、またはモジュールを使用している場合でも、Nuxtはあなたをサポートします。
          スタイリングを楽しんでください！
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">LCPの高度な最適化</h2>
      <p>以下の方法を使用して、グローバルCSS（外部CSS）ファイルのダウンロード速度を向上させることができます：</p>
      <ul class="list-disc ml-5">
        <li>
          CDNの使用：CDNを使用すると、ファイルがユーザーに物理的に近い場所に配置されるため、高速なダウンロードが可能になります。
        </li>
        <li>
          アセットの圧縮：可能であれば、Brotliなどの圧縮アルゴリズムを使用してアセットを圧縮します。
          圧縮されたアセットは、ファイルサイズが小さくなり、ダウンロード速度が向上します。
        </li>
        <li>
          HTTP2/HTTP3の使用：HTTP2やHTTP3などの最新のプロトコルを使用してアセットを配信します。
          これにより、並行的なダウンロードや効率的なヘッダー圧縮などの恩恵を受けることができます。
        </li>
        <li>
          同じドメインでのホスティング：アセットを異なるサブドメインではなく、同じドメインでホストするようにします。
          これにより、クッキーのオーバーヘッドやDNSのロード時間を削減し、ダウンロード速度を向上させることができます。
        </li>
      </ul>
      <p>
        もしCloudflare、Netlify、またはVercelなどのモダンなプラットフォームを使用している場合、これらの手法のほとんどは自動的に行われるはずです。
        Web.devには、LCPの最適化ガイドがありますので、参考にしてください。
        それらのプラットフォームでは、CDNの提供、アセットの圧縮、最新のプロトコルの使用など、パフォーマンスの向上に関する最適化が自動的に行われる場合があります。
        そのため、特に手動での設定や調整は必要ありませんが、パフォーマンスの向上を確認するためには適切なテストやモニタリングを行うことが重要です。
      </p>
      <p>
        もしNuxtによってすべてのCSSがインライン化されている場合、レンダリングされるHTMLから外部のCSSファイルを完全に参照しないようにすることができます（実験的な機能です）。
        これは、モジュール内やNuxtの設定ファイル内にフックを配置することで実現できます。
      </p>
      <ContentDoc path="styling/lcp-avanced-optimizations" class="markdown-body" />
    </section>
  </div>
</template>
