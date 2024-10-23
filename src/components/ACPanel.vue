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
          <ACButton @click="clearForm" buttonType="clear">Clear</ACButton>
          <ACButton @click="calculatePath" buttonType="calculate"
            >Calculate</ACButton
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
import ACButton from "./ACButton.vue";
import ACImage from "./ACImage.vue";

export default defineComponent({
  name: "ACPanel",
  components: { ACButton, ACImage },
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
