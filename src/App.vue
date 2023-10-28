<script setup>
import { EventBus } from "./eventBus";
import { onMounted, reactive, provide } from "vue";
import { darkTheme } from "naive-ui";
import { GameControllerOutline } from "@vicons/ionicons5";

const wsState = reactive({
  isConnected: false,
  message: null,
  ws: null,
});
const closeWS = () => {
  wsState.ws.close();
};
const initializeWebSocket = () => {
  if (wsState.isConnected) return;
  wsState.ws = new WebSocket("ws://localhost:3000");

  wsState.ws.onopen = () => {
    wsState.isConnected = true;
    console.log("Connected to the WebSocket server");
  };

  wsState.ws.onmessage = (event) => {
    wsState.message = event.data;
    window.dispatchEvent(new CustomEvent("ws-message",{ detail: event.data }));
    console.log("App.vue Received data:", event.data);
  };

  wsState.ws.onclose = () => {
    wsState.isConnected = false;
    console.log("Disconnected from the WebSocket server");
    initializeWebSocket();
  };
};
// 使用 provide 使 WebSocket 状态和实例在整个应用中可用
provide("wsState", wsState);


const isDark = true;

onMounted(() => {
  initializeWebSocket();
});
</script>
<template>
  <n-config-provider h-full :theme="isDark ? darkTheme : ''">
    <n-message-provider>
      <n-layout has-sider>
        <n-layout-sider>
          <n-icon>
            <game-controller-outline />
          </n-icon>
          <AppMenu />
        </n-layout-sider>
        <n-layout>
          <n-layout-header>
            <AppHeader />
            <AppTab />
          </n-layout-header>
          <n-layout-content content-style="padding: 24px;">
            <RouterView />
          </n-layout-content>
          <n-layout-footer>
            <n-button @click="closeWS">close</n-button>
            <router-link to="/">home</router-link>
            <router-link to="ws">ws</router-link>
          </n-layout-footer>
        </n-layout>
      </n-layout>
    </n-message-provider>
  </n-config-provider>
</template>