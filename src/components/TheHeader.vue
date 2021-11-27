<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  data() {
    return {
      activeTab: ""
    }
  },
  methods: {
    isActiveTab(tab: string): boolean {
      return tab == this.activeTabStore;
    },
    changeTab(tab: string): void {
      this.$store.dispatch('changeTab', tab);
    }
  },
  computed: {
    activeTabStore(): string {
      return this.$store.state.activeTab;
    }
  }
});
</script>

<template>
  <header>
    <img alt="MackPrevIA logo small" src="@/assets/logo.jpeg"/>
    <ul>
      <li :class="{selected: isActiveTab('home')}" @click="changeTab('home')">
        <router-link to="/">Início</router-link>
      </li>
      <li :class="{selected: isActiveTab('extractor')}" @click="changeTab('extractor')">
        <router-link to="/extractor">Extrator</router-link>
      </li>
      <li :class="{selected: isActiveTab('contact')}" @click="changeTab('contact')">
        <router-link to="/contact">Contato</router-link>
      </li>
      <li :class="{selected: isActiveTab('about')}" @click="changeTab('about')">
        <router-link to="/about">Quem Somos</router-link>
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
    color: white;
    border-bottom: 2px solid black;
  }

  ul {
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    list-style-type: none;
    margin: 0;
    padding: 0;

  }

  li {
    cursor: pointer;
    font-weight: bold;
    color: white;

    padding: 1rem 1rem .75rem 1rem;
    font-size: 1.25rem;

    a {
      all: unset;
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