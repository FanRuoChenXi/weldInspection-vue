<!--
 * @Author: 刘康宁 869161591@qq.com
 * @Date: 2022-07-22 09:46:32
 * @LastEditors: 刘康宁 869161591@qq.com
 * @LastEditTime: 2022-10-14 16:05:26
 * @FilePath: /oneid/src/views/home/Components/AppCard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="card flex row-center" @click="navigate" @click.right.prevent="navigateLocal" v-loading="isLoading">
    <img :src="require(`@/assets/dashboard/${app.id}.webp`)" :alt="app.title" class="icon" style="z-index: 1" />
    <img :src="require(`@/assets/dashboard/${app.id}.webp`)" :alt="app.title" class="icon shadow" />
    <div class="text-left">
      <div class="N1 font16 bold">{{ app.title }}</div>
      <div class="padding4" />
      <div class="N3 font14 line20">{{ app.note }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: { app: Object },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    // 点击卡片跳转
    async navigate () {
      if (this.isLoading) return false
      const ENV = this.$ENV == 'local' ? 'develop' : this.$ENV // 当前环境. 本地环境视同开发环境 
      const url = this.app?.url?.[ENV]
      if (url && this.app.noLogin) {
        window.location.href = url  // 无需 SSO 登录直接跳转
      } else if (url) {
        this.go(url) // 需要 SSO 登录后才能跳转
      } else {
        // 无需跳转
        this.$msgbox.confirm(`需要下载并安装使用, 点击前往系统更新页面下载安装包。`, '需要下载', {
          confirmButtonText: '前往',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          window.location.href = 'https://www.yuque.com/docs/share/770271e8-b283-445e-9993-158b7817734c'
        })
      }
    },

    //? 若为本地或测试环境, 右键点击跳转到本地环境, 否则不响应
    async navigateLocal () {
      const ENV = this.$ENV == 'local' ? 'develop' : this.$ENV // 当前环境. 本地环境视同开发环境   
      if (this.isLoading || ENV != 'develop') return false
      this.go(this.app.url.local) + '?token=' + this.$cookie.get('TOKEN') // 跳转到 local 地址
    },

    // 请求单点登录并跳转
    async go (url) {
      this.isLoading = true
      const [, err] = await this.$post('ssoLogin', { appName: this.app.id }) // 请求单点登录 
      this.isLoading = false
      if (err) return this.$msg(err)
      window.location.href = url + '?token=' + this.$cookie.get('TOKEN')
    }
  }
}
</script>

<style scoped>
.card {
  width: 300px;
  height: 80px;
  padding: 30px;
  margin: 0 20px 30px 20px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px #ecedef;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
}
.card:hover {
  box-shadow: 0px 0px 8px 0px #d2d4d5;
}
.icon {
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 30px;
  border-radius: 50%;
}
.shadow {
  position: absolute;
  filter: blur(8px);
  transform: scale(0.95);
}
</style>