<template>
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
</template>

<script setup>
defineProps({
  skipAnimationDelay: Boolean,
  isAvatarActive: Boolean,
  currentRotation: Number,
  startAvatarAcceleration: Function,
  stopAvatarAcceleration: Function
})
</script>

<style scoped>
/* 头像容器 */
.avatar-wrapper {
  margin-bottom: 2rem;
  opacity: 0;
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
</style>