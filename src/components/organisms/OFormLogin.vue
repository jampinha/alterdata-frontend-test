<template>
  <MFormulary :loading="isLoading" @submit.prevent="submit">
    <AInputEmail v-model.trim="$v.payload.usermail.$model" :required="true" :error-messages="emailErrors"
      @input="$v.payload.usermail.$touch()" @blur="$v.payload.usermail.$touch()" />
    <AInputPassword v-model.trim="$v.payload.password.$model" :required="true" :error-messages="passwordErrors"
      @input="$v.payload.password.$touch()" @blur="$v.payload.password.$touch()" />
  </MFormulary>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex';

import FormMixin from '@/mixins/FormMixin'
import AInputEmail from '@/components/atoms/AInputEmail.vue';
import AInputPassword from '@/components/atoms/AInputPassword.vue';
import MFormulary from '@/components/molecules/MFormulary.vue';

export default {
  mixins: [FormMixin, validationMixin],
  components: { MFormulary, AInputEmail, AInputPassword },
  data: () => ({
    payload: {
      usermail: '',
      password: '',
    },
    isLoading: false,
  }),
  validations: {
    payload: {
      usermail: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6)
      },
    }
  },
  computed: {
    emailErrors() {
      const errors = []
      if (!this.$v.payload.usermail.$dirty) return errors
      !this.$v.payload.usermail.required && errors.push('E-mail é obrigatório')
      !this.$v.payload.usermail.email && errors.push('Deve ser um e-mail válido')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.payload.password.$dirty) return errors
      !this.$v.payload.password.required && errors.push('O campo de senha é obrigatório')
      !this.$v.payload.password.minLength && errors.push('A senha deve ter ao menos 8 caracteres')
      return errors
    },
  },
  methods: {
    ...mapActions(['auth/login']),

    onBeforeFormSubmit() {
      this.$v.$touch()
      return !this.$v.$invalid
    },
    async onFormSubmit() {
      this['auth/login']('fake-token')
      this.$router.push({ name: 'ABOUT' })
    }
  },
}
</script>

<style lang="">
  
</style>