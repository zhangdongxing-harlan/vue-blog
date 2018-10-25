<template>
    <div id="header">
        <router-link to="/" exact>博客总览</router-link>
        <router-link to="/addBlog" exact>发表博客</router-link>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
div {
  background-color: crimson;
  text-align:center;
  padding:10px 0;
  margin-bottom:40px;
}
a {
    display:inline-block;
    text-decoration:none;
    color:#fff;
    margin-right:5px;
    padding:12px;
    border-radius:4px;
}

.router-link-active {
    background-color: rgba(255,255,255,0.8);
    color:#444;
}
</style>
