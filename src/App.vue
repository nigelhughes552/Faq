<template>
  <v-app>
    <v-content>
      <categories />
    </v-content>
  </v-app>
</template>

<script>
import Categories from "./components/FAQCategories";
//import Posts from "./components/Posts";

export default {
  name: "App",
  components: {
    Categories
  }
};
</script>