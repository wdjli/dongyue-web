<template>
  <div class="card-stack">
    <div class="featured-card-wrapper card-3d bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden">
    <div class="featured-card-horizontal">
      <!-- 左侧：原有的竖向卡片 -->
      <div class="featured-card-left">
        <!-- 上半部分：插件信息 -->
        <div class="card-body">
          <div class="flex items-start justify-between gap-4 mb-4">
            <div class="flex items-center gap-3 flex-1">
              <div class="avatar placeholder">
                <div class="bg-neutral text-neutral-content rounded-lg w-14 h-14">
                  <span class="text-2xl">{{ plugin.icon || getInitial(plugin.name) }}</span>
                </div>
              </div>
              <div class="flex-1">
                <h2 class="card-title text-xl font-bold leading-tight">{{ plugin.name }}</h2>
                <p class="text-sm opacity-70 mt-1">v{{ plugin.version }}</p>
              </div>
            </div>
            
            <!-- 趋势标识 -->
            <div v-if="plugin.trending" class="trending-badge">
              <div v-if="plugin.trending === 'hot'" class="badge badge-error badge-sm gap-1">
                🔥 热门
              </div>
              <div v-else-if="plugin.trending === 'rising'" class="badge badge-success badge-sm gap-1">
                📈 上升
              </div>
              <div v-else class="badge badge-ghost badge-sm">
                稳定
              </div>
            </div>
          </div>
          
          <p class="text-sm opacity-80 mb-3 line-clamp-2">{{ plugin.description }}</p>
          
          <div class="flex flex-wrap gap-2 mb-3">
            <div v-for="tag in plugin.tags.slice(0, 3)" :key="tag" class="badge badge-outline badge-xs">
              {{ tag }}
            </div>
          </div>
          
          <!-- 更新时间 -->
          <div class="flex items-center gap-2 mb-2 text-xs opacity-60">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{{ formatDate(plugin.updateTime) }}</span>
          </div>

          <!-- 兼容性 -->
          <div class="mb-2">
            <div class="flex flex-wrap gap-1">
              <div v-for="(compat, index) in plugin.compatibility" :key="index" class="badge badge-success badge-xs">
                ✓ {{ compat }}
              </div>
            </div>
          </div>
          
          <div class="flex items-center justify-between text-xs opacity-60 mt-2">
            <span>作者: {{ plugin.author }}</span>
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {{ plugin.downloads || 0 }}
            </span>
          </div>
        </div>

        <!-- 中间部分：插件图片 -->
        <div class="plugin-image-wrapper">
          <div class="plugin-image-container">
            <img 
              v-if="plugin.image" 
              :src="plugin.image" 
              :alt="plugin.name"
              class="plugin-image"
            />
            <div v-else class="plugin-image-placeholder">
              <span class="text-6xl opacity-30">{{ plugin.icon || '📦' }}</span>
            </div>
          </div>
        </div>

        <!-- 下载按钮 -->
        <div class="card-actions px-6 pb-6 pt-2 flex-shrink-0">
          <button class="btn btn-primary btn-block download-btn" @click="$emit('download', plugin)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 download-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span class="download-text">下载插件</span>
          </button>
        </div>
      </div>

      <!-- 右侧：文档预览区域 -->
      <div class="featured-card-right">
        <div class="doc-preview-header">
          <h3 class="text-lg font-bold mb-2">📄 插件文档</h3>
          <p class="text-sm opacity-70">功能说明与使用指南</p>
        </div>
        
        <div v-if="loading" class="doc-preview-content text-center py-8">
          <div class="loading loading-spinner loading-md"></div>
          <p class="text-sm opacity-70 mt-2">加载文档中...</p>
        </div>
        
        <div v-else-if="error" class="doc-preview-content">
          <div class="alert alert-warning">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span class="text-sm">文档加载失败</span>
          </div>
        </div>
        
        <div v-else class="doc-preview-content markdown-body" v-html="markdownContent"></div>
      </div>
    </div>
    </div>
    <!-- 堆叠层 -->
    <div class="stack-layer stack-layer-1"></div>
    <div class="stack-layer stack-layer-2"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { marked } from 'marked'

