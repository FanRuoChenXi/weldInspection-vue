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
        <el-button type="primary" @click="centerDialogVisible = true"
          >开始检测</el-button
        >
        <!-- 弹框 -->
        <el-dialog
          title="检测结果"
          :visible.sync="centerDialogVisible"
          width="30%"
          center>
          <div style="margin-bottom: 20px">
            <el-upload>
              <img src="@/assets/inspection/7002.png" />
            </el-upload>
          </div>
          <div class="flex">
            <span style="width: 50px; line-height: 40px">结果</span>
            <el-input v-model="input" readonly> </el-input>
          </div>
        </el-dialog>
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
      centerDialogVisible: false,
      input: '不合格',
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
