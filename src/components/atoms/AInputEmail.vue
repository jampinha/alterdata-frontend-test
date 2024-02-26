<template>
  <v-text-field
    v-model="inputValue"
    v-bind="$attrs"
    label="Email"
    :type="'email'"
    :hint="hint"
  ></v-text-field>
</template>

<script>
export default {
  name: "AInputEmail",
  props: {
    hint: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>