const props = defineProps({
  plugin: {
    type: Object,
    required: true
  }
})

defineEmits(['download'])

const markdownContent = ref('')
const loading = ref(false)
const error = ref(false)

const getInitial = (name) => {
  return name ? name.charAt(0).toUpperCase() : 'P'
}

// 格式化日期
const formatDate = (dateStr) => {
  if (!dateStr) return '未知'
  const date = new Date(dateStr)
  const now = new Date()
  const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24))
  
  if (diff === 0) return '今天'
  if (diff === 1) return '昨天'
  if (diff < 7) return `${diff}天前`
  if (diff < 30) return `${Math.floor(diff / 7)}周前`
  if (diff < 365) return `${Math.floor(diff / 30)}个月前`
  
  return dateStr
}

// 加载 markdown 文档
const loadMarkdown = async () => {
  if (!props.plugin.docUrl) {
    error.value = true
    return
  }
  
  loading.value = true
  error.value = false
  
  try {
    const response = await fetch(props.plugin.docUrl)
    if (!response.ok) throw new Error('文档加载失败')
    
    const markdown = await response.text()
    markdownContent.value = marked(markdown)
  } catch (err) {
    console.error('加载文档失败:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadMarkdown()
})

// 监听插件变化，重新加载文档
watch(() => props.plugin, () => {
  loadMarkdown()
})
</script>

<style scoped>
/* 卡片包装器 */
.featured-card-wrapper {
  height: 100%;
  min-height: 600px;
  max-height: 650px;
  position: relative;
}

/* 卡片堆叠容器 */
.card-stack {
  position: relative;
  height: 100%;
  padding-bottom: 8px;
  padding-right: 8px;
}

/* 3D堆叠卡片效果 */
.card-3d {
  position: relative;
  z-index: 3;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 堆叠层样式 */
.stack-layer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: var(--fallback-b2,oklch(var(--b2)));
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* 第二层（中间） */
.stack-layer-2 {
  z-index: 2;
  transform: translateX(3px) translateY(3px);
  opacity: 0.7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

/* 第三层（最底） */
.stack-layer-1 {
  z-index: 1;
  transform: translateX(6px) translateY(6px);
  opacity: 0.5;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

/* 悬停时抬起，露出更多层 */
.card-stack:hover .card-3d {
  transform: translateY(-10px);
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.2),
    0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-stack:hover .stack-layer-2 {
  transform: translateX(5px) translateY(5px);
  opacity: 0.8;
}

.card-stack:hover .stack-layer-1 {
  transform: translateX(10px) translateY(10px);
  opacity: 0.6;
}

/* 背景图片相关样式已移除 */

/* 横向布局容器 */
.featured-card-horizontal {
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 0;
  position: relative;
  z-index: 2; /* 确保内容在背景之上 */
}

/* 左侧：原有竖向卡片 - 2/5 宽度 */
.featured-card-left {
  flex: 2;
  min-width: 0;
  display: flex;
  flex-direction: column;
  border-right: 2px solid var(--fallback-bc,oklch(var(--bc)/0.1));
}

/* 右侧：文档预览区域 - 3/5 宽度 */
.featured-card-right {
  flex: 3;
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
  overflow-y: auto;
}

.card-body {
  flex: 0 0 auto;
  padding: 1.25rem 1.5rem;
}

/* 趋势徽章动画 */
.trending-badge .badge-error {
  animation: pulse 2s ease-in-out infinite;
}

.trending-badge .badge-success {
  animation: slideUp 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

@keyframes slideUp {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
}

/* 响应式：移动端恢复竖向布局 */
@media (max-width: 1024px) {
  .featured-card-horizontal {
    flex-direction: column;
  }
  
  .featured-card-left {
    flex: 0 0 auto;
    border-right: none;
    border-bottom: 1px solid var(--fallback-bc,oklch(var(--bc)/0.1));
  }
  
  .featured-card-right {
    max-height: 300px;
  }
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.5em;
}

/* 插件图片区域 - 外层 */
.plugin-image-wrapper {
  flex: 1;
  position: relative;
  min-height: 160px;
  padding: 0 1rem 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 图片容器 - 内层卡片 */
.plugin-image-container {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: var(--fallback-b3,oklch(var(--b3)));
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.featured-card:hover .plugin-image-container {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

.plugin-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.5s ease;
}

.featured-card:hover .plugin-image {
  transform: scale(1.08);
}

.plugin-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--fallback-b3,oklch(var(--b3))) 0%, var(--fallback-b2,oklch(var(--b2))) 100%);
}

/* 文档预览区域样式 */
.doc-preview-header {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--fallback-bc,oklch(var(--bc)/0.1));
}

.doc-preview-content {
  flex: 1;
  overflow-y: auto;
}

/* Markdown 内容样式 */
.markdown-body {
  font-size: 0.95rem;
  line-height: 1.7;
}

.markdown-body h1 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--fallback-bc,oklch(var(--bc)/0.1));
  padding-bottom: 0.5rem;
}

.markdown-body h2 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.markdown-body h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.markdown-body p {
  margin-bottom: 1rem;
  opacity: 0.85;
}

.markdown-body ul,
.markdown-body ol {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.markdown-body li {
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.markdown-body code {
  background: var(--fallback-b3,oklch(var(--b3)));
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.85em;
  font-family: 'Courier New', monospace;
}

.markdown-body pre {
  background: var(--fallback-b1,oklch(var(--b1)));
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-bottom: 1rem;
  border: 1px solid var(--fallback-bc,oklch(var(--bc)/0.1));
}

.markdown-body pre code {
  background: none;
  padding: 0;
}

.markdown-body strong {
  font-weight: 600;
}

/* 卡片悬停效果 */
.featured-card-wrapper {
  position: relative;
  overflow: hidden;
}

.featured-card-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
  transition: left 0.5s;
  z-index: 1;
}

.featured-card-wrapper:hover::before {
  left: 100%;
}

/* 下载按钮动画 */
.download-btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  font-weight: 700;
  background: linear-gradient(135deg, var(--fallback-p,oklch(var(--p))) 0%, var(--fallback-s,oklch(var(--s))) 100%);
}

/* 渐变光晕流动效果 */
.download-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 70%
  );
  transform: translateX(-100%) translateY(-100%) rotate(45deg);
  transition: transform 0.6s ease;
}

