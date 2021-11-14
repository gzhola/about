<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, unref, computed} from 'vue'

const counter = ref(12)
const message = ref('You loaded this page on ' + new Date().toLocaleString())


</script>

<template>
  <!-- 声明式渲染 -->
  <div id="counter">
    Counter: {{ counter }}
  </div>

  <div id="bind-attribute">
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
  </div>

  <div id="event-handling">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">反转 Message</button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
