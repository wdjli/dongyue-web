<template>
  <div class="container mx-auto px-4 py-20">
    <div class="text-center mb-12 animate-fade-in-down">
      <h1 class="text-5xl font-bold mb-4">插件展示</h1>
      <p class="text-lg opacity-70">浏览所有可用的 Astrabot 插件</p>
    </div>

    <div v-if="plugins.length === 0" class="text-center py-20">
      <div class="text-6xl mb-4 opacity-50">📦</div>
      <p class="text-xl opacity-70">暂无插件</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(plugin, index) in plugins" 
        :key="plugin.name"
        :class="['animate-fade-in-up', `animation-delay-${index % 6}`]"
      >
        <PluginCard 
          :plugin="plugin"
          @download="handleDownload"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PluginCard from '../components/PluginCard.vue'
import pluginsData from '../data/plugins.json'

const plugins = ref(pluginsData)

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
</style>

