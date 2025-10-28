<template>
  <div class="dropdown">
    <label tabindex="0" class="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    </label>
    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52" :class="isHome ? 'bg-base-100/95 backdrop-blur' : 'bg-base-200'">
      <li><router-link to="/" class="text-base">首页</router-link></li>
      <li><router-link to="/featured" class="text-base">推荐插件</router-link></li>
      <li><router-link to="/plugins" class="text-base">插件展示</router-link></li>
      <li><router-link to="/download" class="text-base">下载</router-link></li>
      <li><router-link to="/customize" class="text-base">定制</router-link></li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  isHome: Boolean
})
</script>

<style scoped>
/* 移动端菜单样式已在父组件中定义 */
</style>