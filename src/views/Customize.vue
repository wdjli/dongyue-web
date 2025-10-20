<template>
  <div class="container mx-auto px-4 py-20">
    <div class="text-center mb-16 animate-fade-in-down">
      <h1 class="text-5xl font-bold mb-4">插件定制服务</h1>
      <p class="text-lg opacity-70">专业的插件开发，满足您的个性化需求</p>
    </div>

    <!-- 价格档位 -->
    <div class="pricing-section max-w-6xl mx-auto mb-20">
      <h2 class="text-3xl font-bold text-center mb-12 animate-fade-in-up animation-delay-1">选择适合您的服务档位</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 基础档 -->
        <div class="pricing-card animate-fade-in-up animation-delay-2">
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="card-body">
              <div class="badge badge-outline mb-4">基础版</div>
              <h3 class="card-title text-2xl mb-2">简单定制</h3>
              <div class="text-4xl font-bold mb-6">
                ¥199
                <span class="text-base font-normal opacity-70">/个</span>
              </div>
              
              <ul class="space-y-3 mb-6">
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">简单功能实现</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">基础配置选项</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">7天技术支持</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">简单文档说明</span>
                </li>
              </ul>
              
              <button class="btn btn-outline btn-block">选择此档位</button>
            </div>
          </div>
        </div>

        <!-- 标准档 -->
        <div class="pricing-card animate-fade-in-up animation-delay-3">
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-primary">
            <div class="card-body">
              <div class="badge badge-primary mb-4">推荐</div>
              <h3 class="card-title text-2xl mb-2">标准定制</h3>
              <div class="text-4xl font-bold mb-6">
                ¥499
                <span class="text-base font-normal opacity-70">/个</span>
              </div>
              
              <ul class="space-y-3 mb-6">
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">复杂功能实现</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">完整配置系统</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">30天技术支持</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">详细使用文档</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">Bug 修复服务</span>
                </li>
              </ul>
              
              <button class="btn btn-primary btn-block">选择此档位</button>
            </div>
          </div>
        </div>

        <!-- 高级档 -->
        <div class="pricing-card animate-fade-in-up animation-delay-4">
          <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="card-body">
              <div class="badge badge-secondary mb-4">高级版</div>
              <h3 class="card-title text-2xl mb-2">深度定制</h3>
              <div class="text-4xl font-bold mb-6">
                ¥999+
                <span class="text-base font-normal opacity-70">/个</span>
              </div>
              
              <ul class="space-y-3 mb-6">
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">高级复杂功能</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">数据库集成</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">终身技术支持</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">完整项目文档</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">优先处理需求</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm">免费后续更新</span>
                </li>
              </ul>
              
              <button class="btn btn-outline btn-block">选择此档位</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系方式 -->
    <div class="contact-section max-w-4xl mx-auto animate-fade-in-up animation-delay-5">
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-3xl mb-6 text-center justify-center">📞 联系方式</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- QQ -->
            <div class="contact-item">
              <div class="flex items-center gap-4 p-4 bg-base-300 rounded-lg hover:bg-base-100 transition-all">
                <div class="avatar placeholder">
                  <div class="bg-primary text-primary-content rounded-full w-12">
                    <span class="text-2xl">Q</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold">QQ</h3>
                  <p class="text-sm opacity-70">123456789</p>
                </div>
                <button class="btn btn-sm btn-ghost">复制</button>
              </div>
            </div>

            <!-- 微信 -->
            <div class="contact-item">
              <div class="flex items-center gap-4 p-4 bg-base-300 rounded-lg hover:bg-base-100 transition-all">
                <div class="avatar placeholder">
                  <div class="bg-success text-success-content rounded-full w-12">
                    <span class="text-2xl">W</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold">微信</h3>
                  <p class="text-sm opacity-70">dongyue_dev</p>
                </div>
                <button class="btn btn-sm btn-ghost">复制</button>
              </div>
            </div>

            <!-- 邮箱 -->
            <div class="contact-item">
              <div class="flex items-center gap-4 p-4 bg-base-300 rounded-lg hover:bg-base-100 transition-all">
                <div class="avatar placeholder">
                  <div class="bg-secondary text-secondary-content rounded-full w-12">
                    <span class="text-2xl">@</span>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold">邮箱</h3>
                  <p class="text-sm opacity-70">dongyue@example.com</p>
                </div>
                <button class="btn btn-sm btn-ghost">复制</button>
              </div>
            </div>

            <!-- GitHub -->
            <div class="contact-item">
              <div class="flex items-center gap-4 p-4 bg-base-300 rounded-lg hover:bg-base-100 transition-all">
                <div class="avatar placeholder">
                  <div class="bg-neutral text-neutral-content rounded-full w-12">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="font-bold">GitHub</h3>
                  <p class="text-sm opacity-70">@dongyue</p>
                </div>
                <a href="https://github.com" target="_blank" class="btn btn-sm btn-ghost">访问</a>
              </div>
            </div>
          </div>

          <!-- 联系说明 -->
          <div class="mt-8 p-6 bg-base-300 rounded-lg">
            <h3 class="font-bold text-lg mb-3">💬 定制流程</h3>
            <ol class="space-y-2 text-sm opacity-80">
              <li><strong>1.</strong> 通过上述方式联系冬月</li>
              <li><strong>2.</strong> 详细说明您的需求和功能</li>
              <li><strong>3.</strong> 评估工作量并确认档位和价格</li>
              <li><strong>4.</strong> 支付定金后开始开发</li>
              <li><strong>5.</strong> 交付测试，满意后支付尾款</li>
            </ol>
          </div>

          <!-- 注意事项 -->
          <div class="alert alert-info mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 class="font-bold">温馨提示</h3>
              <div class="text-sm">具体价格根据功能复杂度评估，以上为参考价格。复杂需求可能需要更高费用。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 空的 script，暂无需逻辑
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

/* 价格卡片动画 */
.pricing-card .card {
  position: relative;
  overflow: hidden;
}

.pricing-card .card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
  transition: left 0.5s;
}

.pricing-card .card:hover::before {
  left: 100%;
}

/* 联系项悬停效果 */
.contact-item > div {
  cursor: pointer;
}
</style>

