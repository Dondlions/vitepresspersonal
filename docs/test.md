# 测试页面 :)

<el-button type="primary" @click="handleClick">点击按钮</el-button>

<script setup>
const handleClick = () => {
  ElMessage.success("操作成功");
};
</script>
