<script lang="ts">
import {TheBase, TheButton} from "@/components"
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    TheBase,
    TheButton,
  },
  methods: {
    redirectExtractor(): void {
      this.$router.push("/extractor");
    }
  }
});
</script>

<template>
  <div>
    <img alt="MackPrevIA logo" src="@/assets/logo.jpeg"/>
    <the-base msg="Em construção 🚧 🛑"/>
    <the-button :onClick="redirectExtractor" color="secondary">
      <p>Saber Mais</p>
    </the-button>
  </div>
</template>

<style lang="scss">
div {
  width: fit-content;

  p {
    margin: 0;
    padding: 0;
    font-size: inherit;
  }

  img {
    width: 100%;
    max-width: 35rem;
    height: auto;
  }

}
</style>
