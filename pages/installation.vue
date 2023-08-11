<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">インストール方法</h1>
      <p>オンラインのスターターやターミナルを利用することで、Nuxtを素早く始めることができます。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">オンラインで利用する</h2>
      <p>オンラインサンドボックスを使用して、ブラウザでNuxt 3を試すことができます：</p>
      <ul class="flex gap-4 my-3">
        <li>
          <NuxtLink
            to="https://stackblitz.com/github/nuxt/starter/tree/v3/?file=README.md"
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            target="_blank"
            >Play on StackBlitz</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="https://codesandbox.io/p/sandbox/github/nuxt/starter/tree/v3"
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            target="_blank"
            >Play on CodeSandbox</NuxtLink
          >
        </li>
      </ul>
      <p>nuxt.newを開くことで、スターターやテーマを選んで直接始めることができます。</p>
      <ul class="my-3">
        <li>
          <NuxtLink
            to="https://nuxt.new/"
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            target="_blank"
            >Discover nuxt.new</NuxtLink
          >
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">新規プロジェクト</h2>
      <h3 class="text-1xl font-bold my-1">前提条件</h3>
      <ul class="list-disc ml-5">
        <li>
          Node.js - <code class="text-sm inline-block rounded bg-gray-600 text-white p-1">v16.10.0</code> or
          それ以上のバージョン
        </li>
        <li>
          テキストエディタ -
          <NuxtLink
            to="https://code.visualstudio.com/"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >Visual Studio Code</NuxtLink
          >と<NuxtLink
            to="https://marketplace.visualstudio.com/items?itemName=Vue.volar"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >Volar</NuxtLink
          >拡張機能を推奨。
        </li>
        <li>ターミナル - Nuxtコマンドを実行するためのターミナル。</li>
      </ul>
      <p class="tips">最適なセットアップのための追加の注意事項:</p>
      <p>
        ターミナル(Windows PowerShellなど)を開いてください（Visual Studio Codeを使用している場合は、統合ターミナル）。
      </p>
      <p>以下のコマンドを使用して新しいスタータープロジェクトを作成してください。</p>
      <ContentDoc path="installation/init" class="markdown-body" />
      <p>Visual Studio Codeでプロジェクトフォルダを開いてください。</p>
      <ContentDoc path="installation/create-project" class="markdown-body" />
      <p>依存関係にあるファイルをインストールしてください。</p>
      <ContentDoc path="installation/install" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">開発サーバー</h2>
      <p>これで、開発モードでNuxtアプリを起動することができます：</p>
      <p>
        <ContentDoc path="installation/run-dev" class="markdown-body" />
      </p>
      <p>お疲れ様でした！自動的にブラウザウィンドウ（http://localhost:3000）が起動します。</p>
    </section>

    <section>
      <h2 class="text-3xl font-bold">次のステップ</h2>
      <p>Nuxt 3プロジェクトを作成したので、アプリケーションの構築を始める準備が整いました。</p>
      <p>
        <NuxtLink
          to="/guide/key-concepts/auto-import"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >フレームワークの概念</NuxtLink
        >について学びましょう。
      </p>
    </section>
  </div>
</template>
