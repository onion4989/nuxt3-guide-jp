<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">Plugins Directory</h1>
      <p>
        Nuxtは、Vueアプリケーションの作成時に、自動的にpluginsディレクトリ内のファイルを読み込みます。ファイル名に.serverや.clientという接尾辞を使うと、サーバー側またはクライアント側でのみプラグインを読み込むことができます
      </p>
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        plugins/ディレクトリ内のすべてのプラグインは自動的に登録されるので、nuxt.configに別途追加する必要はありません
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">登録済みのファイル</h2>
      <p>
        plugins/ディレクトリのトップレベルにあるファイル（またはサブディレクトリ内のindexファイル）のみがプラグインとして登録されます
      </p>
      <p>例:</p>
      <ContentDoc path="guide/directry-stracture/plugins/which-files-are-registered" class="markdown-body" />
      <p>
        myPlugin.tsとmyOtherPlugin/index.tsのみが登録されます。プラグインを設定して、スキャンされないファイルを含めることができます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">プラグインの作成</h2>
      <p>プラグインに渡される唯一の引数は nuxtApp です。</p>
      <ContentDoc path="guide/directry-stracture/plugins/creating-plugins" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">オブジェクト構文プラグイン（Object Syntax Plugins）</h2>
      <p>より高度な使用例として、オブジェクト構文を使用してプラグインを定義することもできます。 例えば：</p>
      <ContentDoc path="guide/directry-stracture/plugins/object-syntax-plugins" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          オブジェクト構文プラグインを使用している場合、将来的にプロパティが静的に解析されて、より最適化されたビルドが生成される可能性があります。そのため、ランタイムで定義するべきではありません。例えば、enforce: process.server ? ‘pre’ : 'post’と設定すると、Nuxtがプラグインに対して行うことができる将来の最適化を妨げることになります
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">プラグインの登録順序</h2>
      <p>
        ファイル名の先頭に「アルファベット」の番号を付けることで、登録の順序を制御することができます。
      </p>
      <p>For example:</p>
      <ContentDoc path="guide/directry-stracture/plugins/lugin-registration-order" class="markdown-body" />
      <p>この例では、02.myOtherPlugin.ts は、01.myPlugin.ts によって挿入されたものすべてにアクセスできます。</p>
      <p>これは、別のプラグインに依存するプラグインがある場合に便利です。</p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          「アルファベット順」の番号付けに慣れていない場合は、ファイル名は数値ではなく文字列としてソートされることを覚えておいてください。例えば、10.myPlugin.tsは2.myOtherPlugin.tsよりも前に来ます。これが、例で1桁の数字に0を付けている理由です。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ローディング</h2>
      <p>
        デフォルトでは、Nuxt はプラグインを順番にロードします。 プラグインを並列として定義できるため、Nuxt はプラグインの実行の終了を待たずに次のプラグインをロードできます。
      </p>
      <ContentDoc path="guide/directry-stracture/plugins/loading-strategy" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">プラグイン内でのコンポーザブルの使用</h2>
      <p>Nuxt プラグイン内でコンポーザブルを使用できます。</p>
      <ContentDoc path="guide/directry-stracture/plugins/using-composables-within-plugins" class="markdown-body" />
      <p>ただし、いくつかの制限と違いがあることに注意してください。</p>
      <p>コンポーザブルが後で登録された別のプラグインに依存している場合、機能しない可能性があります。</p>
      <p>
        理由: プラグインは、他のすべての前に順番に呼び出されます。 まだ呼び出されていない別のプラグインに依存するコンポーザブルを使用する可能性があります。
      </p>
      <p>コンポーザブルが Vue.js ライフサイクルに依存している場合、それは機能しません。</p>
      <p>
        理由: 通常、Vue.js コンポーザブルは現在のコンポーネント インスタンスにバインドされますが、プラグインは nuxtApp インスタンスにのみバインドされます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ヘルパーの自動提供</h2>
      <p>
        NuxtApp インスタンスにヘルパーを提供したい場合は、provide キーを使用してプラグインからヘルパーを返します。例えば：
      </p>
      <ContentDoc path="guide/directry-stracture/plugins/automatically-providing-helpers" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Typing Plugins</h2>
      <p>
        プラグインからヘルパーを返す場合、ヘルパーは自動的に入力されます。 これらは useNuxtApp() の戻り値とテンプレート内に入力されていることがわかります。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          別のプラグイン内で提供されたヘルパーを使用する必要がある場合は、useNuxtApp() を呼び出して型指定されたバージョンを取得できます。 ただし、一般に、プラグインの順序が確実でない限り、これは避けるべきです。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">高度な設定</h2>
      <p>高度な使用方法では、次のように挿入されたプロパティのタイプを宣言できます。</p>
      <ContentDoc path="guide/directry-stracture/plugins/advanced" class="markdown-body" />
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        WebStorm を使用している場合は、この問題が解決されるまで @vue/runtime-core を拡張する必要がある場合があります。
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Vue プラグイン</h2>
      <p>
        Google Analyticsタグを追加するvue-gtagなどのVueプラグインを使用したい場合は、Nuxtプラグインを使用してこれを行うことができます。
      </p>
      <p>まず、必要なプラグインをインストールします。</p>
      <ContentDoc path="guide/directry-stracture/plugins/vue-plugins" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Vue ディレクティブ</h2>
      <p>同様に、カスタム Vue ディレクティブをプラグインに登録できます。 たとえば、plugins/directive.ts では次のようになります。</p>
      <ContentDoc path="guide/directry-stracture/plugins/yue-directives" class="markdown-body" />
    </section>
  </div>
</template>
