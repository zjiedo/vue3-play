<template>
  <div>{{ data }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DefinedAsyncComponent",
  setup() {
    const data = "this is a message";

    return {
      data
    };
  }
});
</script>
