<template>
  <div class="hero h-screen bg-transparent relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden floating-elements" v-show="!showSplash">
      <div class="floating-circle"></div>
      <div class="floating-circle-2"></div>
      <div class="floating-circle-3"></div>
    </div>
    
    <div class="hero-content text-center relative z-20 hero-content-offset" v-show="!showSplash">
      <slot></slot>
    </div>
    
    <!-- 滚动提示 -->
    <div class="scroll-indicator-wrapper">
      <div class="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 scroll-text text-white" @click="scrollToContent">
        <span class="text-sm font-semibold tracking-wide">探索更多</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 bounce-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['scrollToContent'])

defineProps({
  showSplash: Boolean
})

const scrollToContent = () => {
  emit('scrollToContent')
}
</script>

<style scoped>
/* Hero 区域 */
.hero {
  padding-top: 0;
  overflow: hidden;
}

/* 浮动元素容器 */
.floating-elements {
  z-index: 5;
  pointer-events: none;
}

/* Hero 内容整体上移 */
.hero-content-offset {
  margin-top: 0; /* 居中显示，不需要额外上移 */
  padding-top: 80px; /* 为导航栏留出空间 */
}

/* 浮动圆形背景 - 调整 z-index */
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -50px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}

@keyframes float2 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(-40px, 30px) rotate(-120deg);
  }
  66% {
    transform: translate(25px, -25px) rotate(-240deg);
  }
}

@keyframes float3 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(20px, 20px) scale(1.1);
  }
}

.floating-circle {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  top: 10%;
  left: 10%;
  animation: float 20s ease-in-out infinite;
}

.floating-circle-2 {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
  bottom: 10%;
  right: 10%;
  animation: float2 25s ease-in-out infinite;
}

.floating-circle-3 {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.09) 0%, transparent 70%);
  top: 50%;
  right: 20%;
  animation: float3 15s ease-in-out infinite;
}

/* 滚动提示容器 - 使用 flex 居中避免 transform 冲突 */
.scroll-indicator-wrapper {
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;
  z-index: 30;
  display: flex;
  justify-content: center;
  animation: fadeInUp 1s ease-out 2s forwards;
  opacity: 0;
}

/* 滚动提示淡入动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 箭头弹跳动画 */
.bounce-arrow {
  animation: bounceArrow 2s ease-in-out infinite;
}

@keyframes bounceArrow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

/* 悬停时加速弹跳 */
.scroll-indicator:hover .bounce-arrow {
  animation: bounceArrowFast 0.6s ease-in-out infinite;
}

@keyframes bounceArrowFast {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .hero-content-offset {
    padding-top: 60px; /* 移动端导航栏较矮 */
    margin-top: 0; /* 移动端也居中 */
  }
  
  .scroll-indicator {
    bottom: 7rem !important; /* 移动端保证按钮可见 */
  }
}

/* 超小屏幕调整 */
@media (max-width: 480px) {
  .scroll-indicator {
    bottom: 9rem !important;
  }
}

/* 大屏幕优化 */
@media (min-width: 1920px) {
  .hero-content {
    max-width: 1200px;
  }
}
</style>