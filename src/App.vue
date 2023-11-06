<template>
  <v-app>
    <v-app-bar
      app
      light
      color="primary"
    >
      <div class="d-flex justify-center">
        <ul class="d-flex flex-row justify-center">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/monstruos">Mis Monstruos</router-link></li>
          <li><router-link to="/museo">Museo</router-link></li>
        </ul>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>

</style>