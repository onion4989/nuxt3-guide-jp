<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">Views</h1>
      <p>
        Nuxtは、アプリケーションのユーザーインターフェースを実装するためのいくつかのコンポーネントレイヤーを提供しています。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">app.vue</h2>
      <p>
        デフォルトでは、Nuxtはこのファイルをエントリポイント(最初に実行される開始ファイル)として扱い、
        アプリケーションのすべてのルートに対してその内容をレンダリングします。
      </p>
      <ContentDoc path="views/app-vue" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span
        >もしVueに慣れているのであれば、通常はVueアプリケーションを作成するファイルであるmain.jsがどこにあるのか疑問に思うかもしれません。
        しかし、Nuxtはこれをバックグラウンドで行っています。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">コンポーネント / Components</h2>
      <p>
        コンポーネントは、ボタンやメニューなどの再利用可能なユーザーインターフェースの要素です。
        Nuxtでは、これらのコンポーネントを<code class="word-highlight text-sm">components/</code
        >ディレクトリに作成することができます。
        明示的にインポートする必要はなく、これらのコンポーネントは自動的にアプリケーション全体で利用可能になります。
      </p>
      <ContentDoc path="views/compornents" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ページ / Pages</h2>
      <p>
        ページは、特定のルートのパターンごとに対象のページを表示します。
        <code class="word-highlight text-sm">pages/</code
        >ディレクトリ内の各ファイルは、異なるルートを表し、そのコンテンツを表示します。
      </p>
      <p>
        ページを使用するには、<code class="word-highlight text-sm">pages/index.vue</code>ファイルを作成し、<code
          class="word-highlight text-sm"
          >app.vue</code
        >に<code class="word-highlight text-sm">&ltNuxtPage/&gt</code>
        コンポーネントを追加します（またはデフォルトのエントリを使用する場合はapp.vueを削除します）。 これにより、<code
          class="word-highlight text-sm"
          >pages/</code
        >ディレクトリに新しいファイルを追加することで、さらにページとそれに対応するルートを作成することができます。
      </p>
      <ContentDoc path="views/pages" class="markdown-body" />

      <p class="tips">
        <span class="sr-only">Info</span>
        ページについては、<NuxtLink to="/routing" class="underline decoration-dashed decoration-1 underline-offset-4"
          >ルーティング</NuxtLink
        >のセクションでさらに詳しく学ぶことができます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">レイアウト / Layouts</h2>
      <p>
        レイアウトは、複数のページで共通のユーザーインターフェース（ヘッダーやフッターなど）を含むページのラッパーです。
        レイアウトは、ページコンテンツを表示するために<code class="word-highlight text-sm">&ltslot /&gt</code
        >コンポーネントを使用するVueファイルです。 デフォルトでは、<code class="word-highlight text-sm"
          >layouts/default.vue</code
        >ファイルが使用されます。 カスタムレイアウトは、ページのメタデータの一部として設定することができます。
      </p>
      <p class="tips">
        もしアプリケーションに単一のレイアウトしかない場合は、<code class="word-highlight text-sm"
          >&ltNuxtPage /&gt</code
        >コンポーネントを使用した<code class="word-highlight text-sm">app.vue</code>を使用することをおすすめします。
      </p>
      <ContentDoc path="views/layouts" class="markdown-body" />
      <p>
        もっと多くのレイアウトの方法を学びたい場合は、<NuxtLink
          to="/guide/directory-stracture/layouts"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >レイアウト</NuxtLink
        >のセクションで詳細情報を見つけることができます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">高度なHTMLテンプレートの拡張</h2>
      <p class="tips">もしhead要素を変更するだけであれば、SEOとメタ情報のセクションを参照してください。</p>
      <p>
        Nitroプラグインを追加して、HTMLテンプレートに完全な制御を持つことができます。Nitroプラグインはフックを登録することができます。
        <code class="word-highlight text-sm">render:html</code
        >フックのコールバック関数を使用すると、HTMLがクライアントに送信される前に変更することができます。
      </p>
      <ContentDoc path="views/advanced-html-template" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細については、「ガイド」 > 「さらに進む」 > 「<NuxtLink
          to="/guide/going-furture/lifecycle-hooks"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >フック</NuxtLink
        >」を参照してください。
      </p>
    </section>
  </div>
</template>
