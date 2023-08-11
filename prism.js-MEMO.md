# prismjs をインストールする

npm install prismjs

# vite-plugin-prismjs をインストールする

npm add --dev vite-plugin-prismjs

# nuxt.config.js に下記を明記する

```ts
# npm
import prismjs from "vite-plugin-prismjs";
export default defineNuxtConfig({
  vite: {
    plugins: [
      prismjs({
        // languages: "all"
        languages: [
          "cpp",
          "javascript",
          "bash",
          "dart",
          "sql",
          "css",
          "html",
          "java",
          "json",
          "sass",
          "scss",
          "c",
          "log",
          "swift",
          "md",
          "nginx",
          "yaml",
          "xml",
          "shell",
          "ts",
        ],
        // Prism プラグインの配置ツールバーは、後続の 2 つのプラグインに依存しています。
        // show-language: 言語名を表示します。
        // copy-to-clipboard: コードのコピー機能を追加します。
        plugins: ["toolbar", "show-language", "copy-to-clipboard"],
        // テーマの名前、サポートされているテーマは、このライブラリをインストールしたディレクトリの node_modules 内で探すことができます。
        theme: "tomorrow",
        css: true,
      }),
    ],
  },
});
```

# page.vue に script を設置する

```ts
<script setup>
  import Prism from "prismjs";
  onMounted(async () => {
    await nextTick();
    Prism.highlightAll();
  });
</script>
```

# 記述方法

```html
<pre class="language-sass">
    <code>
      $primary: #49240F;
      $secondary: #E4A79D;
    </code>
</pre>
```
