<template>
  <!-- 用户中心页标题栏 -->
  <div class="title">
    <i class="el-icon-arrow-left padding8" @click="navigateBack" />
    <span class="bold padding8"> {{ title }} </span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {
    navigateBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>
.title {
  text-align: left;
  padding: 16px 0 8px;
  border-bottom: 1px solid #dcdee0;
}
.el-icon-arrow-left {
  cursor: pointer;
}
</style>
