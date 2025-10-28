<template>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 gap-2">
      <li><router-link to="/" class="text-base font-medium">首页</router-link></li>
      <li><router-link to="/featured" class="text-base font-medium">推荐插件</router-link></li>
      <li><router-link to="/plugins" class="text-base font-medium">插件展示</router-link></li>
      <li><router-link to="/download" class="text-base font-medium">下载</router-link></li>
      <li><router-link to="/customize" class="text-base font-medium">定制</router-link></li>
    </ul>
  </div>
</template>

<script setup>
// 桌面端导航菜单组件不需要任何props或逻辑
</script>

<style scoped>
/* 导航链接悬停动画 */
.menu li a {
  position: relative;
  transition: all 0.3s ease;
}

.menu li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--fallback-p,oklch(var(--p)));
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.menu li a:hover::after {
  width: 80%;
}
</style>