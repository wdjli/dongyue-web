<template>
  <transition name="splash">
    <div v-if="showSplash" class="splash-screen">
      <div class="splash-content">
        <div class="splash-logo">
          <h1 class="splash-title">Dongyue的插件市场</h1>
          <div class="splash-loader">
            <div class="loader-bar"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  showSplash: Boolean
})
</script>

<style scoped>
/* 开屏动画 - 确保完全遮盖 */
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--fallback-b2,oklch(var(--b2)));
  z-index: 10000; /* 比背景图片和导航栏都高 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.splash-content {
  text-align: center;
}

.splash-title {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(to right, var(--fallback-p,oklch(var(--p))), var(--fallback-s,oklch(var(--s))));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  animation: splashPulse 1.5s ease-in-out infinite;
}

.splash-loader {
  width: 200px;
  height: 4px;
  background: var(--fallback-b3,oklch(var(--b3)));
  border-radius: 2px;
  overflow: hidden;
  margin: 0 auto;
}

.loader-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--fallback-p,oklch(var(--p))), var(--fallback-s,oklch(var(--s))));
  border-radius: 2px;
  animation: loading 2s ease-in-out;
}

@keyframes splashPulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.02);
  }
}

@keyframes loading {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

/* 开屏动画过渡 */
.splash-enter-active {
  transition: opacity 0.3s ease;
}

.splash-leave-active {
  transition: opacity 0.8s ease;
}

.splash-enter-from,
.splash-leave-to {
  opacity: 0;
}
</style>