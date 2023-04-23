<template>
  <el-form
    :style="{ paddingRight: paddingRight, marginLeft: marginLeft }"
    :label-width="labelWidth"
    :label-position="labelPosition"
    :model="form"
    :rules="rules"
    size="small"
    ref="form">
    <el-row :gutter="20">
      <el-col
        v-for="row in rows"
        :span="row.span ? row.span : 24"
        :key="row.key">
        <el-form-item
          style="margin-bottom: 15px !important; width: 100% !important"
          :prop="row.key"
          :style="row.style || ''"
          :required="row.required"
          v-if="row.noShow ? !row.noShow : true">
          <!-- 自定义标题显示 / 右上方连接 / icon / hover:tip -->
          <span slot="label">
            <template v-if="row.icon">
              {{ row.label }}
              <el-tooltip
                class="item"
                effect="dark"
                :content="row.tip"
                placement="top-start">
                <i :class="row.icon" />
              </el-tooltip>
            </template>
            <template v-else>
              <span>{{ row.label }}</span>
            </template>
            <!--  label 右上方链接 -->
            <div style="float: right" v-if="row.link">
              <el-button
                type="text"
                style="padding: 3px 0; font-size: 13px"
                @click="$emit('linkClick', row.key)"
                >{{ row.link }}</el-button
              >
            </div>
          </span>
          <!-- 文本框 { name, key, type, note } -->
          <div v-if="row.type === 'input'" :style="{ width: row.width }">
            <el-input
              :id="row.key"
              clearable
              v-model="form[row.key]"
              maxlength="250"
              :disabled="row.disabled"
              :placeholder="row.note || '请输入文本'"
              @change="(e) => $emit('inputChange', { key: row.key, e })">
              <template slot="append" v-if="row.append">{{
                row.append
              }}</template>
            </el-input>
            <span v-html="row.remarks"></span>
          </div>
          <!-- 文本域 { name, key, type, note } -->
          <div
            v-else-if="row.type === 'textarea'"
            :style="{ width: row.width }">
            <el-input
              maxlength="1000"
              type="textarea"
              :placeholder="row.note || '请输入文本'"
              :autosize="{ minRows: 3, maxRows: 10 }"
              :disabled="row.disabled"
              v-model="form[row.key]" />
          </div>
          <!-- 选择器 { name, key, type, note, multiple, options } -->
          <div v-else-if="row.type === 'select'" :style="{ width: row.width }">
            <el-select
              filterable
              clearable
              class="full-width"
              v-model="form[row.key]"
              :allow-create="row.allowCreate"
              :default-first-option="row.allowCreate"
              :ref="row.key"
              :disabled="row.disabled"
              :multiple="row.multiple"
              :placeholder="row.note || '请选择或搜索'"
              @change="(e) => $emit('selectChange', { e, row })">
              <el-option
                v-for="option in row.options"
                :key="option.value"
                :label="option.label"
                :value="option.value" />
            </el-select>
          </div>
          <!-- 级联选择器 { name, key, type, note, multiple, options } -->
          <div v-else-if="row.type === 'cascader'" style="width: 100%">
            <el-cascader
              style="width: 100%"
              :props="row.props"
              :options="row.options"
              v-model="form[row.key]"
              clearable></el-cascader>
          </div>
          <!-- 时间选择器单日 { name, key, type, note, format }  单 -->
          <div v-else-if="row.type === 'time'" class="date_box full-width">
            <el-time-picker
              @change="(e) => (form[row.key] = e)"
              class="full-width"
              v-model="form[row.key]"
              :disabled="row.disabled"
              :format="row.format || 'HH:mm'"
              :picker-options="{ format: row.format || 'HH:mm' }"
              :placeholder="row.note || '请选择时间'" />
            <i class="el-icon-time data_icon"></i>
          </div>
          <!-- 时间选择器区间 { name, key, type, note, format }  双 -->
          <div v-else-if="row.type === 'times'" class="date_box full-width">
            <el-time-picker
              is-range
              class="full-width"
              v-model="form[row.key]"
              :format="row.format || 'HH:mm'"
              range-separator="-" />
            <i class="el-icon-time data_icon"></i>
          </div>
          <!-- 时间选择器下拉 { name, key, type, note, format }  双 -->
          <div
            v-else-if="row.type === 'timeSelect'"
            class="date_box full-width">
            <el-time-select
              :disabled="row.disabled"
              class="full-width"
              v-model="form[row.key]"
              :picker-options="row.options" />
            <i class="el-icon-time data_icon"></i>
          </div>
          <!-- 开关 { name, key, type, note, value } -->
          <div v-else-if="row.type === 'switch'">
            <el-switch
              v-model="form[row.key]"
              :active-value="row.value ? row.value[0] : 1"
              :inactive-value="row.value ? row.value[1] : 2"
              @change="(v) => $emit('switchChange', row.key, v)" />
            <span v-if="row.note" class="el-upload__tip padding8 placeholder">
              {{ form[row.key] == row.value[0] ? row.note[0] : row.note[1] }}
            </span>
          </div>
          <!-- 复选框组 -->
          <div v-else-if="row.type === 'checkBox'">
            <div v-for="item in row.options" :key="item.key">
              <el-checkbox
                :label="item.label"
                :true-label="item.truelabel"
                :false-label="item.falselabel"
                v-model="form[item.key]"></el-checkbox>
            </div>
          </div>
          <!-- 适用范围 -->
          <div v-if="row.type === 'selectGruop'">
            <!-- 适用范围左·类型选择器 -->
            <el-select
              clearable
              style="width: 120px; margin-right: 4px"
              v-model="form[row.key1]">
              <el-option
                v-for="item in row.options1"
                :key="item.value"
                :label="item.label"
                :value="item.value" />
            </el-select>
            <!-- 适用范围右·门店选择器 -->
            <el-input
              v-if="form[row.key1] === row.options1[0].value"
              placeholder="全部门店均适用"
              disabled
              style="width: 388px" />
            <el-select
              v-if="form[row.key1] === row.options1[1].value"
              placeholder="选择或搜索门店"
              :multiple="row.multiple"
              clearable
              filterable
              collapse-tags
              v-model="form[row.key2]"
              style="width: 388px">
              <el-option
                v-for="option in row.options2"
                :key="option.value"
                :label="option.label"
                :value="option.value" />
            </el-select>
            <div v-html="row.remarks"></div>
          </div>
          <!-- 数字输入框 { name, key, type, note, append } -->
          <div v-else-if="row.type === 'number'">
            <el-input
              type="number"
              v-model.number="form[row.key]"
              maxlength="20"
              :placeholder="row.note || '请输入数字'">
              <span v-if="row.prepend" slot="prepend">{{ row.prepend }}</span>
              <span v-if="row.prefix" slot="prefix" style="margin-left: 8px">
                {{ row.prefix }}
              </span>
              <span v-if="row.append" slot="append">{{ row.append }}</span>
            </el-input>
            <span class="remarks" v-if="row.remarks">{{ row.remarks }}</span>
          </div>
          <!-- 图片墙 -->
          <div v-else-if="row.type === 'image'" :style="{ height: row.height }">
            <el-upload
              name="file[]"
              action=""
              accept=".jpg,.png,.bmp,.webp,.gif"
              :ref="row.key"
              :limit="row.limit || 12"
              :before-upload="beforeUpload"
              :http-request="httpRequest"
              :on-exceed="(file) => $msg('文件数量超出限制', 'error')"
              :on-error="(err) => $msg(err, 'error')"
              :on-success="
                (response, file, fileList) =>
                  uploadSuccess(response, file, fileList, row.key)
              "
              :file-list="form[row.key]"
              list-type="picture-card"
              class="picture-card">
              <i class="el-icon-plus" /><!-- 按加号按钮上传 -->
              <div
                slot="file"
                style="height: 100%"
                slot-scope="{ file, fileList }">
                <img
                  style="width: 100% !important; height: 100% !important"
                  :src="file.thumb || file.url"
                  alt="" />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="previewImages(file, row.key)">
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file, fileList, row.key)">
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
          </div>
          <!-- 上传文件 -->
          <div v-else-if="row.type === 'upload'">
            <el-upload
              name="file[]"
              :ref="row.key"
              :before-upload="beforeUpload"
              :limit="row.limit || 1"
              :accept="row.accept"
              :auto-upload="true"
              :on-error="(err) => $msg(err, 'error')"
              :action="$host + 'uploadCos'"
              :on-preview="(file) => previewVideo(file, row.key)"
              :on-exceed="(file) => $msg('文件数量超出限制', 'error')"
              :on-success="
                (response, file, fileList) =>
                  uploadVideoSuccess(response, file, fileList, row.key)
              "
              :on-remove="
                (file, fileList) => handleRemove(file, fileList, row.key)
              "
              :file-list="form[row.key] || []">
              <el-button size="small" style="width: 102px">选择文件</el-button>
              <span slot="tip" class="el-upload__tip padding8 info-text-color">
                {{ row.tip }}
              </span>
            </el-upload>
          </div>
          <!-- 日期选择器 单日 -->
          <div v-else-if="row.type === 'datePick'" class="date_box full-width">
            <el-date-picker
              class="full-width"
              size="small"
              :disabled="row.disabled"
              :key="row.key"
              v-model="form[row.key]"
              :format="row.format ? row.format : 'yyyy-MM-dd'"
              :picker-options="row.pickerOptions ? row.pickerOptions : {}"
              @change="
                (e) => {
                  $emit('datePickChage', { e, row })
                }
              "
              type="date"
              placeholder="选择日期" />
            <i class="el-icon-date data_icon"></i>
          </div>
          <!-- 日期选择器 区间-->
          <div v-else-if="row.type === 'date'" class="date_box full-width">
            <el-date-picker
              style="width: 100%"
              size="small"
              :disabled="row.disabled"
              range-separator="至"
              :format="row.format ? row.format : 'yyyy-MM-dd'"
              :start-placeholder="row.placeholder"
              :picker-options="
                row.pickerOptions ? row.pickerOptions : pickerOptions
              "
              v-model="form[row.key]"
              type="daterange"
              @change="
                (e) => {
                  $emit('dateChage', { e, row })
                }
              ">
            </el-date-picker>
            <i class="el-icon-date data_icon"></i>
          </div>
          <!-- 时间选择器 单日 -->
          <div
            v-else-if="row.type === 'dateTimePick'"
            class="date_box full-width">
            <el-date-picker
              class="full-width"
              size="small"
              :disabled="row.disabled"
              :key="row.key"
              v-model="form[row.key]"
              value-format="yyyy-MM-dd HH:mm:ss"
              @change="(e) => (form[row.key] = e)"
              type="datetime"
              placeholder="选择日期" />
            <i class="el-icon-date data_icon"></i>
          </div>
          <!-- 时间选择器 区间-->
          <div v-else-if="row.type === 'dateTime'" class="date_box">
            <el-date-picker
              style="width: 100%"
              size="small"
              :disabled="row.disabled"
              value-format="yyyy-MM-dd hh:mm:ss"
              range-separator="至"
              :start-placeholder="row.placeholder"
              v-model="form[row.key]"
              type="datetimerange"
              @change="
                (e) => {
                  $emit('dateChage', { e, row })
                }
              ">
            </el-date-picker>
            <i class="el-icon-date data_icon"></i>
          </div>
          <!-- 自定义插槽 内部-->
          <div v-else-if="row.type === 'slot'">
            <template>
              <slot :name="row.key" v-bind="row" />
            </template>
          </div>
          <!-- 文字提示插槽 -->
          <slot v-bind="row" />
          <div
            class="remarks"
            v-if="row.type === 'remarks'"
            v-html="row.remarks" />
        </el-form-item>
      </el-col>
    </el-row>
    <!-- 底部操作栏 -->
    <el-form-item size="medium" style="margin-top: 10px">
      <div v-if="isShowBtn">
        <el-button @click="beforeSubmit" type="primary" :loading="isLoading">{{
          confirmText
        }}</el-button>
        <el-button @click="$emit('cancel')" v-if="isShowCancelBtn"
          >取消</el-button
        >
        <!-- 自定义取消按钮 -->
        <slot name="cancel" v-else></slot>
      </div>
      <!-- 自定义底部按钮 -->
      <div v-else>
        <slot name="footer"></slot>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    rules: { type: Object, default: () => ({}) }, // 各行校验规则
    record: Object, // 当前记录，用于显示原来有的值
    rows: Array, // 各行配置
    labelWidth: { type: String, default: '110px' },
    labelPosition: { type: String, default: 'top' }, // 表单对齐方式
    paddingRight: { type: String, default: '20px' }, // 内边距
    marginLeft: { type: String, default: '16px' }, // 左外边距
    isShowBtn: { type: Boolean, default: true }, // 显示底部按钮
    isShowCancelBtn: { type: Boolean, default: true }, // 是否显示取消按钮
    confirmText: { type: String, default: '保存' }, // 确认按钮文字
  },
  watch: {
    record(newValue) {
      this.form = Object.assign({}, newValue) // 点击不同记录时record会变，需要监听计算
    },
  },
  data() {
    return {
      form: {}, // 表单内容，若有传入记录则默认与其相同
      isLoading: false,
      pickerOptions: {
        disabledDate(time) {
          //此条为设置禁止用户选择今天之前的日期，包含今天。
          return time.getTime() < Date.now() - 24 * 60 * 60 * 1000
        },
      },
    }
  },
  created() {
    this.form = Object.assign({}, this.record) // 将传入的记录渲染到表单上
  },
  methods: {
    // 预览图片（file当前图片，rowKey当前表单项）// TODO 还未考虑原先有图片的情况
    // previewImages (file, rowKey) {
    //   const uploadFiles = this.$refs[rowKey][0].uploadFiles; // 因为使用了列表渲染，所以 ref 个数组，因此取首个元素
    //   const images = uploadFiles.map((e) => e.url); // 取出整个图片列表
    //   const initialViewIndex = uploadFiles.findIndex((e) => e === file); // 定位到当前图片
    //   vViewer({ options: { initialViewIndex }, images }); // 用法详见 https://github.com/mirari/v-viewer
    // },
    // 提交前验证
    beforeSubmit() {
      this.$refs.form.validate((valid) => {
        if (!valid) return this.$msg('表单还未填写完成', 'warning')
        this.$emit('submit', this.form)
      })
    },
    httpRequest(val) {
      val.onSuccess()
    },
    // 图片/上传成功触发
    uploadSuccess(response, file, fileList, key) {
      this.form[key] = fileList
      this.isLoading = false
      this.$emit('uploadSuccess', this.form)
    },
    // 视频上传成功触发
    uploadVideoSuccess(response, file, fileList, key) {
      this.form[key] = response.data
      this.form[key][0].name = response.data[0].name
      this.isLoading = false
    },
    // 上传之前触发
    beforeUpload(file) {
      this.isLoading = true // 禁止按钮点击
    },
    // 预览视频
    previewVideo(file, key) {
      window.open(file.url)
    },
    // 图片/视频 移除触发
    handleRemove(file, fileList, key) {
      const urlArr = this.form[key].map((i) => i.url)
      const index = urlArr.indexOf(file.url)
      this.form[key].splice(index, 1)
    },
  },
}
</script>

