<template>
  <button @click="scrollToTop" class="btn btn-sm btn-circle btn-ghost back-to-top" title="返回顶部">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* 返回顶部按钮 */
.back-to-top {
  transition: all 0.3s ease;
}

.back-to-top:hover {
  transform: translateY(-3px);
  background: var(--fallback-p,oklch(var(--p)));
  color: var(--fallback-pc,oklch(var(--pc)));
}
</style>