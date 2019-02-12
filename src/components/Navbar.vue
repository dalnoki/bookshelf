<template>
<header>
    <v-navigation-drawer fixed temporary v-model="sideNavigation">
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Home</v-list-tile-content>
        </v-list-tile>
            <v-list-tile to="/search">
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Search</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app scroll class="primary">
      <v-toolbar-side-icon 
      @click="sideNavigation = !sideNavigation"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>myBookShelf</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat to="/">Home
          <v-icon right>home</v-icon>
        </v-btn>
        <v-btn flat to="/search">Search
          <v-icon right>search</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
</header>
</template>
<script>
export default {
  data() {
    return {
      sideNavigation: false
    };
  }
};
</script>
<style scoped>
a {
  color: white;
}
</style>
