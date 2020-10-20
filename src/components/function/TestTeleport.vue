<template>
  <teleport to="#model">
   <div id="center" v-if="isOpen">
      <h1>
        test
        <slot>I am model</slot>
        <button @click="buttonClick">click me</button>
      </h1>
   </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    isOpen: Boolean
  },
  emits: {
    // "close-model": (playload: any) => {
    //   return playload.type === "close";
    // }
    "close-model": null
  },
  setup(props, context) {
    const buttonClick = () => {
      context.emit("close-model");
    };

    return {
      buttonClick
    };
  }
});
</script>
