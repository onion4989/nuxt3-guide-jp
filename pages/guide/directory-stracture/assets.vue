<script setup>
definePageMeta({
  layout: "guide",
});
</script>

<template>
  <div>
    <section>
      <h2 class="text-lg lg:text-3xl font-bold">アセット ディレクトリ</h2>
      <p>
        assets/
        ディレクトリは、ビルドツール（webpackまたはVite）が処理するウェブサイトのすべてのアセットを追加するために使用されます。
      </p>
      <p>通常、このディレクトリには以下のタイプのファイルが含まれています：</p>
      <ul class="list-disc">
        <li>スタイルシート (CSS, SASS, etc.)</li>
        <li>フォント</li>
        <li>public/ ディレクトリから提供されない画像ファイル。</li>
      </ul>
      <p>もしサーバーからアセットを提供したい場合は、public/ ディレクトリを見てみることをおすすめします。</p>
      <p class="tips">
        <span class="sr-only">Info</span>
        詳細は「ドキュメント > はじめに > アセット」をご参照ください。
      </p>
    </section>
  </div>
</template>
