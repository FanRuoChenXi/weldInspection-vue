<!--
 * @Author: 刘康宁 869161591@qq.com
 * @Date: 2022-07-21 10:10:23
 * @LastEditors: 刘康宁 869161591@qq.com
 * @LastEditTime: 2022-09-24 16:49:09
 * @FilePath: /oneid/src/views/home/dashboard.vue
 * @Description: 工作台
-->
<template>
  <div>
    <Header />
    <!-- <div class="content">
      <div v-for="group in index" :key="group.name">
        <div class="title flex">
          <img class="title-icon" src="@/assets/dashboard/title.webp" alt="" />
          <div class="N1 font18 bold">{{ group.name }}</div>
        </div>
        <div class="flex-wrap">
          <AppCard v-for="app in group.apps" :key="app.title" :app="app" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Header from '@/components/Header'
import AppCard from './Components/AppCard'

export default {
  components: {
    Header,
    AppCard,
  },
  data() {
    return {
      index: [],
    }
  },
  mounted() {
    // const index = [{
    //   name: '门店运营', apps: [
    //     {
    //       id: "pms", title: "门店 PMS 网页版", note: "更新频率高, 暂不支持对接门锁等硬件", url: {
    //         release: "https://pms.geemro.com/pms/#/oneid",
    //         trial: "https://trial.pms.chamjoy.com/pms/#/oneid",
    //         develop: "https://dev.pms.chamjoy.com/pms/#/oneid",
    //         local: "https://192.168.2.98:8080/pms/#/oneid",
    //       }
    //     },
    //     { id: "pms", title: "门店 PMS 桌面应用版", note: "可对接门锁发卡器等硬件, 需要前往钉钉云盘下载并安装" },
    //   ]
    // }, {
    //   name: '集团管理', apps: [
    //     {
    //       id: "manage", title: "PMS 管理后台", note: "设置门店 PMS 系统运营规则", url: {
    //         release: "https://pms.geemro.com/manage/#/oneid",
    //         trial: "https://trial.pms.chamjoy.com/manage/#/oneid",
    //         develop: "http://dev.pms.chamjoy.com/manage/#/oneid",
    //         local: "http://192.168.2.98:8081/manage/#/oneid",
    //       }
    //     }, {
    //       id: "onedata", title: "报表中心", note: "管理各分系统所有报表", url: {
    //         release: "https://pms.geemro.com/onedata/#/oneid",
    //         trial: "https://trial.pms.chamjoy.com/onedata/#/oneid",
    //         develop: "https://dev.pms.chamjoy.com/onedata/#/oneid",
    //         local: "http://192.168.2.98:8082/onedata/#/oneid",
    //       }
    //     },
    //   ]
    // }, {
    //   name: '其它应用', apps: [
    //     {
    //       id: "qcs", title: "品质管理系统", note: "门店品质管控平台", noLogin: true, url: {
    //         release: "https://work.chamjoy.com/qcs/",
    //         trail: "https://work.chamjoy.com/qcs/",
    //         develop: "https://work.chamjoy.com/qcs/",
    //       }
    //     },
    //   ]
    //   // { id: "cms", title: "中央管理系统" , note: "集团中央管理系统，组织架构和门店运营的设置中心", url: "/cms/#/oneid" },
    // }]
    // this.$nextTick(() => this.index = index)
  },
}
</script>

<style scoped>
.content {
  margin: 0 auto;
  width: 1200px;
}
.title {
  padding: 24px 16px;
}
.title-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
</style>
