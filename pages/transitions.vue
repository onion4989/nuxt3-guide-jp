<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">トランジション / Transitions</h1>
      <p>
        Nuxtは、ページとレイアウト間のトランジションにVueの<code class="word-highlight text-sm">&ltTransition&gt</code
        >コンポーネントを活用しています。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ページ トランジション</h2>
      <p>ページトランジションを有効にすると、すべてのページに自動的にトランジションが適用されます。</p>
      <ContentDoc path="transitions/page-transitions" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">レイアウト トランジション</h2>
      <p>レイアウトのトランジションを有効にすると、すべてのレイアウトに自動的にトランジションが適用されます。</p>
      <ContentDoc path="transitions/layout-transitions" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">グローバル設定</h2>
      <p>
        <code class="word-highlight text-sm">nuxt.config</code
        >を使用して、これらのデフォルトのトランジション名をグローバルにカスタマイズすることができます。
      </p>
      <p>
        <code class="word-highlight text-sm">pageTransition</code>と<code class="word-highlight text-sm"
          >layoutTransition</code
        >の両方のキーは、<code class="word-highlight text-sm">TransitionProps</code
        >としてJSONシリアライズ可能な値を受け入れます。カスタムCSSトランジションの<code class="word-highlight text-sm"
          >name</code
        >、<code class="word-highlight text-sm">mode</code
        >および他の有効なトランジションプロパティを渡すことができます。
      </p>
      <ContentDoc path="transitions/grobal-settings" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">トランジションの無効化</h2>
      <p>
        特定のルートで<code class="word-highlight text-sm">pageTransition</code>や<code class="word-highlight text-sm"
          >layoutTransition</code
        >を無効にするには、ルートのコンポーネント内でtransitionプロパティを使用します。
      </p>
      <ContentDoc path="transitions/disable-transitions" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">JavaScript フック</h2>
      <p>
        高度なユースケースとしては、Nuxtページのカスタムトランジションを作成するためにJavaScriptフックを使用します。
      </p>
      <p>この方法は、GSAPやTween.jsなどのJavaScriptアニメーションライブラリにとって完璧なユースケースを提供します。</p>
      <ContentDoc path="transitions/javascript-hooks" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span>Transitionコンポーネントで利用可能な追加の<NuxtLink
          to="https://vuejs.org/guide/built-ins/transition.html#javascript-hooks"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >JavaScriptフック</NuxtLink
        >について詳しく学びましょう。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">動的なトランジション</h2>
      <p>
        動的なトランジションを条件付きロジックを使用して適用するには、inlineな<NuxtLink
          to="/guide/directory-stracture/middleware"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >ミドルウェア</NuxtLink
        >を活用して、<code class="word-highlight text-sm">to.meta.pageTransition</code
        >に異なるトランジション名を割り当てることができます。
      </p>
      <ContentDoc path="transitions/dynamic-transitions" class="markdown-body" />
      <p>
        ページは次のIDに移動するときに<code class="word-highlight text-sm">slide-left</code
        >のトランジションを適用し、前のIDに移動するときに<code class="word-highlight text-sm">slide-right</code
        >を適用します。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">NuxtPageでのトランジション</h2>
      <p>
        <code class="word-highlight text-sm">app.vue</code>で<code class="word-highlight text-sm">&ltNuxtPage /&gt</code
        >を使用する場合、transition-propsをコンポーネントのプロパティとして直接渡すことで、グローバルなトランジションをアクティブにすることができます。
      </p>
      <ContentDoc path="transitions/transition-with-nuxtpage" class="markdown-body" />
      <div class="bg-yellow-500 border border-orange-200 text-sm rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        このページ遷移は、個々のページでdefinePageMetaを使用してオーバーライドできないことに注意してください。
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">View Transitions API (実験的な機能)</h2>
      <p>
        Nuxt には、<NuxtLink
          to="https://developer.chrome.com/docs/web-platform/view-transitions/"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >View Transitions API</NuxtLink
        >の実験的な実装が同梱されています (<NuxtLink
          to="https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >MDN</NuxtLink
        >を参照)。 これは、(とりわけ) 異なるページ上の無関係な要素間を遷移する機能を備えた、ネイティブ ブラウザ
        トランジションを実装するエキサイティングな新しい方法です。
      </p>
      <p>
        Nuxt 統合は現在開発中ですが、構成ファイルの<code class="word-highlight text-sm"
          >Experimental.viewTransition</code
        >オプションで有効にすることができます。
      </p>
      <ContentDoc path="transitions/view-transitions-api" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">既知の問題</h2>
      <ul class="list-disc ml-5">
        <li>
          ネストされたページ/レイアウト/非同期コンポーネントを使用する場合、ビュートランジションは予期通りに機能しない場合があります。これは、次のVueのバグに起因するものです:
          <NuxtLink
            to="https://github.com/vuejs/core/issues/5513"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >https://github.com/vuejs/core/issues/5513</NuxtLink
          >。このパターンを使用している場合は、この実験的な機能の導入を遅らせるか、自分で実装する必要があるかもしれません。フィードバックは大歓迎です。
        </li>
        <li>
          もしページのセットアップ関数内でデータのフェッチを行っている場合、この機能を一時的に使用することを再考することをお勧めします。（設計上、ビュートランジションは実行中にDOMの更新を完全に停止します。）我々はビュートランジションを<code
            class="word-highlight text-sm"
            >&ltSuspense&gt</code
          >が解決される直前の最後の瞬間に制限することを検討していますが、その間、これが該当する場合は慎重に検討してこの機能を採用するかどうかを考えることをお勧めします。
        </li>
      </ul>
    </section>
  </div>
</template>
