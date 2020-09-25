<template>
  <div class="about">
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <button @click="increase">+1</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, reactive } from "vue";
interface DataProps {
  double: number;
  count: number;
  increase: () => void;
}
export default defineComponent({
  name: "About",
  setup() {
    const data: DataProps = reactive({
      double: computed(() => data.count * 2),
      count: 2,
      increase: () => {
        data.count++;
      }
    });
    const refData = toRefs(data);
    return {
      ...refData
    };
  }
});
</script>
