
<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true
    },
    color: { type: String, required: false, default: "secondary" },
  },
  computed: {
    theme(): Object {
      var color = this.color;

      switch (color) {
        case "primary":
          return { primary: true }

        case "secondary":
          return { secondary: true }

        default:
          return { secondary: true }
      }
    }
  }
});
</script>

<template>
  <button :class="theme" @click="() => onClick()">{{ text }}</button>
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
}

.primary {
  border-color: transparent;
  color: white;
  background: #ff2424;
}

button:hover {
  background-color: #e23e3e;
}

.secondary {
  border-color: #ff2424;
  color: #ff2424;
  background: transparent;
}
</style>