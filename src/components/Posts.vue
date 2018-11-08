<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="post of posts" v-bind:key="post.id">
      <div slot="header">{{post.title.rendered}}</div>
      <v-card>
        <v-card-text v-html=post.content.rendered></v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
//import axios from "axios";

export default {
  name: "Posts",
  props: ["posts"],
  data() {
    return {};
  }
};
</script>

<style>
</style>
