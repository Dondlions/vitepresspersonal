<template>
  <el-button type="primary" @click="handleClick">点击按钮</el-button>
</template>

<script setup>
import { ElMessage } from "element-plus";
const handleClick = () => {
  ElMessage.success("操作成功");
};
</script>
