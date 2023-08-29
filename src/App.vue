<script setup>
import { darkTheme } from "naive-ui";
import { GameControllerOutline } from "@vicons/ionicons5";
const isDark = true;
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
        <n-layout-footer>成府路</n-layout-footer>
      </n-layout>
    </n-layout>
    </n-message-provider>
  </n-config-provider>
</template>