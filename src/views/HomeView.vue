<script setup>
  import { onMounted,inject } from 'vue'

  onMounted(() => {
    console.log(`the component is now mounted.`)
    let clipboard=inject('clipboard');
    new clipboard('.btn')
  })
</script>

<template>
  <input id="foo" value="https://github.com/zenorocha/clipboard.js.git">
  <h3>{{foo}}</h3>
  <!-- Trigger -->
  <button class="btn" data-clipboard-target="#foo" v-permission>
    copy
  </button>
</template>
