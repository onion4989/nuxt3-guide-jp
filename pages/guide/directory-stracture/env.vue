<script setup>
definePageMeta({
  layout: "guide",
});
</script>
<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">.env ファイル</h1>
      <h2 class="text-lg lg:text-2xl font-bold my-5">ビルド、開発、および生成</h2>
      <p>Nuxt CLIには、開発モードでのdotenvのサポートと、nuxi buildおよびnuxi generateを実行する際に組み込まれたdotenvのサポートがあります。</p>
      <p>
        .nuxtディレクトリは開発時にVueアプリケーションを生成するために使用され、nuxi devを実行すると自動的に生成されます。このディレクトリ内のファイルを直接変更する必要はありません。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>
          <p>
            異なるファイル（例：.env.localや.env.production）を使用したい場合は、nuxiを使用する際に--dotenvフラグを渡すことで可能です。以下は例です:
          </p>
          <ContentDoc path="guide/directry-stracture/env/env-file" class="markdown-body" />
          <p>上記のように、これは開発モードでのみ適用され、nuxi buildとnuxi generateを実行するときにのみ適用されます。</p>
        </div>
      </div>
      <p>
        開発モードで.envファイルを更新すると、Nuxtインスタンスは自動的に再起動され、新しい値がprocess.envに適用されます。
      </p>
      <div class="bg-orange-50 border border-orange-200 text-sm text-orange-600 rounded-md p-4" role="alert">
        <span class="sr-only">Info</span>
        注意：.envファイルから変数を削除したり、.envファイルを完全に削除したりしても、既に設定されている値は削除されません。
      </div>
    </section>

    <section>
      <h2 class="text-lg lg:text-3xl font-bold">プロダクション プレビュー</h2>
      <p>
        サーバーを構築した後、サーバーを実行するときに環境変数を設定する必要があります。この時点では .env ファイルは読み取られません。これを行う方法は環境ごとに異なります。
      </p>
      <p>
        ローカル実稼働プレビューの目的には、nuxi プレビューを使用することをお勧めします。このコマンドを使用すると、利便性のために .env ファイルが process.env にロードされるためです。 このコマンドでは、依存関係をパッケージ ディレクトリにインストールする必要があることに注意してください。
      </p>
      <p>
        または、ターミナルを使用して環境変数を引数として渡すこともできます。 たとえば、Linux または macOS の場合:
      </p>
      <ContentDoc path="guide/directry-stracture/env/production-preview" class="markdown-body" />
      <p>
        純粋に静的なサイトの場合、プロジェクトが事前レンダリングされた後にランタイム構成を設定することはできないことに注意してください。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>詳細については、「ドキュメント」>「ガイド」>「さらに進む」>「ランタイム構成」を参照してください。</div>
      </div>
      <p>
        ビルド時に設定された環境変数を使用したいが、後で更新する必要がない (またはアプリ内で事後的に更新する必要があるだけ) 場合は、appConfig の方が良い選択肢になる可能性があります。 appConfig は、nuxt.config 内 (環境変数を使用) と、プロジェクト内の ~/app.config.ts ファイル内の両方で定義できます。
      </p>
      <div
        class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <span class="sr-only">Info</span>
        <div>詳細については、「ドキュメント」>「ガイド」>「ディレクトリ構造」>「アプリ構成」を参照してください。</div>
      </div>
    </section>
  </div>
</template>
