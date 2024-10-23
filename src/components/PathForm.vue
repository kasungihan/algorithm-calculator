<template>
  <div class="card">
    <div class="card__left">
      <div class="card__title">Select Path</div>
      <div class="form">
        <div class="form__field">
          <label for="from-node">From Node</label>
          <select v-model="fromNode" id="from-node">
            <option v-for="node in nodes" :key="node" :value="node">
              {{ node }}
            </option>
          </select>
        </div>

        <div class="form__field">
          <label for="to-node">To Node</label>
          <select v-model="toNode" id="to-node">
            <option v-for="node in nodes" :key="node" :value="node">
              {{ node }}
            </option>
          </select>
        </div>

        <div class="form__actions">
          <PathButton @click="clearForm" buttonType="clear">Clear</PathButton>
          <PathButton @click="calculatePath" buttonType="calculate"
            >Calculate</PathButton
          >
        </div>
      </div>
    </div>
    <div class="card__right">
      <PathImage />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PathButton from "./PathButton.vue";
import PathImage from "./PathImage.vue";

export default defineComponent({
  name: "PathForm",
  components: { PathButton, PathImage },
  setup() {
    const fromNode = ref<string>("");
    const toNode = ref<string>("");
    const nodes = ref<string[]>(["Node A", "Node B", "Node C", "Node D"]);

    const clearForm = () => {
      fromNode.value = "";
      toNode.value = "";
    };

    const calculatePath = () => {
      console.log(`Calculating path from ${fromNode.value} to ${toNode.value}`);
      // Add Dijkstra's algorithm logic here
    };

    return {
      fromNode,
      toNode,
      nodes,
      clearForm,
      calculatePath,
    };
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
