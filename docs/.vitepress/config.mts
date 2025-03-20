// 导入 defineConfig 函数，用于配置 VitePress 站点
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepresspersonal/",
  title: "@假身|个人博客",
  description: "基于vitepress的个人博客",
  head: [["link", { rel: "icon", href: "/vitepresspersonal/logo.jpg" }]],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "个人项目", link: "" },
      {
        text: "教程",
        items: [
          {
            text: "vue3",
            items: [
              { text: "vue3基础", link: "tutorial/vue3_foundation" },
              { text: "vue添加组件", link: "/" }
            ]
          },
          { text: "vitepress", link: "/" }
        ]
      },
      { text: "关于我", link: "self_part/aboutmyself" }
    ],

    socialLinks: [{ icon: "wechat", link: "" }],

    lastUpdated: {
      text: "最后更新于：",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      }
    },

    outline: {
      level: [1, 6],
      label: "本页目录",
      collapseDepth: 1
    } as { level: [number, number]; label: string; collapseDepth: number }
  }
});
