<script lang="ts">
export default {
  props: {
    msg: {
      type: String,
    }
  }
}
</script>

<template>
  <div id="paragraph">
    <h1>{{ msg }}</h1>

    <p>
      O MackPrevIA tem como objeto de estudos o fenômeno científico denominado
      Inteligência Artificial e suas imbricações com as ciências jurídicas, em
      especial no que diz respeito à sua aplicação como instrumento para
      melhoria da efetividade do direito previdenciário, bem como a
      identificação dos princípios e categorias jurídicas mais adequados a
      orientar sua regulamentação, ainda inexistente no Brasil.
    </p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
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

@media only screen and (max-width: 720px) {
  h1 {
    font-size: 1.75rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.25rem;
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
}
</style>