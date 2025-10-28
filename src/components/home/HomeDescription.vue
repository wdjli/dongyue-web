<template>
  <p class="text-base md:text-lg mb-10 max-w-2xl mx-auto desc-text text-white desc-fade-in"
     :style="{ animationDelay: skipAnimationDelay ? '1.55s' : '2.4s' }">
    探索丰富多样的聊天机器人插件，让您的 Astrabot 功能更加强大。
    所有插件均经过精心开发和测试，为您提供最佳体验。
  </p>
</template>

<script setup>
defineProps({
  skipAnimationDelay: Boolean
})
</script>

<style scoped>
/* 描述文字 - 深色阴影 */
.desc-text {
  opacity: 0.95;
  font-weight: 500;
  text-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.4),
    0 2px 6px rgba(0, 0, 0, 0.2);
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
</style>