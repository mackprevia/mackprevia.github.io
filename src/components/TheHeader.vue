<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  data () {
    return { langs: ['en', 'pt'] }
  }
});
</script>

<template>
  <header>
    <img @click="$router.push({name: 'Home'})" alt="MackPrevIA logo small" src="@/assets/logo.jpeg"/>

    <ul>
      <li>
        <router-link active-class="selected" to="/">{{ $t("routes.home") }}</router-link>
      </li>
      <li>
        <router-link active-class="selected" to="/extractor">{{ $t('routes.extractor') }}</router-link>
      </li>
      <li>
        <router-link active-class="selected" to="/contact">{{ $t("routes.contact") }}</router-link>
      </li>
      <li>
        <router-link active-class="selected" to="/about">{{ $t("routes.about") }}</router-link>
      </li>
    </ul>

    <div class="locale-changer">
      <select v-model="$root.$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.toLowerCase()">
          {{ lang }}
        </option>
      </select>
    </div>
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

  .locale-changer {
    select {
      font-family: inherit;
      font-size: 1.25rem;
      font-weight: 600;
      color: white;

      border: none;
      background: inherit;

      option {
        color: black;
        background: white;
        border-width: 0;
      }

    }
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
    cursor: pointer;
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

<i18n>
{
  "en": {
    "routes": {
      "home": "Home",
      "extractor": "Extractor",
      "contact": "Contact",
      "about": "About Us"
    }
  },
  "pt": {
    "routes": {
      "home": "Início",
      "extractor": "Extrator",
      "contact": "Contato",
      "about": "Quem Somos"
    }
  }
}
</i18n>