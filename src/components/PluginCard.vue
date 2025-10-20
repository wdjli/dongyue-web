<template>
  <div class="plugin-card card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    <div class="card-body">
      <div class="flex items-start gap-4">
        <div class="avatar placeholder icon-wrapper">
          <div class="bg-neutral text-neutral-content rounded-lg w-16 h-16">
            <span class="text-2xl">{{ plugin.icon || getInitial(plugin.name) }}</span>
          </div>
        </div>
        <div class="flex-1">
          <h2 class="card-title text-xl title-hover">{{ plugin.name }}</h2>
          <p class="text-sm opacity-70">v{{ plugin.version }}</p>
        </div>
      </div>
      
      <p class="text-sm opacity-80 mt-2 line-clamp-3">{{ plugin.description }}</p>
      
      <div class="flex flex-wrap gap-2 mt-3">
        <div v-for="tag in plugin.tags" :key="tag" class="badge badge-outline badge-sm badge-hover">
          {{ tag }}
        </div>
      </div>
      
      <div class="card-actions justify-between items-center mt-4 pt-4 border-t border-base-300">
        <div class="text-sm opacity-70 author-info">
          <span>作者: {{ plugin.author }}</span>
        </div>
        <button class="btn btn-primary btn-sm btn-download" @click="$emit('download', plugin)">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          下载
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  plugin: {
    type: Object,
    required: true
  }
})

defineEmits(['download'])

const getInitial = (name) => {
  return name ? name.charAt(0).toUpperCase() : 'P'
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 卡片动画 */
.plugin-card {
  position: relative;
  overflow: hidden;
}

.plugin-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
  transition: left 0.5s;
}

.plugin-card:hover::before {
  left: 100%;
}

/* 图标动画 */
.icon-wrapper {
  transition: transform 0.3s ease;
}

.plugin-card:hover .icon-wrapper {
  transform: rotate(5deg) scale(1.05);
}

/* 标题悬停效果 */
.title-hover {
  transition: color 0.3s ease;
}

.plugin-card:hover .title-hover {
  color: var(--fallback-p,oklch(var(--p)));
}

/* 标签动画 */
.badge-hover {
  transition: all 0.2s ease;
}

.badge-hover:hover {
  transform: scale(1.1);
  border-color: var(--fallback-p,oklch(var(--p)));
}

/* 作者信息动画 */
.author-info {
  transition: opacity 0.3s ease;
}

.plugin-card:hover .author-info {
  opacity: 1 !important;
}

/* 下载按钮动画 */
.btn-download {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-download::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;
}

.btn-download:hover::before {
  width: 300px;
  height: 300px;
}

.btn-download:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.btn-download:active {
  transform: translateY(0);
}
</style>

