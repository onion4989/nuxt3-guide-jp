<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">ルーティング</h1>
      <p>
        Nuxtの中核機能の1つは、ファイルシステムのルーターです。
        <code class="word-highlight text-sm">pages/</code
        >ディレクトリ内の各Vueファイルは、それぞれ対応するURL（またはルート）を作成し、ファイルの内容を表示します。
        各ページに対して動的インポートを使用することで、Nuxtはコード分割を活用して要求されたルートに必要な最小限のJavaScriptを提供します。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ページ</h2>
      <p>
        Nuxtのルーティングは<NuxtLink
          to="https://router.vuejs.org/"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >vue-router</NuxtLink
        >に基づいており、<code class="word-highlight text-sm">pages/</code
        >ディレクトリ内の各コンポーネントから、そのファイル名を基にルートが生成されます。
      </p>
      <p>このファイルシステムルーティングは、名前付け規則を使用して動的でネストされたルートを作成します。</p>
      <ContentDoc path="routing/pages-diractory" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細については、「ガイド」 > 「ディレクトリ構築」 >
        「<NuxtLink
          to="/guide/directory-stracture/pages"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >ページ</NuxtLink
        >」を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ナビゲーション</h2>
      <p>
        <code class="word-highlight text-sm">&ltNuxtLink&gt</code
        >コンポーネントは、ページ間をリンクするために使用されます。（<code class="word-highlight text-sm">href</code>属性である<code class="word-highlight text-sm"
          >&lta&gt</code
        >タグをレンダリングします）。
        アプリケーションがハイドレート（静的なウェブページを動的なものに変換する手法）されると、ブラウザのURLを更新することでJavaScriptが実行されます。
        これにより、ページのリフレッシュ（更新）が防止され、アニメーション付きの遷移が可能となります。
      </p>
      <ContentDoc path="routing/navigation" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細については「API > Components >
        <NuxtLink
          to="https://nuxt.com/docs/api/components/nuxt-link"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Nuxt Link</NuxtLink
        >」のドキュメントを参照してください。
      </p>
    </section>

    <section>
      <h1 class="text-3xl font-bold">ルートパラメータ</h1>
      <p>
        <code class="word-highlight text-sm">useRoute()</code>は、<code class="word-highlight text-sm"
          >&ltscript setup&gt</code
        >ブロックや Vue コンポーネントの<code class="word-highlight text-sm">setup()</code>
        メソッド内で使用して、現在のルートの詳細にアクセスするために利用することができます。
      </p>
      <ContentDoc path="routing/pages-parameters" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細については「API > Composables >
        <NuxtLink
          to="https://nuxt.com/docs/api/composables/use-route"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Use Route</NuxtLink
        >」のドキュメントを参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ルートミドルウェア</h2>
      <p>
        Nuxtは、アプリケーション全体で使用できるカスタマイズ可能なルートミドルウェアフレームワークを提供しており、
        特定のルートに移動する前に実行したいコードを抽出するのに最適です。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-400 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          ルートミドルウェアは、NuxtアプリケーションのVueパート内で実行されます。
          名前は似ていますが、ルートミドルウェアはサーバーミドルウェアとは異なり、Nitro serverで実行されます。
          ルートミドルウェアは、クライアントサイドのルーティングに関連する処理を実行するために使用されます。
        </div>
      </div>
      <p>ルートミドルウェアには3種類あります:</p>
      <ul>
        <li>匿名（またはインライン）ルートミドルウェアは、それらが使用されるページ内で直接定義されます。</li>
        <li>
          名前付きルートミドルウェアは、<code class="word-highlight text-sm">middleware/</code>
          ディレクトリに配置され、ページで使用されるときに非同期インポート経由で自動的に読み込まれます。（注意:
          ルートミドルウェアの名前はケバブケースに正規化されるため、<code class="word-highlight text-sm"
            >someMiddleware</code
          >は<code class="word-highlight text-sm">some-middleware</code>となります。）
        </li>
        <li>
          グローバルなルートミドルウェアは、<code class="word-highlight text-sm">middleware/</code
          >ディレクトリに配置されます（.global
          のサフィックスが付いています）し、すべてのルート変更時に自動的に実行されます。
        </li>
      </ul>
      <p><code class="word-highlight text-sm">/dashboard</code>ページを保護するための認証ミドルウェアの例です:</p>
      <ContentDoc path="routing/middleware" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は「Guide > Directory Structure >
        <NuxtLink
          to="https://nuxt.com/docs/guide/directory-structure/middleware"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Middleware</NuxtLink
        >」を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ルートの検証（Route Validation）</h2>
      <p>
        Nuxtでは、対象のページのscript内に<code class="word-highlight text-sm">definePageMeta</code> -
        <code class="word-highlight text-sm">validate</code>プロパティを使用することで検証できます。
      </p>
      <p>
        <code class="word-highlight text-sm">validate</code>プロパティは、ルートを引数として受け取ります。
        このプロパティでは、このページでレンダリングするための有効なルートかどうかを判定するために、真偽値を返すことができます。
        もしfalseであり、他の一致が見つからない場合は、404エラーとなります。 また、直接的に<code
          class="word-highlight text-sm"
          >statusCode/statusMessage</code
        >を持つオブジェクトを返すことで、エラーを即座に返却することもできます（他の一致はチェックされません）。
      </p>
      <p>もしより複雑なユースケースがある場合は、代わりに匿名のルートミドルウェアを使用することができます。</p>
      <ContentDoc path="routing/validation" class="markdown-body" />
    </section>
  </div>
</template>
