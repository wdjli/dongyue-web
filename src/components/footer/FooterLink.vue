<template>
  <a v-if="href" :href="href" class="footer-link" target="_blank">
    <slot />
  </a>
  <router-link v-else-if="to" :to="to" class="footer-link">
    <slot />
  </router-link>
  <span v-else class="footer-link">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  href: String,
  to: String
})
</script>

<style scoped>
/* 链接样式 */
.footer-link {
  display: inline-block;
  text-decoration: none;
  font-size: 0.875rem;
  opacity: 0.7;
  transition: all 0.3s ease;
  position: relative;
}

.footer-link::before {
  content: '›';
  position: absolute;
  left: -15px;
  opacity: 0;
  transition: all 0.3s ease;
}

.footer-link:hover {
  opacity: 1;
  transform: translateX(10px);
  color: var(--fallback-p,oklch(var(--p)));
}

.footer-link:hover::before {
  opacity: 1;
  left: -10px;
}
</style>