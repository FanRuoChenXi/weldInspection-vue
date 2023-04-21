<template>
  <div>
    <!-- PC 端登录页 / -->
    <div class="login-bg hidden-sm-and-down">
      <div class="login-bg__image">
        <img src="@/assets/login/login_bg.webp" />
      </div>
      <!-- 登录表单卡片 -->
      <div class="login-bg__card">
        <div class="font24 N2" style="margin: 56px 0 24px">
          焊缝检测系统
          <el-tag v-if="env" class="tag" size="mini" type="warning">{{
            env
          }}</el-tag>
        </div>

        <div class="tabs">
          <el-tabs v-model="loginMethod">
            <el-tab-pane label="工号密码登录" name="login" />
            <el-tab-pane label="验证码登录" name="loginByPhone" />
          </el-tabs>
        </div>
        <div class="form">
          <PcPassword v-if="loginMethod == 'login'" @ok="onLoginSuccess" />
          <PcSms v-if="loginMethod == 'loginByPhone'" @ok="onLoginSuccess" />
          <!-- 第三方登录 -->
          <div class="third-platform">
            <div class="divider">
              <el-divider> <span class="N3">其它登录方式</span> </el-divider>
            </div>
            <div class="flex-between">
              <div class="icon closed" id="wechat">
                <img src="@/assets/login/wechat.png" alt="微信" />
              </div>
              <div class="icon closed" id="dingtalk">
                <img src="@/assets/login/dingtalk.png" alt="钉钉" />
              </div>
              <div class="icon closed" id="lark">
                <img src="@/assets/login/lark.png" alt="飞书" />
              </div>
              <div class="icon closed" id="qq">
                <img src="@/assets/login/qq.png" alt="QQ" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 移动端登录页 / -->
    <div class="login-bg hidden-md-and-up">
      <H5Password v-if="loginMethod == 'login'" @ok="onLoginSuccess" />
      <H5Sms v-if="loginMethod == 'loginByPhone'" @ok="onLoginSuccess" />
    </div>
  </div>
</template>

<script>
import PcPassword from './Components/PcPassword'
import PcSms from './Components/PcSms'
import H5Password from './Components/H5Password'
import H5Sms from './Components/H5Sms'
import isElectron from 'is-electron' // 判断当前是否嵌入在软件中
export default {
  components: { PcPassword, PcSms, H5Password, H5Sms },
  data() {
    return {
      env: { local: '本地版', develop: '开发版', trial: '学习版', release: '' }[
        this.$ENV
      ],
      url: {
        local: 'http://localhost:8080/#/',
        develop: 'https://dev.geemro.com/room-rate-card/#/',
        trial: 'https://trial.geemro.com/room-rate-card/#/',
        release: 'https://pms.geemro.com/room-rate-card/#/',
      }[this.$ENV],
      loginMethod: 'login', // 可选值: login(工号密码登录) loginByPhone(手机验证码登录)
    }
  },

  async mounted() {
    if (this.env) document.title = `焊缝检测系统 (${this.env})`
    // const { logout } = this.$route.query
    // const [, err] = await this.$post('logout', { host: 'sso' }) // 请求退出
    // if (err) return this.$msg(err)
    localStorage.removeItem('user')
    this.$cookie.remove('TOKEN')
  },

  methods: {
    // 登录成功回调
    onLoginSuccess(user) {
      this.$router.replace('/dashborad')
      // if (user) {
      //   localStorage.setItem('user', JSON.stringify(user))
      //   localStorage.setItem('companyName', user.companyName)
      // }
      // const { app_name, redirect_url } = this.$route.query
      // 若为网页版, 则需 sso 登录, 根据重定向地址直接跳转
      // if (app_name && redirect_url) return this.ssoLogin(app_name, redirect_url)
      // 其它情况跳转到工作台
    },

    // 登录到子系统, 并跳转至回调地址
    // async ssoLogin(appName, redirectUrl) {
    //   const [, err] = await this.$post('ssoLogin', { appName, host: 'sso' }) // 请求单点登录
    //   if (err) return this.$msg(err)
    //   window.location.href = `${redirectUrl}?token=${this.$cookie.get('TOKEN')}`
    // },

    // 外部链接跳转
    // to(url) {
    //   if (isElectron()) return false // 桌面应用环境不跳转
    //   if (url == 'miit') {
    //     window.open('https://beian.miit.gov.cn') // 工信部备案
    //   } else if (url == 'beian') {
    //     window.open(
    //       'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010202002386'
    //     ) // 公安备案
    //   }
    // },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/login-page.scss';
.tabs {
  width: 270px;
  margin: 0 auto 8px;
}
.form {
  width: 370px;
  margin: 0 auto;
  text-align: right;
}
.third-platform {
  position: absolute;
  width: 370px;
  bottom: 48px;
}
.third-platform .icon {
  cursor: pointer;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  transition: all 0.2s;
}
.third-platform .icon:hover {
  transform: scale(1.05);
}
.third-platform .icon img {
  width: 56px;
  height: 56px;
  pointer-events: none;
}
.closed::before {
  position: absolute;
  content: '建设中';
  opacity: 0;
  background: #00000088;
  text-align: center;
  width: 56px;
  border-radius: 50%;
  line-height: 56px;
  font-size: 12px;
  color: #fff;
  transition: all 0.2s;
}
.closed:hover::before {
  opacity: 1;
}
#wechat:hover {
  box-shadow: 0px 2px 16px -4px #227f05;
}
#dingtalk:hover {
  box-shadow: 0px 2px 16px -4px #257ed5;
}
#lark:hover {
  box-shadow: 0px 2px 16px -4px #8f8f8f;
}
#qq:hover {
  box-shadow: 0px 2px 16px -4px #3786e9;
}

.footer {
  position: absolute;
  text-align: center;
  width: 600px;
  left: calc(50% - 300px);
  bottom: 0;
  // border: 1px #f00 solid;
}
.footer .link {
  transition: all 0.5s;
  cursor: pointer;
}
.footer .link:hover {
  color: #00a1ff;
  opacity: 0.8;
}
.dot {
  width: 6px;
  height: 6px;
  line-height: 6px;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px 1px 0;
}
</style>
