<template>
  <v-form v-bind="$attrs" @submit.prevent="$emit('submit', $event)">
    <slot></slot>
    <div class="buttons">
      <slot name="buttons"></slot>
      <v-btn type="submit">Submit</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  name: "MFormulary",
}
</script>

<style lang="">
  
</style>