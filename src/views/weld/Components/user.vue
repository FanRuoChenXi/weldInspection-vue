<template>
  <div>
    <BaseCard title="用户管理">
      <div slot="content">
        <!-- 筛选 -->
        <BaseFilter :rows="filterRows" :isShowBtnAdd="false" @filter="update">
          <div slot="button" style="display: inline-block; margin-right: 8px">
            <el-dropdown size="small" split-button @click="dialog = true">
              新增用户
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
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="code" label="工号"> </el-table-column>
          <el-table-column prop="phone" label="联系方式"> </el-table-column>
          <el-table-column prop="gender" label="性别"> </el-table-column>
        </el-table>
        <!-- 表单 -->
        <el-drawer
          title="新增用户"
          :before-close="handleClose"
          :visible.sync="dialog"
          direction="rtl"
          custom-class="demo-drawer"
          ref="drawer">
          <div class="demo-drawer__content">
            <el-form :model="form">
              <el-form-item label="用户名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="用户工号" :label-width="formLabelWidth">
                <el-input v-model="form.code" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="用户密码" :label-width="formLabelWidth">
                <el-input v-model="form.password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="联系方式" :label-width="formLabelWidth">
                <el-input v-model="form.phone" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="性别" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择性别">
                  <el-option label="男" value="1"></el-option>
                  <el-option label="女" value="2"></el-option>
                </el-select>
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
        name: '黄施能',
        code: 'hsn',
        phone: '18268323892',
        gender: '男',
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
}
</script>

<style></style>
