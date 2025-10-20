# Dongyue的插件市场

> 冬月所魔改/开发的Astrabot插件

一个现代化的插件展示和下载平台，基于 Vue 3 + Vite + Tailwind CSS + DaisyUI 构建。

## ✨ 特性

- 🎨 现代简约设计风格，黑白灰主色调
- 🌓 支持深色/浅色主题切换（记忆用户偏好）
- 📱 完全响应式设计，支持移动端
- ⚡ 基于 Vite 的快速开发体验
- 🎭 使用 DaisyUI 组件库
- 🔍 插件展示和下载功能
- ✨ 丰富的动画效果
  - 页面加载动画
  - 悬停交互动画
  - 背景浮动元素
  - 平滑过渡效果

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 `http://localhost:5173` 查看网站

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
dongyue-astrbot-web/
├── src/
│   ├── components/      # 组件
│   │   ├── Navbar.vue   # 导航栏（含动画效果）
│   │   ├── Footer.vue   # 页脚（含动画效果）
│   │   └── PluginCard.vue # 插件卡片（含交互动画）
│   ├── views/           # 页面
│   │   ├── Home.vue     # 首页（Hero大屏+统计）
│   │   ├── Featured.vue # 推荐插件页
│   │   ├── Plugins.vue  # 插件展示页（所有插件）
│   │   └── Download.vue # 下载页（含安装指南）
│   ├── router/          # 路由配置
│   ├── data/            # 数据文件
│   │   └── plugins.json # 插件数据（12个示例插件）
│   ├── App.vue          # 根组件（主题管理）
│   ├── main.js          # 入口文件
│   └── style.css        # 全局样式
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🔧 自定义插件数据

编辑 `src/data/plugins.json` 文件来添加或修改插件信息：

```json
{
  "name": "插件名称",
  "description": "插件描述",
  "author": "作者名",
  "version": "1.0.0",
  "icon": "🎨",
  "tags": ["标签1", "标签2"],
  "downloads": 100,
  "downloadUrl": "/downloads/plugin.zip"
}
```

## 📝 页面说明

- **首页** (`/`): 
  - 全屏 Hero 大屏展示
  - 导航栏透明融入背景（毛玻璃效果）
  - 浮动背景动画
  - 统计数据展示
  - 滚动提示引导
  - 无页脚，纯净美观
- **推荐插件** (`/featured`): 展示精选的9个推荐插件
- **插件展示** (`/plugins`): 展示所有可用插件，带渐入动画
- **下载中心** (`/download`): 插件下载列表和详细的安装指南

## 🎬 动画效果说明

### 页面动画
- **首页**: 淡入向下/向上动画，浮动背景元素
- **插件页面**: 卡片依次淡入，交错延迟效果
- **下载页面**: 内容从左滑入，步骤逐个显示

### 交互动画
- **导航栏**: 
  - 下滑进入动画
  - 首页透明毛玻璃效果
  - 深色/浅色主题自适应
  - 链接下划线悬停效果
- **插件卡片**: 
  - 悬停抬起效果
  - 光扫过效果
  - 图标旋转缩放
  - 标题变色
  - 按钮涟漪效果
- **按钮**: 悬停上移，点击下压反馈
- **主题切换**: 旋转动画
- **GitHub图标**: 旋转360度动画
- **滚动提示**: 底部引导箭头，弹跳动画

## 🎨 主题定制

在 `tailwind.config.js` 中修改主题颜色和配置。当前使用黑白灰主色调。

## 📄 License

MIT

## 👨‍💻 作者

冬月

