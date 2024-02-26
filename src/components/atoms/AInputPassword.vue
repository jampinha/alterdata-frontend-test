<template>
  <v-text-field
    v-model="inputValue"
    v-bind="$attrs"
    label="Senha"
    :append-icon="appendIcon"
    :type="inputType"
    :hint="hint"
    :counter="counter"
    @click:append="visible = !visible"
  ></v-text-field>
</template>

<script>
export default {
  name: "AInputPassword",
  props: {
    hint: {
      type: String,
      default: '',
    },
    counter: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    }
  },
  data: () => ({
    visible: false,
  }),
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    inputType() {
      return this.visible ? 'text' : 'password'
    },
    appendIcon() {
      return this.visible ? 'mdi-eye' : 'mdi-eye-off'
    },
  }
}
</script>