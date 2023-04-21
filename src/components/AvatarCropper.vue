<template>
  <div>
    <div class="avatar-container">
      <!-- 待上传图片 -->
      <div v-show="!options.img">
        <el-upload
          class="upload"
          ref="upload"
          action=""
          :on-change="upload"
          accept="image/png, image/jpeg, image/jpg"
          :show-file-list="false"
          :auto-upload="false">
          <el-button slot="trigger" size="large" type="primary" ref="uploadBtn">
            选择图片
          </el-button>
        </el-upload>
        <div class="N3">支持jpg、png格式的图片，大小不超过5M</div>
      </div>
      <!-- 已上传图片 -->
      <div v-show="options.img" class="avatar-crop">
        <vueCropper
          class="crop-box"
          ref="cropper"
          :img="options.img"
          :autoCrop="options.autoCrop"
          :fixedBox="options.fixedBox"
          :canMoveBox="options.canMoveBox"
          :autoCropWidth="options.autoCropWidth"
          :autoCropHeight="options.autoCropHeight"
          :centerBox="options.centerBox"
          :fixed="options.fixed"
          :fixedNumber="options.fixedNumber"
          :canMove="options.canMove"
          :canScale="options.canScale"></vueCropper>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <div class="reupload" @click="reupload">
        <span v-show="options.img">重新选图</span>
      </div>
      <div>
        <el-button
          type="primary"
          :disabled="!options.img"
          :loading="isLoading"
          @click="getCrop">
          <i class="el-icon-upload el-icon--left" /> 上 传
        </el-button>
      </div>
    </span>
  </div>
  <!-- </el-dialog> -->
</template>

<script>
import { VueCropper } from 'vue-cropper'
export default {
  components: {
    VueCropper,
  },
  name: 'avatarCropper',
  data() {
    return {
      isLoading: false,
      // vueCropper组件 裁剪配置信息
      options: {
        img: '', // 原图文件
        autoCrop: true, // 默认生成截图框
        fixedBox: false, // 固定截图框大小
        canMoveBox: true, // 截图框可以拖动
        autoCropWidth: 200, // 截图框宽度
        autoCropHeight: 200, // 截图框高度
        fixed: true, // 截图框宽高固定比例
        fixedNumber: [1, 1], // 截图框的宽高比例
        centerBox: true, // 截图框被限制在图片里面
        canMove: false, // 上传图片不允许拖动
        canScale: false, // 上传图片不允许滚轮缩放
      },
    }
  },

  methods: {
    // 读取原图
    upload(file) {
      const isIMAGE =
        file.raw.type === 'image/jpeg' || file.raw.type === 'image/png'
      const isLt5M = file.raw.size / 1024 / 1024 < 5
      if (!isIMAGE) {
        this.$msg('请选择 jpg、png 格式的图片')
        return false
      }
      if (!isLt5M) {
        this.$msg('图片大小不能超过 5MB')
        return false
      }
      let reader = new FileReader()
      reader.readAsDataURL(file.raw)
      reader.onload = (e) => {
        this.options.img = e.target.result // base64
      }
    },
    // 获取截图信息
    getCrop() {
      if (this.isLoading) return false
      // 获取截图的 base64 数据
      // this.$refs.cropper.getCropData((data) => {
      //   this.$emit('closeAvatarDialog', data)
      //   this.closeDialog()
      // });
      // 获取截图的 blob 数据
      this.$refs.cropper.getCropBlob((data) => {
        this.$emit('ok', data)
      })
    },
    // 重新上传
    reupload() {
      this.$refs.uploadBtn.$el.click()
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  .reupload {
    color: #409eff;
    cursor: pointer;
  }
}
.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 240px;
  margin: 0 0 24px;
  background-color: #f0f2f5;
  border-radius: 4px;
  .upload {
    text-align: center;
    margin-bottom: 24px;
  }
  .avatar-crop {
    width: 400px;
    height: 240px;
    position: relative;
    .crop-box {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      overflow: hidden;
    }
  }
}
</style>
