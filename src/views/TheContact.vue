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
      if (!result) {
        this.toast.error(this.$t("toastError"));
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

        <the-button disabled @click="handleSubmit">
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
    width: 80vw;
    max-width: 50rem;
    margin: 1rem;
    align-self: center;

    border: 2px solid black;
    border-radius: 15px;

    legend {
      text-align: left;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;

      label {
        margin: 1.5rem 0 1rem 0;
      }

      p {
        font-weight: bold;
        border-bottom: 1px dash var(--color-primary);

        strong {
          color: #b02121;
        }
      }

      input {
        height: 1.8rem;
        width: 50vw;
        max-width: 600px;

        padding-left: .5rem;

        border-radius: 5px;
        border-width: 1.5px;
        border-color: rgba(0, 0, 0, 0.25);

        transition: all 150ms;

        &::placeholder {
          color: rgba(0, 0, 0, 0.46);
        }

        &:focus {
          outline: none !important;
          border: 2px solid var(--color-primary);
        }
      }

      button {
        margin-top: 4rem;
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
    "submitButton": "Submit",
    "toastError": "Invalid data"
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
    "submitButton": "Enviar",
    "toastError": "Dados inválidos"
  }
}
</i18n>