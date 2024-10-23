<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "PathButton",
  props: {
    buttonType: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const buttonClass = computed(() => {
      return props.buttonType === "clear"
        ? "button button--clear"
        : "button button--calculate";
    });

    const handleClick = () => {
      emit("click");
    };

    return {
      buttonClass,
      handleClick,
    };
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
