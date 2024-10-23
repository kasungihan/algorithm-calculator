<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="icon-button__svg"
    >
      <!-- Your SVG path here -->
      <path
        d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1 16H6V6h12v13zM8 8h2v2H8V8zm0 3h2v2H8v-2zm0 3h2v2H8v-2zm3 0h2v2h-2v-2zm0-3h2v2h-2v-2zm0-3h2v2h-2V8zm3 6h2v2h-2v-2zm0-3h2v2h-2v-2zm0-3h2v2h-2V8z"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "ACButton",
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
