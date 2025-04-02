import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import clickbutton from "./components/clickbutton.vue";
import SelfIntroduce from "./components/SelfIntroduce.vue";
import test from "./components/test.vue";
import "./style.css";

export default {
  ...DefaultTheme,
  NotFound: () => "404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    app.use(ElementPlus);
    app.component("clickbutton", clickbutton);
    app.component("SelfIntroduce", SelfIntroduce);
    app.component("test", test);
  }
};
