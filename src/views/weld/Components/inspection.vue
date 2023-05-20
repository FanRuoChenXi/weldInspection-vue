<template>
  <div>
    <BaseCard title="检测记录">
      <div slot="content">
        <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="createTime" label="日期"> </el-table-column>
          <el-table-column prop="createUserName" label="上传人">
          </el-table-column>
          <el-table-column prop="result" label="结果"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click="dialog = true" type="text" size="small">
                详情
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 表单 -->
        <el-drawer
          title="检测详情"
          :before-close="handleClose"
          :visible.sync="dialog"
          direction="rtl"
          custom-class="demo-drawer"
          ref="drawer">
          <div class="demo-drawer__content">
            <div style="margin-bottom: 20px">
              <span>原始图像</span>
              <el-upload>
                <img src="@/assets/inspection/7001.png" />
              </el-upload>
            </div>
            <el-form :model="form">
              <el-form-item label="上传人" :label-width="formLabelWidth">
                <el-input
                  v-model="form.name"
                  autocomplete="off"
                  disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="检测结果" :label-width="formLabelWidth">
                <el-input
                  v-model="form.result"
                  autocomplete="off"
                  disabled="true"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-drawer>
      </div>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import { GENDER } from '@/const'
export default {
  components: { BaseCard },
  data() {
    // 筛选框配置
    const filterRows = [
      { key: 'name', type: 'input', placeholder: '员工名称/员工工号' },
      {
        key: 'gender',
        type: 'select',
        options: GENDER,
        placeholder: '性别',
      },
      {
        key: 'phone',
        type: 'input',
        placeholder: '联系方式',
      },
    ]
    const tableData = [
      {
        date: '2023-04-22',
        name: '黄施能',
        result: '合格',
      },
    ]
    return {
      filterRows,
      tableData,
      dialog: false,
      form: {
        name: '黄施能',
        result: '合格',
      },
      formLabelWidth: '80px',
    }
  },
  async mounted() {
    const [res, err] = await this.$get('getRecordTaskList', {
      host: 'qcs',
    })
    if (err) return this.$toast(err)
    console.log(res.list)
    res['list'].forEach((e) => {
      switch (e.result) {
        case 50:
          e.result = '不合格'
          break
        case 40:
          e.result = '合格'
          break
        case 30:
          e.result = '良好'
          break
        case 20:
          e.result = '优秀'
          break
        case 10:
          e.result = '满分'
          break
      }
    })
    this.tableData = res.list
  },
}
</script>

<style scoped></style>
