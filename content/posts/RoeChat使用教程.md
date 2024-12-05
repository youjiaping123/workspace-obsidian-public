---
title: RoeChat使用教程
share: "true"
categories: Blog
tags:
  - AI
  - GPT
  - NextChat
description: RoeChat是基于NextChat私有化部署版，支持各类主流AI大模型调用。
author: ROE
dir: posts
date: 2024-12-05T06:57:51+08:00
showToc: "true"
ShowReadingTime: "true"
ShowWordCount: "true"
ShowRssButton: "true"
UseHugoToc: "true"
---
![image.png](https://s2.loli.net/2024/12/05/KGiPqLEDhzn21OH.png)
# 快速入门
- 准备好你的访问密码
- 访问地址:[NextChat](https://chat.roefruit.com/)
![image.png](https://s2.loli.net/2024/12/05/GKBMVmoAzTrguc5.png)
- 点击直接开始。
![image.png](https://s2.loli.net/2024/12/05/oXUKudimjYaqz5c.png)
- 点击蓝字进入密钥设置界面。
![image.png](https://s2.loli.net/2024/12/05/PXhG2lv5D9OQmTs.png)
- 我们是私有部署版本，只需填写访问码，OpenAI密钥和GoogleAI密钥留空点击确认即可。
![image.png](https://s2.loli.net/2024/12/05/g8hlUvBrPYTQ9qx.png)
- 至此，基础配置结束，默认使用模型为gpt-4o-mini，点击小机器人图标可更改模型



# 常用模型
| **模型（Model）**       | **请求（Input）**               | **回答（Output）**     | **是否支持** | **特点**                                                   |
| ------------------- | --------------------------- | ------------------ | -------- | -------------------------------------------------------- |
| gpt-3.5-turbo       | 0.0035 / 1K Tokens          | 0.0105 / 1K Tokens | 支持       | 默认模型                                                     |
| gpt-4               | 0.21 / 1K Tokens            | 0.42 / 1K Tokens   | 支持       | 默认模型                                                     |
| gpt-4-turbo-preview | 0.07 / 1K Tokens            | 0.21 / 1K Tokens   | 支持       | 默认模型，支持输入128K，输出最大4K，知识库最新2023年4月, 此模型始终指向最新的4的preview模型 |
| gpt-4o              | 0.0175/1K Tokens + 图片费用[2]  | 0.07/1K Tokens     | 支持       | Openai 价格更低, 速度更快更聪明,指向最新版的4o版本，支持读图，日常使用推荐              |
| gpt-4o-mini         | 0.00105/1K Tokens + 图片费用[2] | 0.0042/1K Tokens   | 支持       | Openai 最新模型,价格低，回复速度快，支持读图适合简单任务。                        |
| o1-mini             | 0.021 / 1K Tokens           | 0.084 / 1K Tokens  | 支持       | 针对复杂任务的新推理模型                                             |
| o1-preview          | 0.105 / 1K Tokens           | 0.42 / 1K Tokens   | 支持       | 针对复杂任务的新推理模型, 迄今为止最强大的模型                                 |
| claude-3-5-sonnet   | 0.015 / 1K Tokens           | 0.075 / 1K Tokens  | 支持       | claude的模型，长上下文，拥有极好的文本及代码能力。                             |

