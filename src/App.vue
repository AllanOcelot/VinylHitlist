<template>
  <v-app>
    <v-main>
      <Header />
      <router-view></router-view>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Layout/Header.vue'
import Footer from './components/Layout/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
}
</script>
