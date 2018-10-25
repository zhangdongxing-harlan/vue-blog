<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!blogData.submited">
      <label>博客标题</label>
      <input type="text" v-model='blogData.title'>
      <br>
      <label>博客内容</label>
      <textarea v-model='blogData.content'></textarea>
      <div id="checkboxes">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model='blogData.categories'>
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model='blogData.categories'>
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model='blogData.categories'>
        <label>Angular6</label>
        <input type="checkbox" value="Angular6" v-model='blogData.categories'>
      </div>
      <label>作者：</label>
      <select v-model='blogData.author'>
        <option v-for='item in author' :key="item">
          {{item}}
        </option>
      </select>
      <button type='submit' v-on:click.prevent='post'>提交博客</button>
    </form>
    <h3 v-if="blogData.submited">提交成功</h3>
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
  name: "add-blog",
  data() {
    return {
      blogData: {
        title: "",
        content: "",
        categories: [],
        author: "Jenny",
        submited: false
      },
      author: ["Jenny", "Denny", "LiMing"]
    };
  },
  methods: {
    post() {
      const query = Bmob.Query("Blog_Article");
      query.set("title", this.blogData.title);
      query.set("content", this.blogData.content);
      query.set("author", this.blogData.author);
      query.set("categories", this.blogData.categories.join(";"));
      query
        .save()
        .then(res => {
          this.blogData.submited = true;
        })
        .catch(err => {
          throw err;
        });
    }
  }
};
</script>
<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea,
select {
  width: 100%;
}
textarea {
  height: 200px;
  resize: none;
}
#checkboxes {
  margin-bottom: 10px;
}
#checkboxes label {
  display: inline-block;
  margin-top: 0;
}
#checkboxes input[type="checkbox"] {
  display: inline-block;
  margin-right: 10px;
}
button {
  display: block;
  background-color: crimson;
  padding: 14px;
  margin-top: 20px;
  color: #fff;
  cursor: pointer;
  border: 0;
  font-size: 18px;
  border-radius: 4px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
  text-align:center;
}
h2 {
  text-align: center;
}
</style>
