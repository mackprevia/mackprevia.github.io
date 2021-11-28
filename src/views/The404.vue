<script lang="ts">
import {defineComponent} from "vue";
import TheButton from "@/components/TheButton.vue";

export default defineComponent({
  components: {TheButton},
  methods: {
    onClick(): void {
      this.$router.push({name: "Home"});
    }
  }
});
</script>

<template>
  <section>
    <img alt="MackPrevIA logo" src="@/assets/logo.jpeg"/>
    <h1>
      Página não encontrada
    </h1>
    <p>
      <br/>
      Clique no botão abaixo para voltar à tela inicial
    </p>
    <the-button color="secondary" @click="onClick">
      Voltar
    </the-button>
  </section>
</template>

<style lang="scss" scoped>
section {
  margin: 5.2rem auto;
  display: flex;
  width: 80vw;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 1rem;
    max-width: 20vw;
  }

  p {
    margin: 0;
    font-size: 0.875em;
  }

  h1 {
    font-size: 1.300em;
    margin: 0;
  }
}
</style>