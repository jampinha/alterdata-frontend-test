<template>
  <TInternalPage>
    <OFormLogin />
  </TInternalPage>
</template>

<script>
import OFormLogin from '../organisms/OFormLogin.vue';
import TInternalPage from '../templates/TInternalPage.vue';

export default {
  name: 'HomeView',
  components: { TInternalPage, OFormLogin }
}
</script>
