<!--
 * @Author: 刘康宁 869161591@qq.com
 * @Date: 2022-08-23 10:07:01
 * @LastEditors: 刘康宁 869161591@qq.com
 * @LastEditTime: 2022-09-20 11:29:15
 * @FilePath: /oneid/src/views/login/Components/H5Password.vue
 * @Description: 移动端密码登录框
-->
<template>
  <div class="h5-password-form">
    <!-- 工号密码登录表单 -->
    <van-form>
      <van-field v-model="form.companyName" name="集团名称" placeholder="请输入集团名称">
        <i slot="left-icon" class="el-icon-office-building" />
      </van-field>
      <van-field v-model="form.code" left-icon="user-circle-o" name="员工工号" placeholder="请输入员工工号">
        <i slot="left-icon" class="el-icon-user" />
      </van-field>
      <van-field v-model="form.password" type="password" name="密码" placeholder="请输入密码">
        <i slot="left-icon" class="el-icon-lock" />
      </van-field>
    </van-form>
    <!-- 登录按钮 -->
    <van-button class="button" type="info" @click="onSubmit" :loading="isLoading">
      {{ isLoading ? '登录中' : '登 录' }}
    </van-button>
    <!-- 忘记密码提示 -->
    <el-tooltip class="item" effect="dark" placement="bottom-end">
      <span class="text-button font14 N3">忘记工号密码?</span>
      <div slot="content">
        若本人手机号在用，可通过验证码登录后，在用户中心修改密码；<br />若手机号已不再使用，请联系集团管理员查询工号、重置密码。
      </div>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false, // 是否登录中状态
      form: {
        companyName: "", // 集团名称
        code: "", // 用户工号
        password: "", // 密码
      },
      rules: {},
    };
  },

  mounted () {
    this.form.companyName = localStorage.companyName || ''
  },

  methods: {
    // 提交验证
    onSubmit () {
      if (this.isLoading) return false; // 阻止重复登录 
      if (!this.form.companyName.length) return this.$toast('请填写集团名称')
      if (!this.form.code.length) return this.$toast('请填写员工工号')
      if (this.form.password.length < 6) return this.$toast('密码长度不符合要求')
      this.onPasswordLogin()
    },

    // 工号密码登录
    async onPasswordLogin () {
      const form = JSON.parse(JSON.stringify(this.form));
      const timestamp = new Date().getTime();
      form.password = this.$getRsaCode(timestamp + form.password); // 使用公钥加密密码
      this.isLoading = true
      const [user, err] = await this.$post("login", { timestamp, ...form }); // 请求账密登录
      this.isLoading = false
      if (err) return this.$toast(err);
      user.companyName = form.companyName  // 保存集团名称供下次读取 
      this.$emit('ok', user)
    },
  }
};
</script>

<style scoped>
@import '../styles/login-form.scss';
</style>
