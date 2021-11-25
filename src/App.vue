<script lang="ts">
import Base from './components/Base.vue'
import Button from 'primevue/button';

export default {
  components: {
    Base,
    Button
  }
}
</script>

<template>
  <div>
    <img alt="MackPrevIA logo" src="./assets/logo.jpeg" />
    <Base msg="Em construção 🚧 🛑" />
    <Button label="Entrar" icon="pi pi-check" iconPos="right" />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

div {
  width: fit-content;
}

img {
  width: 100%;
  max-width: 35rem;
  height: auto;
}

.p-button {
  margin: 1rem;
}

:root {
  --primary-color: #2c3e50;
  --secondary-color: #e74c3c;
}
</style>
