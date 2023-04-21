<template>
  <div class="form">
    <!-- 工号密码登录表单 -->
    <el-form :model="form" :rules="rules" ref="form" :show-message="true">
      <el-form-item prop="companyName">
        <el-input
          placeholder="集团名称"
          v-model="form.companyName"
          ref="companyName"
          clearable
          maxlength="20"
          @keyup.enter.native="focus('code')" />
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          placeholder="员工工号"
          v-model="form.code"
          ref="code"
          clearable
          maxlength="20"
          autocomplete="new-password"
          @keyup.enter.native="focus('password')" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="密码"
          v-model="form.password"
          ref="password"
          type="password"
          show-password
          maxlength="32"
          autocomplete="new-npmpassword"
          @keyup.enter.native="login" />
      </el-form-item>
    </el-form>
    <!-- 登录按钮 -->
    <el-button
      class="button"
      type="primary"
      @click="onSubmit"
      :loading="isLoading">
      {{ isLoading ? '登录中' : '登 录' }}
    </el-button>
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
  data() {
    return {
      isLoading: false, // 是否登录中状态
      form: {
        companyName: '', // 集团名称
        code: '', // 用户工号
        password: '', // 密码
      },
      rules: {},
    }
  },

  mounted() {
    if (localStorage.companyName) {
      this.form.companyName = localStorage.companyName
      this.focus('code')
    } else {
      this.focus('companyName')
    }
  },

  methods: {
    // 自动聚焦输入框
    focus(fieldName) {
      this.$nextTick(() => this.$refs[fieldName].focus())
    },
    // 工号密码登录
    async onSubmit() {
      if (this.isLoading) return false // 阻止重复登录
      this.rules = {
        companyName: this.$getFormRule({ name: '集团名称', min: 2 }),
        code: this.$getFormRule({ name: '员工工号' }),
        password: this.$getFormRule({
          name: '密码',
          min: 6,
          minMsg: '密码长度不符合要求',
        }),
      }
      this.$nextTick(() => {
        this.$refs.form.validate(async (valid) => {
          if (!valid) return false
          this.onPasswordLogin()
        })
      })
    },

    // 工号密码登录
    async onPasswordLogin() {
      const form = JSON.parse(JSON.stringify(this.form))
      const timestamp = new Date().getTime()
      form.password = this.$getRsaCode(timestamp + form.password) // 使用公钥加密密码
      this.isLoading = true
      // const [user, err] = await this.$post('login', {
      //   timestamp,
      //   ...form,
      //   host: 'sso',
      // }) // 请求账密登录
      this.isLoading = false
      // if (err) return this.$toast(err)
      // user.companyName = form.companyName // 保存集团名称供下次读取
      this.$emit('ok')
    },
  },
}
</script>

<style scoped>
@import '../styles/login-form.scss';
</style>
