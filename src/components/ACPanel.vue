<template>
  <div class="card">
    <div class="card__left">
      <div class="card__title">Select Path</div>
      <div class="form">
        <div class="form__field">
          <label for="from-node">From Node</label>
          <select v-model="fromNode" id="from-node" data-test="from-node">
            <option v-for="node in nodes" :key="node" :value="node">
              {{ node }}
            </option>
          </select>
        </div>

        <div class="form__field">
          <label for="to-node">To Node</label>
          <select v-model="toNode" id="to-node" data-test="to-node">
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
            data-test="form"
            >Calculate</ACButton
          >
        </div>
      </div>
    </div>
    <div
      class="card__right"
      :style="`background-color: ${isResponse ? '#ededed' : '#ffffff'}`"
    >
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
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import ACButton from "./ACButton.vue";
import ACImage from "./ACImage.vue";
import ACResult from "./ACResult.vue";

export default defineComponent({
  name: "ACPanel",
  components: { ACButton, ACImage, ACResult },
  setup() {
    const fromNode = ref<string>("");
    const toNode = ref<string>("");
    const nodes = ref<string[]>([]);

    const isResponse = ref<boolean>(false);

    const result = ref<string>("");

    const clearForm = () => {
      isResponse.value = false;
      fromNode.value = "";
      toNode.value = "";
    };

    const getNode = async () => {
      try {
        const response = await axios.get(
          "https://virtserver.swaggerhub.com/KASUNGIHANDEV/algorithm-calendar/1.0.0/nodes"
        );

        nodes.value = response.data.nodes;
      } catch (error) {
        console.error("Error fetching nodes:", error);
      }
    };

    const calculatePath = async () => {
      try {
        const response = await axios.post(
          "https://virtserver.swaggerhub.com/KASUNGIHANDEV/algorithm-calendar/1.0.0//nodes/calculator",
          {
            from_node: fromNode.value,
            to_node: toNode.value,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        isResponse.value = true;
        result.value = `From Node Name = "${fromNode.value}", To Node Name = "${toNode.value}": A, B, C, D.\n\nTotal Distance: ${response.data.distance}`;
      } catch (error) {
        console.error("Error calculate nodes:", error);
      }
    };

    onMounted(() => {
      getNode();
    });

    return {
      isResponse,
      result,
      fromNode,
      toNode,
      nodes,
      clearForm,
      getNode,
      calculatePath,
    };
  },
});
</script>
