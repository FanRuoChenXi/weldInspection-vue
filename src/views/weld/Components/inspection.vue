<template>
  <div>
    <BaseCard title="检测记录">
      <div slot="content">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期"> </el-table-column>
          <el-table-column prop="name" label="上传人"> </el-table-column>
          <el-table-column prop="result" label="结果"> </el-table-column>
        </el-table>
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
    }
  },
}
</script>

<style lang=""></style>
