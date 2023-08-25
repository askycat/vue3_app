<script setup>
  import { onMounted,inject } from 'vue'
  import { NButton } from 'naive-ui'
  import http from '../utils/axios'

  var http2=inject('http');
  onMounted(() => {
    console.log(`the component is now mounted.`)
    let clipboard=inject('clipboard');
    new clipboard('.btn')
  })
  let getB=()=>{
    http2.get("http://127.0.0.1:5173/").then(res=>{
      debugger
    })
  }
</script>

<template>
  <peter></peter>
  <input id="foo" value="https://github.com/zenorocha/clipboard.js.git">
  <n-button @click="getB">copy</n-button>
  <!-- Trigger -->
  <button class="btn font-size-6 " bg-green-5 rounded-100 border-0 shadow-amber-3 text="gray-8 6xl"   w50 pa-5 data-clipboard-target="#foo">
    copy
  </button>
</template>
