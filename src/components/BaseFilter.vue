<template>
  <el-row :gutter="20" :style="{ height: height + 'px' }">
    <el-col
      v-for="row in rows"
      :key="row.key"
      :span="span"
      style="margin-bottom: 20px">
      <div></div>
      <!-- 输入框 -->
      <div v-if="row.type === 'input'">
        <el-input
          size="small"
          clearable
          :disabled="row.disabled || false"
          :placeholder="row.placeholder"
          v-model="form[row.key]" />
      </div>
      <!-- 日期选择器 区间-->
      <div v-if="row.type === 'date'" class="date_box" style="width: 100%">
        <el-date-picker
          style="width: 100%"
          class="full-width"
          size="small"
          :key="row.type"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          range-separator=""
          :start-placeholder="row.placeholder"
          v-model="form[row.key]"
          type="daterange"
          @change="(e) => $emit('datePickChange', { [row.key]: e })">
        </el-date-picker>
        <i class="el-icon-date data_icon"></i>
      </div>
      <!-- 日期选择器 单日 -->
      <div v-if="row.type === 'datePick'" class="date_box full-width">
        <el-date-picker
          value-format="yyyy-MM-dd"
          class="full-width"
          size="small"
          :key="row.type"
          v-model="form[row.key]"
          @change="(e) => $emit('dateChange', { [row.key]: e })"
          type="date"
          :placeholder="row.placeholder || '请选择日期'" />
        <i class="el-icon-date data_icon"></i>
      </div>
      <!-- 下拉选择框 -->
      <div v-if="row.type === 'select'">
        <el-select
          clearable
          size="small"
          filterable
          class="full-width"
          :multiple="row.multiple ? row.multiple : false"
          :placeholder="row.placeholder"
          @change="(v) => $emit('selectChange', { v, row })"
          v-model="form[row.key]">
          <el-option
            v-for="option in row.options"
            :key="option.value"
            :label="option.label"
            :value="option.value" />
        </el-select>
      </div>
    </el-col>
    <el-col :span="spanB" style="margin-bottom: 20px">
      <!-- 自定义筛选按钮 -->
      <slot name="button"></slot>
      <template v-if="isShowBtnAll">
        <el-button type="primary" size="small" @click="handleClickFilter"
          >筛 选</el-button
        >
        <slot name="addBtn" v-if="!isShowBtnAdd"></slot>
        <el-button v-if="isShowBtnAdd" size="small" @click="handleClickAdd">
          <i class="el-icon-plus"></i>
          {{ addBtnText }}
        </el-button>
      </template>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    rows: { type: Array, required: true }, //行配置
    record: { type: Object, default: () => {} }, //行配置
    addBtnText: { type: String, default: '添加' }, //添加按钮文本
    span: { type: Number, default: 6 }, // 左侧占位格数
    spanB: { type: Number, default: 6 }, // 按钮占位格数
    height: { type: String, default: '' }, // 行高
    isShowBtnAdd: { type: Boolean, default: true }, // 是否显示添加按钮
    isShowBtnAll: { type: Boolean, default: true }, // 是否显示全部按钮
  },
  data() {
    return {
      form: {},
    }
  },
  watch: {
    record: {
      handler(newValue) {
        this.form = Object.assign({}, newValue) // 点击不同记录时record会变，需要监听计算
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    handleClickFilter() {
      this.$emit('filter', this.form)
    },
    handleClickAdd() {
      this.$emit('add')
    },
  },
}
</script>

<style lang="scss" scoped>
// 穿刺写法
::v-deep .el-range__icon {
  display: none;
}

::v-deep .el-input--prefix .el-input__inner {
  padding-left: 8px;
}
.date_box {
  position: relative;
  width: fit-content;
  // ::v-deep .el-input__icon {
  //   display: none;
  // }
  ::v-deep .el-input__icon {
    margin-right: -14px;
  }
  .data_icon {
    position: absolute;
    top: 50%;
    right: 11px;
    z-index: 9;
    color: #c0c4cc;
    font-size: 14px;
    transform: translateY(-50%);
  }
  ::v-deep .el-range__close-icon {
    position: absolute;
    right: 34px;
    top: 54%;
    transform: translateY(-50%);
  }
  ::v-deep .el-range-editor--small .el-range-input {
    text-align: left;
    margin-left: 2px;
  }
}
</style>