<style lang="sass" scoped>
.selectTip
  font-size: 12px
  color: #909399

::v-deep.el-input--small .el-input__icon
  display: none

::v-deep.el-input--prefix .el-input__inner
  padding-left: 15px !important

/* 上传图片时显示的上传框和缩略图，每行排四个 */
.picture-card
  .el-upload--picture-card,
  .el-upload-list__item,
  .el-upload-list img
    margin-bottom: 0 !important
    width: 100px !important
    height: 100px !important

  .el-upload--picture-card
    line-height: 110px // 只下移加号，不影响勾号等图标

  .el-upload-list__item:nth-of-type(4n)
    margin-right: 0 !important

.number_remarks
  color: #909399
  margin-left: 12px

.remarks
  margin-top: 8px
  margin-left: -60px
  font-size: 12px
  line-height: 16px
  color: #909399

.el-form--label-top .el-form-item__label
  width: 100%
  padding: 0 !important

::v-deep .el-range__icon
  display: none

::v-deep .el-input--prefix .el-input__inner
  padding-left: 8px

.date_box
  position: relative
  width: fit-content
  ::v-deep .el-input__icon
    display: none

  .data_icon
    position: absolute
    top: 50%
    right: 11px
    z-index: 9
    color: #c0c4cc
    font-size: 14px
    transform: translateY(-50%)

  ::v-deep .el-range__close-icon
    position: absolute
    right: 34px
    top: 54%
    transform: translateY(-50%)

  ::v-deep .el-range-editor--small .el-range-input
    text-align: left
    margin-left: 2px
</style>
