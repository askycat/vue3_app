<template>
  <n-breadcrumb>
    <n-breadcrumb-item>
      <n-icon :component="LogoBitcoin" /> 北京总行</n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon :component="LogoBitcoin" /> 天津分行</n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon :component="LogoBitcoin" /> 平山道支行</n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script>
import { defineComponent } from "vue";
import { LogoBitcoin } from "@vicons/ionicons5";

export default defineComponent({
  setup() {
    return {
      LogoBitcoin
    };
  }
});
</script>