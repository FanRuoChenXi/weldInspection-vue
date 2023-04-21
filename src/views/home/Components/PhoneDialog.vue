<template>
  <el-dialog title="换绑手机" :visible="visible" width="440px" custom-class="dialog" :before-close="() => $emit('hide')">
    <div style="padding: 0 16px 16px">
      <el-form :model="form" :rules="rules" ref="form" :show-message="true">
        <el-form-item prop="phone">
          <el-input v-model="form.phone" placeholder="新手机号" ref="phone" maxlength="11" @keyup.enter.native="focus('smsCaptcha')" />
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
      <el-button class="button" type="primary" @click="onSubmit" :loading="isLoading">
        {{ isLoading ? '正在提交' : '提 交' }}
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: Boolean
  },
  data () {
    return {
      isLoading: false, // 提交按钮加载态
      smsCount: 0,
      form: {
        phone: '', // 员工手机号
        smsCaptcha: '', // 手机验证码
      },
      rules: {}
    }
  },
  methods: {
    // 获取手机验证码
    async getSmsCaptcha () {
      if (this.smsCount) return false // 阻止重复获取验证码 
      this.rules = { phone: this.$getFormRule({ name: '新手机号', min: 11, minMsg: '仅支持中国境内11位手机号' }) }
      this.$nextTick(() => {
        this.$refs.form.validate(async (valid) => {
          if (!valid) return false
          const [, err] = await this.$get('getSmsCaptcha', this.form) // 请求验证码
          if (err) return this.$msg(err)
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
    // 提交修改
    onSubmit () {
      if (this.isLoading) return false // 阻止重复登录
      this.rules = {
        phone: this.$getFormRule({ name: '员工手机号', min: 11, minMsg: '仅支持中国境内11位手机号' }),
        smsCaptcha: this.$getFormRule({ name: '手机验证码', min: 6, minMsg: '验证码长度不符合要求' }),
      }
      this.$nextTick(() => {
        this.$refs.form.validate(async (valid) => {
          if (!valid) return false
          const { form } = this
          this.isLoading = true
          const [, err] = await this.$post('modifyMyPhone', form) // 请求账密登录
          this.isLoading = false
          if (err) return this.$msg(err)
          const user = JSON.parse(sessionStorage.user)
          user.phone = form.phone
          sessionStorage.user = user
        })
      })
    },
    // 隐藏弹框
    onHide () {
      this.$emit('hide')
    }
  }
}
</script>

<style scoped>
.button {
  width: 100%;
}
</style>

<style >
.dialog {
  border-radius: 8px;
}
</style>