<template>
  <div class="home-page">
    <!-- 开屏动画 -->
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

    <!-- Hero Section with Animated Background -->
    <div class="hero h-screen bg-transparent relative overflow-hidden">
      
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden floating-elements" v-show="!showSplash">
        <div class="floating-circle"></div>
        <div class="floating-circle-2"></div>
        <div class="floating-circle-3"></div>
      </div>
      
      <div class="hero-content text-center relative z-20 hero-content-offset" v-show="!showSplash">
        <div class="max-w-4xl">
          <!-- 头像 -->
          <div class="avatar-wrapper animate-fade-in-down"
               :style="{ animationDelay: skipAnimationDelay ? '0.3s' : '0.1s' }">
            <div class="avatar-container">
              <img 
                src="/img/冬.png" 
                alt="冬月" 
                class="avatar-image" 
                :class="{ 'avatar-active': isAvatarActive }"
                @mouseenter="startAvatarAcceleration"
                @mouseleave="stopAvatarAcceleration"
                :style="{ transform: `rotate(${currentRotation}deg)` }"
              />
              <div class="avatar-glow"></div>
            </div>
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold mb-6 title-wrapper title-float text-white">
            <span v-for="(char, index) in titleChars" :key="index" 
                  class="title-char title-gradient-char title-char-interactive"
                  :style="{ animationDelay: skipAnimationDelay ? `${0.4 + index * 0.02}s` : `${0.3 + index * 0.05}s` }"
                  @mouseenter="onCharHover($event)"
                  @mouseleave="onCharLeave($event)">
              {{ char }}
            </span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 subtitle-text text-white subtitle-slide-in"
             :style="{ animationDelay: skipAnimationDelay ? '0.6s' : '0.8s' }">
            冬月所魔改/开发的Astrabot插件
          </p>
          <p class="text-base md:text-lg mb-10 max-w-2xl mx-auto desc-text text-white desc-fade-in"
             :style="{ animationDelay: skipAnimationDelay ? '0.75s' : '1.1s' }">
            探索丰富多样的聊天机器人插件，让您的 Astrabot 功能更加强大。
            所有插件均经过精心开发和测试，为您提供最佳体验。
          </p>
          <div class="flex gap-4 justify-center flex-wrap hero-buttons buttons-appear"
               :style="{ animationDelay: skipAnimationDelay ? '0.9s' : '1.4s' }">
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
          
          <!-- Stats -->
          <div class="stats-container stats stats-vertical lg:stats-horizontal shadow-lg mt-16 stats-hero stats-appear"
               :style="{ animationDelay: skipAnimationDelay ? '1.1s' : '1.7s' }">
            <div class="stat stat-item">
              <div class="stat-title text-white">插件总数</div>
              <div class="stat-value text-white animate-count">{{ plugins.length }}</div>
              <div class="stat-desc text-white opacity-80">持续更新中</div>
            </div>
            <div class="stat stat-item">
              <div class="stat-title text-white">总下载量</div>
              <div class="stat-value text-white animate-count">{{ totalDownloads }}</div>
              <div class="stat-desc text-white opacity-80">累计下载次数</div>
            </div>
            <div class="stat stat-item">
              <div class="stat-title text-white">开发者</div>
              <div class="stat-value text-white animate-count">1</div>
              <div class="stat-desc text-white opacity-80">冬月</div>
            </div>
          </div>
        </div>
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import pluginsData from '../data/plugins.json'

const emit = defineEmits(['splashStatus'])

const plugins = ref(pluginsData)
const showSplash = ref(false) // 默认不显示
const skipAnimationDelay = ref(false) // 是否跳过动画延迟
const titleChars = ref('Dongyue的插件市场'.split(''))

// 头像旋转控制
const isAvatarActive = ref(false)
const currentRotation = ref(0) // 当前旋转角度
const rotationSpeed = ref(0) // 当前旋转速度 (度/帧)
const targetSpeed = ref(0) // 目标速度
let animationFrame = null

