<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">ミドルウェア ディレクトリ</h1>
      <p>
        Nuxtはカスタマイズ可能なルートミドルウェアフレームワークを提供しており、アプリケーション全体で使用できます。特定のルートに移動する前に実行したいコードを抽出するのに最適です。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          ルートミドルウェアは、NuxtアプリケーションのVue部分内で実行されます。名前が似ているものの、これらはアプリケーションのNitroサーバーパートで実行されるサーバーミドルウェアとは全く異なります。
        </div>
      </div>
      <p>ルートミドルウェア(route middleware)には3種類あります:</p>
      <ul class="list-decimal">
        <li class="pb-5">
          <div class="font-bold underline decoration-dashed underline-offset-4 decoration-gray-300 mx-1 mb-1">
            匿名（またはインライン）ルートミドルウェア
          </div>
          使用されるページに直接定義されるミドルウェアです。
        </li>
        <li class="pb-5">
          <div class="font-bold underline decoration-dashed underline-offset-4 decoration-gray-300 mx-1 mb-1">
            名前付きのルートミドルウェア
          </div>
          middleware/ディレクトリに配置され、ページで使用される際に非同期インポート経由で自動的に読み込まれます。（注意：ルートミドルウェアの名前はケバブケースに正規化されるため、someMiddlewareはsome-middlewareになります。）
        </li>
        <li class="pb-5">
          <div class="font-bold underline decoration-dashed underline-offset-4 decoration-gray-300 mx-1 mb-1">
            グローバルルートミドルウェア
          </div>
          middleware/ディレクトリに配置され（.global接尾辞を持つ）、すべてのルート変更時に自動的に実行されます。
        </li>
      </ul>
      <p>最初の2つのルートミドルウェアは、definePageMeta内で定義することができます。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">フォーマット</h2>
      <p>ルートミドルウェアは、現在のルートと次のルートを引数として受け取るナビゲーションガードです。</p>
      <ContentDoc path="guide/directry-stracture/middleware/format" class="markdown-body" />
      <p>Nuxtは、ミドルウェアから直接返すことができる2つのグローバルに利用可能なヘルパーを提供しています。</p>
      <ul class="list-decimal">
        <li class="pb-5">
          <div class="font-bold">navigateTo</div>
          与えられたルートにリダイレクトします。プラグインやミドルウェアの内部で使用することができます。また、ページナビゲーションを行うために直接呼び出すこともできます。
          <hr class="w-100 divide-y divide-gray-700 my-1" />
          <div class="text-xs">
            navigateTo (to: RouteLocationRaw | undefined | null, options?: { replace: boolean, redirectCode: number,
            external: boolean })
          </div>
        </li>
        <li class="pb-5">
          <div class="font-bold">abortNavigation</div>
          ナビゲーションを中止し、オプションでエラーメッセージを指定します。
          <hr class="w-100 divide-y divide-gray-700 my-1" />
          <div class="text-xs">abortNavigation (err?: string | Error)</div>
        </li>
      </ul>
      <p>
        Vue
        Routerのドキュメントのナビゲーションガードとは異なり、Nuxtのルートミドルウェアでは第3のnext()引数は渡されず、リダイレクトやルートのキャンセルはミドルウェアから値を返すことで処理されます。
      </p>
      <ul class="list-decimal">
        <li class="pb-5">
          「nothing」は、ナビゲーションをブロックせず、次のミドルウェア関数があればそちらに移動し、ない場合はルートのナビゲーションを完了します。
        </li>
        <li class="pb-5">
          return navigateTo('/')またはreturn navigateTo({ path: '/'
          })は、与えられたパスにリダイレクトします。もしリダイレクトがサーバーサイドで発生する場合、リダイレクトコードは302
          Foundに設定されます。
        </li>
        <li class="pb-5">
          return navigateTo('/', { redirectCode: 301
          })は、与えられたパスにリダイレクトします。もしリダイレクトがサーバーサイドで発生する場合、リダイレクトコードは301
          Moved Permanentlyに設定されます。
        </li>
      </ul>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>「ドキュメント > API > ユーティリティ > ナビゲート」を参照する。</div>
      </div>
      <ul>
        <li>return abortNavigation()は、現在のナビゲーションを中止します。</li>
        <li>return abortNavigation(error)は、エラーを伴う形で現在のナビゲーションを拒否します。</li>
      </ul>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>「ドキュメント > API > ユーティリティ > ナビゲーション中止」を参照する。</div>
      </div>
      <div class="bg-yellow-500 border border-orange-200 text-sm rounded-md my-4 p-4" role="alert">
        <span class="sr-only">Info</span>
        以下のヘルパー関数を使用してリダイレクトを行ったり、ナビゲーションを中止したりすることをおすすめします。vue-routerのドキュメントに記載されている他の返り値も動作するかもしれませんが、将来的に互換性のない変更が発生する可能性があります。
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ミドルウェアの実行順序</h2>
      <p>ミドルウェアは以下の順序で実行されます:</p>
      <ul class="list-decimal">
        <li>グローバルミドルウェア</li>
        <li>ページに定義されたミドルウェアの順序（複数のミドルウェアが配列構文で宣言されている場合）</li>
      </ul>
      <p>例えば、以下のようなミドルウェアとコンポーネントがあると仮定します:</p>
      <ContentDoc path="guide/directry-stracture/middleware/define-pagemeta-to-from" class="markdown-body" />
      <p>以下の順序でミドルウェアが実行されることが予想されます:</p>
      <ul class="list-decimal">
        <li>analytics.global.ts</li>
        <li>setup.global.ts</li>
        <li>Custom inline middleware</li>
        <li>auth.ts</li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">グローバルミドルウェアの順序付け</h2>
      <p>デフォルトでは、グローバルミドルウェアはファイル名に基づいてアルファベット順に実行されます。</p>
      <p>
        ただし、特定の順序を定義したい場合もあります。たとえば、前述のシナリオでは、setup.global.tsがanalytics.global.tsよりも先に実行される必要があるかもしれません。その場合、グローバルミドルウェアの前に「アルファベット順」の番号を付けることをおすすめします。
      </p>
      <ContentDoc path="guide/directry-stracture/middleware/middleware-file-stracture" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          もし「アルファベット順の番号付け」が初めての方であれば、ファイル名は数値としてではなく文字列としてソートされることを覚えておいてください。例えば、
          <code class="text-sm inline-block rounded bg-gray-600 text-white p-1">10.new.global.ts</code> は
          <code class="text-sm inline-block rounded bg-gray-600 text-white p-1">2.new.global.ts</code>
          の前に来ます。このため、例では1桁の数字の前に0を付けることを示しています。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ミドルウェアの実行タイミング</h2>
      <p>
        もしサイトがサーバーレンダリングまたは生成されている場合、初期ページのミドルウェアはページがレンダリングされるときとクライアント上でも再度実行されます。これは、ミドルウェアがブラウザ環境を必要とする場合に必要になるかもしれません。例えば、生成されたサイトやキャッシュを積極的に行うサイト、またはローカルストレージから値を読み取る必要がある場合などです。
      </p>
      <p>しかしながら、もしこの動作を避けたい場合は、それが可能です:</p>
      <ContentDoc path="guide/directry-stracture/middleware/global-middleware-stracture" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ミドルウェアを動的に追加する</h2>
      <p>
        addRouteMiddleware()というヘルパー関数を使用して、グローバルまたは名前付きのルートミドルウェアを手動で追加することができます。これは、プラグイン内部などから行うことが可能です。
      </p>
      <ContentDoc path="guide/directry-stracture/middleware/default-define-nuxt-plugin" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">例: 名前付きのルートミドルウェア</h2>
      <ContentDoc path="guide/directry-stracture/middleware/route-middleware-file-stracture" />
      <p>ページファイル内で、このルートミドルウェアを参照することができます。</p>
      <ContentDoc path="guide/directry-stracture/middleware/auth" class="markdown-body" />
      <p>そのページへのナビゲーションが完了する前に、認証ルートミドルウェアが実行されます。</p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>「Docs > Examples > Routing > Middleware」をご参照ください。</div>
      </div>
    </section>
  </div>
</template>
