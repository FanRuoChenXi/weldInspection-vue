<template>
  <div id="app">
    <el-container style="height: 100%; margin: 0">
      <el-header style="height: 48px">
        <TheHeading />
      </el-header>
      <el-container style="height: calc(100% - 48px)">
        <el-aside width="220px">
          <TheSidebar />
        </el-aside>
        <el-main>
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { TheSidebar, TheHeading } from '@/components'
export default {
  components: {
    TheSidebar,
    TheHeading,
  },
  mounted() {
    // let user = JSON.parse(sessionStorage.getItem('user'))
    // let userName = user?.name ? user?.name : new Date().getTime()
    // this.$aegis.setConfig({ uin: userName ?? new Date().getTime() })
  },
}
</script>

<style scoped>
.el-header {
  border-bottom: 1px solid #ddd;
}
.el-main {
  padding: 8px !important;
  background: #f4f4f7;
  height: 100%;
}

html,
body,
#app {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-searif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #303133;
  min-width: 1000px;
}
</style>
