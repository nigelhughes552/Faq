<template>

<div>
  <ul v-if="categories && categories.length">
  <li v-for="c of categories" v-bind:key="c.id">
    
   <v-btn @click="getData(c.id)" color="primary">{{c.name}}  <v-badge   color="orange">
      <span slot="badge">{{c.count}}</span>
     
    </v-badge> </v-btn>
   

  </li>
</ul>
   <posts v-bind:posts="posts" />
</div>
</template>

<script>
import axios from "axios";
import Posts from "../components/Posts";
import NProgress from "nprogress";

export default {
  name: "Categories",
  components: {
    Posts
  },
  data() {
    return {
      categories: [],
      posts: []
    };
  },
  created() {
    NProgress.start();
    axios
      .get("//web3sixty.co.uk/wp-json/wp/v2/categories?parent=4")
      .then(response => {
        this.categories = response.data;
        NProgress.done();
      })
      .catch(e => {
        //console.error(e);
      });
  },
  methods: {
    getData: function(id) {
      NProgress.start();
      axios
        .get("//web3sixty.co.uk/wp-json/wp/v2/posts?categories=" + id)
        .then(response => {
          this.posts = response.data;
          NProgress.done();
        })
        .catch(e => {
          // console.error(e);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
