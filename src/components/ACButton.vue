<template>
  <button :class="`button ${className}`" @click="handleClick">
    <slot></slot>
    <i v-if="icon" :class="`fa-solid fa-${icon}`"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "ACButton",
  props: {
    class: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
  },
  setup(props, { emit }) {
    const className = computed(() => {
      return props.class;
    });

    const handleClick = () => {
      emit("click");
    };

    return {
      className,
      handleClick,
    };
  },
});
</script>
