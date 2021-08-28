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
  <section>
    <h1>{{ msg }}</h1>
    <div id="paragraph">
      <p>
        O MackPrevIA tem como objeto de estudos o fenômeno científico denominado
        Inteligência Artificial e suas imbricações com as ciências jurídicas, em
        especial no que diz respeito à sua aplicação como instrumento para
        melhoria da efetividade do direito previdenciário, bem como a
        identificação dos princípios e categorias jurídicas mais adequados a
        orientar sua regulamentação, ainda inexistente no Brasil.
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  align-self: center;
  align-items: center;
}

p {
  display: inline-block;
  font-size: 1.25rem;
  align-self: center;
  word-wrap: break-word;
  width: 50rem;
  line-height: 1.5rem;
  text-align: justify;
}
</style>