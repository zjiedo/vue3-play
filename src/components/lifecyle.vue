<template>
  <div class="home">
    {{ count }}
    <p>{{ info }}</p>
    <button @click="submit">改变页面</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  // ref,
  watch,
  reactive,
  toRefs
} from "vue";
interface DataProps {
  count: string;
  info: string;
}
export default defineComponent({
  name: "lifecyle & watch",
  setup() {
    const data: DataProps = reactive({
      info: "info",
      count: "message",
      submit: () => {
        data.count += "daa";
        data.info += "iiii";
      }
    });
    // watch多个值, 第一个数是数组
    watch([() => data.info, () => data.count], (newValue, oldValue) => {
      console.log("newValue", newValue);
      console.log("oldValue", oldValue);
    });
    watch(
      () => data.info,
      (newValue, oldValue) => {
        console.log("newValue---", newValue);
        console.log("oldValue---", oldValue);
      }
    );
    const refData = toRefs(data);
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    onErrorCaptured(() => {
      console.log("onErrorCaptured");
    });
    onRenderTracked(() => {
      console.log("onRenderTracked");
    });
    onRenderTriggered(event => {
      console.log(event);
    });

    return {
      ...refData
    };
  }
});
</script>
