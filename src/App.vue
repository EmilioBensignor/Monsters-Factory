<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list tag="ul">
        <li v-for="item in menu" :key="item.titulo">
          <v-list-item :to="item.path">
            <v-list-item-action>
              <v-icon color="primary">mdi-{{ item.icono }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> {{ item.titulo }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </li>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="primary" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Monster Factory</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>

</template>

<script>

export default {
  name: 'App',

  data: () => ({
    menu: [
      {
        titulo: 'Home',
        icono: 'home',
        path: '/'
      },
      {
        titulo: 'Mis Monstruos',
        icono: 'folder',
        path: '/monsters'
      },
      {
        titulo: 'Museo',
        icono: 'widgets',
        path: '/museo'
      }
    ],
    arrayMonstruos: [],
    arrayMuseo: [],
    drawer: null,
  }),
  created() {
    if (localStorage.local) {
      this.arrayMonstruos = JSON.parse(localStorage.getItem('local'));
    }
    this.$route.meta.agregarMonstruo = this.agregarMonstruo;
    this.$route.meta.arrayMonstruos = this.arrayMonstruos;
    this.$route.meta.arrayMuseo = this.arrayMuseo;
  },
  watch:{
    arrayMonstruos(newVal) {
      this.$route.meta.arrayMonstruos = newVal;
    },
    arrayMuseo(newVal) {
      this.$route.meta.arrayMuseo = newVal;
    }
  }
};

</script>

<style>
.v-main__wrap{
  background-color: #D5E0B8;
}
.v-navigation-drawer__content{
  background-color: #D5E0B8;
}
ul{
  list-style: none;
}
.v-application ul{
  padding: 0;
}
</style>