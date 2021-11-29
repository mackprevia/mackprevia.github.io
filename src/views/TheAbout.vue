<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({})
</script>

<template>
  <section>
    <img alt="MackPrevIA logo" src="@/assets/logo.jpeg"/>
    <h1>{{ $t("title") }}</h1>
  </section>
</template>

<style scoped>

</style>

<i18n lang="json">
{
  "en": {
    "title": "Under construction 🚧 🛑"
  },
  "pt": {
    "title": "Em construção 🚧 🛑"
  }
}
</i18n>