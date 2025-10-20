# AI对话增强插件

## ✨ 主要功能

- 集成 GPT-4、Claude 等先进 AI 模型
- 上下文记忆功能
- 个性化回复定制
- 多轮对话支持
- 情感分析和理解

## 🚀 快速开始

1. 下载插件到 `plugins/ai-chat`
2. 配置 AI API 密钥
3. 重启 Astrabot
4. 使用 `/ai 问题` 开始对话

## ⚙️ 配置说明

需要配置 AI 服务的 API：

```json
{
  "model": "gpt-4",
  "api_key": "your_api_key",
  "temperature": 0.7,
  "max_tokens": 2000
}
```

## 📝 使用示例

- `/ai 你好` - 开始对话
- `/ai reset` - 重置对话上下文
- `/ai 帮我写一首诗` - AI 创作

