<template>
  <div class="stats-container stats stats-vertical lg:stats-horizontal shadow-lg mt-8 stats-hero stats-appear"
       :style="{ animationDelay: skipAnimationDelay ? '1.25s' : '1.9s' }">
    <div class="stat stat-item">
      <div class="stat-title text-white">插件总数</div>
      <div class="stat-value text-white animate-count">{{ pluginsCount }}</div>
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
</template>

<script setup>
defineProps({
  pluginsCount: Number,
  totalDownloads: Number,
  skipAnimationDelay: Boolean
})
</script>

<style scoped>
/* 统计数据容器 - 防止缩放时产生滚动条 */
.stats-container {
  overflow: visible;
  padding: 0.5rem; /* 为缩放效果留出空间 */
  margin-top: 2rem; /* 添加顶部间距 */
  margin-bottom: 2rem; /* 添加底部间距 */
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

.animate-count {
  animation: countUp 0.6s ease-out forwards;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .stats-container {
    padding: 1rem; /* 移动端留更多空间 */
    margin-top: 1.5rem; /* 移动端调整间距 */
    margin-bottom: 1.5rem;
  }
}

/* 超小屏幕调整 */
@media (max-width: 480px) {
  .stats-container {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
</style>