.download-btn:hover::before {
  transform: translateX(100%) translateY(100%) rotate(45deg);
}

/* 发光边框效果 */
.download-btn::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(45deg, 
    var(--fallback-p,oklch(var(--p))), 
    var(--fallback-s,oklch(var(--s))),
    var(--fallback-p,oklch(var(--p)))
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.download-btn:hover::after {
  opacity: 0.6;
  animation: borderGlow 2s linear infinite;
}

@keyframes borderGlow {
  0%, 100% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(20deg);
  }
}

.download-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.3),
    0 0 30px var(--fallback-p,oklch(var(--p)/0.3));
}

.download-btn:active {
  transform: translateY(-1px) scale(0.98);
}

/* 下载图标动画 */
.download-icon {
  transition: all 0.3s ease;
}

.download-btn:hover .download-icon {
  animation: downloadBounce 0.6s ease-in-out;
}

@keyframes downloadBounce {
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-3px);
  }
}

/* 下载文字动画 */
.download-text {
  display: inline-block;
  transition: all 0.3s ease;
}

.download-btn:hover .download-text {
  letter-spacing: 0.05em;
}

/* 点击时的涟漪效果 */
.download-btn:active::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  animation: ripple 0.6s ease-out;
}

@keyframes ripple {
  to {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}

/* 移动端响应式 */
@media (max-width: 768px) {
  .plugin-image-wrapper {
    min-height: 180px;
    max-height: 220px;
  }
}
</style>


