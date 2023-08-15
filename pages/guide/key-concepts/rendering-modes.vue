<script setup>
definePageMeta({
  layout: "guide",
});
</script>

<template>
  <div>
    <section>
      <h2 class="text-lg lg:text-3xl font-bold">レンダリングモード</h2>
      <p>
        Nuxtは異なるレンダリングモードをサポートしており、ユニバーサルレンダリング、クライアントサイドレンダリングだけでなく、ハイブリッドレンダリングやCDNエッジサーバー上でのアプリケーションのレンダリングも提供しています。
      </p>
      <p>
        ブラウザとサーバーの両方がJavaScriptコードを解釈して、Vue.jsコンポーネントをHTML要素に変換できます。このステップを「レンダリング」と呼びます。Nuxtはユニバーサルレンダリングとクライアントサイドレンダリングの両方をサポートしています。これらのアプローチには利点と欠点がありますが、それらについて説明します。
      </p>
      <p>
        デフォルトでは、Nuxtはユニバーサルレンダリングを使用して、より良いユーザーエクスペリエンス、パフォーマンス、および検索エンジンのインデックス化を提供しますが、1行の設定でレンダリングモードを切り替えることができます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ユニバーサルレンダリング</h2>
      <p>
        ブラウザがユニバーサル（サーバーサイド +
        クライアントサイド）レンダリングが有効なURLをリクエストすると、サーバーは完全にレンダリングされたHTMLページをブラウザに返します。ページが事前に生成されてキャッシュされているか、リクエスト時にリアルタイムでレンダリングされているかにかかわらず、Nuxtはある時点でサーバー環境でJavaScript（Vue.js）コードを実行し、HTMLドキュメントを生成します。ユーザーはクライアントサイドレンダリングとは対照的に、アプリケーションのコンテンツをすぐに取得します。このステップは、PHPやRubyアプリケーションによって実行される従来のサーバーサイドレンダリングに似ています。
      </p>
      <p>
        クライアントサイドレンダリングの利点であるダイナミックなインターフェースやページのトランジションを失わないようにするために、クライアント（ブラウザ）はHTMLドキュメントをダウンロードした後に、サーバーで実行されるJavaScriptコードをバックグラウンドで読み込みます。ブラウザは再度それを解釈します（したがってユニバーサルレンダリング）し、Vue.jsがドキュメントを制御し、対話的な機能を有効にします。これにより、サーバーサイドレンダリングの利点とクライアントサイドレンダリングの利点を組み合わせて、より優れたユーザーエクスペリエンスを提供します。
      </p>
      <p>静的なウェブページを動的なものに変換する手法を「ハイドレーション」と呼びます。</p>
      <p>
        ユニバーサルレンダリングにより、Nuxtアプリケーションはクイックなページ読み込み時間を提供しつつ、クライアントサイドレンダリングの利点を維持することができます。さらに、コンテンツがすでにHTMLドキュメントに含まれているため、クローラーがオーバーヘッドなしにインデックス化できます。
      </p>

      <div class="my-6">
        <h4 class="font-bold">サーバーサイドレンダリングの欠点：</h4>
        <ul class="list-disc ml-6">
          <li class="my-6">
            <div><strong>開発の制約</strong></div>
            サーバーとブラウザの環境は同じAPIを提供しないため、両方の環境でシームレスに動作するコードを書くのは難しいことがあります。幸いなことに、Nuxtはガイドラインと特定の変数を提供しており、コードがどちらの環境で実行されているかを判断するのに役立ちます。
          </li>
          <li class="my-6">
            <div><strong>コスト</strong></div>
            ページをリアルタイムでレンダリングするためには、サーバーが稼働している必要があります。これにより、従来のサーバーと同様に、毎月のコストが発生します。ただし、ブラウザがクライアントサイドのナビゲーションを引き継ぐユニバーサルレンダリングにより、サーバーコールが大幅に削減されます。エッジサイドレンダリングを活用することでコスト削減が可能です。
          </li>
        </ul>
      </div>

      <div class="my-6">
        <h4 class="font-bold">サーバーサイドレンダリングの利点：</h4>
        <ul class="list-disc ml-6">
          <li class="my-6">
            <div><strong>パフォーマンス</strong></div>
            ブラウザは静的コンテンツをJavaScriptによって生成されたコンテンツよりもはるかに速く表示できるため、ユーザーはページのコンテンツに直ちにアクセスできます。同時に、Nuxtはハイドレーションプロセスが行われる際にウェブアプリケーションの対話性を保持します。
          </li>
          <li class="my-6">
            <div><strong>検索エンジン最適化（SEO）</strong></div>
            ユニバーサルレンダリングはクラシックなサーバーアプリケーションとしてブラウザにページの全HTMLコンテンツを提供します。ウェブクローラーは直接ページのコンテンツをインデックスできるため、ユニバーサルレンダリングは迅速にインデックスしたいコンテンツには最適な選択肢です。
          </li>
        </ul>
      </div>

      <p>
        ユニバーサルレンダリングは非常に柔軟でほぼあらゆるユースケースに適しており、特にコンテンツに焦点を当てたウェブサイトに適しています。ブログ、マーケティングサイト、ポートフォリオ、eコマースサイト、マーケットプレイスなどが含まれます。
      </p>

      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          ハイドレーションミスマッチなしでVueコードを書くためのさらなる例については、Vueのドキュメントを参照してください。
        </div>
      </div>

      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          ブラウザのAPIに依存し、副作用を持つライブラリをインポートする場合は、それをインポートするコンポーネントがクライアントサイドでのみ呼び出されることを確認してください。バンドラーは副作用を持つモジュールを含むインポートをトリーシェイクしません。
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">クライアントサイドレンダリング</h3>
      <p>
        デフォルトでは、従来のVue.jsアプリケーションはブラウザ（またはクライアント）でレンダリングされます。その後、Vue.jsは現在のインターフェースを作成するための指示を含むすべてのJavaScriptコードをブラウザがダウンロードして解析した後にHTML要素を生成します。
      </p>

      <div class="my-6">
        <h4 class="font-bold">クライアントサイドレンダリングの利点</h4>
        <ul class="list-disc ml-6">
          <li class="my-4">
            <div><strong>開発速度</strong></div>
            クライアントサイドのみで作業する場合、サーバーの互換性を心配する必要がなくなります。たとえば、windowオブジェクトのようなブラウザ専用のAPIを使用することがあります。
          </li>
          <li class="my-4">
            <div><strong>コスト削減</strong></div>
            サーバーを実行することは、JavaScriptをサポートするプラットフォームで実行する必要があるため、インフラストラクチャのコストがかかります。クライアントのみのアプリケーションは、HTML、CSS、およびJavaScriptファイルがあれば、任意の静的サーバーでホストできます。
          </li>
          <li class="my-4">
            <div><strong>オフライン利用</strong></div>
            コードが完全にブラウザで実行されるため、インターネットが利用できない場合でも、アプリケーションはスムーズに動作し続けることができます。
          </li>
        </ul>
      </div>

      <div class="my-6">
        <h4 class="font-bold">クライアントサイドレンダリングの欠点</h4>
        <ul class="list-disc ml-6">
          <li class="my-4">
            <div><strong>パフォーマンス</strong></div>
            ユーザーは、ブラウザがJavaScriptファイルをダウンロード、解析、実行するのを待たなければなりません。ダウンロード部分にはネットワーク、解析および実行にはユーザーのデバイスによって時間がかかることがあり、ユーザーエクスペリエンスに影響を与える可能性があります。
          </li>
          <li class="my-4">
            <div><strong>検索エンジン最適化（SEO）</strong></div>
            クライアントサイドレンダリングで提供されるコンテンツのインデックス化と更新には、サーバー側でレンダリングされたHTMLドキュメントよりも時間がかかります。これは、前述のパフォーマンスの欠点と関連しています。検索エンジンのクローラーは、ページのインデックス化のためにインターフェースが完全にレンダリングされるのを最初の試行で待ちません。純粋なクライアントサイドレンダリングでは、コンテンツが表示されるまでおよび検索結果ページで更新されるまでに時間がかかる可能性があります。
          </li>
        </ul>
      </div>

      <p>
        クライアントサイドレンダリングは、インデックス化が必要でないか、ユーザーが頻繁に訪れる必要がある、非常にインタラクティブなウェブアプリケーションに適しています。ブラウザのキャッシュを活用して、SaaS、バックオフィスアプリケーション、オンラインゲームなど、後続の訪問時にダウンロードフェーズをスキップすることができます。
      </p>
      <p>
        Nuxtでは、<code class="word-highlight text-sm">nuxt.config.ts</code
        >ファイルでクライアントサイドのみのレンダリングを有効にすることができます。
      </p>
      <ContentDoc path="guide/keyconcept/rendering-modes/ssr-false" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          ssr:
          falseを使用する場合は、~/app/spa-loading-template.htmlにHTMLファイルを配置し、アプリがハイドレーションされるまでレンダリングされるローディング画面を作成してください。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ハイブリッドレンダリング</h2>
      <p>例: 間違った例</p>
      <p>
        ハイブリッドレンダリングは、ルートルールを使用して異なるキャッシュルールをルートごとに設定し、特定のURLへの新しいリクエストに対してサーバーがどのように応答するかを決定します。
      </p>
      <p>
        以前は、Nuxtアプリケーションのすべてのルート/ページとサーバーは、同じレンダリングモード（ユニバーサルまたはクライアントサイド）を使用する必要がありました。しかし、さまざまなケースでは、一部のページをビルド時に生成し、他のページはクライアントサイドレンダリングを行う必要があります。例えば、コンテンツのウェブサイトに管理セクションがあるとします。すべてのコンテンツページは主に静的で一度だけ生成される必要がありますが、管理セクションは登録が必要であり、より動的なアプリケーションのように振る舞う必要があります。
      </p>
      <p>
        Nuxt
        3には、ルートルールとハイブリッドレンダリングのサポートが含まれています。ルートルールを使用すると、nuxtルートのグループに対してルールを定義し、レンダリングモードを変更したり、ルートに基づいてキャッシュ戦略を割り当てたりすることができます！
      </p>
      <p>
        Nuxtサーバーは、自動的に対応するミドルウェアを登録し、Nitroキャッシュレイヤーを使用してルートをキャッシュハンドラーでラップします。
      </p>
      <h4>例:</h4>
      <ContentDoc path="guide/keyconcept/rendering-modes/hybrid-rendering" class="markdown-body" />
      <p>使用できる異なるプロパティは以下の通りです：</p>
      <ul class="list-disc ml-6">
        <li class="my-4">
          <div><strong>redirect: string</strong></div>
          サーバーサイドのリダイレクトを定義します。
        </li>
        <li class="my-4">
          <div><strong>ssr: boolean</strong></div>
          アプリケーションの一部のセクションに対してサーバーサイドレンダリングを無効にし、ssr: false
          を使用してSPAのみにします。
        </li>
        <li class="my-4">
          <div><strong>cors: boolean</strong></div>
          cors: true
          を使用すると、自動的にcorsヘッダーが追加されます。ヘッダーをオーバーライドして出力をカスタマイズすることもできます。
        </li>
        <li class="my-4">
          <div><strong>headers: object</strong></div>
          サイトの特定のセクションに特定のヘッダーを追加します。たとえば、アセットに対してヘッダーを設定することができます。
        </li>
        <li class="my-4">
          <div><strong>swr: number</strong></div>
          サーバーレスポンスにキャッシュヘッダーを追加し、設定可能なTTL（有効期限）でサーバーまたはリバースプロキシでキャッシュします。Nitroのnode-serverプリセットはフルレスポンスをキャッシュできます。TTLが切れた場合、キャッシュされたレスポンスが送信され、ページがバックグラウンドで再生成されます。
        </li>
        <li class="my-4">
          <div><strong>isr: boolean</strong></div>
          swrと同様の動作ですが、これをサポートするプラットフォーム（現在はNetlifyまたはVercel）のCDNキャッシュにレスポンスを追加することができます。
        </li>
        <li class="my-4">
          <div><strong>prerender: boolean</strong></div>
          ビルド時にルートをプリレンダリングし、それらをビルドに静的アセットとして含めます。
        </li>
        <li class="my-4">
          <div><strong>experimentalNoScripts: boolean</strong></div>
          サイトの特定のセクションで、NuxtスクリプトやJSリソースヒントのレンダリングを無効にします。
        </li>
      </ul>
      <p>
        可能な限り、ルートルールはデプロイメントプラットフォームのネイティブルールに自動的に適用され、最適なパフォーマンスが得られます（現在はNetlifyとVercelがサポートされています）。
      </p>
      <div class="bg-yellow-500 border border-orange-200 text-sm rounded-md my-4 p-4" role="alert">
        <span class="sr-only">Info</span>nuxt
        generateを使用する場合、ハイブリッドレンダリングは利用できないことに注意してください。
      </div>
      <p>
        例:<NuxtLink to="https://github.com/danielroe/nuxt-vercel-isr"
          >ハイブリッドレンダリングを備えたNuxtとVercelの統合</NuxtLink
        >
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">エッジサイドレンダリング</h2>
      <p>
        エッジサイドレンダリング（ESR）は、Nuxt 3で導入された強力な機能であり、Content Delivery
        Network（CDN）のエッジサーバーを介してNuxtアプリケーションのレンダリングをユーザーにより近い場所で行うことができます。ESRを活用することで、パフォーマンスの向上とレイテンシーの削減が実現され、より優れたユーザーエクスペリエンスが提供されます。
      </p>
      <p>
        ESRにより、レンダリングプロセスはネットワークの「エッジ」、つまりCDNのエッジサーバーにプッシュされます。ESRは、実際のレンダリングモードよりもむしろデプロイメントの対象となります。
      </p>
      <p>
        ページのリクエストが行われると、オリジナルのサーバーまで直接進む代わりに、最も近いエッジサーバーでリクエストがインターセプトされます。このサーバーはページのためのHTMLを生成し、それをユーザーに送信します。このプロセスにより、データが移動する物理的な距離が最小限に抑えられ、レイテンシーが低減し、ページの読み込みが高速化されます。
      </p>
      <p>
        エッジサイドレンダリングは、Nuxt
        3を支えるサーバーエンジンであるNitroのおかげで可能になります。NitroはNode.js、Deno、Cloudflare
        Workersなど、さまざまなプラットフォームに対応しています。
      </p>
      <p class="font-bold">ESRを利用できる現在のプラットフォームは以下のとおりです：</p>
      <ul class="list-disc ml-6">
        <li class="my-4">
          <div><strong>Cloudflare Pages</strong></div>
          gitの統合とnuxt buildコマンドを使用してゼロ設定でESRを利用できます。
        </li>
        <li class="my-4">
          <div><strong>Lagon</strong></div>
          NITRO_PRESET=lagon npx nuxt buildコマンドを使用してESRを利用できます。
        </li>
        <li class="my-4">
          <div><strong>Vercel Edge Functions</strong></div>
          nuxt buildコマンドとNITRO_PRESET=vercel-edge環境変数を使用してESRを利用できます。
        </li>
        <li class="my-4">
          <div><strong>Netlify Edge Functions</strong></div>
          nuxt buildコマンドとNITRO_PRESET=netlify-edge環境変数を使用してESRを利用できます。
        </li>
      </ul>
      <p>ESRを使用する場合、ハイブリッドレンダリングはルートルールとともに使用できることに注意してください。</p>
      <p>上記に挙げたプラットフォームに展開されたオープンソースの例を探索できます：</p>
      <ul class="list-disc ml-6">
        <li class="my-4">
          <div><strong>Nuxt Todos Edge:</strong></div>
          ユーザー認証、SSR、およびSQLiteを備えたタスク管理アプリケーションです。
        </li>
        <li class="my-4">
          <div><strong>Atinotes:</strong></div>
          編集可能なウェブサイトで、ユニバーサルレンダリングが使用されています。
        </li>
      </ul>
    </section>
  </div>
</template>
