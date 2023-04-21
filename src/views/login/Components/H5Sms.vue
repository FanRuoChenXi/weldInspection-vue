<template>
  <div>
    <!-- 验证码登录表单 -->
    <el-form :model="form" :rules="rules" ref="form" :show-message="true">
      <el-form-item prop="companyName">
        <el-input v-model="form.companyName" placeholder="集团名称" clearable maxlength="20" />
      </el-form-item>
      <el-form-item prop="phone">
        <el-input v-model="form.phone" placeholder="员工手机号" ref="phone" maxlength="11" @keyup.enter.native="focus('smsCaptcha')" />
      </el-form-item>
      <el-form-item prop="smsCaptcha">
        <el-input
          v-model="form.smsCaptcha"
          placeholder="手机验证码"
          ref="smsCaptcha"
          autocomplete="new-password"
          maxlength="6"
          @keyup.enter.native="login"
        >
          <el-button :class="'sms-button ' + (smsCount ? 'disabled' : '')" slot="append" @click="getSmsCaptcha">
            {{ smsCount ? `已发送 (${smsCount})` : '获取验证码' }}
          </el-button>
        </el-input>
      </el-form-item>
    </el-form>
    <!-- 登录按钮 -->
    <el-button class="button" type="primary" @click="login" :loading="isLoading">
      {{ isLoading ? '登录中' : '登 录' }}
    </el-button>
    <div style="height: 23px" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false, // 是否登录中状态
      smsCount: 0, // 验证码倒计时
      form: {
        companyName: '', // 集团名称
        phone: '', // 员工手机号
        smsCaptcha: '', // 手机验证码
      },
      rules: {}
    }
  },

  mounted () {
    if (localStorage.companyName) {
      this.form.companyName = localStorage.companyName
      this.focus('phone')
    } else {
      this.focus('companyName')
    }
  },

  methods: {
    // 自动聚焦输入框
    focus (fieldName) {
      this.$nextTick(() => this.$refs[fieldName].focus());
    },
    // 获取手机验证码
    async getSmsCaptcha () {
      if (this.smsCount) return false // 阻止重复获取验证码 
      this.rules = {
        companyName: this.$getFormRule({ name: '集团名称', min: 2 }),
        phone: this.$getFormRule({ name: '员工手机号', min: 11, minMsg: '仅支持中国境内11位手机号' }),
      }
      this.$nextTick(() => {
        this.$refs.form.validate(async (valid) => {
          if (!valid) return false
          const [, err] = await this.$get('getSmsCaptcha', { ...this.form, template: "loginByPhone" }) // 请求验证码 
          if (err) return this.$msg.error(err)
          this.$msg.success('短信发送成功, 请查收')
          this.smsCount = 30 // 倒计时设定 30s
          const timer = setInterval(() => {
            if (--this.smsCount <= 0) {
              this.smsCount = 0
              clearInterval(timer)
            }
          }, 1000);
        })
      })
    },
    // 手机验证码登录
    async login () {
      if (this.isLoading) return false // 阻止重复登录
      this.rules = {
        companyName: this.$getFormRule({ name: '集团名称', min: 2 }),
        phone: this.$getFormRule({ name: '员工手机号', min: 11, minMsg: '仅支持中国境内11位手机号' }),
        smsCaptcha: this.$getFormRule({ name: '手机验证码', min: 6, minMsg: '验证码长度不符合要求' }),
      }
      this.$nextTick(() => {
        this.$refs.form.validate(async (valid) => {
          if (!valid) return false
          const form = JSON.parse(JSON.stringify(this.form))
          this.isLoading = true
          const [user, err] = await this.$post('loginByPhone', form) // 请求验证码登录
          this.isLoading = false
          if (err) return this.$msg(err)
          user.companyName = form.companyName  // 保存集团名称供下次读取 
          this.$emit('ok', user)
        })
      })
    }
  }
}
</script>

<style scoped>
@import '../styles/login-form.scss';
.sms-button {
  width: 120px;
}
.disabled {
  cursor: default;
}
</style>
