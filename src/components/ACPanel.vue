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
          <ACButton @click="clearForm" class="button__default">Clear</ACButton>
          <ACButton
            @click="calculatePath"
            class="button__outline_primary"
            icon="calculator"
            >Calculate</ACButton
          >
        </div>
      </div>
    </div>
    <div class="card__right" :style="`background-color: ${bgColor};`">
      <div v-if="isResponse">
        <ACResult :data="result"></ACResult>
      </div>
      <div v-else>
        <ACImage />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ACButton from "./ACButton.vue";
import ACImage from "./ACImage.vue";
import ACResult from "./ACResult.vue";

export default defineComponent({
  name: "ACPanel",
  components: { ACButton, ACImage, ACResult },
  setup() {
    const fromNode = ref<string>("");
    const toNode = ref<string>("");
    const nodes = ref<string[]>(["Node A", "Node B", "Node C", "Node D"]);

    const isResponse = ref<boolean>(true);
    const result = ref<string>("Node A");

    const bgColor = isResponse ? "#ededed" : "#ffffff";

    const clearForm = () => {
      fromNode.value = "";
      toNode.value = "";
    };

    const calculatePath = () => {
      console.log(`Calculating path from ${fromNode.value} to ${toNode.value}`);
    };

    return {
      bgColor,
      isResponse,
      result,
      fromNode,
      toNode,
      nodes,
      clearForm,
      calculatePath,
    };
  },
});
</script>
