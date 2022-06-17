import Default from "@/components/Default.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export const routes = [
  {
    path: "*", // 404 redirect
    redirect: "/"
  },
  {
    path: "/", // root
    component: Default
  },
  {
    path: "",
    name: "Default",
    redirect: "/"
  },
  {
    path: "/helloworld",
    name: "helloworld",
    component: HelloWorld
  },
  {
    path: "/helloworldasync",
    name: "helloworldasync",
    components: {
      default: () =>
        import(/* webpackChunkName: "helloworldasync", webpackPrefetch: -100 */ "@/components/HelloWorld.vue")
    }
  }
];
