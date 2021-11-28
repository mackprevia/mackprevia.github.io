<script lang="ts">
import {TheButton} from "@/components"
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    TheButton,
  },
  methods: {
    redirectExtractor(): void {
      this.$store.dispatch('changeTab', 'extractor');
      this.$router.push({name: "Extractor"});
    }
  }
});
</script>

<template>
  <section>
    <img alt="MackPrevIA logo" src="@/assets/logo.jpeg"/>
    <div id="paragraph">
      <h1>{{ $t("title") }}</h1>
      <p>{{ $t("paragraph") }}</p>
      <the-button @click="redirectExtractor" color="secondary">
        {{$t("buttonText")}}
      </the-button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
div {
  width: 100rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 1.25rem;
  align-self: center;
  word-wrap: break-word;
  line-height: 1.5rem;
  text-align: justify;
}

button {
  max-width: 20rem;
}

@media only screen and (max-width: 720px) {
  h1 {
    font-size: 1.75rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  button {
    white-space: nowrap;
  }
}

@media only screen and (max-width: 400px) {
  h1 {
    font-size: 1rem;
  }

  p {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  button {
    white-space: nowrap;
  }
}
</style>

<i18n lang="json">
{
  "en": {
    "title": "Under construction 🚧 🛑",
    "paragraph": "MackPrevIA has as its object of study the scientific phenomenon called Artificial Intelligence and its imbrications with the legal sciences, in particular with regard to its application as an instrument to improve the effectiveness of social security law, as well as the identification of more legal principles and categories. adequate to guide its regulation, which does not yet exist in Brazil.",
    "buttonText": "Learn More"
  },
  "pt": {
    "title": "Em construção 🚧 🛑",
    "paragraph": "O MackPrevIA tem como objeto de estudos o fenômeno científico denominado Inteligência Artificial e suas imbricações com as ciências jurídicas, em especial no que diz respeito à sua aplicação como instrumento para melhoria da efetividade do direito previdenciário, bem como a identificação dos princípios e categorias jurídicas mais adequados a orientar sua regulamentação, ainda inexistente no Brasil.",
    "buttonText": "Saber mais"
  }
}
</i18n>
