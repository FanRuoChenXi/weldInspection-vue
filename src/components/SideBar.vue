<template lang="''">
    <el-menu
    style="height: 100%"
    :default-active="activeIndex"
    @select="onMenuSelected"
  >
  <el-submenu index="1">
        <template slot="title">
            <i class="el-icon-menu"></i>
            <span>管理中心</span>
        </template>
        <el-menu-item index="1-1">集团设置</el-menu-item>
        <el-menu-item index="1-2">用户管理</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
        <template slot="title">
            <i class="el-icon-menu"></i>
            <span>焊缝检测</span>
        </template>
        <el-menu-item index="2-1">检测记录</el-menu-item>
        <el-menu-item index="2-2">图片检测</el-menu-item>
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
      if (this?.activeIndex !== index) {
        switch (index) {
            case '1-1':
                this.$router.push('/weld/company')
                break;
            case '1-2':
                this.$router.push('/weld/user')
                break;
            case '2-1':
                this.$router.push('/weld/inspection')
                break;
            case '2-2':
                this.$router.push('/weld/image')
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
