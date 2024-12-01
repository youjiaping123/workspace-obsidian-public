---
title: "Git 实用技巧总结"
date: 2024-01-22
tags: ["Git", "技术", "版本控制"]
categories: ["技术"]
---

## Git 常用命令

Git 是现代软件开发中最重要的工具之一，这里总结一些实用的 Git 技巧。

### 分支管理

```bash
# 创建并切换分支
git checkout -b feature/new-branch

# 合并分支
git merge feature/new-branch

# 删除分支
git branch -d feature/new-branch
```

### 提交管理

```bash
# 修改最后一次提交
git commit --amend

# 撤销最后一次提交
git reset HEAD~1
```

### 高级技巧

1. 使用 git stash 暂存修改
2. 使用 git rebase 整理提交历史
3. 使用 git cherry-pick 选择性合并 