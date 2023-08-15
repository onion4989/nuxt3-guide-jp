<script setup>
definePageMeta({
  layout: "guide",
});
</script>

<template>
  <div>
    <section>
      <h2 class="text-lg lg:text-2xl font-bold">自動インポート / Auto-imports</h2>
      <h3 class="text-lg font-bold py-2">コンポーザブルとヘルパー関数</h3>
      <p>
        Nuxtは、ヘルパー関数、コンポーザブル、VueのAPIを自動的にインポートし、明示的にそれらをインポートすることなくアプリケーション全体で使用できるようにします。ディレクトリの構造に基づいて、すべてのNuxtアプリケーションは、自身のコンポーネント、コンポーザブル、およびプラグインに対しても自動的なインポートを利用できます。コンポーネント、コンポーザブル、またはプラグインはこれらの関数を使用できます。
      </p>
      <p>
        クラシックなグローバル宣言とは対照的に、Nuxtは型情報とIDEの補完やヒントを保持し、本番コードで実際に使用されているものだけを含めます。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          ドキュメントによれば、Nuxtでは明示的にインポートされていないすべての関数は自動的にインポートされ、コード内でそのまま使用できます。自動的にインポートされるコンポーザブルやユーティリティの参照は、APIセクションで見つけることができます。
        </div>
      </div>

      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>サーバーディレクトリ内では、server/utils/からエクスポートされた関数や変数を自動的にインポートします。</div>
      </div>

      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          また、nuxt.configファイルのimportsセクションを設定することで、カスタムフォルダやサードパーティのパッケージからエクスポートされた関数を自動的にインポートすることもできます。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">組み込みの自動インポート</h2>
      <h3 class="text-lg font-bold py-4">Nuxtの自動インポート</h3>
      <p>
        Nuxtは、データの取得を行うためやアプリケーションのコンテキストやランタイム設定にアクセスするため、状態を管理するため、またはコンポーネントやプラグインを定義するために、関数やコンポーザブルを自動的にインポートします。
      </p>
      <ContentDoc path="guide/keyconcept/auto-imports/nuxt-auto-import" class="markdown-body" />
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">Vue自動インポート</h3>
      <p>
        Vue
        3は、refやcomputedなどのリアクティビティAPI、そしてライフサイクルフックやヘルパーなどを公開しており、これらはNuxtによって自動的にインポートされます。
      </p>
      <ContentDoc path="guide/keyconcept/auto-imports/vue-auto-import" class="markdown-body" />
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">VueとNuxtのコンポーザブルの使用</h3>
      <p>
        VueとNuxtが提供する組み込みのComposition
        APIコンポーザブルを使用する際には、それらの多くが適切なコンテキストで呼び出されることを意識してください。
      </p>
      <p>
        コンポーネントのライフサイクル中、Vueは現在のコンポーネントの一時的なインスタンス（同様に、NuxtはnuxtAppの一時的なインスタンス）をグローバル変数を介して追跡し、その後同じタイミングでそれを解除します。これは、サーバー側レンダリングの際に重要です。なぜなら、2つのユーザー間で共有される参照が漏れることによるクロスリクエストの状態の混乱を避けるため、また異なるコンポーネント間での漏れを避けるためです。
      </p>
      <p>
        そのため、（ほんのわずかな例外を除いて）これらのコンポーザブルはNuxtのプラグイン、Nuxtのルートミドルウェア、またはVueのsetup関数の外部では使用できません。さらに、同期的に使用する必要があります。つまり、awaitをコンポーザブルを呼び出す前に使用することはできません。ただし、&lt;script
        setup&gt;ブロック内、defineNuxtComponentで宣言されたコンポーネントのsetup関数内、defineNuxtPlugin、またはdefineNuxtRouteMiddleware内では、awaitの後も同期的なコンテキストを維持するための変換を行います。
      </p>
      <p>
        もし「Nuxt instance is
        unavailable」というエラーメッセージが表示された場合、おそらくVueやNuxtのライフサイクルの誤った場所でNuxtのコンポーザブルを呼び出している可能性があります。
      </p>
      <p>このコメントには完全な説明が記載されています。</p>

      <div class="bg-yellow-500 border border-orange-200 text-sm rounded-md my-4 p-4" role="alert">
        <span class="sr-only">Info</span>
        このセクションのドキュメントはまだ完全ではありません。あなたもドキュメントに貢献することができます。
      </div>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">事例</h3>
      <p>例: 間違った例（Breaking code）:</p>
      <ContentDoc path="guide/keyconcept/auto-imports/compornents-bad-example" class="markdown-body" />
      <p>例: 修正後（Fixing the error）:</p>
      <ContentDoc path="guide/keyconcept/auto-imports/compornents-fix-example" class="markdown-body" />
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">ディレクトリベースの自動インポート</h3>
      <p>Nuxtは、定義されたディレクトリに作成されたファイルを直接自動的にインポートします。</p>
      <ul class="list-disc ml-6">
        <li class="my-1">componentsはVueコンポーネントのためのディレクトリです。</li>
        <li class="my-1">composablesはVueコンポーザブルのためのディレクトリです。</li>
        <li class="my-1">utilsはヘルパー関数やその他のユーティリティのためのディレクトリです。</li>
      </ul>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">明示的なインポート</h3>
      <p>
        Nuxtは、必要に応じてインポートを明示的に行うために、<code class="word-highlight text-sm">#imports</code
        >エイリアスですべての自動インポートを公開します。
      </p>
      <ContentDoc path="guide/keyconcept/auto-imports/explicit-import" class="markdown-body" />
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">自動インポートの無効化</h3>
      <p>
        自動インポートされるコンポーザブルとユーティリティを無効にしたい場合は、<code class="word-highlight text-sm"
          >nuxt.config</code
        >ファイルでimports.autoImportを<code class="word-highlight text-sm">false</code>に設定することができます。
      </p>
      <ContentDoc path="guide/keyconcept/auto-imports/desabling-auto-import" class="markdown-body" />
      <p>
        それにより、自動インポートは完全に無効になりますが、引き続き#importsから明示的なインポートを使用することができます。
      </p>
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">自動インポートされたコンポーネント</h3>
      <p>
        Nuxtは、<code class="word-highlight text-sm">~/components</code
        >ディレクトリからも自動的にコンポーネントをインポートしますが、これはコンポーザブルやユーティリティ関数の自動インポートとは別に設定されています。
      </p>

      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>「Docs > Guide > Directory Structure > Components」で詳細を読む。</div>
      </div>

      <p>
        <code class="word-highlight text-sm">~/components</code
        >ディレクトリからの自動コンポーネントのインポートを無効にするには、components.dirsを空の配列に設定します（ただし、これはモジュールによって追加されたコンポーネントには影響を与えないことに注意してください）。
      </p>
      <ContentDoc path="guide/keyconcept/auto-imports/auto-import-compornents" class="markdown-body" />
    </section>
  </div>
</template>
