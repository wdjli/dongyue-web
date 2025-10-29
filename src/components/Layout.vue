<template>
  <div class="layout-container">
    <Navbar 
      @toggle-theme="toggleTheme" 
      :theme="theme" 
      :is-home="isHome" 
    />
    <main :class="mainClass">
      <slot />
    </main>
    <Footer v-if="showFooter" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

const props = defineProps({
  theme: {
    type: String,
    required: true
  },
  isHome: {
    type: Boolean,
    default: false
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  noPadding: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle-theme'])

const toggleTheme = () => {
  emit('toggle-theme')
}

const mainClass = computed(() => {
  return {
    'no-padding': props.noPadding
  }
})
</script>

<style scoped>
/* 为固定导航栏留出空间 */
main {
  padding-top: 64px; /* 导航栏高度 */
  transition: padding 0.3s ease; /* 平滑过渡 padding 变化 */
}

main.no-padding {
  padding: 0;
  margin: 0;
}

/* 确保过渡期间布局稳定 */
main {
  position: relative;
}
</style>