<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  props: {
    color: {
      type: String,
      required: false,
      default: "secondary",
    }
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
  <button :class="theme">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(255, 36, 36, 0.25);

  padding: 0.5rem 3rem;
  font-weight: 600;
  font-size: 0.875em;
  line-height: 1rem;

  cursor: pointer;

  slot {
    font-weight: inherit;
    font-size: inherit;
    padding: 0;
    margin: 0;
  }

  &:disabled,
  &:disabled:hover {
    background-color: #999999;
    color: white;
    cursor: default;
    border: none;
    box-shadow: none;
  }
}

.primary {
  border-color: transparent;
  color: white;
  background: var(--color-primary);

  transition: all 300ms ease-in;

  &:hover:enabled {
    background-color: #e23e3e;
    box-shadow: 2px 3px 4px rgba(54, 7, 7, 0.5);
  }
}

.secondary {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: transparent;

  transition: all 300ms ease-in;

  &:hover {
    background-color: #ffa8a821;
    box-shadow: 2px 3px 4px rgba(54, 7, 7, 0.5);
  }
}
</style>