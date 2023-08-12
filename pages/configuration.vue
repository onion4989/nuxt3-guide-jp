<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">設定</h1>
      <p>
        デフォルトでは、Nuxtはほとんどのケースをカバーできるように設定されています。<code>
          <NuxtLink
            to="/guide/directory-stracture/nuxt-config-ts"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >nuxt.config.ts</NuxtLink
          ></code
        >ファイルの設定をカスタマイズすることで、設定を上書き or 拡張することができます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Nuxtの設定</h2>
      <p>
        <code>
          <NuxtLink
            to="/guide/directory-stracture/nuxt-config-ts"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >nuxt.config.ts</NuxtLink
          ></code
        >ファイルは、Nuxtプロジェクトのルート（ディレクトリ直下）に配置されており、アプリケーションの動作を上書き or
        拡張することができます。
      </p>
      <p>
        <code class="text-sm inline-block rounded bg-gray-600 text-white p-1">defineNuxtConfig</code
        >関数の中に記述することで、設定値をカスタマイズできます。
        また<code>defineNuxtConfig</code>は、インポートなしでグローバルに利用できます。
      </p>
      <ContentDoc path="configuration/define-nuxt-config" class="markdown-body" />
      <p>
        このファイルはドキュメンテーションで頻繁に登場します。
        たとえば、カスタムスクリプトの追加やモジュールの登録、レンダリングモードの変更などのために使用されます。
      </p>
      <p class="tips">
        <span class="sr-only">Info</span>
        全ての設定オプションは
        <NuxtLink
          to="https://nuxt.com/docs/api/configuration/nuxt-config"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >設定リファレンス</NuxtLink
        >に詳細に記載されています。
      </p>

      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          Nuxtを使用してアプリケーションを構築する際には、TypeScriptを使用する必要はありません。ただし、<code>nuxt.config</code>ファイルには<code>.ts</code>拡張子を使用することが強く推奨されています。これにより、設定を編集する際にタイプミスやミスを避けるためのIDE（統合開発環境のための機能）のヒント（例えば、サジェスト機能など）を活用することができます。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">環境の上書き（オーバーライド）</h2>
      <p>nuxt.configでは、環境に合わせて設定をオーバーライドさせることができます。</p>
      <ContentDoc path="configuration/environment-overrides" class="markdown-body" />
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-200"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          もしレイヤーを作成している場合、<code>$meta</code>キーを使用して、あなた自身やレイヤーの利用者が使用するメタデータを提供することもできます。
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">環境変数とプライベートトークン</h2>
      <p>
        <code>runtimeConfigAPI</code>は、環境変数のような値をアプリケーション全体に公開します。
        デフォルトでは、これらのキーはサーバーサイドでのみ利用可能です。
        <code>runtimeConfig.public</code>内のキーはクライアントサイドでも利用可能です。
      </p>
      <p>それらの値は<code>nuxt.config</code>で定義する必要があり、環境変数を使用して上書きすることもできます。</p>
      <ContentDoc path="configuration/private-tokens" class="markdown-body" />
      <p><code>useRuntimeConfig</code>を使用することで、これらの変数はアプリケーション全体に公開されます。</p>
      <ContentDoc path="configuration/useruntime-config" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細については、「ガイド」>「さらに進む」>「<NuxtLink
          to="/guide/going-furture/nuxt-kit"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >ランタイム設定</NuxtLink
        >」をご覧ください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">App設定</h2>
      <p>
        <code>source</code
        >ディレクトリにある<code>app.config.ts</code>ファイル（デフォルトではプロジェクトのルート）は、ビルド時に決定できるパブリックな変数を公開するために使用されます。runtimeConfigオプションとは異なり、これらは環境変数を使用して上書きすることはできません。
      </p>
      <p>
        最小限の設定ファイルは、設定を含むオブジェクトを含む<code>defineAppConfig</code>関数をエクスポートします。<code>defineAppConfig</code>は、インポートせずにグローバルに利用できます。
      </p>
      <ContentDoc path="configuration/app-configuration" class="markdown-body" />
      <p>
        <code>useAppConfig</code
        >コンポーザブルを使用することで、これらの変数はアプリケーションの他の部分に公開されます。
      </p>
      <ContentDoc path="configuration/useappconfig" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細については、「ガイド」>「ディレクトリ構造」>「<NuxtLink
          to="/guide/directory-stracture/app-config-ts"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >アプリケーション設定</NuxtLink
        >」をご覧ください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">runtimeConfig vs app.config</h2>
      <p>
        前述の通り、<code>runtimeConfig</code>と<code>app.config</code>はどちらもアプリケーションの他の部分に変数を公開するために使用されます。
        どちらを使用するかを決定するために、以下にいくつかのガイドラインを示します。
      </p>
      <ul>
        <li>
          <code>untimeConfigr</code>:
          ビルド後に環境変数を使用して指定する必要がある、プライベートまたはパブリックなトークン。
        </li>
        <li>
          <code>pp.configa</code>:
          ビルド時に決定されるパブリックなトークン、テーマのバリアント、タイトル、および機密情報ではないプロジェクト設定など、ウェブサイトの設定情報。
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">外部設定ファイル</h2>
      <p>
        Nuxtは、設定情報の信頼性を確保するために<code>nuxt.config.ts</code>ファイルを使用し、外部の設定ファイルの読み込みをスキップします。
        ただし、プロジェクトを構築する過程で、それらを設定する必要が生じる場合もあります。
        以下の表は、一般的な設定をハイライトしており、適用される場合には、Nuxtでどのように設定できるかを示しています。
      </p>

      <div class="flex flex-col w-full lg:w-4/5 my-4">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-md font-medium text-gray-900">Name</th>
                    <th scope="col" class="px-6 py-3 text-left text-md font-medium text-gray-900">Configファイル</th>
                    <th scope="col" class="px-6 py-3 text-left text-md font-medium text-gray-900">設定方法</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <NuxtLink to="Nitro" class="underline decoration-dashed decoration-1 underline-offset-4"
                        >Nitro</NuxtLink
                      >
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <span class="line-through">nitro.config.ts</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <code>nuxt.config.ts</code>で<code>vite key</code>を使用
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <NuxtLink
                        to="https://postcss.org/"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >PostCSS</NuxtLink
                      >
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <span class="line-through">nitro.config.ts</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <code>nuxt.config.ts</code>で<code>vite key</code>を使用
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <NuxtLink
                        to="https://vitejs.dev/"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >Vite</NuxtLink
                      >
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <span class="line-through">nitro.config.ts</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <code>nuxt.config.ts</code>で<code>vite key</code>を使用
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <NuxtLink
                        to="https://webpack.js.org/"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >webpack</NuxtLink
                      >
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <span class="line-through">nitro.config.ts</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <code>nuxt.config.ts</code>で<code>vite key</code>を使用
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <p>以下は、他の一般的な設定ファイルのリストです:</p>

      <div class="flex flex-col w-full lg:w-4/5 my-4">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-md font-medium text-gray-900">Name</th>
                    <th scope="col" class="px-6 py-3 text-left text-md font-medium text-gray-900">Configファイル</th>
                    <th scope="col" class="px-6 py-3 text-left text-md font-medium text-gray-900">設定方法</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <NuxtLink
                        to="https://www.typescriptlang.org/"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >TypeScript</NuxtLink
                      >
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <span>nitro.config.ts</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <NuxtLink
                        to="/guide/key-concepts/typescript"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >More Info</NuxtLink
                      >
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <NuxtLink
                        to="https://eslint.org/"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >ESLint</NuxtLink
                      >
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <span>.eslintrc.js</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <NuxtLink
                        to="https://eslint.org/docs/latest/use/configure/configuration-files"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >More Info</NuxtLink
                      >
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <NuxtLink
                        to="https://prettier.io/"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >Prettier</NuxtLink
                      >
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <span>.prettierrc.json</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <NuxtLink
                        to="https://prettier.io/docs/en/configuration.html"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >More Info</NuxtLink
                      >
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <NuxtLink
                        to="https://stylelint.io/"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >Stylelint</NuxtLink
                      >
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <span>.stylelintrc.json</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <NuxtLink
                        to="https://stylelint.io/user-guide/configure/"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >More Info</NuxtLink
                      >
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <NuxtLink
                        to="https://tailwindcss.com/"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >TailwindCSS</NuxtLink
                      >
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <span>tailwind.config.js</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <NuxtLink
                        to="https://tailwindcss.nuxtjs.org/tailwind/config"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >More Info</NuxtLink
                      >
                    </td>
                  </tr>

                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      <NuxtLink
                        to="https://vitest.dev/"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >Vitest</NuxtLink
                      >
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <span>vitest.config.ts</span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      <NuxtLink
                        to="https://vitest.dev/config/"
                        class="underline decoration-dashed decoration-1 underline-offset-4"
                        >More Info</NuxtLink
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-bold mb-4">Vueの設定</h2>
      <h2 class="text-lg lg:text-2xl font-bold">Viteについて</h2>
      <p>
        @vitejs/plugin-vueや@vitejs/plugin-vue-jsxにオプションを渡す必要がある場合は、<code class="word-highlight"
          >uxt.confign</code
        >ファイルで行うことができます。
      </p>
      <ul class="list-disc ml-5">
        <li>
          @vitejs/plugin-vueの場合、<code>vite.vue</code>オプションを使用します。詳細なオプションについては、<NuxtLink
            to="https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >こちら</NuxtLink
          >をご確認ください。
        </li>
        <li>
          @vitejs/plugin-vue-jsxの場合、<code>vite.vueJsx</code>オプションを使用します。詳細なオプションについては、<NuxtLink
            to="https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >こちら</NuxtLink
          >をご確認ください。
        </li>
      </ul>
      <ContentDoc path="configuration/with-vite" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細については、「ガイド」>「ディレクトリ構造」>「<NuxtLink
          to="/guide/directory-stracture/nuxt-config-ts"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Nuxt Config</NuxtLink
        >」をご覧ください。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">webpackについて</h2>
      <p>
        もしwebpackを使用しており、<code>vue-loader</code>を設定する必要がある場合は、
        <code class="text-sm inline-block rounded bg-gray-600 text-white p-1">nuxt.config</code>ファイル内の<code
          class="text-sm inline-block rounded bg-gray-600 text-white p-1"
          >webpack.loaders.vue</code
        >キーを使用して設定することができます。利用可能なオプションについては、<NuxtLink
          to="https://github.com/vuejs/vue-loader/blob/main/src/index.ts#L32-L62"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >こちら</NuxtLink
        >で定義されています。
      </p>
      <ContentDoc path="configuration/with-webpack" class="markdown-body" />

      <p class="tips">
        <span class="sr-only">Info</span>
        もっと詳しく知りたい場合は、「ガイド」>「ディレクトリ構造」>「<NuxtLink
          to="/guide/directory-stracture/nuxt-config-ts"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Nuxt Config #loaders</NuxtLink
        >」
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">実験的なVueの機能を有効にする</h2>
      <p>
        Vueの実験的な機能である<code>defineModel</code>や<code>propsDestructure</code>などを有効にする必要がある場合、Nuxtでは<code>nuxt.config.ts</code>ファイルで簡単にそれを行うことができます。どのビルダーを使用しているかにかかわらず、以下のような方法があります。
      </p>
      <ContentDoc path="configuration/experimental-vue" class="markdown-body" />
      <p class="tips">
        <span class="sr-only">Info</span>
        もっと詳しく知りたい場合は、「ガイド」>「ディレクトリ構造」>「<NuxtLink
          to="/guide/directory-stracture/nuxt-config-ts"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >Nuxt Config #vue 1</NuxtLink
        >」
      </p>
    </section>
  </div>
</template>
