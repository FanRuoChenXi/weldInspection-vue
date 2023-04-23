<template>
  <div>
    <BaseCard title="图片检测">
      <div slot="content">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :limit="1"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
        <el-button type="primary" @click="startInspection">开始检测</el-button>
      </div>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
export default {
  components: { BaseCard },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      dialogImage: false,
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    startInspection() {
      this.dialogImage = true
    },
  },
}
</script>

<style scoped>
.el-button {
  margin-top: 20px;
}
</style>