const totalDownloads = computed(() => {
  return plugins.value.reduce((sum, plugin) => sum + (plugin.downloads || 0), 0)
})

const scrollToContent = () => {
  // 可以添加滚动到其他页面的逻辑，或者跳转到推荐页面
  window.location.href = '/featured'
}

// 鼠标悬停字符时的干扰效果
const onCharHover = (event) => {
  const target = event.target
  
  // 强制保持可见并移除初始动画
  target.style.opacity = '1'
  target.style.animation = 'none'
  
  // 随机位置
  const randomX = (Math.random() - 0.5) * 20
  const randomY = (Math.random() - 0.5) * 30
  const randomRotate = (Math.random() - 0.5) * 20
  
  target.style.setProperty('--disturb-x', `${randomX}px`)
  target.style.setProperty('--disturb-y', `${randomY}px`)
  target.style.setProperty('--disturb-rotate', `${randomRotate}deg`)
  
  // 添加干扰类并触发动画
  target.classList.add('char-disturbed')
  
  // 动画结束后移除类，但保持可见
  setTimeout(() => {
    target.classList.remove('char-disturbed')
  }, 600)
}

const onCharLeave = (event) => {
  // 移除时不做任何操作，保持字符可见
}

// 旋转动画循环
const rotateAvatar = () => {
  // 更新旋转角度
  currentRotation.value += rotationSpeed.value
  
  // 保持角度在 0-360 范围内
  if (currentRotation.value >= 360) {
    currentRotation.value -= 360
  } else if (currentRotation.value < 0) {
    currentRotation.value += 360
  }
  
  // 如果头像激活，继续加速
  if (isAvatarActive.value && targetSpeed.value > 0) {
    if (rotationSpeed.value < targetSpeed.value) {
      // 加速：逐渐接近目标速度
      const speedDiff = targetSpeed.value - rotationSpeed.value
      rotationSpeed.value += speedDiff * 0.05 // 5% 的差距
    }
  } else {
    // 减速：逐渐回到0
    if (Math.abs(rotationSpeed.value) > 0.01) {
      rotationSpeed.value *= 0.95 // 每帧保留95%的速度（指数衰减）
    } else {
      rotationSpeed.value = 0
      
      // 速度归零后，慢慢回转到最近的0度位置
      if (currentRotation.value > 1) {
        // 计算回转方向（选择最短路径）
        let targetAngle = 0
        let diff = currentRotation.value
        
        if (diff > 180) {
          diff = diff - 360 // 逆时针回转更短
        }
        
        // 缓慢回转
        currentRotation.value -= diff * 0.05
        
        // 非常接近时直接设置
        if (Math.abs(currentRotation.value) < 0.5) {
          currentRotation.value = 0
          // 停止动画循环
          if (animationFrame) {
            cancelAnimationFrame(animationFrame)
            animationFrame = null
          }
          return
        }
      } else {
        currentRotation.value = 0
        // 停止动画循环
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
          animationFrame = null
        }
        return
      }
    }
  }
  
  // 继续下一帧
  animationFrame = requestAnimationFrame(rotateAvatar)
}

// 头像加速旋转
const startAvatarAcceleration = () => {
  isAvatarActive.value = true
  targetSpeed.value = 8 // 目标速度：每帧旋转8度 (约0.5秒一圈)
  
  // 如果动画还没开始，启动它
  if (!animationFrame) {
    animationFrame = requestAnimationFrame(rotateAvatar)
  }
}

// 头像减速停止
const stopAvatarAcceleration = () => {
  isAvatarActive.value = false
  targetSpeed.value = 0
  
  // 动画会在 rotateAvatar 函数中自动处理减速和回转
}

// 监听开屏状态，通知父组件
watch(showSplash, (newVal) => {
  emit('splashStatus', newVal)
}, { immediate: true })

