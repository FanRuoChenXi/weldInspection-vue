<template>
  <!-- 修改密码页 /password -->
  <div>
    <Header />
    <div class="content">
      <TitleBar title="修改密码" />
      <div class="form">
        <el-alert
          show-icon
          title="为保证账号安全, 请设置不少于 6 位的密码。"
          type="info"
          :closable="false" />
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
          style="margin-top: 20px">
          <el-form-item prop="password">
            <el-input
              placeholder="请输入新密码"
              v-model="form.password"
              type="password"
              show-password
              maxlength="32"
              autocomplete="new-password" />
          </el-form-item>
          <el-form-item prop="passwordCopy">
            <el-input
              placeholder="请再次输入新密码"
              v-model="form.passwordCopy"
              type="password"
              show-password
              maxlength="32"
              autocomplete="new-password"
              @keyup.enter.native="onOk" />
          </el-form-item>
          <el-form-item class="flex">
            <el-button type="primary" @click="onOk">提 交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TitleBar from '@/components/TitleBar'
export default {
  components: {
    Header,
    TitleBar,
  },
  data() {
    var passwordCopyValidator = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      isLoading: false, // 提交加载态
      form: {
        password: '', // 新密码
        passwordCopy: '', // 再次输入新密码
      },
      rules: {
        password: this.$getFormRule({
          name: '新密码',
          min: 6,
          minMsg: '密码长度不符合要求',
        }),
        passwordCopy: this.$getFormRule({
          name: '新密码',
          validator: passwordCopyValidator,
        }),
      },
    }
  },
  methods: {
    async onOk() {
      const timestamp = new Date().getTime()
      const password = this.$getRsaCode(timestamp + this.form.password) // 使用公钥加密密码
      this.isLoading = true
      // const [, err] = await this.$post('resetPassword', { password, timestamp }) // 请求账密登录
      this.isLoading = false
      // if (err) return this.$msg(err)
      this.$msg.success('修改成功')
    },
  },
}
</script>

<style scoped>
.content {
  margin: 0 auto;
  padding: 0 24px;
  width: 1200px;
}
.form {
  margin: 24px 0;
  width: 480px;
}
</style>
