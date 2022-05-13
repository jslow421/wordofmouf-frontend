<template>
  <div class="container">
    <div class="header">Posts</div>
    <div class="post-ctr">
      <div class="post" v-for="post in posts" :key="post.PostId">
        <span>{{ post.PostId }}</span>
        <span>{{ post.CreatedDate }}</span>
      </div>
    </div>
    <div class="bottom">END</div>
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

<style scoped lang="scss"></style>
