<template>
  <router-link to="/" class="btn btn-ghost normal-case text-xl font-bold">
    Dongyue的插件市场
  </router-link>
</template>

<script setup>
// Logo组件不需要任何props或逻辑
</script>

<style scoped>
/* Logo 动画 */
.btn-ghost {
  transition: all 0.3s ease;
}

.btn-ghost:hover {
  transform: scale(1.05);
}
</style>