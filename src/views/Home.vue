<template>
  <div class="home-page">
    <HomeSplashScreen :show-splash="showSplash" />
    <HomeHeroSection 
      :show-splash="showSplash" 
      @scroll-to-content="scrollToContent"
    >
      <div class="max-w-4xl">
        <HomeAvatar 
          :skip-animation-delay="skipAnimationDelay"
          :is-avatar-active="isAvatarActive"
          :current-rotation="currentRotation"
          :start-avatar-acceleration="startAvatarAcceleration"
          :stop-avatar-acceleration="stopAvatarAcceleration"
        />
        <HomeTitle 
          :title-chars="titleChars"
          :skip-animation-delay="skipAnimationDelay"
          :on-char-hover="onCharHover"
          :on-char-leave="onCharLeave"
        />
        <HomeSubtitle :skip-animation-delay="skipAnimationDelay" />
        <HomeStats 
          :plugins-count="plugins.length"
          :total-downloads="totalDownloads"
          :skip-animation-delay="skipAnimationDelay"
        />
        <HomeButtons :skip-animation-delay="skipAnimationDelay" />
        <HomeDescription :skip-animation-delay="skipAnimationDelay" />
      </div>
    </HomeHeroSection>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import pluginsData from '../data/plugins.json'
import HomeSplashScreen from '../components/home/HomeSplashScreen.vue'
import HomeHeroSection from '../components/home/HomeHeroSection.vue'
import HomeAvatar from '../components/home/HomeAvatar.vue'
import HomeTitle from '../components/home/HomeTitle.vue'
import HomeSubtitle from '../components/home/HomeSubtitle.vue'
import HomeDescription from '../components/home/HomeDescription.vue'
import HomeStats from '../components/home/HomeStats.vue'
import HomeButtons from '../components/home/HomeButtons.vue'

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

/* 应用动画 */
.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUpOther 0.8s ease-out forwards;
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
</style>
