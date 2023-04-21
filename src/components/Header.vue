<!--
 * @Author: 刘康宁 869161591@qq.com
 * @Date: 2022-07-21 10:38:17
 * @LastEditors: 刘康宁 869161591@qq.com
 * @LastEditTime: 2022-09-20 11:24:01
 * @FilePath: /oneid/src/components/Header.vue
 * @Description: 顶部栏
-->
<template>
  <!-- 页头  -->
  <div class="bar flex-between row-center">
    <div>
      <div class="oneid">ONEID</div>
      <div class="font10">杰姆龙用户中心</div>
    </div>
    <el-dropdown @command="navigate">
      <span class="action-area N9 padding16 flex row-center">
        <div class="font16 line24 bold">{{ user.name }}</div>
        <i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="user"
          ><i class="el-icon-user" /> 个人信息</el-dropdown-item
        >
        <el-dropdown-item command="password"
          ><i class="el-icon-lock" /> 修改密码</el-dropdown-item
        >
        <el-dropdown-item command="logout"
          ><i class="el-icon-switch-button" /> 退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    }
  },
  mounted() {
    const user = localStorage.getItem('user')
    if (!user) return this.logout()
    this.user = JSON.parse(user)
  },
  methods: {
    async navigate(command) {
      if (command == 'user' || command == 'password') {
        this.$router.push(command) // 修改用户信息 || 修改密码
      } else if (command == 'logout') {
        this.logout() // 登出
      }
    },

    // 退出登录
    async logout() {
      const [, err] = await this.$post('logout')
      if (err) return this.$msg(err)
      localStorage.removeItem('user')
      this.$cookie.remove('TOKEN')
      this.$router.replace('/')
    },
  },
}
</script>

<style scoped>
.bar {
  padding: 0 48px;
  color: #fff;
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  background: linear-gradient(173deg, #00a1ff 0%, #74bafe 82%, #92b8f4 100%);
}
.logo {
  width: 48px;
  height: 48px;
}
.oneid {
  font-weight: 900;
  font-size: 25px;
  line-height: 28px;
}
.setting-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.action-area {
  cursor: pointer;
}
</style>
