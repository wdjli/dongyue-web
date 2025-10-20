<template>
  <div :data-theme="theme" class="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
    <!-- 首页背景图片 - 在组件外层，不参与页面切换动画 -->
    <transition name="bg-fade">
      <div v-if="isHomePage && !isShowingSplash" class="home-bg-wrapper-app">
        <img src="/11.jpg" alt="背景" class="home-bg-image-app" />
      </div>
    </transition>

    <Navbar 
      v-show="!isShowingSplash"
      @toggle-theme="toggleTheme" 
      :theme="theme" 
      :is-home="isHomePage" 
    />
    <main :class="{ 'no-padding': isHomePage }">
      <router-view v-slot="{ Component, route }">
        <transition :name="getTransitionName(route)" mode="out-in">
          <component :is="Component" :key="route.path" @splash-status="handleSplashStatus" />
        </transition>
      </router-view>
    </main>
    <Footer v-if="!isHomePage" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const theme = ref('light')
const route = useRoute()
const isShowingSplash = ref(true) // 初始假设有开屏动画

const isHomePage = computed(() => route.path === '/')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
}

// 根据路由决定过渡动画
const getTransitionName = (route) => {
  if (route.path === '/') {
    return 'fade-scale'
  }
  return 'slide-fade'
}

// 处理开屏动画状态
const handleSplashStatus = (isShowing) => {
  isShowingSplash.value = isShowing
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    theme.value = savedTheme
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark'
  }
  
  // 检查是否在首页且已播放过开屏动画
  if (route.path === '/') {
    const hasPlayedSplash = sessionStorage.getItem('hasPlayedSplash')
    if (hasPlayedSplash) {
      // 已播放过，立即显示背景
      isShowingSplash.value = false
    }
  } else {
    // 非首页，立即设置为 false
    isShowingSplash.value = false
  }
})
</script>

<style scoped>
/* 首页背景图片 - App 层级 */
.home-bg-wrapper-app {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  overflow: hidden;
}

.home-bg-image-app {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* 背景淡入淡出过渡 */
.bg-fade-enter-active,
.bg-fade-leave-active {
  transition: opacity 0.5s ease;
}

.bg-fade-enter-from,
.bg-fade-leave-to {
  opacity: 0;
}

/* 为固定导航栏留出空间 */
main {
  padding-top: 64px; /* 导航栏高度 */
  transition: padding 0.3s ease; /* 平滑过渡 padding 变化 */
}

main.no-padding {
  padding: 0;
  margin: 0;
}

/* 页面切换动画 - 首页快速淡入 */
.fade-scale-enter-active {
  transition: opacity 0.3s ease;
}

.fade-scale-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.fade-scale-enter-from {
  opacity: 0;
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

/* 页面切换动画 - 滑动 + 淡入淡出 */
.slide-fade-enter-active {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* 确保过渡期间布局稳定 */
main {
  position: relative;
}
</style>

