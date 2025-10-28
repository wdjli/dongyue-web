<template>
  <div class="navbar fixed top-0 z-50 px-4 lg:px-8 w-full">
    <div class="navbar-start">
      <MobileMenu :is-home="isHome" />
      <Logo />
    </div>
    <DesktopMenu />
    <div class="navbar-end gap-2">
      <GithubLink />
      <ThemeToggle :theme="theme" @toggle-theme="$emit('toggle-theme')" />
    </div>
  </div>
</template>

<script setup>
import MobileMenu from './navbar/MobileMenu.vue'
import Logo from './navbar/Logo.vue'
import DesktopMenu from './navbar/DesktopMenu.vue'
import GithubLink from './navbar/GithubLink.vue'
import ThemeToggle from './navbar/ThemeToggle.vue'

defineProps({
  theme: String,
  isHome: Boolean
})

defineEmits(['toggle-theme'])
</script>

<style scoped>
.router-link-active {
  @apply bg-base-300 text-primary;
}

/* 统一导航栏样式 - 完全融入背景 */
.navbar {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: transparent;
  border-bottom: none;
  box-shadow: none;
  animation: slideDown 0.5s ease-out;
}

/* 导航栏文字 - 统一样式 */
.navbar .btn-ghost,
.navbar .menu li a {
  font-weight: 700;
  text-shadow: none;
}

/* 导航栏按钮 - 浅色主题 */
[data-theme="light"] .navbar .btn-circle,
[data-theme="light"] .navbar .swap {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

[data-theme="light"] .navbar .btn-circle:hover,
[data-theme="light"] .navbar .swap:hover {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 导航栏按钮 - 深色主题 */
[data-theme="dark"] .navbar .btn-circle,
[data-theme="dark"] .navbar .swap {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

[data-theme="dark"] .navbar .btn-circle:hover,
[data-theme="dark"] .navbar .swap:hover {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

