<template>
  <a :href="href" target="_blank" class="social-icon" :title="title">
    <slot />
  </a>
</template>

<script setup>
defineProps({
  href: String,
  title: String
})
</script>

<style scoped>
/* 社交媒体图标 */
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--fallback-b3,oklch(var(--b3)));
  transition: all 0.3s ease;
  opacity: 0.7;
}

.social-icon:hover {
  opacity: 1;
  background: var(--fallback-p,oklch(var(--p)));
  color: var(--fallback-pc,oklch(var(--pc)));
  transform: translateY(-5px) rotate(360deg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>