<template>
  <el-card shadow="never">
    <div slot="header" class="clearfix">
      <span style="font-weight: 800">{{ title }}</span>
      <slot name="handle"></slot>
    </div>
    <div style="height: 100%">
      <slot name="content"></slot>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
  },
}
</script>
