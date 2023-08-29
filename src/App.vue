<script setup>
import { darkTheme } from 'naive-ui'
</script>
<template>
  <n-config-provider h-full :theme="darkTheme">
    <n-layout has-sider>
      <n-layout-sider class="h-full" collapse-mode="width" :collapsed-width="10" bordered>
        <AppMenu />
      </n-layout-sider>
      <n-layout>
        <n-layout-header>颐和园路</n-layout-header>
        <n-layout-content content-style="padding: 24px;">

          <RouterView />
        </n-layout-content>
        <n-layout-footer>成府路</n-layout-footer>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>