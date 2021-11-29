<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({});
</script>

<template>
  <footer>
    <ul>
      <li>
        MackPrevIA - {{ $t("footer.rights") }}
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;

  height: 3rem;
  width: 100%;
  background-image: none;
  background-repeat: repeat;
  background-attachment: scroll;
  background-position: 0 0;
  position: fixed;
  bottom: 0;
  left: 0;

  background-color: #ee5d5d;
  color: white;

  li {
    list-style-type: none;
  }
}
</style>

<i18n>
{
  "en": {
    "footer": {
      "rights": "All rights reserved"
    }
  },
  "pt": {
    "footer": {
      "rights": "Todos os direitos reservados"
    }
  }
}
</i18n>