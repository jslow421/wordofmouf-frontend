<template>
  <div class="container">
    <div class="header">Posts</div>
    <div class="post-ctr container">
      <div class="row">
        <div class="col">Title</div>
        <div class="col">Date</div>
      </div>
      <div
        class="post row"
        v-for="post in posts"
        :key="post.PostId"
        @click="selectPost(post.PostId)"
      >
        <div class="col title">{{ post.PostTitle }}</div>
        <div class="col">{{ post.CreatedDate }}</div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script setup>
import { onMounted, shallowReactive } from "vue";
import axios from "axios";

let posts = shallowReactive([]);

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

async function selectPost(id) {
  console.log("clicked ID: " + id);
}
</script>

<style scoped lang="scss">
.post-ctr {
  > .post {
    border: 0.2px solid black;
    margin: 10px;
    padding: 15px;
    cursor: pointer;
    > .title {
      color: #2c3e50;
      text-decoration: underline;
    }
  }
}
</style>
