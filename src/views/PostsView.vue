<template>
  <div class="container">
    <div class="header">Posts</div>
    <div class="post-ctr container">
      <div class="post row" v-for="post in posts" :key="post.PostId">
        <div class="col title">{{ post.PostTitle }}</div>
        <div class="col">{{ post.CreatedDate }}</div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";

let posts = reactive([]);

onMounted(() => {
  getPosts();
});

async function getPosts() {
  let results = await axios.get("https://api.wordofmouf.xyz/posts", (err) => {
    console.log(err);
  });
  results.data.Items.forEach((val) => {
    posts.push(val);
  });
}
</script>

<style scoped lang="scss">
.post-ctr {
  > .post {
    border: 0.5px solid black;
    padding: 15px;
    > .title {
      cursor: pointer;
      color: #2c3e50;
    }
  }
}
</style>
