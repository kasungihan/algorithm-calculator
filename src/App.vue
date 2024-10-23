<template>
  <div class="container container--centered">
    <ACCover />
    <div class="content">
      <ACPanel />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ACCover from "./components/ACCover.vue";
import ACPanel from "./components/ACPanel.vue";

export default defineComponent({
  name: "App",
  components: {
    ACCover,
    ACPanel,
  },
});
</script>

<style>
/* Add your styles here */
</style>
