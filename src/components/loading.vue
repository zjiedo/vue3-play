<template>
  <div>{{ data }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Loading",
  setup() {
    const data = "I am loading";
    return {
      data
    };
  }
});
</script>
