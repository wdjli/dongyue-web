<template>
  <div class="featured-page px-4 py-20">
    <div class="mb-16 animate-fade-in-down text-center">
      <div class="title-wrapper">
        <h1 class="title-3d">精选插件</h1>
      </div>
      <p class="text-lg opacity-70 mt-6">最受欢迎和最新的插件推荐</p>
    </div>

    <div v-if="featuredPlugins.length === 0" class="text-center py-20">
      <div class="text-6xl mb-4 opacity-50">📦</div>
      <p class="text-xl opacity-70">暂无推荐插件</p>
    </div>

    <div v-else class="featured-grid">
      <div 
        v-for="(plugin, index) in featuredPlugins" 
        :key="plugin.name"
        :class="['animate-fade-in-up', `animation-delay-${index}`]"
      >
        <FeaturedPluginCard 
          :plugin="plugin"
          @download="handleDownload"
        />
      </div>
    </div>

    <div class="text-center animate-fade-in-up animation-delay-4">
      <router-link to="/plugins" class="btn btn-outline btn-lg btn-animated">
        查看所有插件
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import FeaturedPluginCard from '../components/FeaturedPluginCard.vue'
import pluginsData from '../data/plugins.json'

const plugins = ref(pluginsData)

const featuredPlugins = computed(() => {
  // 只展示前4个插件作为精选
  return plugins.value.slice(0, 4)
})

const handleDownload = (plugin) => {
  alert(`开始下载: ${plugin.name}`)
  // 这里可以添加实际的下载逻辑
}
</script>

<style scoped>
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

/* 淡入向上动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

/* 动画延迟 */
.animation-delay-0 {
  animation-delay: 0s;
}

.animation-delay-1 {
  animation-delay: 0.1s;
}

.animation-delay-2 {
  animation-delay: 0.2s;
}

.animation-delay-3 {
  animation-delay: 0.3s;
}

.animation-delay-4 {
  animation-delay: 0.4s;
}

.animation-delay-5 {
  animation-delay: 0.5s;
}

.animation-delay-6 {
  animation-delay: 0.6s;
}

/* 标题包装器 */
.title-wrapper {
  position: relative;
  display: inline-block;
}

/* 3D立体标题 - 深黑到浅灰渐变 */
.title-3d {
  font-size: 6rem;
  font-weight: 900;
  background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 50%, #808080 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  letter-spacing: 0.25em;
  display: inline-block;
  position: relative;
  filter: drop-shadow(2px 2px 0 #3a3a3a)
          drop-shadow(4px 4px 0 #4a4a4a)
          drop-shadow(6px 6px 0 #5a5a5a)
          drop-shadow(8px 8px 0 #6a6a6a)
          drop-shadow(10px 10px 0 #7a7a7a)
          drop-shadow(12px 12px 0 #8a8a8a)
          drop-shadow(14px 14px 15px rgba(0, 0, 0, 0.25));
  transform: translateY(0);
  transition: transform 0.3s ease, filter 0.3s ease;
  cursor: pointer;
  user-select: none;
}

.title-3d:hover {
  transform: translateY(-8px);
  filter: drop-shadow(3px 3px 0 #4a4a4a)
          drop-shadow(6px 6px 0 #5a5a5a)
          drop-shadow(9px 9px 0 #6a6a6a)
          drop-shadow(12px 12px 0 #7a7a7a)
          drop-shadow(15px 15px 0 #8a8a8a)
          drop-shadow(18px 18px 0 #9a9a9a)
          drop-shadow(21px 21px 25px rgba(0, 0, 0, 0.3));
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .title-3d {
    font-size: 4rem;
  }
}

@media (max-width: 768px) {
  .title-3d {
    font-size: 2.5rem;
    letter-spacing: 0.15em;
  }
}

/* 按钮动画 */
.btn-animated {
  transition: all 0.3s ease;
}

.btn-animated:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* 页面容器 - 移除宽度限制 */
.featured-page {
  width: 100%;
  max-width: 100%;
}

/* 响应式网格布局 */
.featured-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2.5rem;
  padding: 0;
}

/* 桌面端 (1024px+) - 2列布局，充分利用宽度 */
@media (min-width: 1024px) {
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem; /* 卡片间距 3rem */
    padding-left: 6rem; /* 页面左边距 */
    padding-right: 6rem; /* 页面右边距 */
  }
}

/* 大屏幕 (1920px+) - 增加间距 */
@media (min-width: 1920px) {
  .featured-grid {
    gap: 4rem; /* 卡片间距 4rem */
    padding-left: 8rem; /* 页面左边距 */
    padding-right: 8rem; /* 页面右边距 */
  }
}

/* 超大屏幕 (2560px+) - 更大间距 */
@media (min-width: 2560px) {
  .featured-grid {
    gap: 6rem; /* 卡片间距 6rem */
    padding-left: 12rem; /* 页面左边距 */
    padding-right: 12rem; /* 页面右边距 */
  }
}
</style>

