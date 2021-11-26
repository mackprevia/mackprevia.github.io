<script lang="ts">
import TheLanding from "@/views/TheLanding.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    TheLanding,
  },
})
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background: transparent;

  border-radius: 33333px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 33333px;

  background: rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:hover {
  background: #555555;
}
</style>
