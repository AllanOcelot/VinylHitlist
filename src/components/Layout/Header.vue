<template>
<v-toolbar
    class="main-header"
    color="primary lighten-1">
    <v-toolbar-title class="white--text">
        VinylHitlist
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat><router-link to="/">Home</router-link></v-btn>
      <v-btn flat><router-link to="About">About</router-link></v-btn>
    </v-toolbar-items>

    <!-- User account container here -->
    <div class="account-box mr-5">
        <v-avatar color="surface-variant"></v-avatar>
    </div>
</v-toolbar>
</template>
<script>
  export default {
    name: 'Header',
    data: () => ({

    }),
  }
</script>
<style lang="scss">
    .main-header {
        display: flex;
        vertical-align: middle;
    }
</style>