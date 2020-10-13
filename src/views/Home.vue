<template>
  <div class="home">
    <Lifecyle />
    <Ref />
    <Reactive />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Ref from "@/components/Ref.vue";
import Reactive from "@/components/Reactive.vue";
import Lifecyle from "@/components/lifecyle.vue";

export default defineComponent({
  name: "Home",
  components: {
    Reactive,
    Ref,
    Lifecyle
  }
});
</script>
