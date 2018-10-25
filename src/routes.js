import AddBlog from "./components/AddBlog.vue";
import ShowBlogs from "./components/ShowBlogs.vue";
import SingleBlog from "./components/SingleBlog"

export default [
    {
      path: "/",
      component: ShowBlogs
    },
    {
      path: "/addBlog",
      component: AddBlog
    },
    {
      path:"/blog/:objectId",
      component:SingleBlog
    }
  ];