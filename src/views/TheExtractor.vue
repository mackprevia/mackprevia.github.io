<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";
import TheButton from "@/components/TheButton.vue";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

export default defineComponent({
  components: {TheButton, FontAwesomeIcon},
  data() {
    return {
      file: ""
    }
  },
  methods: {
    async sendFile(): Promise<void> {
      let dataForm = new FormData();
      dataForm.append('file', this.file);

      try {
        const fileUploadResult = await axios.post("http://localhost:3000/upload", {
          body: dataForm,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        if (fileUploadResult.status > 299) {
          alert("Falha ao adicionar o arquivo")
          return
        }

        alert("Dado enviado com sucesso");

      } catch (e) {
        alert("Falha ao enviar o arquivo")
      }

    },
    getFile(event: any): void {
      this.file = event.target.files[0];
    }
  }
});
</script>

<template>
  <section>
    <h1>Extrator CNIS</h1>
    <img alt="MackPrevIA logo" src="@/assets/logo.jpeg"/>
    <p>
      Para extrair os dados do seu CNIS, basta selecionar o PDF com os dados
      e enviar para análise. Nenhum dado é salvo durante a análise.
    </p>
    <div>
      <label>
        Selecione seu CNIS
        <input accept=".pdf" type="file" name="file" multiple ref="files" @change="getFile"/>
      </label>
      <the-button color="primary" :on-click="sendFile">
        <p class="button-text">Enviar</p>
      </the-button>
    </div>
  </section>
</template>

<style lang="scss">
label {
  input {
    display: none;
  }

  border-radius: 5px;

  box-shadow: 2px 2px 4px rgba(255, 36, 36, 0.25);

  padding: 0.5rem 3rem;
  font-weight: 600;
  font-size: 1.1em;
  line-height: 1rem;

  cursor: pointer;

  transition: all 200ms ease-in;

  border-color: #ff2424;
  color: #ff2424;
  background: transparent;
}

label:hover {
  background-color: #ffa8a821;
}

section {
  width: fit-content;

  .button-text {
    margin: 0;
    padding: 0;
    font-size: 1.4em;
  }

  div {
    width: 100%;
    padding: 1rem;
  }

  img {
    width: 100%;
    max-width: 35rem;
    height: auto;
  }

  h1 {
    font-size: 2em;
  }

  p {
    font-size: 1.5em;
  }
}

</style>
