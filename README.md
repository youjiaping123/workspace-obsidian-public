# ROE's Blog

这是一个使用 Hugo 框架和 PaperMod 主题构建的个人博客项目。

## 项目结构

```
.
├── archetypes/          # 新文章的模板目录
├── content/            # 博客内容目录
│   ├── posts/         # 博文目录
│   ├── archives.md    # 归档页面
│   └── search.md      # 搜索页面
├── public/            # 构建后的静态文件目录
├── static/            # 静态资源目录
├── themes/            # 主题目录
│   └── PaperMod/     # PaperMod主题
└── hugo.yaml          # Hugo配置文件
```

## 主要功能模块

### 1. 内容管理
- 使用 Markdown 格式编写文章
- 支持文章分类和标签
- 自动生成文章目录
- 显示阅读时间

### 2. 界面功能
- 响应式设计
- 深色/浅色主题切换
- 文章目录导航
- 代码高亮显示
- 代码复制按钮

### 3. 导航功能
- 文章归档
- 站内搜索
- 文章导航
- 面包屑导航

### 4. 社交功能
- GitHub 链接
- RSS 订阅

## 配置说明

主要配置文件为 `hugo.yaml`，包含以下关键配置：

- 网站基本信息（标题、语言等）
- 主题设置
- 导航菜单
- 功能开关
- 社交链接

## 本地开发

1. 安装 Hugo
```bash
# macOS
brew install hugo

# Windows
choco install hugo-extended
```

2. 克隆项目
```bash
git clone --recurse-submodules https://github.com/yourusername/blog
```

3. 本地运行
```bash
hugo server -D
```

4. 创建新文章
```bash
hugo new posts/article-name.md
```

5. 构建网站
```bash
hugo
```

## 部署说明

网站可以部署到任何静态网站托管服务，如：
- GitHub Pages
- Netlify
- Vercel

## 技术栈

- Hugo: 静态网站生成器
- PaperMod: Hugo主题
- Markdown: 内容编写
- JavaScript: 搜索功能和主题切换
- CSS: 样式定制

## 许可证

[MIT License](LICENSE) 