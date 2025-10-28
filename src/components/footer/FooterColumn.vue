<template>
  <div class="footer-section">
    <h3 class="footer-section-title font-bold text-lg mb-4">{{ title }}</h3>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style scoped>
/* 分栏标题 */
.footer-section-title {
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--fallback-p,oklch(var(--p)));
  transition: width 0.3s ease;
}

.footer-section:hover .footer-section-title::after {
  width: 60px;
}
</style>