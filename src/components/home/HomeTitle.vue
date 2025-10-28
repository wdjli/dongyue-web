<template>
  <h1 class="text-5xl md:text-7xl font-bold mb-6 title-wrapper title-float text-white">
    <span v-for="(char, index) in titleChars" :key="index" 
          class="title-char title-gradient-char title-char-interactive"
          :style="{ animationDelay: skipAnimationDelay ? `${0.4 + index * 0.02}s` : `${0.3 + index * 0.05}s` }"
          @mouseenter="onCharHover"
          @mouseleave="onCharLeave">
      {{ char }}
    </span>
  </h1>
</template>

<script setup>
defineProps({
  titleChars: Array,
  skipAnimationDelay: Boolean,
  onCharHover: Function,
  onCharLeave: Function
})
</script>

<style scoped>
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

/* 字符交互样式 */
.title-char-interactive {
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.title-char-interactive:hover {
  z-index: 10;
}
</style>