<template>
  <n-tabs
    v-model:value="name"
    type="card"
    closable
    tab-style="min-width: 80px;"
    @close="handleClose"
  >
    <template #prefix>
      &lt;
    </template>
    <n-tab
      v-for="panel in panels"
      :key="panel"
      :tab="panel.toString()"
      :name="panel"
    >
    </n-tab>
  </n-tabs>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";

export default defineComponent({
  setup() {
    const nameRef = ref(1);
    const message = useMessage();
    const panelsRef = ref(100);
    function handleClose(name) {
      const { value: panels } = panelsRef;
      if (panels.length === 1) {
        message.error("最后一个了");
        return;
      }
      message.info("关掉 " + name);
      const index = panels.findIndex((v) => name === v);
      panels.splice(index, 1);
      if (nameRef.value === name) {
        nameRef.value = panels[index];
      }
    }
    return {
      panels: panelsRef,
      name: nameRef,
      handleClose
    };
  }
});
</script>