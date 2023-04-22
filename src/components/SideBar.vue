<template lang="''">
    <el-menu
    style="height: 100%"
    :default-active="activeIndex"
    @select="onMenuSelected"
  >
  <el-submenu index="1">
        <template slot="title">
            <i class="el-icon-menu"></i>
            <span>集团管理</span>
        </template>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-2">操作日志</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
        <template slot="title">
            <i class="el-icon-menu"></i>
            <span>焊缝检测</span>
        </template>
        <el-menu-item index="2-1">图片上传</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
    data() {
    return {
        activeIndex: '1'
    };
  },
  methods:{
    onMenuSelected(index) {
        return console.log(index);
      if (this?.activeMenu !== index) {
        this.$router.push(index);
      }
    },
  }
}
</script>
