<template>
  <div>
    <BaseCard title="集团设置">
      <div slot="content">
        <BaseForm
          ref="form"
          marginLeft="0"
          :rows="baseInfo"
          :isShowBtn="false"
          :record="record"
          @uploadSuccess="uploadSuccess" />
        <el-button type="primary">保存</el-button>
      </div>
    </BaseCard>
  </div>
</template>
<script>
import BaseCard from '@/components/BaseCard.vue'
import BaseForm from '@/components/BaseForm.vue'
export default {
  components: { BaseCard, BaseForm },
  data() {
    // 基础信息
    const baseInfo = [
      {
        label: '集团名称',
        key: 'fullName',
        type: 'input',
        span: 8,
      },
      {
        label: '集团简称',
        key: 'name',
        type: 'input',
        span: 8,
      },
      {
        label: '集团LOGO',
        key: 'logo',
        type: 'image',
        limit: 1,
        span: 8,
        height: '40px',
      },
      {
        label: '集团联系人',
        key: 'contactName',
        type: 'input',
        span: 8,
      },
      {
        label: '集团联系人电话',
        key: 'contactPhone',
        type: 'input',
        span: 8,
      },
    ]
    return {
      baseInfo,
    }
  },
}
</script>

<style></style>
