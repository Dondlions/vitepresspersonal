<template>
  <div class="self-introduce">
    <!-- 头部 -->
    <el-header class="header">
      <el-page-header @back="onBack">
        <template #content>
          <span class="title">自我介绍</span>
        </template>
      </el-page-header>
    </el-header>

    <!-- 主体内容 -->
    <el-main class="main">
      <el-row :gutter="20">
        <!-- 左侧：照片 -->
        <el-col :xs="24" :sm="8" :md="6" class="photo-col">
          <el-avatar class="photo" :size="200" :src="photoUrl" shape="circle" />
        </el-col>

        <!-- 右侧：介绍 -->
        <el-col :xs="24" :sm="16" :md="18" class="intro-col">
          <h1 class="name">{{ name }}</h1>
          <p class="title">{{ title }}</p>
          <el-divider />
          <p class="description">{{ description }}</p>

          <!-- 社交链接 -->
          <div class="social-links">
            <el-link
              v-for="link in socialLinks"
              :key="link.name"
              :icon="link.icon"
              :href="link.url"
              target="_blank"
              class="social-link"
            >
              {{ link.name }}
            </el-link>
          </div>
        </el-col>
      </el-row>
    </el-main>

    <!-- 页脚 -->
    <el-footer class="footer">
      <p>© 2025 {{ name }}. AIK | ISS.</p>
    </el-footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vitepress";

// 获取路由实例
const router = useRouter();

// 个人信息
const name = ref("假身");
const title = ref("前端开发者 | 技术爱好者");
const description = ref(
  "大家好，我是假身，一名热爱前端开发的技术爱好者。我喜欢探索新技术，分享学习经验，并致力于打造优雅、高效的用户体验。欢迎访问我的博客，了解更多关于我的项目和教程。"
);
const photoUrl = ref("../public/me.jpg"); // 替换为你的照片 URL

// 社交链接
const socialLinks = ref([
  {
    name: "GitHub",
    icon: "el-icon-star-off",
    url: "https://github.com/Dondlions"
  },
  {
    name: "Twitter",
    icon: "el-icon-chat-line-round",
    url: "https://twitter.com"
  },
  { name: "Email", icon: "el-icon-message", url: "mailto:example@example.com" }
]);

// 返回按钮事件
const onBack = () => {
  router.go("/vitepresspersonal");
};
</script>

<style scoped>
.self-introduce {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--vp-c-bg); /* 使用 VitePress 默认背景色 */
}

.header {
  background-color: #4d39a8ed; /* 使用 VitePress 默认主题色 */
  color: var(--vp-c-text-inverse); /* 使用 VitePress 默认反色文字 */
  padding: 20px;
  display: flex;
  align-items: center;
}

.header .title {
  font-size: 24px;
  font-weight: bold;
}

.main {
  flex: 1;
  padding: 40px 20px;
  background-color: var(--vp-c-bg); /* 使用 VitePress 默认背景色 */
}

.photo-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo {
  border: 4px solid var(--vp-c-brand); /* 使用 VitePress 默认主题色 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.intro-col {
  padding: 20px;
}

.name {
  font-size: 32px;
  font-weight: bold;
  color: var(--vp-c-brand); /* 使用 VitePress 默认主题色 */
  margin-bottom: 10px;
}

.title {
  font-size: 18px;
  color: var(--vp-c-text-2); /* 使用 VitePress 默认次要文字色 */
  margin-bottom: 20px;
}

.description {
  font-size: 16px;
  line-height: 1.8;
  color: var(--vp-c-text-1); /* 使用 VitePress 默认主要文字色 */
}

.social-links {
  margin-top: 20px;
}

.social-link {
  margin-right: 15px;
  font-size: 16px;
  color: var(--vp-c-brand); /* 使用 VitePress 默认主题色 */
}

.footer {
  background-color: var(--vp-c-bg-soft); /* 使用 VitePress 默认柔和背景色 */
  color: var(--vp-c-text-2); /* 使用 VitePress 默认次要文字色 */
  text-align: center;
  padding: 10px;
}
</style>
