<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">Deployment / ディプロイ（展開）</h1>
      <p>
        Nuxtアプリケーションは、Node.jsサーバーにデプロイしたり、静的ホスティング用にプリレンダリングしたり、サーバーレスまたはエッジ（CDN）環境にデプロイしたりすることができます。
      </p>
      <p class="tips">
        <span class="sr-only">Info</span>
        Nuxt3をサポートするクラウド・プロバイダーをお探しの場合は、<NuxtLink
          to="https://nuxt.com/docs/getting-started/deployment#supported-hosting-providers"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >こちらリスト</NuxtLink
        >を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Node.js サーバー</h2>
      <p>Nitroを使用したNode.jsサーバープリセットを探索して、どんなNodeホスティングでもデプロイしてください。</p>
      <ul class="list-disc ml-5">
        <li>指定されていない場合や自動検出された場合のデフォルトの出力形式</li>
        <li>
          最適なコールドスタートのタイミングを実現するため、要求をレンダリングするために必要なチャンクのみを読み込む
        </li>
        <li>NuxtアプリをどんなNode.jsホスティングにもデプロイする際に便利</li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">エントリーポイント</h2>
      <ul>
        <li>
          Nodeサーバープリセットを使用してnuxt
          buildを実行すると、実行可能なNodeサーバーを起動するエントリーポイントが生成されます。
        </li>
        <ContentDoc path="deployment/node-js-server-entry-point" class="markdown-body" />
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">実行時のデフォルト設定</h2>
      <p>このプリセットは、以下の実行時環境変数を尊重します。</p>
      <ul class="list-disc">
        <li>NITRO_PORT or PORT (defaults to 3000)</li>
        <li>NITRO_HOST or HOST (defaults to '0.0.0.0')</li>
        <li>
          NITRO_SSL_CERTとNITRO_SSL_KEY -
          両方が存在する場合、これによりサーバーがHTTPSモードで起動します。ほとんどの場合、これはテスト以外に使用すべきではなく、NitroサーバーはSSLを終端させるような逆プロキシ（例:nginxやCloudflareなど）の後ろで実行されるべきです。
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">PM2の使用</h2>
      <p>
        PM2（Node.jsのプロセス管理ツール。アプリケーション毎の起動・停止の管理やログ管理、CPUやメモリなどモニタリングができるプロセス管理のアプリケーションです。サーバーなどが停止した時にNodeアプリケーションを自動で再起動させることもできます。）を使用する場合は、ecosystem.config.jsを使用します。
      </p>
      <ContentDoc path="deployment/using-pm2" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">クラスターモードの使用</h2>
      <p>
        Node.jsの<NuxtLink
          to="https://nodejs.org/dist/latest/docs/api/cluster.html"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >クラスターモジュール</NuxtLink
        >を使用して、マルチプロセスのパフォーマンスを活用するために、<code class="word-highlight text-sm"
          >NITRO_PRESET=node_cluster</code
        >を使用できます。
      </p>
      <p>デフォルトでは、ワークロードはラウンドロビン戦略を用いてワーカーに分散されます。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">詳細を学ぶ</h2>
      <p>
        <NuxtLink
          to="https://nitro.unjs.io/deploy/node"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >「node-server」プリセットのNitroドキュメンテーションで詳細を読む。</NuxtLink
        >
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">静的ホスティング</h2>
      <p>Nuxtアプリケーションをどんな静的ホスティングサービスにもデプロイする方法は2つあります：</p>
      <ul class="list-disc">
        <li>
          Static site generation (SSG) with
          <code class="word-highlight text-sm">ssr: true</code>
          は、アプリケーションのルートをビルド時にプリレンダリングします。（<code class="word-highlight text-sm"
            >nuxt generate</code
          >を実行すると、これがデフォルトの動作となります。）また、<code class="word-highlight text-sm">/200.html</code>
          と <code class="word-highlight text-sm">/404.html</code>
          のシングルページアプリのフォールバックページも生成されます。これにより、クライアント側で動的なルートや404エラーをレンダリングすることができます。（ただし、静的ホストでこれを設定する必要があるかもしれません。）
        </li>
        <li>
          あるいは、<code class="word-highlight text-sm">ssr: false</code
          >（静的なシングルページアプリ）でサイトをプリレンダリングすることもできます。これにより、通常Vueアプリがレンダリングされる場所には空の
          <code class="word-highlight text-sm">&lt;div id="__nuxt"&gt;&lt;/div&gt;</code
          >のHTMLページが生成されます。サイトをプリレンダリングする際の多くの利点を失うことになりますが、サーバー側でレンダリングできない部分（あれば）を<code
            class="word-highlight text-sm"
            >&lt;ClientOnly&gt;</code
          >でラップして使用することをお勧めします。
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">クロールベースのプリレンダリング</h2>
      <p>
        <code class="word-highlight text-sm">nuxigenerate</code>コマンドを使用して、Nitro
        クローラーを使用してアプリケーションを構築し、事前レンダリングします。 このコマンドは、<code
          class="word-highlight text-sm"
          >nitro.static</code
        >オプションを <code class="word-highlight text-sm">true</code>に設定した<code class="word-highlight text-sm"
          >nuxt build</code
        >、または<code class="word-highlight text-sm">nuxt build --prerender</code>を実行した場合と似ています。
      </p>
      <ContentDoc path="deployment/craw-based-pre-rendering" class="markdown-body" />
      <p>
        それでおしまい！ これで、.output/public ディレクトリを静的ホスティング サービスにデプロイしたり、npxserve
        .output/public を使用してローカルでプレビューしたりできるようになりました。
      </p>
      <p>Nitro クローラーの動作:</p>
      <ul class="list-decimal my-4">
        <li>
          アプリケーションのルート ルート (/)、~/pages ディレクトリ内の非動的ページ、および nitro.prerender.routes
          配列内のその他のルートの HTML を読み込みます。
        </li>
        <li>静的に提供されるように、HTML と payload.json を ~/.output/public/ ディレクトリに保存します。</li>
        <li>HTML 内のすべてのアンカー タグ (&lt;a href="..."&gt;) を見つけて、他のルートに移動します。</li>
        <li>クロールするアンカー タグがなくなるまで、見つかったアンカー タグごとに手順 1 ～ 3 を繰り返します。</li>
      </ul>
      <p>
        検出可能なページにリンクされていないページは自動的に事前レンダリングできないため、これを理解することが重要です。
      </p>
      <p class="tips">
        <span class="sr-only">Info</span>
        <NuxtLink
          to="https://nuxt.com/docs/api/commands/generate#nuxi-generate"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >nuxi generated</NuxtLink
        >コマンドの詳細を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">選択的プリレンダリング</h2>
      <p>
        Nitro がビルド中にフェッチして事前レンダリングするルートを手動で指定することも、<code
          class="word-highlight text-sm"
          >nuxt.config</code
        >ファイルの<code class="word-highlight text-sm">/dynamic</code>
        のように事前レンダリングしたくないルートを無視することもできます。
      </p>
      <ContentDoc path="deployment/selective-pre-rendering" />
      <p>
        これを<code class="word-highlight text-sm">crawLinks</code>オプションと組み合わせて、<code
          class="word-highlight text-sm"
          >/sitemap.xml</code
        >や<code class="word-highlight text-sm">/robots.txt</code>
        など、クローラーが検出できないルートのセットを事前にレンダリングできます。
      </p>
      <ContentDoc path="deployment/selective-experimental" class="markdown-body" />
      <p>
        <code class="word-highlight text-sm">nitro.prerender</code>を<code class="word-highlight text-sm">true</code
        >に設定することは、<code class="word-highlight text-sm">nitro.prerender.crawlLinks</code>を<code
          class="word-highlight text-sm"
          >true</code
        >に設定することと似ています。
      </p>
      <p class="tips">
        <span class="sr-only">Info</span>
        <NuxtLink
          to="https://nitro.unjs.io/config#prerender"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >プリレンダリング</NuxtLink
        >の詳細については、Nitro のドキュメントを参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">クライアントサイドのみのレンダリング</h2>
      <p>
        もしルートをプリレンダリングしたくない場合、静的ホスティングを利用する別の方法は、nuxt.configファイルで<code
          class="word-highlight text-sm"
          >ssr</code
        >プロパティを<code class="word-highlight text-sm">false</code>に設定することです。その後、<code
          class="word-highlight text-sm"
          >nuxi generate</code
        >コマンドは、<code class="word-highlight text-sm">.output/public/index.html</code
        >エントリーポイントと、クラシックなクライアントサイドのVue.jsアプリケーションのようなJavaScriptバンドルを出力します。
      </p>
      <ContentDoc path="deployment/client-side-only-rendering" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">プリセット</h2>
      <p>
        Node.jsサーバーや静的ホスティングサービスに加えて、Nuxt
        3プロジェクトはいくつかのよくテストされたプリセットと最小限の設定でデプロイすることができます。
      </p>
      <p>
        <code class="word-highlight text-sm">nuxt.config</code
        >ファイルで望むプリセットを明示的に設定することができます。
      </p>
      <ContentDoc path="deployment/presets" class="markdown-body" />
      <p>
        全ての可能なデプロイメントプリセットとプロバイダーについては、<NuxtLink
          to="https://nitro.unjs.io/deploy"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Nitroのデプロイメント</NuxtLink
        >をチェックしてください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">サポートしているホスティングプロバイダー</h2>
      <p>Nuxt 3は最小限の設定でいくつかのクラウドプロバイダーにデプロイすることができます。</p>
      <ul class="list-disc">
        <li>AWS</li>
        <li>Azure</li>
        <li>Cleavr</li>
        <li>Cloudflare</li>
        <li>DigitalOcean</li>
        <li>Edgio</li>
        <li>Firebase</li>
        <li>Heroku</li>
        <li>Lagon</li>
        <li>Netlify</li>
        <li>Render</li>
        <li>Stormkit</li>
        <li>Vercel</li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">CDN Proxy</h2>
      <p>
        ほとんどの場合、NuxtはNuxt自体によって生成または作成されていないサードパーティのコンテンツと連携することができます。ただし、時にはそのようなコンテンツが問題を引き起こすことがあります。特に、Cloudflareの「Minification
        and Security Options」が該当します。
      </p>
      <p>
        そのため、Cloudflareで次のオプションがチェックされていないことを確認する必要があります。そうでないと、不必要な再レンダリングやハイドレーションエラーが本番のアプリケーションに影響を及ぼす可能性があります。
      </p>
      <ul class="list-decimal">
        <li>Speed > Optimization > Auto Minify: Uncheck JavaScript, CSS and HTML</li>
        <li>Speed > Optimization > Disable "Rocket Loader™"</li>
        <li>Speed > Optimization > Disable "Mirage"</li>
        <li>Scrape Shield > Disable "Email Address Obfuscation"</li>
        <li>Scrape Shield > Disable "Server-side Excludes"</li>
      </ul>
    </section>
  </div>
</template>
