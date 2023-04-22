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
        <el-menu-item index="1-1">集团管理</el-menu-item>
        <el-menu-item index="1-2">用户</el-menu-item>
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
      if (this?.activeIndex !== index) {
        switch (index) {
            case 1-1:
                this.$router.push('company')
                break;
            case 1-2:
                this.$router.push('user')
                break;
            case 2-1:
                this.$router.push('image')
                break;
            default:
                break;
        }
        // this.$router.push(index);
      }
    },
  }
}
</script>
