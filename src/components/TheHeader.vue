<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
});
</script>

<template>
  <header>
    <img alt="MackPrevIA logo small" src="@/assets/logo.jpeg"/>
    <ul>
      <li>
        <router-link active-class="selected" to="/">Início</router-link>
      </li>
      <li>
        <router-link active-class="selected" to="/extractor">Extrator</router-link>
      </li>
      <li>
        <router-link active-class="selected" to="/contact">Contato</router-link>
      </li>
      <li>
        <router-link active-class="selected" to="/about">Quem Somos</router-link>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: #ee5d5d;
  padding: 10px;

  .selected {
    border-bottom: 2px solid white;
  }

  ul {
    width: 70%;
    display: flex;
    justify-content: space-evenly;

    list-style-type: none;
    margin: 0;
    padding: 0;

  }

  li {
    font-weight: bold;
    color: white;

    padding: 1rem 1rem .75rem 1rem;
    font-size: 1.25rem;

    a {
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      cursor: pointer;

      color: inherit;
      font-weight: inherit;
      font-size: inherit;
    }

    a:hover {
      border-bottom: 2px solid #444444;
    }
  }

  img {
    max-width: 64px !important;
    max-height: 64px !important;
  }
}

@media screen and (max-width: 500px) {
  header {
    ul {
      float: none;
      display: block;
    }

    li {
      padding: 5px 0 5px 0;
    }
  }
}

@media screen and (max-width: 300px) {
  header {
    img {
      max-width: 48px !important;
      max-height: 48px !important;
    }
  }
}
</style>