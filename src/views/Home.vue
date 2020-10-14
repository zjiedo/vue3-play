<template>
  <div class="home">
    <!-- <Lifecyle />
    <Ref />
    <Reactive /> -->
    <MousePosition />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as vue from "vue";
// import Ref from "@/components/Ref.vue";
// import Reactive from "@/components/Reactive.vue";
// import Lifecyle from "@/components/lifecyle.vue";
import MousePosition from "@/components/MousePosition.vue";

export default defineComponent({
  name: "Home",
  components: {
    // Reactive,
    // Ref,
    // Lifecyle,
    MousePosition
  },
  setup() {
    console.log(vue);
  }
});
</script>
