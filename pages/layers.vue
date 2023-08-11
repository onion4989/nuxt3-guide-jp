<template>
  <div>
    <section>
      <h1 class="text-lg lg:text-3xl font-bold">Layers / レイヤー</h1>
      <p>
        Nuxt
        3の主要な特徴の1つは、レイヤーと拡張サポートです。デフォルトのNuxtアプリケーションを拡張して、コンポーネントやユーティリティ、設定を再利用することができます。レイヤーの構造は、通常のNuxtアプリケーションとほぼ同じであり、そのため、レイヤーを作成し、メンテナンスするのが簡単です。
      </p>
      <p>いくつかの使用例</p>
      <ul class="list-disc ml-5">
        <li>
          nuxt.configや<code class="word-highlight text-sm">app.config</code
          >を使用してプロジェクト間で再利用可能な設定プリセットを共有する
        </li>
        <li>
          <code class="word-highlight text-sm">components/</code
          >ディレクトリを使用してコンポーネントライブラリを作成する
        </li>
        <li>
          <code class="word-highlight text-sm">composables/</code>ディレクトリや<code class="word-highlight text-sm"
            >utils/</code
          >ディレクトリを使用してユーティリティとコンポーザブルライブラリを作成する
        </li>
        <li>
          <NuxtLink
            to="https://github.com/nuxt-themes"
            class="underline decoration-dashed decoration-1 underline-offset-4"
            >Nuxtのテーマ</NuxtLink
          >を作成する
        </li>
        <li>Nuxtモジュールプリセットを作成する</li>
        <li>プロジェクト間で標準的なセットアップを共有する</li>
      </ul>
      <p>
        <code class="word-highlight text-sm">nuxt.config.ts</code>ファイルに<NuxtLink
          to="https://nuxt.com/docs/api/configuration/nuxt-config#extends"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >extends</NuxtLink
        >プロパティを追加することで、レイヤーを拡張することができます。
      </p>
      <ContentDoc path="layer/layer-extends" class="markdown-body" />
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Nuxtレイヤーの作成 / Authoring Nuxt Layers</h2>
      <p>
        詳細は、<NuxtLink
          to="https://nuxt.com/docs/api/configuration/nuxt-config#extends"
          class="underline decoration-dashed decoration-1 underline-offset-4"
          >レイヤー作成ガイド</NuxtLink
        >をご参照ください。
      </p>
    </section>
  </div>
</template>
