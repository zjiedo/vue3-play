<template>
  <div class="ref">
    <ul>
      <li v-for="(item, index) in list" :key="index" :ref="addRefs">
        {{ item }}
      </li>
    </ul>
    <h1>{{ data }}</h1>
    <button @click="clickMe">点我增加</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUpdate, onUpdated } from "vue";
export default defineComponent({
  name: "Ref",
  setup() {
    const list = ref([1, 2, 3, 4, 5]);
    const data = ref(1);
    let itemRefs: Array<object> = [];

    const addRefs = (el: object) => {
      itemRefs.push(el);
    };

    onMounted(() => {
      console.log(itemRefs);
    });
    onBeforeUpdate(() => {
      itemRefs = [];
    });
    onUpdated(() => {
      console.log(itemRefs);
    });
    const clickMe = () => {
      data.value++;
    };

    return {
      data,
      list,
      clickMe,
      addRefs
    };
  }
});
</script>
