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
    <div class="content">
      <div v-for="group in index" :key="group.name">
        <div class="title flex">
          <img class="title-icon" src="@/assets/dashboard/title.webp" alt="" />
          <div class="N1 font18 bold">{{ group.name }}</div>
        </div>
        <div class="flex-wrap">
          <AppCard v-for="app in group.apps" :key="app.title" :app="app" />
        </div>
      </div>
    </div>
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
    const index = [
      {
        name: '焊缝检测',
        apps: [
          {
            id: 'weld',
            title: '焊缝检测',
            note: '焊缝检测和结果展示',
            url: '/weld',
          },
        ],
      },
      {
        name: '用户管理',
        apps: [
          {
            id: 'manage',
            title: '用户管理后台',
            note: '设置用户和岗位',
            url: '/manage',
          },
        ],
      },
    ]
    this.$nextTick(() => (this.index = index))
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
