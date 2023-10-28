<script setup>
import { onMounted, onBeforeUnmount,inject, watch } from "vue";
import { EventBus } from "../eventBus";
import http from "../utils/axios";
let wsState = inject("wsState");

var http2 = inject("http");

const handleMessage = (data) => {
  console.log("ws界面,addEventListener收到消息:", data.detail);
  // 根据数据做其他处理...
};

// 添加socket通知监听
window.addEventListener("ws-message", handleMessage);

// 在组件卸载前移除事件监听器
onBeforeUnmount(() => {
  window.removeEventListener("ws-message", handleMessage);
});

onMounted(() => {
  console.log(`the component is now mounted.`);
  let clipboard = inject("clipboard");
  new clipboard(".btn");
  if (wsState.isConnected) {
    wsState.ws.send("ws界面");
  }
});

watch(
  () => wsState.message,
  (msg) => {
    console.log("ws界面,WATCH收到消息：" + msg);
  }
);

let getB = () => {
  wsState.ws.close();
  http2.get("http://127.0.0.1:5173/").then((res) => {
    debugger;
  });
};
</script>

<template>
  <input id="foo" value="https://github.com/zenorocha/clipboard.js.git" />
  <n-button @click="getB">copy</n-button>
  <!-- Trigger -->
  <button
    class="btn font-size-6"
    bg-green-5
    rounded-100
    border-0
    shadow-amber-3
    text="gray-8 6xl"
    w50
    pa-5
    data-clipboard-target="#foo"
  >
    copy
  </button>
</template>
