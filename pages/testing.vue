<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">テスト</h1>
      <p>Nuxtアプリケーションをテストする方法</p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-400 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-100"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          テストユーティリティはまだ開発中であり、APIと動作は変更される可能性があります。現在、プレビューステージにあり、まだ本番アプリのテストには適していません。
        </div>
      </div>
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細な<NuxtLink
          to="https://nuxt.com/docs/guide/going-further/modules#testing"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >モジュール作成ガイド</NuxtLink
        >はこちらから。
      </p>
      <p>
        Nuxt3では、@nuxt/test-utilsの書き直されたバージョンが利用可能です。テストランナーとしてVitestとJestをサポートしています。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">インストール</h2>
      <ContentDoc path="testing/installation" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">セットアップ</h2>
      <p>
        @nuxt/test-utilsのヘルパーメソッドを利用する各describeブロックで、始める前にテストコンテキストをセットアップする必要があります。
      </p>
      <ContentDoc path="testing/setup" class="markdown-body" />
      <p>
        裏側では、<code class="word-highlight text-sm">setup</code>は<code class="word-highlight text-sm"
          >beforeAll</code
        >、<code class="word-highlight text-sm">beforeEach</code>、<code class="word-highlight text-sm">afterEach</code
        >、および<code class="word-highlight text-sm">afterAll</code
        >でいくつかのタスクを実行して、Nuxtのテスト環境を正しくセットアップします。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">オプション</h2>
      <h3 class="font-bold my-5">Nuxtの設定</h3>
      <p>
        <code class="word-highlight text-sm">rootDir</code>
      </p>
      <div>Nuxt appが配置されるディレクトリへのパス</div>
      <ul class="list-disc">
        <li>Type: <code class="word-highlight text-sm">string</code></li>
        <li>Default: <code class="word-highlight text-sm">'.'</code></li>
      </ul>

      <p class="lg:mt-6">
        <code class="word-highlight text-sm">configFile</code>
      </p>
      <div>テスト対象のNuxtアプリが配置されるディレクトリへのパス</div>
      <ul class="list-disc my-4">
        <li>Type: <code class="word-highlight text-sm">string</code></li>
        <li>Default: <code class="word-highlight text-sm">'nuxt.config'</code></li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold mb-4">セットアップのタイミング</h2>
      <code class="word-highlight text-sm">setupTimeout</code>
      <p>
        setupTestがその作業を完了するのに許容される時間（ミリ秒単位）の量（これには、渡されたオプションに応じてNuxtアプリケーションのビルドやファイルの生成などが含まれる場合があります）
      </p>
      <ul class="list-disc">
        <li>Type: <code class="word-highlight text-sm">number</code></li>
        <li>Default: <code class="word-highlight text-sm">60000</code></li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold mb-4">有効にする機能</h2>

      <div class="my-6">
        <code class="word-highlight text-sm">server</code>
        <p>テストスイート内のリクエストに応答するためにサーバーを起動するかどうか</p>
        <ul class="list-disc">
          <li>Type: <code class="word-highlight text-sm">boolean</code></li>
          <li>Default: <code class="word-highlight text-sm">true</code></li>
        </ul>
      </div>

      <div class="my-6">
        <code class="word-highlight text-sm">port</code>
        <p>指定された場合、起動されたテストサーバーのポートを指定された値に設定します。</p>
        <ul class="list-disc">
          <li>Type: <code class="word-highlight text-sm">number | undefined</code></li>
          <li>Default: <code class="word-highlight text-sm">undefined</code></li>
        </ul>
      </div>

      <div class="my-6">
        <code class="word-highlight text-sm">build</code>
        <p>別のビルドステップを実行するかどうか</p>
        <ul class="list-disc">
          <li>Type: <code class="word-highlight text-sm">boolean</code></li>
          <li>Default: <code class="word-highlight text-sm">true (false if browser or server is disabled)</code></li>
        </ul>
      </div>

      <div class="my-6">
        <code class="word-highlight text-sm">browser</code>
        <p>
          裏側では、NuxtのテストユーティリティはPlaywrightを使用してブラウザテストを実行します。このオプションが設定されている場合、ブラウザが起動され、その後のテストスイートで制御することができます。（詳細はこちらで確認できます。）
        </p>
        <ul class="list-disc">
          <li>Type: <code class="word-highlight text-sm">boolean</code></li>
          <li>Default: <code class="word-highlight text-sm">false</code></li>
        </ul>
      </div>

      <div class="my-6">
        <code class="word-highlight text-sm">browserOptions</code>
        <p>
          Nuxtのテストユーティリティは、内部的にPlaywrightを使用してブラウザテストを実行します。このオプションが設定されている場合、ブラウザが起動され、その後のテストスイートで制御することができます。（詳細はこちらで確認できます。）
        </p>
        <p>Type: 次のプロパティを持つオブジェクト</p>
        <ul class="list-disc">
          <li>type: 起動するブラウザのタイプ - chromium、Firefox、Webkit のいずれか</li>
          <li>
            launch: ブラウザの起動時に playwright に渡されるオプションのオブジェクト。 API リファレンスを参照してください。
          </li>
        </ul>
      </div>

      <div class="my-6">
        <code class="word-highlight text-sm">runner</code>
        <p>テストスイートのランナーを指定します。現在はVitestが推奨されています。</p>
        <ul class="list-disc my-4">
          <li>Type: <code class="word-highlight text-sm">'vitest' | 'jest'</code></li>
          <li>Default: <code class="word-highlight text-sm">'vitest'</code></li>
        </ul>
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">APIs</h2>
      <h3 class="font-bold my-4">レンダリングテストのためのAPI</h3>

      <ContentDoc path="testing/api-fetch" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">ブラウザでのテスト</h2>
      <div
        class="flex p-4 mb-4 text-sm text-blue-400 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-100"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>現在対応中のため、引き続きお待ちください。</div>
      </div>
    </section>
  </div>
</template>
