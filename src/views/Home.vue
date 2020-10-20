<template>
  <div class="home">
    <!-- <Lifecyle />
    <Ref />
    <Reactive /> -->
    <!-- <MousePosition />
    <test-teleport :isOpen="modelIsOpen" @close-model="toggleModel">
      this is Model
    </test-teleport>
    <button @click="toggleModel">show Model</button> -->
    <div>
      {{ error }}
    </div>
    --------------------
    <Suspense>
      <template #default>
        <div>
          <async-show />
          <MousePosition />
        </div>
      </template>
      <template #fallback>
        <h1>Loading.....</h1>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onErrorCaptured } from "vue";
// import Ref from "@/components/Ref.vue";
// import Reactive from "@/components/Reactive.vue";
// import Lifecyle from "@/components/lifecyle.vue";
import MousePosition from "@/components/MousePosition.vue";
// import TestTeleport from "@/components/function/TestTeleport.vue";
import AsyncShow from "@/components/function/AsyncShow.vue";
export default defineComponent({
  name: "Home",
  components: {
    // Reactive,
    // Ref,
    // Lifecyle,
    MousePosition,
    // TestTeleport,
    AsyncShow
  },
  setup() {
    const error = ref(null);
    onErrorCaptured((e: any) => {
      error.value = e;
      return true;
    });
    const modelIsOpen = ref(false);
    const toggleModel = () => {
      modelIsOpen.value = !modelIsOpen.value;
    };
    return {
      modelIsOpen,
      toggleModel,
      error
    };
  }
});
</script>
