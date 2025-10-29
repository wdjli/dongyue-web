<template>
  <router-link to="/" class="btn btn-ghost normal-case text-xl font-bold glass-logo">
    Dongyue的插件市场
  </router-link>
</template>

<script setup>
// Logo组件不需要任何props或逻辑
</script>

<style scoped>
/* Logo 毛玻璃效果 */
.glass-logo {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

[data-theme="dark"] .glass-logo {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-logo:hover {
  transform: scale(1.05);
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .glass-logo:hover {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>