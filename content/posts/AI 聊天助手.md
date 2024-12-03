---
title: AI 聊天助手
share: "true"
categories: Blog
tags:
  - GPT
  - AI
  - Github
description: 一个用python写的简单的聊天助手，支持语音对话。
author: ROE
dir: posts
date: 2024-12-03T10:52:32+08:00
showToc: "true"
ShowReadingTime: "true"
ShowWordCount: "true"
ShowRssButton: "true"
UseHugoToc: "true"
---
Github地址:[youjiaping123/ezchatbot](https://github.com/youjiaping123/ezchatbot)
## 功能特点

- 💬 支持文本对话
- 🎤 支持语音输入（Speech-to-Text）
- 🔊 支持语音输出（Text-to-Speech）
- 💾 自动保存对话历史
- ⚙️ 可配置的模型参数
- 🌐 支持中文交互

## 系统要求

- Python 3.8+
- 麦克风（用于语音输入）
- 音频输出设备（用于语音播放）
- OpenAI API 密钥
- Azure 语音服务密钥

## 安装步骤

1. 安装必要的Python包：
```bash
pip install openai python-dotenv azure-cognitiveservices-speech
```

2. 配置环境变量：
   创建 `.env` 文件并填入以下内容：
```bash
OPENAI_API_KEY=你的OpenAI_API密钥
OPENAI_API_BASE=你的API基础URL
SPEECH_KEY=你的Azure语音服务密钥
SPEECH_REGION=你的Azure语音服务区域
```

## 详细使用教程

### 1. 基础文本对话
1. 启动程序：
```bash
python chat_bot.py
```

2. 直接输入文本进行对话：
```
你: 你好
AI助手: 你好！有什么我可以帮你的吗？
```

### 2. 语音交互
1. 切换到语音模式：
```
你: voice
已切换到语音输入模式
```

2. 开始说话（等待提示音后）：
```
请说话...
你: [语音输入] 今天天气怎么样？
AI助手: [语音回复] 我是AI助手，无法直接获取天气信息...
```

3. 返回文本模式：
```
你: text
已切换回文本输入模式
```

### 3. 高级功能

#### 配置文件使用
可以通过修改 `bot_config.json` 自定义机器人行为：

```json
{
    "name": "AI助手",
    "lang": "cn",
    "modelConfig": {
        "temperature": 0.7,    // 更高的值使回答更有创意
        "historyMessageCount": 4,  // 记忆的对话轮数
        "max_tokens": 2000     // 回复的最大长度
    }
}
```

#### 常用命令
- `voice`: 切换到语音模式
- `text`: 切换到文本模式
- `quit` 或 `exit`: 结束对话
- Ctrl+C: 强制退出程序

### 4. 使用技巧

1. 对话上下文
- 机器人会记住对话历史
- 可以参考之前的对话内容
- 历史记录会自动保存

2. 语音交互建议
- 在安静的环境中使用
- 说话清晰，语速适中
- 等待提示音后再说话

3. 性能优化
- 适当调整历史消息数量
- 根据需求调整temperature值
- 合理设置max_tokens

## 常见问题解答

### 1. 语音识别问题
Q: 为什么语音识别没有反应？
A: 检查：
- 麦克风是否正常工作
- 是否授予了麦克风权限
- Azure语音服务配置是否正确

### 2. API相关问题
Q: 出现API错误怎么办？
A: 检查：
- API密钥是否正确
- 网络连接是否正常
- API额度是否充足

### 3. 配置问题
Q: 修改配置后不生效？
A: 确保：
- 正确保存了配置文件
- 配置文件格式正确
- 重启程序使配置生效

## 项目结构

```
聊天机器人/
├── chat_bot.py    # 主程序
├── TTS.py         # 文字转语音模块
├── STT.py         # 语音转文字模块
├── .env           # 环境变量配置
└── bot_config.json # 机器人配置文件
```
