<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";
import TheButton from "@/components/TheButton.vue";

export default defineComponent({
  components: {TheButton},
  data() {
    return {
      file: {
        type: File,
      },
      fileName: "",
      fileExtension: ""
    }
  },
  methods: {
    async sendFile(): Promise<void> {
      let dataForm = new FormData();
      dataForm.append('file', this.file as any);

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
      this.fileName = event.target.files[0].name;
      if (this.fileName.length > 25) {
        const reducedName = this.fileName.split(".")
        this.fileName = reducedName[0].substring(0, 25) + "...";
        this.fileExtension = reducedName[1];
      }
    },
    triggerClick(): void {
      let ele = this.$refs.file as any;
      ele.click()
    }
  },
});
</script>

<template>
  <section>
    <h1>Extrator CNIS</h1>
    <p>
      Para extrair os dados do seu CNIS, basta selecionar o PDF com os dados
      e enviar para análise. Nenhum dado é salvo durante a análise.
    </p>

    <div>
      <the-button color="secondary" class="file-input" @click="triggerClick">
        Selecione seu CNIS
        <input accept=".pdf" type="file" name="file" ref="file" @change="getFile"/>
      </the-button>
      <the-button color="primary" @click="sendFile">
        Enviar
      </the-button>
    </div>
    <p class="file-message" v-if="fileName !== ''">Arquivo <strong>{{ fileName }}</strong>
      com a extensão <strong>{{ fileExtension }}</strong> selecionado</p>
  </section>
</template>

<style lang="scss" scoped>

section {
  margin: 0 auto;
  display: flex;
  width: 80vw;
  flex-direction: column;
  align-items: center;

  .file-input {
    margin-right: 0.5rem;

    input {
      display: none;
    }
  }

  .button-text {
    margin: 0;
    padding: 0;
    font-size: inherit;
  }

  div {
    display: flex;
    justify-content: center;

    button {
      white-space: nowrap;
    }


  }

  h1 {
    font-size: 2em;
  }

  p {
    font-size: inherit;
    align-self: center;
    word-wrap: break-word;
    line-height: 1rem;
    max-height: 10rem;
    text-align: justify;
  }

  .file-message {
    font-size: 0.875em;
    text-align: center;

    strong {
      color: #b02121;
      font-weight: 600;
      max-width: 1px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

@media only screen and (max-width: 720px) {
  section {
    h1 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.25rem;
    }

    div {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
}

@media only screen and (max-width: 400px) {
  section {
    h1 {
      font-size: 1rem;
    }

    p {
      font-size: 0.75rem;
      line-height: 1rem;
    }

    div {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
}
</style>
