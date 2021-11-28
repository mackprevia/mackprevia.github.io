<script lang="ts">
import {defineComponent} from "vue";
import useVuelidate from "@vuelidate/core";
import {email, maxLength, minLength, required,} from "@vuelidate/validators";
import TheButton from "@/components/TheButton.vue";
import {useToast} from "vue-toastification";
import {Translation} from "vue-i18n"

export default defineComponent({
  components: {TheButton, Translation},
  setup: () => ({v$: useVuelidate(), toast: useToast()}),
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    async handleSubmit() {
      const result = await this.v$.$validate();
      console.log(result);
      if (!result) {
        this.toast.error("Dados inválidos");
        return
      }
    }
  },
  validations() {
    return {
      name: {required, minLengthValue: minLength(4)},
      email: {required, email},
      message: {required, minLengthValue: minLength(4), maxLength: maxLength(150)}
    }
  },
  validationConfig: {
    $autoDirty: true,
    $lazy: true,
  }
})
</script>

<template>
  <section>
    <h1>{{ $t("title") }}</h1>
    <fieldset>
      <legend>{{ $t("legend") }}</legend>
      <form @submit.prevent="handleSubmit" @keyup.enter="handleSubmit">

        <!--   Email     -->
        <label for="email">{{ $t("labels.email") }}</label>
        <input :class="{invalid: v$.email.$error}" id="email" type="email" v-model.trim="email" placeholder="email">
        <translation v-if="v$.email.$error" keypath="errors.email" tag="p">
          <template v-slot:email>
            <strong>{{ email }}</strong>
          </template>
        </translation>

        <!--   Name     -->
        <label for="name">{{ $t("labels.name") }}</label>
        <input :class="{invalid: v$.name.$error}" id="name" type="text" v-model.trim="name" placeholder="name">
        <translation v-if="v$.name.$error" keypath="errors.name" tag="p">
          <template v-slot:name>
            <strong>{{ name }}</strong>
          </template>
        </translation>

        <!--   Message     -->
        <label for="Message">{{ $t("labels.message") }}</label>
        <input :class="{invalid: v$.message.$error}" id="message" type="text" v-model.trim="message"
               placeholder="message">
        <translation v-if="v$.message.$error" keypath="errors.message" tag="p">
          <template v-slot:message>
            <strong>{{ message }}</strong>
          </template>
        </translation>

        <the-button @click="handleSubmit">
          {{ $t("submitButton") }}
        </the-button>
      </form>
    </fieldset>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-content: center;
  font-size: 1em;


  .invalid {
    border-color: red;
  }

  fieldset {
    margin: 1rem;
    width: 80vw;
    max-width: 80vw;
    align-self: center;


    legend {
      text-align: left;
    }

    form {

      label {
        margin: 1rem;
      }

      p {
        margin: 1rem;

        strong {
          color: #b02121;
        }
      }

      input {
        height: 1.8rem;
        width: 20rem;

        border-radius: 5px;
        border-width: 1.5px;
        border-color: rgba(0, 0, 0, 0.25);
      }

      button {
        max-width: 15rem;

        .submit {
          display: none;
        }
      }
    }
  }
}
</style>

<i18n lang="json">
{
  "en": {
    "title": "Contact Us!",
    "legend": "Contact",
    "labels": {
      "email": "Email",
      "name": "Name",
      "message": "Message"
    },
    "errors": {
      "email": "Email {email} is invalid",
      "name": "Name {name} is invalid",
      "message": "Message {message} is invalid"
    },
    "submitButton": "Submit"
  },
  "pt": {
    "title": "Contate-nos",
    "legend": "Contato",
    "labels": {
      "email": "Email",
      "name": "Nome",
      "message": "Mensagem"
    },
    "errors": {
      "email": "Email {email} é inválido",
      "name": "Name {name} é inválido",
      "message": "Message {message} é inválido"
    },
    "submitButton": "Enviar"
  }
}
</i18n>