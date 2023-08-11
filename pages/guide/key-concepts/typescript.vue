<script setup>
definePageMeta({
  layout: "guide",
});
</script>

<template>
  <div>
    <section>
      <h2 class="text-lg lg:text-3xl font-bold">TypeScript</h2>
      <p>
        Nuxt3は完全に型付けされており、コーディング中に正確な型情報にアクセスできるように便利なショートカットが提供されています。
      </p>
    </section>

    <section>
      <h2 class="text-3xl font-bold">型チェック</h2>
      <p>
        デフォルトでは、パフォーマンス上の理由から、Nuxtは<code class="word-highlight text-sm">nuxi dev</code>や<code
          class="word-highlight text-sm"
          >nuxi build</code
        >を実行する際には型チェックを行いません。ただし、<code class="word-highlight text-sm">vue-tsc</code>と<code
          class="word-highlight text-sm"
          >typescript</code
        >を<code class="word-highlight text-sm">devDependencies</code>としてインストールし、nuxt.config ファイルで
        <code class="word-highlight text-sm">typescript.typeCheck</code
        >オプションを有効にするか、nuxiを使用して手動で型をチェックすることで、ビルド時または開発時に型チェックを有効にすることができます。
      </p>
      <ContentDoc path="guide/keyconcept/typescript/bash-typecheck" class="markdown-body" />
    </section>

    <section>
      <h3 class="text-lg lg:text-2xl font-bold">自動生成された型</h3>
      <p>
        <code class="word-highlight text-sm">nuxi dev</code>や<code class="word-highlight text-sm">nuxi build</code
        >を実行すると、Nuxtは以下のファイルを生成し、IDEの型サポート（および型チェック）を提供します。
      </p>

      <h4>.nuxt/nuxt.d.ts</h4>
      <p>
        このファイルには、使用しているモジュールの型と、Nuxt3が必要とするキータイプが含まれています。IDEはこれらの型を自動的に認識するはずです。
      </p>
      <p>
        このファイル内のいくつかの参照は、buildDir（.nuxtディレクトリ）内でのみ生成されるファイルを指しています。したがって、完全な型情報を得るためには、<code
          class="word-highlight text-sm"
          >nuxi dev</code
        >や<code class="word-highlight text-sm">nuxi build</code>を実行する必要があります。
      </p>

      <h4>.nuxt/tsconfig.json</h4>
      <p>
        このファイルには、お勧めの基本的なTypeScriptの設定が含まれています。Nuxtによって解決されたエイリアスや使用しているモジュールなどが注入されているため、<code
          class="word-highlight text-sm"
          >~/file</code
        >や<code class="word-highlight text-sm">#build/file</code
        >のようなエイリアスに対して完全な型サポートとパスの自動補完を得ることができます。
      </p>
      <p>
        <NuxtLink
          to="/guide/directory-stracture/tsconfig-json"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >この設定を拡張する方法</NuxtLink
        >について詳細を読む
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          NitroもAPIルート用の型を自動生成します。さらに、Nuxtはグローバルに利用可能なコンポーネントとコンポーザブルからの自動インポート、および他のコア機能に対する型も生成します。
        </div>
      </div>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-300"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div class="flex flex-wrap flex-col">
          <p>
            <code class="word-highlight text-sm">./.nuxt/tsconfig.json</code>から拡張されたすべてのオプションは、<code
              class="word-highlight text-sm"
              >tsconfig.json</code
            >で定義されたオプションによって上書きされることに注意してください。<code class="word-highlight text-sm"
              >compilerOptions.paths</code
            >のようなオプションを自分自身の設定で上書きすると、TypeScriptは
            <code class="word-highlight text-sm">./.nuxt/tsconfig.json</code
            >からのモジュール解決を考慮しなくなります。これにより、<code class="word-highlight text-sm">#imports</code
            >などのモジュール解決が認識されなくなる可能性があります。
          </p>
          <p>
            もし、<code class="word-highlight text-sm">./.nuxt/tsconfig.json</code
            >で提供されるオプションをさらに拡張する必要がある場合は、<code class="word-highlight text-sm"
              >nuxt.config</code
            >内でaliasプロパティを使用することができます。nuxiはそれらを認識し、それに応じて<code
              class="word-highlight text-sm"
              >./.nuxt/tsconfig.json</code
            >を拡張します。
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">厳格なチェック</h2>
      <p>TypeScriptは、プログラムの安全性と解析を向上させるための特定のチェックを提供しています。</p>
      <p>
        一度コードベースをTypeScriptに変換し、それに慣れてきたら、より高い安全性のためにこれらのチェックを有効にすることができます（<NuxtLink
          to="https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#getting-stricter-checks"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >詳細はこちらを参照してください</NuxtLink
        >）。
      </p>
      <p>厳格な型チェックを有効にするには、nuxt.configを更新する必要があります。</p>
      <ContentDoc path="guide/keyconcept/typescript/typescript-strict" class="markdown-body" />
    </section>
  </div>
</template>
