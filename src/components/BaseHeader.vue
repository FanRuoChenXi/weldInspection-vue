<template>
  <div class="header">
    <!-- 左侧区域，放置 LOGO 和企业名称 -->
    <div class="hader-logo">焊缝检测管理系统</div>
    <!-- 右侧区域，放置帮助按钮、通知按钮、用户名 -->
    <div>
      <el-dropdown>
        <el-link
          :underline="false"
          href="https://www.yuque.com/forms/share/daa19789-b0ec-4bf7-9b65-d8357508fa6e"
          target="_blank"
          class="icon"
          icon="el-icon-question"
          >反馈问题</el-link
        >
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="dialogVisible = true"
            >手机反馈问题</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
      <el-link
        style="margin-right: 18px"
        icon="el-icon-s-custom"
        :underline="false"
        href="https://openai.weixin.qq.com/webapp/HCeFZK2mTVsoYBH9OBEPXQyWdIVxzg?robotName=%E6%9D%B0%E5%A7%86%E9%BE%99%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D"
        target="_blank"
        >在线客服</el-link
      >
      <el-link
        icon="el-icon-reading"
        :underline="false"
        href="https://www.yuque.com/docs/share/fccf99cc-6b75-4869-aa17-ee811b095aaf"
        target="_blank"
        class="icon"
        >使用手册</el-link
      >
      <el-dropdown @command="handleCommand">
        <div>黄施能</div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="outLogin">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-dialog
      title="使用手机扫码反馈问题"
      :visible.sync="dialogVisible"
      width="20%">
      <el-image
        fit="scale-down"
        src="https://pic.imgdb.cn/item/6318419116f2c2beb1d0cd4a.jpg" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      isLoading: false,
    }
  },
  methods: {
    handleCommand(e) {
      //   switch (e) {
      //     case "outLogin":
      //       this.$cookies.remove("TOKEN");
      //       sessionStorage.removeItem("user");
      //       location.href = SSO_URL + "/?logout=1";
      //       break;
      //     default:
      //       break;
      //   }
    },
    // async getUser() {
    //   const [res, err] = await this.$get("getUser");
    //   if (err) return this.$msg(err);
    //   sessionStorage.setItem("user", JSON.stringify(res));
    // }
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #333;
  line-height: 48px;
}
.icon {
  cursor: pointer;
  font-size: 14px;
  margin-right: 20px;
}
.hader-logo {
  cursor: pointer;
  width: 180px;
  height: 40px;
  font-size: 19px;
  font-weight: 700;
  color: #000000;
}
</style>
