<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  props: {
    onClick: {
      type: Function,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: "secondary",
    },
  },
  computed: {
    theme(): Object {
      switch (this.color) {
        case "primary":
          return {primary: true}

        case "secondary":
          return {secondary: true}

        default:
          return {secondary: true}
      }
    }
  }
});
</script>

<template>
  <button :class="theme" @click="() => onClick()">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  border-radius: 5px;

  box-shadow: 2px 2px 4px rgba(255, 36, 36, 0.25);

  padding: 0.5rem 3rem;
  font-weight: 600;
  font-size: 0.875em;
  line-height: 1rem;

  cursor: pointer;

  transition: all 200ms ease-in;

  slot {
    font-weight: inherit;
    font-size: inherit;
    padding: 0;
    margin: 0;
  }
}

.primary {
  border-color: transparent;
  color: white;
  background: #ff2424;
}

button:hover {
  background-color: #e23e3e;
  box-shadow: 2px 3px 4px rgba(54, 7, 7, 0.5);
}

.secondary {
  border-color: #ff2424;
  color: #ff2424;
  background: transparent;
}

.secondary:hover {
  background-color: #ffa8a821;
}
</style>