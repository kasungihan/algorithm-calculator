<template>
  <div class="result">
    <label for="result" class="text_primary">Result</label>
    <textarea id="result" v-model="data" data-test="result"></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ACResult",
  props: {
    data: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.result {
  margin: 10px;
}
textarea {
  display: block;
  height: 308px;
  max-width: 350px;
  width: 320px;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  color: #868686;
}
</style>
