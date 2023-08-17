```json [custom.code-snippets.json]
// ******Tips******
// prefix  … 入力コード
// body    … 変換されるスクリプト
// \t      … タブ(スペース挿入)
// \       … エスケープ
// $1      … 入力フォーカス(連番可 / 例：$2 …など)
//           例えば $1 だと、一番最初に入力カーソルが表示される場所になります。

"Base": {
    // Nuxt3のページを構成するBaseスクリプト
    "prefix": "ba",
    "body": [
        "<script setup>",
        "</script>",
        "<template>",
        "\t<div>",
        "\t$1",
        "\t</div>",
        "</template>"
    ]
},
"Section": {
    // template内のsectionスクリプト
    "prefix": "se",
    "body": [
        "<section>",
        "\t<h2 class=\"text-2xl font-bold\">$1</h2>",
        "\t<p></p>",
        "\t<ul>",
        "\t\t<li></li>",
        "\t\t<li></li>",
        "\t</ul>",
        "</section>"
    ]
},
"NuxtLink": {
    // NuxtLinkタグ - Web上では<a href="">に自動的に変換
    "prefix": "nlink",
    "body": ["<NuxtLink to=\"$1\" class=\"underline decoration-dashed decoration-1 underline-offset-4\"></NuxtLink>"]
}
```
