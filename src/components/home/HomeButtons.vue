<template>
  <div class="flex gap-4 justify-center flex-wrap hero-buttons buttons-appear"
       :style="{ animationDelay: skipAnimationDelay ? '1.4s' : '2.2s' }">
    <router-link to="/featured" class="btn btn-lg btn-animated btn-enhanced hero-btn">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
      推荐插件
    </router-link>
    <router-link to="/plugins" class="btn btn-lg btn-animated btn-enhanced hero-btn">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      所有插件
    </router-link>
    <router-link to="/download" class="btn btn-lg btn-animated btn-enhanced hero-btn">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
      下载中心
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  skipAnimationDelay: Boolean
})
</script>

<style scoped>
/* 按钮弹出动画 */
.buttons-appear {
  opacity: 0;
  animation: buttonsAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes buttonsAppear {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* 按钮增强 */
.btn-enhanced {
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* 按钮动画 */
.btn-animated {
  transition: all 0.3s ease;
}

.btn-animated:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
}

/* Hero 按钮样式 - 黑色边框，白色文字 */
.hero-btn {
  background: transparent !important;
  border: 2px solid #000000 !important;
  color: #ffffff !important;
  backdrop-filter: blur(10px);
}

.hero-btn:hover {
  background: rgba(0, 0, 0, 0.2) !important;
  border-color: #000000 !important;
  color: #ffffff !important;
}

.hero-btn svg {
  stroke: #ffffff;
}

/* 按钮文字 - 深色阴影 */
.btn-enhanced {
  font-weight: 700;
  text-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.3),
    0 2px 6px rgba(0, 0, 0, 0.15);
}
</style>