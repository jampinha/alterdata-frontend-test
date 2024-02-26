<template>
  <v-app>
    <v-app-bar v-if="isInside" app color="primary" dark>
      APPLICATION
      <v-spacer></v-spacer>
      <v-btn @click="logout">Sair</v-btn>
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
import { mapGetters, mapMutations, mapActions } from 'vuex'
import ALoader from './atoms/ALoader.vue';

export default {
  name: 'App',
  components: { ALoader },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(['isBooting', 'isInside', 'auth/isAuthenticated'])
  },
  methods: {
    ...mapMutations(['SET_READY_STATE']),
    ...mapActions(['changeAppScope', 'auth/login', 'auth/logout']),

    boot() {
      const token = localStorage.getItem('token')
      if (!token) {
        this.changeAppScope('PUBLIC')
      } else {
        this['auth/login'](token)
      }
      this.SET_READY_STATE()
    },
    logout() {
      this.$http.delete('/logout')
      this['auth/logout']()
      this.$router.push({ name: 'LOGIN' })
    }
  },
  beforeMount() {
    setTimeout(() => {
      this.boot()
    }, 2000)
  },
};
</script>
