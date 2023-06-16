<template>
  <v-app>
    <v-card color="#f1f5f9" min-height="1200">
      <v-tabs
        v-model="active"
        color="deep-purple-accent-4"
        align-tabs="start"
      >
        <v-tab v-for="tab of tabs" :key="tab.id" exact :to="{ name: tab.route_name }">
          {{ tab.name }}
        </v-tab>
      </v-tabs>
      <router-view></router-view>
    </v-card>
  </v-app>
</template>

<script>
import router from "@/router";

export default {
  name: 'App',
  router,
  components: {
  },
  data () {
    return {
      active: '',
      tabs: [
        { id: 1, name: "Fruit List", route: '/list', route_name: 'ListPage' },
        { id: 2, name: "Favourite Fruit", route: '/favoirites', route_name: 'FavoritesListPage'  }
      ]
    }
  }
}
</script>

