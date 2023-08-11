<script setup>
const error = useError()
</script>

<template>
  <div>
    <section class="error-container">
      <h2 class="text-4xl">お探しのページは見つかりませんでした</h2>
      <ul class="error-msg">
        <li><h2 class="text-4xl text-bold">{{ error.statusCode }}</h2></li>
        <li>{{ error.message }}</li>
      </ul>
      <p>下記ボタンからお戻りください</p>
      <p><NuxtLink to="/" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">TOPに戻る</NuxtLink></p>
    </section>
  </div>
</template>

<style>
.error-container {
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.error-msg{
  padding: 20px 0;
}

</style>