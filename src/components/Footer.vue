<template>
  <footer class="footer bg-base-200 text-base-content mt-20 footer-animated">
    <div class="footer-container max-w-7xl mx-auto px-6 py-10">
      <!-- 上半部分：多列布局 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- 关于我们 -->
        <div class="footer-section">
          <h3 class="footer-section-title font-bold text-lg mb-4">关于我们</h3>
          <p class="font-bold text-xl mb-2 footer-logo">Dongyue的插件市场</p>
          <p class="text-sm opacity-70 mb-4">冬月所魔改/开发的Astrabot插件</p>
          <p class="text-xs opacity-60 leading-relaxed">
            致力于为 Astrabot 用户提供优质的插件和定制服务，让您的机器人功能更加强大。
          </p>
        </div>

        <!-- 快速链接 -->
        <div class="footer-section">
          <h3 class="footer-section-title font-bold text-lg mb-4">快速链接</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="footer-link">首页</router-link></li>
            <li><router-link to="/featured" class="footer-link">推荐插件</router-link></li>
            <li><router-link to="/plugins" class="footer-link">插件展示</router-link></li>
            <li><router-link to="/download" class="footer-link">下载中心</router-link></li>
            <li><router-link to="/customize" class="footer-link">定制服务</router-link></li>
          </ul>
        </div>

        <!-- 服务与支持 -->
        <div class="footer-section">
          <h3 class="footer-section-title font-bold text-lg mb-4">服务与支持</h3>
          <ul class="space-y-2">
            <li><a href="#" class="footer-link">使用文档</a></li>
            <li><a href="#" class="footer-link">常见问题</a></li>
            <li><a href="#" class="footer-link">插件开发指南</a></li>
            <li><a href="#" class="footer-link">API 文档</a></li>
            <li><a href="#" class="footer-link">问题反馈</a></li>
          </ul>
        </div>

        <!-- 联系我们 -->
        <div class="footer-section">
          <h3 class="footer-section-title font-bold text-lg mb-4">联系我们</h3>
          <ul class="space-y-3">
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 opacity-70 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span class="text-sm opacity-70">dongyue@example.com</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 opacity-70 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
              <span class="text-sm opacity-70">QQ: 123456789</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 opacity-70 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span class="text-sm opacity-70">微信: dongyue_dev</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 分割线 -->
      <div class="divider my-4 opacity-20"></div>

      <!-- 下半部分：版权信息 + 社交媒体 + 返回顶部 -->
      <div class="footer-bottom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        <!-- 左侧：版权信息（占据3列） -->
        <div class="lg:col-span-3 text-center md:text-left">
          <p class="text-sm opacity-70">
            Copyright © {{ currentYear }} Dongyue的插件市场. 保留所有权利.
          </p>
          <p class="text-xs opacity-50 mt-1">
            基于 Vue 3 + Vite + Tailwind CSS + DaisyUI 构建
          </p>
        </div>

        <!-- 右侧：返回顶部 + 社交媒体（占据1列，对齐联系我们） -->
        <div class="flex items-center justify-center lg:justify-end gap-6">
          <!-- 返回顶部按钮 -->
          <button @click="scrollToTop" class="btn btn-sm btn-circle btn-ghost back-to-top" title="返回顶部">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>

          <!-- 分隔线 -->
          <div class="h-8 w-px bg-base-content opacity-20"></div>

          <!-- 社交媒体图标 -->
          <div class="flex gap-3 social-icons">
            <a href="https://github.com" target="_blank" class="social-icon" title="GitHub">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" target="_blank" class="social-icon" title="Twitter">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="#" target="_blank" class="social-icon" title="Discord">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a href="#" target="_blank" class="social-icon" title="Telegram">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* 页脚淡入动画 */
.footer-animated {
  animation: fadeInUp 0.8s ease-out;
}

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

/* Footer 容器 */
.footer-container {
  width: 100%;
}

/* 分栏标题 */
.footer-section-title {
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--fallback-p,oklch(var(--p)));
  transition: width 0.3s ease;
}

.footer-section:hover .footer-section-title::after {
  width: 60px;
}

/* Logo 动画 */
.footer-logo {
  transition: all 0.3s ease;
  cursor: pointer;
}

.footer-logo:hover {
  color: var(--fallback-p,oklch(var(--p)));
  transform: translateX(5px);
}

/* 链接样式 */
.footer-link {
  display: inline-block;
  text-decoration: none;
  font-size: 0.875rem;
  opacity: 0.7;
  transition: all 0.3s ease;
  position: relative;
}

.footer-link::before {
  content: '›';
  position: absolute;
  left: -15px;
  opacity: 0;
  transition: all 0.3s ease;
}

.footer-link:hover {
  opacity: 1;
  transform: translateX(10px);
  color: var(--fallback-p,oklch(var(--p)));
}

.footer-link:hover::before {
  opacity: 1;
  left: -10px;
}

/* 社交媒体图标 */
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--fallback-b3,oklch(var(--b3)));
  transition: all 0.3s ease;
  opacity: 0.7;
}

.social-icon:hover {
  opacity: 1;
  background: var(--fallback-p,oklch(var(--p)));
  color: var(--fallback-pc,oklch(var(--pc)));
  transform: translateY(-5px) rotate(360deg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* 返回顶部按钮 */
.back-to-top {
  transition: all 0.3s ease;
}

.back-to-top:hover {
  transform: translateY(-3px);
  background: var(--fallback-p,oklch(var(--p)));
  color: var(--fallback-pc,oklch(var(--pc)));
}
</style>

