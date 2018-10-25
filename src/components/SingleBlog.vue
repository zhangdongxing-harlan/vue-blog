<template>
    <div id="single-blog">
        <h2>{{blog.title}}</h2>
        <article>
            {{blog.content}}
        </article>
    </div>
</template>
<script>
import axios from "axios";
import Bmob from "hydrogen-js-sdk";
Bmob.initialize(
  "a2d4e5085b301996b25a43c1fe5b47b5",
  "010535e63b33f7a56c1e466ef69fe09a"
);
export default {
  name: "single-blog",
  data() {
    return {
      id: this.$route.params,
      blog: {}
    };
  },
  created() {
    const query = Bmob.Query("Blog_Article");
    console.log(this.id.objectId);
    query.get(this.id.objectId).then(res => {
      this.blog=res;
    });
  }
};
</script>
<style scoped>
#single-blog{
  max-width:800px;
  margin: 20px auto;
  background-color: #eee;
  padding: 20px;
}
</style>