// 首页禁用滚动和开屏动画
onMounted(() => {
  document.documentElement.classList.add('no-scroll')
  
  // 检查是否已经播放过开屏动画（使用 sessionStorage）
  const hasPlayedSplash = sessionStorage.getItem('hasPlayedSplash')
  
  if (!hasPlayedSplash) {
    // 第一次访问，显示并播放开屏动画
    showSplash.value = true
    skipAnimationDelay.value = false
    sessionStorage.setItem('hasPlayedSplash', 'true')
    
    // 2.5秒后隐藏开屏动画
    setTimeout(() => {
      showSplash.value = false
    }, 2500)
  } else {
    // 已经播放过，直接跳过开屏动画和延迟
    showSplash.value = false
    skipAnimationDelay.value = true
  }
})

onUnmounted(() => {
  document.documentElement.classList.remove('no-scroll')
  
  // 清理动画帧
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped>
/* 首页容器 */
.home-page {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

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

/* 背景图片已移至 App.vue，这里不再需要相关样式 */

/* Hero 内容整体上移 */
.hero-content-offset {
  margin-top: 0; /* 居中显示，不需要额外上移 */
  padding-top: 80px; /* 为导航栏留出空间 */
}

/* 统计数据容器 - 防止缩放时产生滚动条 */
.stats-container {
  overflow: visible;
  padding: 0.5rem; /* 为缩放效果留出空间 */
}

/* Hero 统计卡片背景半透明 */
.stats-hero {
  background: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item {
  transition: transform 0.3s ease;
  will-change: transform;
}

.stat-item:hover {
  transform: scale(1.05);
  z-index: 10;
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
  
  .stats-container {
    padding: 1rem; /* 移动端留更多空间 */
  }
}

/* 超小屏幕调整 */
@media (max-width: 480px) {
  .scroll-indicator {
    bottom: 9rem !important;
  }
  
  .title-gradient {
    font-size: 2.5rem !important;
  }
}

/* 大屏幕优化 */
@media (min-width: 1920px) {
  .hero-content {
    max-width: 1200px;
  }
}

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

/* 标题包装器 - 修复底部裁剪 */
.title-wrapper {
  display: inline-block;
  padding-bottom: 0.5em; /* 增加底部内边距防止裁剪 */
  line-height: 1.3; /* 增加行高 */
  margin-bottom: 1rem; /* 增加底部外边距 */
}

/* 标题整体浮动效果 */
.title-float {
  animation: titleFloat 3s ease-in-out infinite 2.5s; /* 2.5秒后开始浮动 */
}

@keyframes titleFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

/* 标题字符 - 白色 */
.title-gradient-char {
  color: #ffffff;
  /* 防止渐变被裁剪 */
  padding: 0.1em 0;
}

/* 标题阴影 - 深灰色提升可读性 */
.title-gradient-char {
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.4),
    0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 头像容器 */
.avatar-wrapper {
  margin-bottom: 2rem;
  opacity: 0;
}

/* 立即显示类 - 跳过所有动画延迟 */
.instant-show {
  opacity: 1 !important;
  animation: none !important;
}

.avatar-container {
  position: relative;
  display: inline-block;
  width: 160px;
  height: 160px;
  animation: avatarFloat 4s ease-in-out infinite;
  animation-delay: 2.5s;
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid var(--fallback-p,oklch(var(--p)));
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.4s ease, border-color 0.4s ease;
  position: relative;
  z-index: 2;
  cursor: pointer;
  will-change: transform;
}

/* 激活状态 - 增强视觉效果 */
.avatar-image.avatar-active {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  border-color: var(--fallback-s,oklch(var(--s)));
}

/* 头像光晕效果 */
.avatar-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: radial-gradient(circle, 
    var(--fallback-p,oklch(var(--p)/0.3)) 0%, 
    transparent 70%);
  animation: glowPulse 3s ease-in-out infinite;
  z-index: 1;
}

@keyframes avatarFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(2deg);
  }
  50% {
    transform: translateY(-5px) rotate(-2deg);
  }
  75% {
    transform: translateY(-10px) rotate(1deg);
  }
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

/* 响应式头像大小 */
@media (max-width: 768px) {
  .avatar-container {
    width: 120px;
    height: 120px;
  }
  
  .avatar-glow {
    width: 150px;
    height: 150px;
  }
}

/* 字符交互样式 */
.title-char-interactive {
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.title-char-interactive:hover {
  z-index: 10;
}

/* 标题字符逐个出现 */
.title-char {
  display: inline-block;
  opacity: 0;
  animation: charAppear 0.6s ease-out forwards;
  /* 确保动画完成后保持可见 */
  animation-fill-mode: forwards;
}

@keyframes charAppear {
  0% {
    opacity: 0;
    transform: translateY(-30px) scale(0.5) rotate(-10deg);
  }
  60% {
    opacity: 1;
    transform: translateY(5px) scale(1.1) rotate(2deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
}

/* 鼠标悬停时的干扰效果 */
.char-disturbed {
  /* 只使用 transform 动画 */
  animation: charDisturb 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards !important;
}

@keyframes charDisturb {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 1;
  }
  15% {
    transform: translate(var(--disturb-x, 10px), var(--disturb-y, -20px)) 
               rotate(var(--disturb-rotate, 15deg)) 
               scale(1.4);
    opacity: 1;
  }
  30% {
    transform: translate(calc(var(--disturb-x, 10px) * -0.6), calc(var(--disturb-y, -20px) * 0.9)) 
               rotate(calc(var(--disturb-rotate, 15deg) * -0.6)) 
               scale(1.15);
    opacity: 1;
  }
  50% {
    transform: translate(calc(var(--disturb-x, 10px) * 0.4), calc(var(--disturb-y, -20px) * -0.4)) 
               rotate(calc(var(--disturb-rotate, 15deg) * 0.4)) 
               scale(1.08);
    opacity: 1;
  }
  70% {
    transform: translate(calc(var(--disturb-x, 10px) * -0.2), calc(var(--disturb-y, -20px) * 0.2)) 
               rotate(calc(var(--disturb-rotate, 15deg) * -0.2)) 
               scale(1.03);
    opacity: 1;
  }
  85% {
    transform: translate(calc(var(--disturb-x, 10px) * 0.1), calc(var(--disturb-y, -20px) * -0.1)) 
               rotate(calc(var(--disturb-rotate, 15deg) * 0.1)) 
               scale(1.01);
    opacity: 1;
  }
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 1;
  }
}

/* 副标题文字 - 深色阴影 */
.subtitle-text {
  opacity: 1;
  font-weight: 600;
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.4),
    0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 描述文字 - 深色阴影 */
.desc-text {
  opacity: 0.95;
  font-weight: 500;
  text-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.4),
    0 2px 6px rgba(0, 0, 0, 0.2);
}

/* 副标题滑入动画 */
.subtitle-slide-in {
  opacity: 0;
  animation: subtitleSlide 0.8s ease-out forwards;
}

@keyframes subtitleSlide {
  0% {
    opacity: 0;
    transform: translateX(-50px);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
    filter: blur(0);
  }
}

/* 描述文字淡入放大 */
.desc-fade-in {
  opacity: 0;
  animation: descFadeIn 0.8s ease-out forwards;
}

@keyframes descFadeIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
    filter: blur(5px);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
}

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

/* 统计卡片依次弹入 */
.stats-appear {
  opacity: 0;
  animation: statsAppear 0.8s ease-out forwards;
}

@keyframes statsAppear {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.9);
  }
  60% {
    transform: translateY(-5px) scale(1.02);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* 淡入向下动画 */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 淡入向上动画 - 用于其他元素 */
@keyframes fadeInUpOther {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 数字计数动画 */
@keyframes countUp {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
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

/* 应用动画 */
.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUpOther 0.8s ease-out forwards;
}

.animate-count {
  animation: countUp 0.6s ease-out forwards;
}

/* 动画延迟 */
.animation-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  opacity: 0;
}

.animation-delay-800 {
  animation-delay: 0.8s;
  opacity: 0;
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

/* 滚动提示文字 - 深色阴影 */
.scroll-text {
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.4),
    0 4px 8px rgba(0, 0, 0, 0.2);
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
</style>

