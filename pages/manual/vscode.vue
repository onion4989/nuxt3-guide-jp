<script setup>
definePageMeta({
  layout: "manual",
});
</script>

<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">Visual Studio Code</h1>
      <p>ここではVisual Studio Code（以下、VS Code）のインストールから開発環境の構築と設定までを行います。</p>
      <p>
        VS
        Codeの機能は非常に多岐に渡るため、Web開発に必要になる最低限の説明のみとなります。マスターしたい方は書籍を購入するか、他の参考サイトなどを利用してください。
      </p>
      <ul class="list-none border rounded-xl shadow-sm p-6 bg-gray-50 dark:border-gray-700 my-6">
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink :to="{ path: '/manual/vscode', hash: '#vs-code-install'}" class="underline decoration-dashed decoration-1 underline-offset-4">VS Codeのインストール</NuxtLink>
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink :to="{ path: '/manual/vscode', hash: '#plugin-install'}" class="underline decoration-dashed decoration-1 underline-offset-4">必要プラグインのインストール</NuxtLink>
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink :to="{ path: '/manual/vscode', hash: '#configuration-settings'}" class="underline decoration-dashed decoration-1 underline-offset-4">環境設定</NuxtLink>
        </li>
        <li
          class="relative pl-12 pb-4 last:pb-0 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-7 before:h-7 before:text-xs before:font-semibold before:text-slate-900 before:rounded-full before:border before:border-slate-200 dark:before:border-slate-700 dark:before:text-slate-900 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5 last:after:hidden after:absolute after:top-[calc(1.75rem_+_.5rem)] after:bottom-0 after:left-[0.875rem] after:w-px after:bg-slate-200 dark:after:bg-gray-800 my-2"
          style="counter-increment: step 1"
        >
          <NuxtLink :to="{ path: '/manual/vscode', hash: '#how-to-use'}" class="underline decoration-dashed decoration-1 underline-offset-4">画面の簡易説明と使い方</NuxtLink>
        </li>
      </ul>
    </section>

    <section id="vs-code-install">
      <h2 class="text-lg lg:text-2xl font-bold">1. VS Codeインストール</h2>
      <p>
        環境に合わせて、<NuxtLink
          to="https://code.visualstudio.com/Download"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >こちらから</NuxtLink
        >インストールしてください。
      </p>
    </section>

    <section id="plugin-install">
      <h2 class="text-lg lg:text-2xl font-bold">2. 必要プラグインのインストール</h2>
      <p>
        各種プラグインは必ずしも必須ではありませんが、利用することで、開発をよりスムーズに行うことができるようになります。
      </p>
      <p>下記は推奨プラグインの一覧です。</p>
      <ul class="mx-4">
        <li class="mt-6">
          <span class="w-2 h-2 inline-block bg-yellow-500 rounded-full mr-2"></span>
          <span class="font-bold">【VS Code拡張機能】Japanese Language Pack for Visual Studio Code</span>
          <p class="ml-5">
            VS Codeの日本語化パックです。まずはこちらを入れておきましょう。
          </p>
        </li>
        <li class="mt-6">
          <span class="w-2 h-2 inline-block bg-green-500 rounded-full mr-2"></span>
          <span class="font-bold">【VS Code拡張機能】TypeScript Vue Plugin（Volar）</span>
          <p class="ml-5">
            VolarはVue.jsの開発をサポートするVS Codeの拡張機能です。<br />
            .vueファイルのシンタックハイライトやインテリセンスによるコード補完の機能で、開発をよりスムーズにしてくれます。<br />
            <span class="text-xs">※VS Codeからインストール</span>
          </p>
        </li>
        <li class="mt-6">
          <span class="w-2 h-2 inline-block bg-purple-500 rounded-full mr-2"></span>
          <span class="font-bold">【VS Code拡張機能】ESLint</span>
          <p class="ml-5">
            ESLintは、JavascriptやTypeScriptのコードを自動的に検証（チェック）してくれるツールです。<br />            
          </p>
          <ul class="ml-5">
            <li><span class="text-xs">※後述するPrettierと同じような機能ですが、こちらは検証で自動整形はなし。</span></li>
            <li><span class="text-xs">※VS Codeからインストール</span></li>
          </ul>
        </li>
        <li class="mt-6">
          <span class="w-2 h-2 inline-block bg-pink-500 rounded-full mr-2"></span>
          <span class="font-bold">【VS Code拡張機能】Prettier（Code formatter）</span>
          <p class="ml-5">
            Prettierはソースコードを自動的に整形するツールです。<br />
            見やすいように自動整形してくれるのですが、日本語環境（日本語の文章）ではやや不便な一面もあります。ケース by
            ケースで使用してください。<br />
            <span class="text-xs">※VS Codeからインストール</span>
          </p>
        </li>
        <li class="mt-6">
          <span class="w-2 h-2 inline-block bg-red-500 rounded-full mr-2"></span>
          <span class="font-bold">【VS Code拡張機能】Tailwind CSS IntelliSense</span>
          <p class="ml-5">
            Tailwind CSSに必須の拡張機能です。cssのclass名などを自動補完してくれます。<br />
            <span class="text-xs">※VS Codeからインストール</span>
          </p>
        </li>
        <li class="mt-6">
          <span class="w-2 h-2 inline-block bg-gray-500 rounded-full mr-2"></span>
          <span class="font-bold">【Windows】git</span>
          <p class="ml-5">
            プログラムのファイルを管理するシステム。ソースコードやファイルなどの変更履歴を記録・追跡できます。<br />
            また、VS Codeのターミナルを利用してGithubを操作するためには、こちらのgitが必要になります。<br />
            <p><NuxtLink
              to="https://gitforwindows.org/"
              class="underline decoration-dashed decoration-1 underline-offset-4"
              >公式サイト</NuxtLink
            >はこちらから</p>
            <div class="text-xs">※公式サイトから直接インストール</div>
          </p>
        </li>
      </ul>
    </section>

    <section id="configuration-settings">
      <h2 class="text-lg lg:text-2xl font-bold">3. 環境設定</h2>
      <p>
        ここでは最低限の（3つの）環境設定のみを行っていきます。<br />
        他にも色々と設定があると思いますが、ここでは割愛いたします。ネット上には他の記事が色々あるので、自分に最適な環境を探しながら試しみてください。
      </p>
      <ul class="mx-4">
        <li class="mt-6">
          <span class="w-2 h-2 inline-block bg-blue-500 rounded-full mr-2"></span>
          <span class="font-bold">テーマ（配色）の変更</span>
          <p class="ml-5">
            VS Codeを新しく始める場合、最も重要なのが画面の「見やすさ」です。<br />
            開発では特に長時間、画面と向き合うため、自分に合ったテーマと配色を選んでください。
          </p>
          <p class="ml-5">
            VS Code画面上部「ファイル」>「ユーザー設定」>「テーマ」>「配色テーマ」から任意のテーマを選択してみましょう。
          </p>
          <div class="text-xs ml-5">※テーマは、キーボードの ▲ か ▼ を押下することで、配色を確認しながら決めることができます。 </div>
        </li>
        <li class="mt-8">
          <span class="w-2 h-2 inline-block bg-green-500 rounded-full mr-2"></span>
          <span class="font-bold">ユーザースニペットの構成</span>
          <p class="ml-5">
            開発において次に重要なのが、ユーザースニペット（アジャスト機能）です。
          </p>
          <p class="ml-5">
            アジャスト機能を利用することで、開発スピードが爆上がりします。
          </p>
          <p class="ml-5">
            VS Code画面上部「ファイル」>「ユーザー設定」>「ユーザースニペットの構成」>入力欄に「custom」などの名称を入力する。
            すると、ファイル名が「custom.code-snippets」というファイルが自動起動するので、下記のようにコードを入力します。
          </p>
          <p class="ml-5">
            こちらのコードは、Nuxt3を構成するスタンダードなタグになります。<br />
            「ba」はbaseを構成するタグを、「se」はsectionを構成するタグを、「nlink」はリンクを構成するタグのコードアシストになります。<br />
          </p>
          <p class="ml-5">
            &lt;templete&gt;と&lt;script&gt;タグ、&lt;section&gt;タグは最も頻度が高いタグになります。<br />
            &lt;style&gt;タグはこの中に入っていませんが、Tailwind CSSを利用する場合は、あまり頻度は高くありません。<br />
          </p>
          <p class="ml-5">
            もし必要であれば、「ba」の&lt;/templete&gt;閉じタグの後に&lt;style&gt;タグを入れてください。
          </p>
          <p class="ml-5">
            <ContentDoc path="manual/vs-code/custom-snippets" class="markdown-body" />
          </p>
          <p class="ml-5">
            <ContentDoc path="manual/vs-code/custom-sample-script-tag" class="markdown-body" />
          </p>
        </li>
        <li class="mt-8">
          <span class="w-2 h-2 inline-block bg-pink-500 rounded-full mr-2"></span>
          <span class="font-bold">テレメトリーレポートの停止</span>
          <p class="ml-5">
            テレメトリとは、クラッシュや使用状況などのデータをMicrosoftに自動送信している仕組みのことです。<br />
          </p>
          <p class="ml-5">
            デフォルトの状態(all)のままでもVS Codeの使用には問題ありませんが、PCのリソースを活用するためにも、見直してみるのも良いと思います。<br />
            無効にする場合、下記から設定を行います。
          </p>
          <p class="ml-5">
            VS Code画面上部「ファイル」>「ユーザー設定」>「設定」> 左側メニュー「アプリケーション」>「テレメトリ」から off に変更する<br />
          </p>
        </li>
      </ul>
    </section>

    <section id="how-to-use">
      <h2 class="text-lg lg:text-2xl font-bold">4. 画面の簡易説明と使い方</h2>
      <p class="ml-5">
        ここでは詳細な説明は割愛しますが、始めて使用する方は、インターネットで「vs code 使い方 初心者」などのキーワードで検索してみてください。        
      </p>
      <p class="ml-5">
        下記は、一部の参考サイトになります。
        <ul class="list-disc my-6">
          <li>
            <NuxtLink to="https://www.sejuku.net/blog/40607" class="underline decoration-dashed decoration-1 underline-offset-4">【初心者必見!】Visual Studio Codeの使い方を分かりやすく解説!</NuxtLink>
          </li>
          <li class="my-2">
            <NuxtLink to="https://skillhub.jp/blogs/235" class="underline decoration-dashed decoration-1 underline-offset-4">【アニメ図解たっぷり】VSCodeの使い方入門!～ 基本からWeb制作まで</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://digitor.jp/textbook/vscode-howto/" class="underline decoration-dashed decoration-1 underline-offset-4">【入門編】Visual Studio Code 基礎知識・使い方</NuxtLink>
          </li>
        </ul>
      </p>
    </section>
  </div>
</template>
