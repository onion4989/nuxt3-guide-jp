<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">データの取得（Data fetching）</h1>
      <p>
        Nuxtには、ブラウザやサーバー環境でデータの取得を行うための2つのコンポーザブルと組み込みライブラリが用意されています。<br />用意されているものは以下の通りです:
      </p>
      <ul class="list-disc ml-5">
        <li>
          <code class="word-highlight text-sm">useFetch</code>: ブラウザ環境でデータの取得を行うためのコンポーザブル
        </li>
        <li>
          <code class="word-highlight text-sm">useAsyncData</code>: サーバー環境でデータの取得を行うためのコンポーザブル
        </li>
        <li>
          <code class="word-highlight text-sm">$fetch</code>:
          ブラウザまたはサーバー環境でデータの取得を行うための組み込みライブラリ
        </li>
      </ul>
      <p>
        これらのコンポーザブルと組み込みライブラリを組み合わせることで、クロス環境（サーバーとブラウザ間）の互換性が確保され、効率的なキャッシュが行われ、重複したネットワークリクエストが回避されます。
      </p>
      <p>
        <code class="word-highlight text-sm">useFetch</code
        >は、コンポーネントのセットアップ関数でデータ取得を処理するための最も直感的な方法です。
      </p>
      <p>
        一方、ユーザーの操作に基づいてネットワークリクエストを行いたい場合は、ほとんどの場合、<code
          class="word-highlight text-sm"
          >$fetch</code
        >が適切なハンドラです。
      </p>
      <p>
        もっと細かい制御が必要な場合は、<code class="word-highlight text-sm">useAsyncData</code>と<code
          class="word-highlight text-sm"
          >$fetch</code
        >を独立して使用することもできます。
      </p>
      <p>
        これらの2つのコンポーザブルは、共通のオプションとパターンを共有しており、最後のセクションで詳しく説明します。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">特定のコンポーザブルを使用する理由は何でしょうか？</h2>
      <p>
        Nuxtのようなフレームワークを使用する場合、クライアントとサーバーの環境の両方で呼び出しとページのレンダリングを行う必要があり、いくつかの課題に取り組む必要があります。そのため、Nuxtはクエリをラップするためのコンポーザブルを提供しています。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ネットワーク呼び出しの重複</h2>
      <p>
        <code class="word-highlight text-sm">useFetch</code>と<code class="word-highlight text-sm">useAsyncData</code
        >のコンポーザブルは、サーバー上でAPIコールが行われた後、データが適切にクライアントに転送されることを保証します。
        このJavaScriptオブジェクトは、<code class="word-highlight text-sm">useNuxtApp().payload</code
        >を介してアクセスでき、ブラウザでコードが実行される際に同じデータを再取得するのを避けるために使用されます。
      </p>
      <p class="tips">
        <span class="sr-only">Info</span>
        <NuxtLink to="https://devtools.nuxtjs.org/" class="underline decoration-dashed decoration-1 underline-offset-4"
          >Nuxt DevTools</NuxtLink
        >を使用して、このデータをペイロードタブで確認することができます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">効果的なキャッシュ</h2>
      <p>
        <code class="word-highlight text-sm">useFetch</code>と<code class="word-highlight text-sm">useAsyncData</code
        >は、APIのレスポンスをキャッシュするためにキーを使用し、API呼び出しをさらに減らすことができます。
        キャッシュを無効化する方法については後述で説明します。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">一時停止</h2>
      <p>
        NuxtはVueの<code class="word-highlight text-sm">&lt;Suspense&gt;</code
        >コンポーネントを内部で使用しており、すべての非同期データがビューで利用可能になるまでのナビゲーションを防止します。
        データの取得に関連するコンポーザブルを使用することで、パフォーマンスに最適な方法を個別の呼び出しに応じて選択することができます。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-400 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          これらのコンポーザブルは自動的にインポートされ、セットアップ関数やライフサイクルフックで使用することができます。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">useFetch</h2>
      <p>
        <code class="word-highlight text-sm">useFetch</code>は、データの取得を行うための最も直接的な方法です。
        これは、<code class="word-highlight text-sm">useAsyncData</code>コンポーザブルと<code
          class="word-highlight text-sm"
          >$fetch</code
        >ユーティリティをラップしたものです。
      </p>
      <ContentDoc path="fetch/usefetch" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は「Docs > API > コンポーザブル >
        <NuxtLink
          to="https://nuxt.com/docs/api/composables/use-fetch"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Use Fetch</NuxtLink
        >」を参照してください。
      </p>
      <p class="tips">
        <span class="sr-only">Info</span>または、「Docs > Examples > Features >
        <NuxtLink
          to="https://nuxt.com/docs/examples/features/data-fetching"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Data Fetching</NuxtLink
        >」から、実際のサンプルを確認しながら学ぶことができます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">$fetch</h2>
      <p>
        <code class="word-highlight text-sm">ofetch</code>ライブラリは、fetch
        APIをベースにしており、それに便利な機能を追加しています:
      </p>
      <ul class="list-disc ml-5">
        <li>ブラウザ、Node、ワーカー環境で同じように動作します</li>
        <li>自動的なレスポンスの解析</li>
        <li>エラーハンドリング</li>
        <li>自動リトライ</li>
        <li>インターセプター</li>
      </ul>
      <p class="tips">
        <span class="sr-only">Info</span>
        <NuxtLink
          to="https://github.com/unjs/ofetch"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >ofetchの完全なドキュメントを読む</NuxtLink
        >
      </p>
      <p>
        ofetchはNuxtによって自動的にインポートされ、<code class="word-highlight text-sm">useFetch</code
        >コンポーザブルで使用されます。
      </p>
      <p>
        または、<code class="word-highlight text-sm">$fetch</code
        >エイリアスを使用してアプリケーション全体で使用することもできます。
      </p>
      <ContentDoc path="fetch/fetch" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-400 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-100"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          ただし、$fetchだけを使用する場合、このページの最初のセクションで説明されている利点が得られないことに注意してください。
          データをイベントハンドラに送信する場合や、クライアントサイドのロジックを実行する場合、またはuseAsyncDataと組み合わせて使用する場合には、$fetchを使用することをおすすめします。
        </div>
      </div>

      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は「Docs > API > Utils >
        <NuxtLink
          to="https://nuxt.com/docs/api/utils/dollarfetch"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Dollarfetch</NuxtLink
        >」を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">useAsyncData</h2>
      <p>
        <code class="word-highlight text-sm">useFetch</code>はURLを受け取り、そのデータを取得します。一方、<code
          class="word-highlight text-sm"
          >useAsyncData</code
        >はより複雑なロジックを持つ場合があります。
        <code class="word-highlight text-sm">useFetch(url)</code
        >は、ほとんどの一般的な使用例に対する開発者体験を向上させるためのシンタックスシュガーであり、ほぼ<code
          class="word-highlight text-sm"
          >useAsyncData(url, () => $fetch(url))</code
        >と同等です。
      </p>
      <p>
        <code class="word-highlight text-sm">useFetch</code
        >コンポーザブルが適切でない場合もあります。例えば、CMSやサードパーティが独自のクエリレイヤーを提供している場合などです。
        このような場合、<code class="word-highlight text-sm">useAsyncData</code
        >を使用して呼び出しをラップし、コンポーザブルが提供する利点を保持することができます。
      </p>
      <ContentDoc path="fetch/use-async-data" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-400 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-100"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          useAsyncDataの最初の引数は、（2番目の引数であるクエリ関数のレスポンスを）キャッシュするためのユニークキーです。
          この引数は、クエリ関数を直接渡すことで無視することもできます。その場合、自動生成されます。
        </div>
      </div>

      <p class="tips">
        <span class="sr-only">Info</span> 詳細は「Docs > API > Composables >
        <NuxtLink
          to="https://nuxt.com/docs/api/composables/use-async-data"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Use Async Data</NuxtLink
        >」を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">オプション</h2>
      <p>
        <code class="word-highlight text-sm">useAsyncData</code>と<code class="word-highlight text-sm">useFetch</code
        >は、同じオブジェクト型を返却し、共通のオプションを使用することができます。
        これらのオプションを使用することで、ナビゲーションのブロック、キャッシュ、実行など、コンポーザブルの動作を制御することができます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Lazy</h2>
      <ContentDoc path="fetch/lazy" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は「Docs > API > Composables >
        <NuxtLink
          to="https://nuxt.com/docs/api/composables/use-lazy-fetch"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Use Lazy Fetch</NuxtLink
        >」を参照してください。
      </p>
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は「Docs > API > Composables >
        <NuxtLink
          to="https://nuxt.com/docs/api/composables/use-lazy-async-data"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Use Lazy Async Data</NuxtLink
        >」を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Client-only fetching</h2>
      <p>
        デフォルトでは、データをフェッチするコンポーザブルは、Vue の Suspense
        を使用して新しいページに移動する前に、非同期関数の解決を待機します。この機能は、<code
          class="word-highlight text-sm"
          >lazy</code
        >
        オプションを使用したクライアント側ナビゲーションでは無視できます。 その場合、<code
          class="word-highlight text-sm"
          >pending</code
        >の値を使用して読み込み状態を手動で処理する必要があります。
      </p>
      <ContentDoc path="fetch/client-only" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ペイロードのサイズを最小化する</h2>
      <ContentDoc path="fetch/minimize-playload" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-3xl font-bold">キャッシュと再取得</h2>
      <h3 class="text-lg lg:text-2xl font-bold my-4">Keys</h3>
      <p>
        <code class="word-highlight text-sm">useFetch</code>と<code class="word-highlight text-sm">useAsyncData</code
        >は、同じデータを再度取得しないためにキーを使用します。
      </p>
      <ul class="list-disc ml-5">
        <li>
          <code class="word-highlight text-sm">useFetch</code>では、提供されたURLをキーとして使用します。
          また、オプションオブジェクトとして最後の引数として渡されたキー値を使用することもできます。
        </li>
        <li>
          <code class="word-highlight text-sm">useAsyncData</code
          >では、最初の引数が文字列である場合、それをキーとして使用します。
          最初の引数がクエリを実行するハンドラ関数である場合、<code class="word-highlight text-sm">useAsyncData</code
          >のインスタンスのファイル名と行番号に固有のキーが自動的に生成されます。
        </li>
      </ul>
      <div
        class="flex p-4 mb-4 text-sm text-blue-400 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-100"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>キーを使用してキャッシュされたデータを取得するためには、useNuxtDataを使用します。</div>
      </div>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">リフレッシュと実行</h3>
      <p>
        データを手動でフェッチまたはリフレッシュしたい場合は、コンポーザブルが提供する<code
          class="word-highlight text-sm"
          >execute</code
        >または<code class="word-highlight text-sm">refresh</code>関数を使用します。
        （executeはrefreshとまったく同じ方法で機能しますが、<code class="word-highlight text-sm">immediate: false</code
        >の場合にセマンティックになります。）
      </p>
      <ContentDoc path="fetch/refresh-excute" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-400 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-100"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          グローバルにデータを再取得またはキャッシュを無効化するには、clearNuxtDataとrefreshNuxtDataを参照してください。
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">監視（Watch）</h3>
      <p>
        他のリアクティブな値が変更されるたびにフェッチ関数を再実行するには、<code class="word-highlight text-sm"
          >watch</code
        >オプションを使用します。
      </p>
      <ContentDoc path="fetch/watch" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ヘッダーとクッキーのパッシング</h2>
      <p>
        ブラウザで<code class="word-highlight text-sm">$fetch</code>を呼び出すときは、<code
          class="word-highlight text-sm"
          >cookie</code
        >などのユーザーのヘッダーがAPIに直接送信されます。 しかし、サーバーサイドレンダリング中には、<code
          class="word-highlight text-sm"
          >$fetch</code
        >リクエストはサーバー内で実行されるため、ユーザーのブラウザクッキーは含まれず、fetchのレスポンスからのクッキーも渡されません。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">クライアントのヘッダーをAPIに渡す</h2>
      <p>
        サーバーサイドからAPIにクッキーをアクセスおよびプロキシするために、<code class="word-highlight text-sm"
          >useRequestHeaders</code
        >を使用することができます。
      </p>
      <p>
        以下の例では、リクエスト ヘッダーを同形<code class="word-highlight text-sm">$fetch</code>呼び出しに追加して、API
        エンドポイントがユーザーによって最初に送信されたのと同じ Cookieヘッダーにアクセスできるようにします。
      </p>
      <ContentDoc path="fetch/pass-client-headers-api" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-400 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-100"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          外部のAPIのプロキシヘッダには注意してください。必要なヘッダのみを含めてください。
          すべてのヘッダをプロキシすることは安全ではなく、望ましくない動作を引き起こす可能性があります。
          以下はプロキシをするべきではない一般的なヘッダーのリストです。
          <ul class="list-disc ml-5">
            <li>host, accept</li>
            <li>content-length, content-md5, content-type</li>
            <li>x-forwarded-host, x-forwarded-port, x-forwarded-proto</li>
            <li>cf-connecting-ip, cf-ray</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">サーバーサイドのAPI呼び出しでクッキーをSSRレスポンスに含める</h2>
      <p>
        内部リクエストからクライアントに戻るなど、逆方向にCookieを渡したりプロキシしたりする場合は、これを自分で処理する必要があります。
      </p>
      <ContentDoc path="fetch/pass-cookies-api" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Options API サポート</h2>
      <p>
        Nuxt3では、Options API内で<code class="word-highlight text-sm">asyncData</code
        >の取得を行う方法が提供されています。 これを使用するには、コンポーネント定義を<code
          class="word-highlight text-sm"
          >defineNuxtComponent</code
        >でラップする必要があります。
      </p>
      <ContentDoc path="fetch/options-api" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-400 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-100"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          Nuxt 3では、Vueコンポーネントを宣言する際に&lt;script setup lang="ts"&gt;を使用することが推奨されています。
        </div>
      </div>
      <p class="tips">
        <span class="sr-only">Info</span> 詳細は「Docs > API > Utils >
        <NuxtLink
          to="https://nuxt.com/docs/api/utils/define-nuxt-component"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Define Nuxt Component</NuxtLink
        >」を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">シリアライゼーション</h2>
      <p>
        サーバーディレクトリからデータを取得する際、レスポンスはJSON.stringifyを使用して直列化されます。
        ただし、直列化はJavaScriptのプリミティブ型に限定されているため、Nuxtは$fetchやuseFetchの戻り値の型を実際の値に合わせるために最善の努力をします。
      </p>
      <p class="tips">
        <span class="sr-only">Info</span>
        JSON.stringifyの制限について詳しくは<NuxtLink
          to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >こちら</NuxtLink
        >をご覧ください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">例</h2>
      <ContentDoc path="fetch/serialization-example" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">カスタム シリアライゼーション ファンクション</h2>
      <p>
        シリアル化の動作をカスタマイズするには、返されたオブジェクトに<code class="word-highlight text-sm">toJSON</code
        >関数を定義します。
        <code class="word-highlight text-sm">toJSON</code
        >メソッドを定義すると、Nuxtはその関数の返り値の型を尊重し、型の変換を試みることはありません。
      </p>
      <ContentDoc path="fetch/custom-serializer" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">代替のシリアライザを使用する / Using an alternative serializer</h2>
      <p>
        現時点では、Nuxtは<code class="word-highlight text-sm">JSON.stringify</code
        >以外の代替シリアライザをサポートしていません。 ただし、ペイロードを通常の文字列として返し、<code
          class="word-highlight text-sm"
          >toJSON</code
        >メソッドを使用して型の安全性を保つことができます。
      </p>
      <p>
        以下の例では、シリアライザとして<NuxtLink
          to="https://github.com/blitz-js/superjson"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >superjson</NuxtLink
        >を使用しています。
      </p>
      <ContentDoc path="fetch/using-an-alternative-serializer" class="markdown-body" />
    </section>
  </div>
</template>
