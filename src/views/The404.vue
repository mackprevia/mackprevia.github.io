<template>
  <div>
    <img alt="MackPrevIA logo" src="@/assets/logo.jpeg"/>
    <p>
      Página não encontrada
      <br/>
      Clique no botão abaixo para voltar à tela inicial
    </p>
    <the-button color="secondary" :on-click="onClick" text="Voltar"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TheButton from "@/components/TheButton.vue";

export default defineComponent({
  components: {TheButton},
  methods: {
    onClick(): void {
      this.$router.push("/");
    }
  }
});
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  max-width: 35rem;
  height: auto;
}
</style>