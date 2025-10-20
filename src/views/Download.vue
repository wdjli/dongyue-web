<template>
  <div class="container mx-auto px-4 py-20">
    <div class="text-center mb-12 animate-fade-in-down">
      <h1 class="text-5xl font-bold mb-4">下载中心</h1>
      <p class="text-lg opacity-70">获取您需要的插件</p>
    </div>

    <div class="max-w-5xl mx-auto">
      <!-- Download Instructions -->
      <div class="card bg-base-200 shadow-xl mb-8 animate-fade-in-up animation-delay-200">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">如何下载和安装插件</h2>
          <div class="space-y-4">
            <div class="flex gap-4 items-start step-item animation-delay-1">
              <div class="badge badge-primary badge-lg">1</div>
              <div>
                <h3 class="font-bold text-lg">选择插件</h3>
                <p class="opacity-70">在下方列表中找到您需要的插件</p>
              </div>
            </div>
            <div class="flex gap-4 items-start step-item animation-delay-2">
              <div class="badge badge-primary badge-lg">2</div>
              <div>
                <h3 class="font-bold text-lg">下载插件文件</h3>
                <p class="opacity-70">点击下载按钮获取插件文件</p>
              </div>
            </div>
            <div class="flex gap-4 items-start step-item animation-delay-3">
              <div class="badge badge-primary badge-lg">3</div>
              <div>
                <h3 class="font-bold text-lg">安装到 Astrabot</h3>
                <p class="opacity-70">将插件文件放置到 Astrabot 的 plugins 目录</p>
              </div>
            </div>
            <div class="flex gap-4 items-start step-item animation-delay-4">
              <div class="badge badge-primary badge-lg">4</div>
              <div>
                <h3 class="font-bold text-lg">重启并享受</h3>
                <p class="opacity-70">重启 Astrabot 即可使用新插件</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Plugin Download List -->
      <div class="space-y-4">
        <h2 class="text-3xl font-bold mb-6 animate-fade-in-up animation-delay-400">可下载插件列表</h2>
        
        <div v-if="plugins.length === 0" class="text-center py-20">
          <div class="text-6xl mb-4 opacity-50">📦</div>
          <p class="text-xl opacity-70">暂无可下载的插件</p>
        </div>

        <div v-else class="space-y-3">
          <div 
            v-for="(plugin, index) in plugins" 
            :key="plugin.name"
            :class="['card bg-base-200 shadow hover:shadow-lg transition-all duration-300 animate-slide-in-left', `animation-delay-${index % 6}`]"
          >
            <div class="card-body">
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div class="flex items-start gap-4 flex-1">
                  <div class="avatar placeholder">
                    <div class="bg-neutral text-neutral-content rounded-lg w-12 h-12">
                      <span class="text-xl">{{ plugin.icon || getInitial(plugin.name) }}</span>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-bold">{{ plugin.name }}</h3>
                    <p class="text-sm opacity-70 mt-1">{{ plugin.description }}</p>
                    <div class="flex flex-wrap gap-2 mt-2">
                      <span class="badge badge-sm">v{{ plugin.version }}</span>
                      <span class="badge badge-sm badge-outline">{{ plugin.author }}</span>
                      <span v-for="tag in plugin.tags" :key="tag" class="badge badge-sm badge-ghost">
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <button 
                    class="btn btn-primary btn-animated"
                    @click="handleDownload(plugin)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    下载
                  </button>
                  <span class="text-xs opacity-50 text-center">{{ plugin.downloads || 0 }} 次下载</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Help Section -->
      <div class="alert shadow-lg mt-12 animate-fade-in-up animation-delay-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 class="font-bold">需要帮助？</h3>
          <div class="text-xs">如果您在安装过程中遇到问题，请访问我们的 GitHub 仓库获取支持。</div>
        </div>
        <a href="https://github.com" target="_blank" class="btn btn-sm btn-outline">访问 GitHub</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import pluginsData from '../data/plugins.json'

const plugins = ref(pluginsData)

const getInitial = (name) => {
  return name ? name.charAt(0).toUpperCase() : 'P'
}

const handleDownload = (plugin) => {
  // 这里添加实际的下载逻辑
  // 例如：window.location.href = plugin.downloadUrl
  alert(`开始下载: ${plugin.name}\n版本: ${plugin.version}`)
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

/* 从左滑入动画 */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out forwards;
  opacity: 0;
}

.step-item {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

/* 动画延迟 */
.animation-delay-0 {
  animation-delay: 0.5s;
}

.animation-delay-1 {
  animation-delay: 0.6s;
}

.animation-delay-2 {
  animation-delay: 0.7s;
}

.animation-delay-3 {
  animation-delay: 0.8s;
}

.animation-delay-4 {
  animation-delay: 0.9s;
}

.animation-delay-5 {
  animation-delay: 1s;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

/* 按钮动画 */
.btn-animated {
  transition: all 0.3s ease;
}

.btn-animated:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}
</style>

