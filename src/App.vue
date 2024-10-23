<template>
  <div class="container container--centered">
    <HeaderComponent />
    <div class="content">
      <PathForm />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import PathForm from "./components/PathForm.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderComponent,
    PathForm,
  },
});
</script>

<style>
/* Add your styles here */
</style>
