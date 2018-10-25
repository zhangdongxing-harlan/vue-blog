<template>
    <div id="show-blogs">
        <h1>博客总览</h1>
        <input type="text" placeholder="搜索" v-model='search'>
        <div id="single-blog" v-for='item in filterBlogs' :key='item.title'>
            <h2 ><router-link :to="'/blog/'+item.objectId" v-rainbow>{{item.title}}</router-link></h2>
            <article>
                {{item.content.substring(0,90)+'...'}}
            </article>
        </div>
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
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search:''
    };
  },
  created() {
    const query = Bmob.Query("Blog_Article");
    query.find().then(res=>{
      this.blogs=res;
    })
  },
  computed:{
    filterBlogs(){
      return this.blogs.filter(data=>{
        return data.title.match(this.search);
      })
    }
  }
};
</script>
<style scoped>
#show-blogs {
  margin: 0 auto;
  max-width: 800px;
}
#single-blog {
  box-sizing: border-box;
  padding: 20px;
  margin: 20px 0;
  background-color: #eee;
  height: 150px;
  overflow: hidden;
}

h1 {
  text-align: center;
}
a {
  text-decoration:none;
}
</style>
