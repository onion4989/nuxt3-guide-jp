<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">SEO and Meta</h1>
      <p>NuxtのSEOを強化するためには、強力なヘッド構成、コンポーザブル、およびコンポーネントを活用することです。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">デフォルト</h2>
      <p>
        デフォルトでは、Nuxtは適切なデフォルト設定になっていますが、必要に応じてオーバーライドすることもできます。
        <code class="word-highlight text-sm">nuxt.config.ts</code
        >にapp.headプロパティを指定することで、アプリ全体のheadをカスタマイズすることができます。
      </p>
      <ul class="list-disc ml-5">
        <li><code class="word-highlight text-sm">charset</code>: utf-8</li>
        <li><code class="word-highlight text-sm">viewport</code>: width=device-width, initial-scale=1</li>
      </ul>
      <ContentDoc path="seo/defaults" />

      <div
        class="flex p-4 mb-4 text-sm text-blue-400 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          この方法では、リアクティブなデータを提供することはできません。代わりに、app.vue内でuseHead()を使用することをおすすめします。
        </div>
      </div>
      <p>
        <code class="word-highlight text-sm">charset</code>および<code class="word-highlight text-sm">viewport</code
        >というショートカットを使用すると、設定を簡単に行うことができます。
        また、Typesにリストされているキーのいずれかを提供することもできます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">useHead</h2>
      <p>
        <code class="word-highlight text-sm">useHead</code>コンポーザブル関数を使用すると、<NuxtLink
          to="https://unhead.harlanzw.com/"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Unhead</NuxtLink
        >によって強力にサポートされたプログラマティックでリアクティブな方法でheadタグを管理することができます。
      </p>
      <p>
        すべてのコンポーザブルと同様に、useHeadコンポーザブルはコンポーネントの<code class="word-highlight text-sm"
          >setup</code
        >とライフサイクルフック(lifecycle hooks)と共に使用することができます。
      </p>
      <ContentDoc path="seo/use-head" class="markdown-body" />
      <p>
        <NuxtLink
          to="https://nuxt.com/docs/api/composables/use-head"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >useHead</NuxtLink
        >コンポーザブルと<NuxtLink
          to="https://nuxt.com/docs/api/composables/use-head"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >useHeadSafe</NuxtLink
        >コンポーザブルをご覧いただくことをおすすめします。
      </p>
    </section>

    <section>
      <h1 class="text-3xl font-bold">useSeoMeta と useServerSeoMeta</h1>
      <p>
        <code class="word-highlight text-sm">useSeoMeta</code>と<code class="word-highlight text-sm"
          >useServerSeoMeta</code
        >のコンポーザブルを使用すると、完全なTypeScriptサポートを備えたフラットなオブジェクトとしてサイトのSEOメタタグを定義することができます。
      </p>
      <p>これにより、nameの代わりにpropertyを使用するなどの入力ミスや一般的なミスを防ぐことができます。</p>
      <ContentDoc path="seo/use-setmeta-servermeta" class="markdown-body" />
      <p>詳細については、useSeoMetaとuseServerSeoMetaのコンポーザブルについてドキュメントを参照してください。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">コンポーネント / Components</h2>
      <p>
        Nuxtは、<code class="word-highlight text-sm">&ltTitle&gt</code>、<code class="word-highlight text-sm"
          >&ltBase&gt</code
        >、<code class="word-highlight text-sm">&ltNoScript&gt</code>、<code class="word-highlight text-sm"
          >&ltStyle&gt</code
        >、<code class="word-highlight text-sm">&ltMeta&gt</code>、<code class="word-highlight text-sm">&ltLink&gt</code
        >、<code class="word-highlight text-sm">&ltBody&gt</code>、<code class="word-highlight text-sm">&ltHtml&gt</code
        >、および<code class="word-highlight text-sm">&ltHead&gt</code>のコンポーネントを提供しています。
        これにより、コンポーネントのテンプレート内で直接メタデータとやり取りすることができます。
      </p>
      <p>
        これらのコンポーネント名は、ネイティブのHTML要素と一致しているため、テンプレート内で大文字にすることが非常に重要です。
      </p>
      <p>
        <code class="word-highlight text-sm">&ltHead&gt</code>と<code class="word-highlight text-sm">&ltBody&gt</code
        >はネストされたメタタグを受け入れることができます（可読性を高めるため）。ただし、ネストされたメタタグの配置は最終的なHTMLには影響しません。
      </p>
      <ContentDoc path="seo/components" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Types</h2>
      <p>
        以下は、<code class="word-highlight text-sm">useHead</code>、<code class="word-highlight text-sm">app.head</code
        >およびコンポーネントで使用される非リアクティブな型です。
      </p>
      <ContentDoc path="seo/types" class="markdown-body" />
      <p>
        詳細な型については、<NuxtLink
          to="https://github.com/unjs/unhead/blob/main/packages/schema/src/schema.ts"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >@unhead/schema</NuxtLink
        >を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-3xl font-bold mb-4">機能 / Features</h2>
      <h2 class="text-lg lg:text-2xl font-bold">リアクティビティ（Reactivity）</h2>
      <p>
        リアクティビティ（Reactivity）は、computed、getters、およびreactiveとしてすべてのプロパティでサポートされています。
      </p>
      <p>
        <code class="word-highlight text-sm">computed(() => value)</code>よりも<code class="word-highlight text-sm"
          >() => value</code
        >の使用を推奨します。
      </p>
      <ContentDoc path="seo/reactivity" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">タイトルテンプレート</h2>
      <p>
        <code class="word-highlight text-sm">titleTemplate</code
        >オプションを使用して、サイトのタイトルをカスタマイズするための動的なテンプレートを提供することができます。
        例えば、サイト名を各ページのタイトルに追加することができます。
      </p>
      <p>
        <code class="word-highlight text-sm">titleTemplate</code>は、文字列で指定することもできます。この場合、<code
          class="word-highlight text-sm"
          >%s</code
        >はタイトルに置き換えられます。また、関数としても指定することができます。
      </p>
      <p>
        関数を使用する場合（完全な制御を目指す場合）、<code class="word-highlight text-sm">nuxt.config</code
        >で設定することはできません。 代わりに、<code class="word-highlight text-sm">app.vue</code
        >ファイル内で設定することをおすすめします。 これにより、サイトのすべてのページに適用されます。
      </p>
      <ContentDoc path="seo/title-template" class="markdown-body" />
      <p>
        もし別のページで<code class="word-highlight text-sm">useHead</code>を使ってタイトルを<code
          class="word-highlight text-sm"
          >My Page</code
        >と設定した場合、ブラウザのタブには「My Page - サイトタイトル」と表示されます。 また、<code
          class="word-highlight text-sm"
          >null</code
        >を渡すことでデフォルトのサイトタイトルを使うこともできます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Bodyタグ</h2>
      <p>
        適用可能なタグに対して、<code class="word-highlight text-sm">tagPosition: 'bodyClose'</code
        >オプションを使用することで、それらを
        <code class="word-highlight text-sm">&ltbody&gt</code>タグの末尾に追加することができます。
      </p>
      <p>例:</p>
      <ContentDoc path="seo/body-tags" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-3xl font-bold mb-4">例</h2>
      <h2 class="text-lg lg:text-2xl font-bold">definePageMetaについて</h2>
      <p>
        <code class="word-highlight text-sm">pages/</code>ディレクトリ内では、<code class="word-highlight text-sm"
          >definePageMeta</code
        >を<code class="word-highlight text-sm">useHead</code
        >と組み合わせて使用することで、現在のルートに基づいてメタデータを設定することができます。
      </p>
      <p>
        例えば、現在のページのタイトルを最初に設定することができます（これはマクロを介してビルド時に抽出されるため、動的に設定することはできません）:
      </p>
      <ContentDoc path="seo/definepagemeta-example" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span> 詳細は<NuxtLink
          to="https://nuxt.com/docs/examples/features/meta-tags"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Meta Tags</NuxtLink
        >を参照してください。
      </p>
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は、ガイド > ディレクトリ構築 >
        <NuxtLink
          to="/guide/directory-stracture/pages#page-metadata"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >ページのメタデータ</NuxtLink
        >を参照してください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">動的なタイトル</h2>
      <p>
        以下の例では、<code class="word-highlight text-sm">titleTemplate</code>は<code class="word-highlight text-sm"
          >%s</code
        >プレースホルダーを含む文字列または関数として設定されています。
        関数を使用することで、Nuxtアプリの各ルートごとにページタイトルを動的に設定する際により柔軟な操作が可能です。
      </p>
      <ContentDoc path="seo/dynamic-title" class="markdown-body" />
      <p>
        <code class="word-highlight text-sm">nuxt.config</code
        >もページタイトルを設定する別の方法として使用できます。ただし、<code class="word-highlight text-sm"
          >nuxt.config</code
        >ではページタイトルを動的に設定することはできません。そのため、<code class="word-highlight text-sm"
          >app.vue</code
        >ファイルで<code class="word-highlight text-sm">titleTemplate</code
        >を使用して動的なタイトルを追加し、それをNuxtアプリのすべてのルートに適用することが推奨されます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">外部CSS</h2>
      <p>
        以下の例は、<code class="word-highlight text-sm">useHead</code>コンポーザブルの<code
          class="word-highlight text-sm"
          >link</code
        >プロパティまたは<code class="word-highlight text-sm">&ltLink&gt</code>コンポーネントを使用してGoogle
        Fontsを有効にする方法を示しています。
      </p>
      <ContentDoc path="seo/external-css" class="markdown-body" />
    </section>
  </div>
</template>
