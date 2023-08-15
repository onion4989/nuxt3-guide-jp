<template>
  <div>
    <nav class="lg:sticky lg:top-16 lg:self-start overflow-x-hidden overflow-y-auto h-full">
      <ul class="list-decimal flex flex-col m-auto">
        <li><NuxtLink to="/" data-hs-overlay="#hs-overlay-body-scrolling">始めに</NuxtLink></li>
        <li><NuxtLink to="/installation" data-hs-overlay="#hs-overlay-body-scrolling">インストール方法</NuxtLink></li>
        <li><NuxtLink to="/configuration" data-hs-overlay="#hs-overlay-body-scrolling">設定</NuxtLink></li>
        <li><NuxtLink to="/views" data-hs-overlay="#hs-overlay-body-scrolling">ビュー</NuxtLink></li>
        <li><NuxtLink to="/assets" data-hs-overlay="#hs-overlay-body-scrolling">アセット</NuxtLink></li>
        <li><NuxtLink to="/styling" data-hs-overlay="#hs-overlay-body-scrolling">スタイリング</NuxtLink></li>
        <li><NuxtLink to="/routing" data-hs-overlay="#hs-overlay-body-scrolling">ルーティング</NuxtLink></li>
        <li><NuxtLink to="/seo-and-meta" data-hs-overlay="#hs-overlay-body-scrolling">SEO-and-Meta</NuxtLink></li>
        <li><NuxtLink to="/transitions" data-hs-overlay="#hs-overlay-body-scrolling">トランジション</NuxtLink></li>
        <li><NuxtLink to="/data-fetching" data-hs-overlay="#hs-overlay-body-scrolling">データの取得</NuxtLink></li>
        <li><NuxtLink to="/state-management" data-hs-overlay="#hs-overlay-body-scrolling">状態管理</NuxtLink></li>
        <li><NuxtLink to="/error-handling" data-hs-overlay="#hs-overlay-body-scrolling">エラー処理</NuxtLink></li>
        <li><NuxtLink to="/layers" data-hs-overlay="#hs-overlay-body-scrolling">レイヤー</NuxtLink></li>
        <li><NuxtLink to="/deployment" data-hs-overlay="#hs-overlay-body-scrolling">デプロイ</NuxtLink></li>
        <li><NuxtLink to="/testing" data-hs-overlay="#hs-overlay-body-scrolling">テスト</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<style>
.container .router-link-active {
  text-decoration: underline;
}
</style>
