<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  -ms-overflow-style: none; /* IE 10+ */
  scrollbar-width: none; /* Firefox */
}
/* 禁止用户选中文本 */
* {
  -webkit-user-select: none; /* webkit浏览器 */
  -khtml-user-select: none; /* 早期浏览器 */
  -moz-user-select: none; /* 火狐 */
  -ms-user-select: none; /* IE10 */
  user-select: none; /* 禁止用户选中文本 */
}
/* 允许用户输入文本 */
input,
textarea {
  -webkit-user-select: text; /* webkit浏览器 */
  -khtml-user-select: text; /* 早期浏览器 */
  -moz-user-select: text; /* 火狐 */
  -ms-user-select: text; /* IE10 */
  user-select: text; /* 允许用户输入文本 */
}
/* 隐藏滚动条 */
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
