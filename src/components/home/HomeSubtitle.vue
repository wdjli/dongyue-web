<template>
  <p class="text-xl md:text-2xl mb-8 subtitle-text text-white subtitle-slide-in"
     :style="{ animationDelay: skipAnimationDelay ? '0.9s' : '1.4s' }">
    冬月所魔改/开发的Astrabot插件
  </p>
</template>

<script setup>
defineProps({
  skipAnimationDelay: Boolean
})
</script>

<style scoped>
/* 副标题文字 - 深色阴影 */
.subtitle-text {
  opacity: 1;
  font-weight: 600;
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.4),
    0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 1rem; /* 添加顶部间距 */
  margin-bottom: 2rem; /* 添加底部间距 */
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
</style>