<template>
  <div class="about">
    <h1>{{ count }}</h1>
    <h1>{{ double }}</h1>
    <!-- <ul>
      <li v-for="(item, index) in numbers" :key="index">
        {{ item }}
      </li>
    </ul> -->
    <button @click="increase">+1</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, reactive } from "vue";
interface DataProps {
  double: number;
  count: number;
  increase: () => void;
  numbers: Array<number>;
}
export default defineComponent({
  name: "About",
  setup() {
    const data: DataProps = reactive({
      double: computed(() => data.count * 2),
      count: 2,
      numbers: [1, 2, 3],
      increase: () => {
        data.count++;
      }
    });
    // data.numbers[1] = 100;
    const refData = toRefs(data);
    return {
      ...refData
    };
  }
});
</script>
