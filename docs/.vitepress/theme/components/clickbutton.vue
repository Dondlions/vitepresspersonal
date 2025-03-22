<template>
  <el-button type="primary" @click="handleClick">你点我一下试试？</el-button>
</template>

<script setup>
import { ElMessage } from "element-plus";
const handleClick = () => {
  ElMessage.success("有种");
};
</script>
