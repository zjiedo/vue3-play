<template>
  <div class="mouse">
    <p>X: {{ x }}</p>
    <p>Y: {{ y }}</p>
    <h6 v-if="loading">Loading....</h6>
    <h6 v-if="loaded">
      <img :src="result.message" alt="dog" />
    </h6>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UseMousePositon from "@/hooks/useMousePosition";
import useURLLoader from "@/hooks/useURLLoader";

export default defineComponent({
  name: "MousePosition",
  setup() {
    // const x = ref(0);
    // const y = ref(0);
    // const updateMouse = (e: MouseEvent) => {
    //   x.value = e.pageX;
    //   y.value = e.pageY;
    // };

    // onMounted(() => {
    //   document.addEventListener("click", updateMouse);
    // });

    // onUnmounted(() => {
    //   document.removeEventListener("click", updateMouse)
    // });
    const { x, y } = UseMousePositon();
    const { result, loading, loaded, error } = useURLLoader("https://dog.ceo/api/breeds/image/random");
    // vs Minix 清除来源， 可以给x, y 设置别名， 可以脱离组件存在

    return {
      x,
      y,
      result,
      loading,
      loaded,
      error
    };
  }
});
</script>
