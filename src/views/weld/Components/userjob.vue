<template>
  <div>
    <BaseCard title="岗位管理">
      <div slot="content">
        <!-- 筛选 -->
        <BaseFilter :rows="filterRows" :isShowBtnAdd="false" @filter="update">
          <div slot="button" style="display: inline-block; margin-right: 8px">
            <el-dropdown size="small" split-button @click="dialog = true">
              新增岗位
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <BaseUploadExcel
                    btnText="导入员工"
                    :on-success="handleSuccess"
                    :before-upload="beforeUpload"
                    :header="EFIELD" />
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </BaseFilter>
        <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="名称"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click="dialog2 = true" type="text" size="small">
                设置权限
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 表单 -->
        <el-drawer
          title="新增岗位"
          :before-close="handleClose"
          :visible.sync="dialog"
          direction="rtl"
          custom-class="demo-drawer"
          ref="drawer">
          <div class="demo-drawer__content">
            <el-form :model="form">
              <el-form-item label="岗位名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div class="demo-drawer__footer">
              <el-button @click="cancelForm">确定</el-button>
            </div>
          </div>
        </el-drawer>
      </div>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import BaseFilter from '@/components/BaseFilter.vue'
import { GENDER } from '@/const'
export default {
  components: { BaseCard, BaseFilter },
  data() {
    // 筛选框配置
    const filterRows = [{ key: 'name', type: 'input', placeholder: '岗位名称' }]
    const tableData = [
      {
        name: '测试岗位',
      },
    ]
    return {
      filterRows,
      tableData,
      dialog: false,
      form: {
        name: '',
        code: '',
        password: '',
        gender: '',
        phone: '',
      },
      formLabelWidth: '80px',
    }
  },
  methods: {
    // 刷新表格
    update(params) {},
  },
  async mounted() {
    const [res, err] = await this.$get('getUserJobList')
    if (err) return this.$toast(err)
    console.log(res.list)
    this.tableData = res.list
  },
}
</script>

<style></style>
