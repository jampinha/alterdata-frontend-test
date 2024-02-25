<template>
  <v-app>
    <v-app-bar v-if="!isBooting" app color="primary" dark>
      APPLICATION
    </v-app-bar>

    <v-main v-if="!isBooting">
      <router-view />
    </v-main>

    <v-main v-else>
      <v-container class="fill-height">
        <v-row class="fill-height" align-content="center" justify="center">
          <v-col class="text-subtitle-1 text-center" cols="12">
            Inicializando
          </v-col>
          <v-col cols="6">
            <ALoader></ALoader>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ALoader from './atoms/ALoader.vue';

export default {
  name: 'App',
  components: { ALoader },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(['isBooting'])
  },
  methods: {
    ...mapMutations(['SET_READY_STATE']),

    boot() {
      setTimeout(() => {
        this.SET_READY_STATE()
      }, 2000)
    }
  },
  mounted() {
    this.boot()
  }
};
</script>
