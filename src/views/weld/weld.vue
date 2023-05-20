<template>
  <div id="app">
    <el-container style="height: 100%; margin: 0">
      <el-header style="height: 48px">
        <BaseHeader />
      </el-header>
      <el-container style="height: calc(100% - 48px)">
        <el-aside width="220px">
          <SideBar />
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
import BaseHeader from '@/components/BaseHeader.vue'
import SideBar from '@/components/SideBar.vue'
import cookie from 'js-cookie'
export default {
  components: { BaseHeader, SideBar },
  mounted() {
    cookie.set(
      'TOKEN',
      '1684606646KWWfG1XeUUrU1F9037XsYVWJR8BNz0CLeN370PGCq3g1NPhSjBiav3C4CeyAC'
    )
  },
}
</script>

<style scoped>
.el-header {
  border-bottom: 1px solid #ddd;
}
.el-main {
  padding: 8px !important;
  background: #fff;
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
