<script lang="ts">
import Base from './components/Base.vue'
import TheButton from './components/TheButton.vue'

export default {
  components: {
    Base,
    TheButton
  },
  methods: {
    teste() {
      console.log("Teste")
    }
  }
}
</script>

<template>
  <div>
    <img alt="MackPrevIA logo" src="./assets/logo.jpeg" />
    <Base msg="Em construção 🚧 🛑" />
    <the-button text="Saber Mais" :onClick="teste" color="" />
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
</style>
