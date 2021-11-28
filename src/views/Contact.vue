<script lang="ts">
import {defineComponent} from "vue";
import useVuelidate from "@vuelidate/core";
import {email, maxLength, minLength, required,} from "@vuelidate/validators";
import TheButton from "@/components/TheButton.vue";
import {useToast} from "vue-toastification";

export default defineComponent({
  components: {TheButton},
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
    <h1>Contate-nos!</h1>
    <fieldset>
      <legend>Contato: </legend>
      <form @submit.prevent="handleSubmit" @keyup.enter="handleSubmit">
        <label for="email">Email</label>
        <input :class="{invalid: v$.email.$error}" id="email" type="email" v-model.trim="email" placeholder="email">
        <p v-if="v$.email.$error">Email <strong>{{ email }}</strong> inválido.</p>

        <label for="name">Name</label>
        <input :class="{invalid: v$.name.$error}" id="name" type="text" v-model.trim="name" placeholder="name">
        <p v-if="v$.name.$error">Nome <strong>{{ name }}</strong> inválido.</p>

        <label for="Message">Message</label>
        <input :class="{invalid: v$.message.$error}" id="message" type="text" v-model.trim="message" placeholder="message">
        <p v-if="v$.message.$error">Nome <strong>{{ message }}</strong> inválido.</p>

        <the-button @click="handleSubmit">
          Enviar
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