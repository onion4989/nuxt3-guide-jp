<template>
  <div>

    <section>
      <div class="bg-gray-50 border border-gray-200 text-sm text-black rounded-md p-4" role="alert">
        <h1 class="text-lg lg:text-3xl text-center my-2">-READE ME-</h1>
        このサイトは<NuxtLink to="https://nuxt.com/docs/getting-started/introduction" class="font-bold underline decoration-dashed decoration-1 underline-offset-4" >Nuxt3公式サイトのドキュメント</NuxtLink>を日本語に翻訳したサイトです。
        翻訳の内容に違和感がある場合は、公式ページの原文を確認してください。一部、まだ追加していないページがありますが、今後、時間を見つけて追加していく予定です。
      </div>
      
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">始めに</h2>
      <p>
        Nuxtは、Vue.jsを使用したタイプセーフ（型安全 / 型の違いによってエラーが起こることを防ぐ仕組みのこと）で高パフォーマンスかつ本番向けのフルスタックウェブアプリケーションやウェブサイトを作成できる拡張可能な無料のオープンソースフレームワークです。
      </p>
      <p>
        開発中にHMR（Hot Module Replacement / ページ全体を更新しなくても、実行時にブラウザ内のモジュールを自動的に更新することで開発者体験を向上させる仕組み）を楽しみながら、デフォルトでサーバーサイドレンダリングを使用して、本番環境で高性能なアプリケーションを作成することができます。また、初めから<code class="word-highlight text-sm">.vue</code>ファイルを作成し始めることができます。
      </p>
      <p>
        Nuxtにはベンダーロックイン（プログラムを構成する中核部分に特定のシステムを組込むことで、他社製品への切り替えが困難になること）がないため、アプリケーションをどこにでもデプロイ（実行ファイルを実際のWebサーバー上に配置して、利用できる状態にすること）することができます。<NuxtLink to="/deployment" class="underline decoration-dashed decoration-1 underline-offset-4">Edgeにもデプロイ</NuxtLink>することができます。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">自動化とルール（規約）</h2>
      <p>
        Nuxtは、ルールと主観的なディレクトリ構造を使用して、繰り返しタスクを自動化することで、機能の開発に集中できるようにしています。設定ファイル（nuxt.config.ts）ではデフォルトの動作をカスタマイズしたり上書きしたりすることもできます。
      </p>
      <ul class="spacing mt-8">
        <li>
          <div class="left-headline">ファイルのルーティング</div>
          <p>
            <code class="word-highlight text-sm">pages/</code>ディレクトリの構造に基づいてルートを定義します。これにより、アプリケーションの整理が容易になり、手動でのルート設定が不要になります。
          </p>
        </li>
        <li>
          <div class="left-headline">コード分割</div>
          <p>
            Nuxtは自動的にコードを小さな塊に分割（細分化）します。これにより、アプリケーションの初回読み込み時間を短縮することができます。
          </p>
        </li>
        <li>
          <div class="left-headline">
            ボックスからのサーバーサイドレンダリング
          </div>
          <p>
            Nuxtにはサーバーサイドレンダリング機能があるため、別途サーバーを設定する必要はありません。
          </p>
        </li>
        <li>
          <div class="left-headline">自動インポート</div>
          <p>ツリーシェイキング（実行されないコードを削除すること）と最適化されたJSバンドルの恩恵を受けているため、Vueのコンポーザブルやコンポーネントをインポート不要で使用することができます。</p>
        </li>
        <li>
          <div class="left-headline">データの取得ユーティリティ</div>
          <p>Nuxtは、SSRに対応したデータの取得や異なるストラテジーを扱うためのコンポーザブルを提供しています。</p>
        </li>
        <li>
          <div class="left-headline">ゼロ設定のTypeScriptサポート</div>
          <p>自動生成された型と<code class="word-highlight text-sm">tsconfig.json</code>により、TypeScriptを学ぶ必要がなく、型安全なコードを利用できます。</p>
        </li>
        <li>
          <div class="left-headline">設定済みのビルドツール</div>
          <p>デフォルトではViteを使用しており、開発中のホットモジュールリプレースメント（HMR）をサポートし、本番環境でのコードのバンドルにはベストプラクティス（最良の標準機能）が組み込まれています。</p>
        </li>
        <p>
          <p>Nuxtはこれらを管理し、フロントエンドとバックエンドの機能を提供するため、重要なことに集中できるようにします。それは、ウェブアプリケーションの作成です。</p>
        </p>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">サーバーサイドレンダリング（SSR）</h2>
      <p>
        Nuxtはデフォルトで組み込みのサーバーサイドレンダリング（SSR）機能を持ち、独自にサーバーを設定する必要はありません。これにより、ウェブアプリケーションには多くの利点があります。
      </p>
      <ul class="spacing mt-8">
        <li>
          <div class="left-headline">初期ページの読み込み時間の短縮</div>
          <p>Nuxtは、完全にレンダリングされたHTMLページをブラウザに送信し、即座に表示されます。これにより、遅いネットワークやデバイスでも、認識されるページの読み込み時間が短くなり、ユーザーエクスペリエンス（UX）が向上します。</p>
        </li>
        <li>
          <div class="left-headline">SEOの向上</div>
          <p>サーバーサイドレンダリング（SSR）ページでは、HTMLコンテンツが即座に利用可能であるため、検索エンジンがより効果的にインデックス化できます。これにより、クライアントサイドでコンテンツをレンダリングするJavaScriptが必要なくなります。</p>
        </li>
        <li>
          <div class="left-headline">低パワーデバイスでのパフォーマンス向上</div>
          <p>クライアント側でダウンロードおよび実行する必要のあるJavaScriptの量を削減するため、処理が重いJavaScriptアプリケーションに苦労する可能性のある低パワーデバイスでもメリットがあります。</p>
        </li>
        <li>
          <div class="left-headline">アクセシビリティの向上</div>
          <p>初回のページ読み込み時にコンテンツが即座に利用可能となるため、スクリーンリーダーやその他の支援技術を使用するユーザーのアクセシビリティが向上します</p>
        </li>
        <li>
          <div class="left-headline">キャッシュの簡易化</div>
          <p>ページはサーバーサイドでキャッシュされるため、コンテンツを生成してクライアントに送信する時間を短縮することで、さらにパフォーマンスが向上します。</p>
        </li>
        <p>
          サーバーサイドレンダリングは、全体的にはより速く効率的なユーザーエクスペリエンスを提供し、検索エンジン最適化やアクセシビリティを向上させることができます。
        </p>
        <p>
          Nuxtは柔軟なフレームワークであり、<code class="word-highlight text-sm">nuxt generate</code>を使用してアプリケーション全体を静的ホスティングに静的にレンダリングしたり、
          <code class="word-highlight text-sm">ssr:false</code>オプションでSSRをグローバルに無効化したり、<code class="word-highlight text-sm">routeRules</code>オプションを設定することでハイブリッドレンダリングを活用したりすることができます。
        </p>
        <p class="tips">
          <span class="sr-only">Info</span>
          <NuxtLink to="/guide/key-concepts/rendering-modes" class="underline decoration-dashed decoration-1 underline-offset-4">レンダリングモード</NuxtLink>を読む。</p>
      </ul>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">サーバーエンジン</h2>
      <p>
        NuxtのサーバーエンジンNitroは、新しいフルスタックの機能を解放します。
      </p>
      <p>
        開発時には、Nuxtのサーバーコードとコンテキストの分離にはRollup（JSのモジューハンドラー）とNode.jsワーカーが使用されます。また、<code class="word-highlight text-sm">server/middleware/</code>からサーバーAPIおよびミドルウェアが生成されます。
      </p>
      <p>
        本番環境では、Nitroはアプリとサーバーを1つのユニバーサルな<code class="word-highlight text-sm">server/api/</code>内のファイルや<code class="word-highlight text-sm">output/</code>ディレクトリに構築（ビルド）します。この出力されたファイルは軽量であり、ノードモジュール（ポリフィルを除く）から最小化されて削除されています。また、これらはJavaScriptをサポートするシステムで展開できます。例えば、Node.js、Serverless、Workers、Edge-sideレンダリング、または静的な環境などです。
      </p>
      <p class="tips">
        <span class="sr-only">Info</span>
        <NuxtLink to="/guide/key-concepts/server-engine" class="underline decoration-dashed decoration-1 underline-offset-4">サーバーエンジン</NuxtLink>を読む。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">展開される環境</h2>
      <p>
        NuxtアプリケーションはNodeサーバーやDenoサーバー上で展開することができます。また、静的環境でホストするためにプリレンダリングされることもあります。さらに、サーバーレス環境やエッジプロバイダーに展開することも可能です。
      </p>
      <p class="tips">
        <span class="sr-only">Info</span>
        <NuxtLink to="/deployment" class="underline decoration-dashed decoration-1 underline-offset-4">デプロイ</NuxtLink>を読む。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">モジュラー</h2>
      <p>
        モジュールシステムにより、Nuxtをカスタムの機能やサードパーティのサービスとの統合で拡張することができます。
      </p>
      <p class="tips">
        <span class="sr-only">Info</span>
        <NuxtLink to="/guide/key-concepts/modules" class="underline decoration-dashed decoration-1 underline-offset-4">モジュール</NuxtLink>を読む。</p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">アーキテクチャ</h2>
      <p>Nuxtはさまざまなコアパッケージから構成されています。</p>
      <ul class="list-disc ml-6">
        <li>コアエンジン: nuxt</li>
        <li>バンドル: @nuxt/vite-builder and @nuxt/webpack-builder</li>
        <li>コマンドライン: nuxi</li>
        <li>サーバーエンジン: nitro</li>
        <li>開発キット: @nuxt/kit</li>
        <li>Nuxt 2 Bridge: @nuxt/bridge</li>
      </ul>
      <p>
        各種パッケージの説明を一度目を通しておくことをお勧めします。それにより、Nuxtの機能と各パッケージの範囲についてより理解を深めることができるでしょう。
      </p>
    </section>

    <section>
      <h2 class="text-lg lg:text-2xl font-bold">Nuxtって何?</h2>
      <p>
        Nuxtは、Vue.jsプロジェクトをバックボーンに開発され、プロジェクトをより迅速にかつ手軽に構築するためのアーキテクチャーを提供します。より柔軟性を保ちながらプロジェクトを構築することができます。
      </p>
      <p>
        Nuxtは強力なモジュールとエンジンで、より拡張性があり、RESTやGraphQLエンドポイント、お気に入りのCMS、CSSフレームワークなどとの連携を容易にします。また、PWAやAMPのサポートも、Nuxtプロジェクトからわずかなモジュールの追加で利用することができます。
      </p>
      <p>準備はできましたか？</p>
      <p>さぁ、<NuxtLink to="/installation" class="underline decoration-dashed decoration-1 underline-offset-4">インストールセクション</NuxtLink>に進んでください。</p>
    </section>

  </div>
</template>
