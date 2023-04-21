<template>
  <!-- 用户中心页 /user -->
  <div>
    <Header />
    <div class="content">
      <TitleBar title="个人信息" />
      <div class="card flex-between">
        <el-descriptions title="基础信息" :column="4">
          <el-descriptions-item label="姓名">黄施能</el-descriptions-item>
          <el-descriptions-item label="工号">hsn000</el-descriptions-item>
          <el-descriptions-item label="性别">男</el-descriptions-item>
          <el-descriptions-item label="手机号">
            <span> 18268323892 </span>
            <el-button
              type="text"
              style="padding: 0 8px"
              @click="dialogName = 'phone'">
              <i class="el-icon-edit" />
            </el-button>
          </el-descriptions-item>
          <el-descriptions-item label="企业" :span="1">
            杰姆龙
          </el-descriptions-item>
          <el-descriptions-item label="岗位" :span="3">
            <el-tag type="info" size="mini" style="margin-right: 8px">
              研发运维
            </el-tag>
          </el-descriptions-item>
        </el-descriptions>
        <div class="avatar" @click="dialogName = 'avatar'">
          <div class="name">{{ 施能 }}</div>
        </div>
      </div>
    </div>
    <div class="padding16"> </div>
    <PhoneDialog :visible="dialogName == 'phone'" @hide="dialogName = null" />
    <AvatarDialog
      :visible="dialogName == 'avatar'"
      @hide="dialogName = null"
      @update="onAvatarChange" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import TitleBar from '@/components/TitleBar'
import PhoneDialog from './Components/PhoneDialog'
import AvatarDialog from './Components/AvatarDialog'
export default {
  components: {
    Header,
    TitleBar,
    PhoneDialog,
    AvatarDialog,
  },
  data() {
    return {
      dialogName: null,
      user: JSON.parse(localStorage.user),
    }
  },
  methods: {
    onAvatarChange(img) {
      this.user.avatar = img
      localStorage.user = JSON.stringify(this.user)
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
.card {
  text-align: left;
  margin: 18px 0;
  padding: 24px;
  border-radius: 6px;
  border: 1px solid #ebedf0;
}
.avatar {
  position: relative;
  cursor: pointer;
  border-radius: 6px;
  font-size: 40px;
  text-align: center;
  color: #dcdee0;
  background-color: #ebedf0;
  overflow: hidden;
  margin-top: 40px;
  min-width: 96px;
  max-width: 96px;
  height: 96px;
  line-height: 96px;
}
.avatar .name {
  line-height: 104px;
}
.avatar img {
  width: 96px;
  height: 96px;
  object-fit: cover;
}
.avatar::after {
  z-index: 1;
  position: absolute;
  left: 0;
  content: '更换头像';
  opacity: 0;
  background: #00000055;
  text-align: center;
  width: 96px;
  line-height: 96px;
  font-size: 12px;
  font-weight: 800;
  color: #fff;
  transition: all 0.3s;
}
.avatar:hover::after {
  opacity: 1;
}
</style>
