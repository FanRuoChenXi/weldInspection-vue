<template>
  <el-dialog
    title="更换头像"
    :visible="visible"
    width="440px"
    custom-class="dialog"
    :before-close="() => $emit('hide')">
    <avatar-cropper ref="cropper" @ok="onSubmit"></avatar-cropper>
  </el-dialog>
</template>

<script>
import avatarCropper from '@/components/AvatarCropper'
export default {
  components: {
    avatarCropper,
  },
  props: {
    visible: Boolean,
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    async onSubmit(blob) {
      const file = new File([blob], 'avatar.jpg', { type: blob.type })
      this.$refs.cropper.isLoading = true // 裁剪弹框组件的加载态
      // let formData = new FormData()
      // formData.append('avatar[]', file)
      // const [files, err] = await this.$post('modifyMyAvatar', formData)
      this.$refs.cropper.isLoading = false
      // if (err) return this.$msg(err)
      // this.$emit('update', files[0].url)
      this.$emit('hide') // 隐藏弹框
    },
  },
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.dialog {
  border-radius: 8px;
}
</style>
