# 从本地作品集到 GitHub Pages

本文针对本人确认的账户 **S1aury** 与仓库 **S1aury.github.io**。网站已于 2026-10-23 发布：[https://s1aury.github.io/](https://s1aury.github.io/)。首次 Actions 的 build 与 deploy 均成功，首页和四个详情页已实际访问。下文保留完整配置教程，创建仓库与启用 Pages 的首次设置已完成。

本地 main 已跟踪 origin/main，初期本地历史保留在 local-initial-20261021 分支。此次发布通过已登录的 GitHub 网页提交；GitHub 插件的源码写入接口返回 403，因此未依赖它写入。以后使用命令行 push 时，如提示登录，使用正常的 GitHub / Git Credential Manager 登录流程；浏览器登录与命令行登录是不同的会话。

## 这些工具在项目里做什么

| 概念 | 在这个作品集中的用途 |
| --- | --- |
| Git | 在本地记录代码与文案版本。更改一个谜题说明后，可查看差异、保留旧版、撤销错误。没有网络也能提交。 |
| GitHub | 保存远程 Git 仓库、协作与执行自动构建的服务。Git 是工具，GitHub 是托管平台。 |
| Repository / 仓库 | 网站源码及版本历史的集合。这个仓库包含页面、Markdown、真实图片、工作流与说明。 |
| Commit / 提交 | 一次有说明的版本记录。例如“Add inventory design decision”。提交保存在本地，尚未自动上网。 |
| Branch / 分支 | 独立的修改线路。main 用于发布；较大的改版可先放到其他分支，检查后合并。 |
| Push / 推送 | 将本地提交上传远程。main 推送会触发本项目的发布工作流。 |
| Pull / 拉取 | 将远程提交取回并整合。本地与 GitHub 网页都改过文件时，先拉取，必要时解决冲突。 |
| GitHub Actions | 自动执行安装、检查、静态构建、上传产物和部署的工作流程。失败时查看具体步骤日志。 |
| GitHub Pages | 托管生成的 HTML、CSS、JS 与图片。它不运行数据库或 Astro 开发服务器。 |

浏览器打开网站时向 Pages 请求 HTML，再请求其引用的 CSS、JS、图片。Astro 在构建时把 Markdown 与组件转成普通静态文件，放入 dist；这些文件才是网站运行所需内容。

```text
本地编辑 → Git commit → GitHub push → Actions 检查与构建
        → 上传 dist 产物 → Pages 部署 → 浏览器访问
```

## 第一次运行

安装 Git 和 Node.js 24 LTS；Node 安装包含 npm。在项目文件夹打开终端：

```powershell
node --version
npm --version
git --version
npm ci
npm run dev
```

打开终端显示的 Local 地址。`npm ci` 按锁文件安装依赖，只需初次使用或依赖变化后执行。Ctrl+C 停止预览。

## 本地仓库

交付目录已初始化 main 分支，并使用本机现有身份提交初版。先检查状态：

```powershell
git status
git remote -v
```

首次提交前设置真实身份；不要用示例姓名邮箱。若不希望公开个人邮箱，使用 GitHub Settings → Emails 提供的 noreply 地址。

```powershell
git config user.name "你的提交显示名"
git config user.email "你选择的提交邮箱"
git add .
git diff --cached --stat
git commit -m "Build initial game design portfolio"
```

这里不使用 `--global`，只为本仓库设置身份。如果从 ZIP 解压导致没有 `.git`，先运行 `git init -b main`。`.gitignore` 会忽略 node_modules、dist、构建缓存和环境文件；不要删除它。

## 在 GitHub 创建和连接仓库

1. 登录 **S1aury**，检查 `S1aury.github.io` 是否已存在。若存在且有内容，先比较、备份与合并，不覆盖它，也不 force push。
2. 若不存在，新建同名 Public 仓库；本地已有 README，创建时不要额外初始化 README、许可或 .gitignore。
3. 本交付已将 origin 指向确认的目标。只有 origin 缺失时才运行 `git remote add origin https://github.com/S1aury/S1aury.github.io.git`。若指向其他位置，先核对原因。
4. 完成浏览器或 Git Credential Manager 的正常登录，不把密码或 token 放进代码和命令参数。
5. 执行：

```powershell
git push -u origin main
```

若拒绝推送，查看原因。身份认证失败需要登录；远程领先需要先整合远程改动。不要通过强制推送绕过。

## 启用 Pages 与验证上线

在仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。当前不是从分支发布 Jekyll 的方案。

工作流位于 `.github/workflows/deploy.yml`，main 每次 push 自动触发；也可在 Actions 中选择该工作流并 Run workflow。它使用 Node 24，按锁文件安装，执行 check、build、verify，再上传静态产物并部署。

依次核对：

1. GitHub Code 标签页出现最新提交：仅说明源码已推送。
2. Actions 中 build 成功：说明构建产物生成并上传。
3. deploy 成功并返回页面地址：说明 Pages 完成发布。
4. 用该地址实际访问首页和四个详情页，刷新详情页，核对样式、图片与导航：才说明页面可访问。

若工作流没有触发，检查分支是否是 main 和 workflow 是否存在；若 Pages 尚未启用，先修改 Source，再手动运行工作流。若 404，检查部署结果、站点路径及文件大小写；本地 Windows 不敏感的大小写错误在 Linux 构建环境可能暴露。

## 用户网站与项目网站

本仓库名称是 `S1aury.github.io`，对应用户网站：site 为 `https://S1aury.github.io`，base 为 `/`。

普通项目仓库的地址会多出 `/仓库名/`。此时 site 仍是账户域名，base 为 `/仓库名`。项目的所有自有页面和资源通过 `src/lib/paths.ts` 加上 base，正文图片使用相对路径。不要把实际用户名替换成教程示例。详见 README 中子路径验证命令。

## 日常更新

```powershell
git pull --ff-only
# 修改 Markdown、资料或图片
npm run dev
npm run check
npm run build
npm run verify
git diff
git add .
git commit -m "Add verified puzzle iteration evidence"
git push
```

`pull --ff-only` 遇到两边都有新提交时会停止，让你先处理分支差异。查看 git status 与冲突信息，不要直接丢弃改动。推送后查看 Actions，成功后刷新线上页面。

## 回退错误

先运行 `git diff` 查看尚未提交的修改。只在确认无需保留某个文件的改动后用 `git restore 文件路径`；它会丢弃该文件未提交的修改。

已经推送的错误用新提交撤销，保留历史：

```powershell
git log --oneline -5
git revert 需要撤销的提交ID
git push
```

revert 可能要求处理冲突；完成后仍需构建与查看部署。不要用 reset --hard 或 force push 作为日常回退方式。

## 将来自定义域名

暂不购买域名。将来拥有域名后，先按 GitHub 当前官方文档核对 DNS 要求；子域名通常用 CNAME 指向账户 GitHub Pages 域名，根域名需要官方当时列出的记录，不在本教程固定 IP。

在 Pages 设置填自定义域名，按文档验证域名所有权、配置 DNS、等待证书可用并启用 Enforce HTTPS。将 `astro.config.mjs` 的 site 改为完整 HTTPS 自定义域名，base 改为 `/`；在 `public/CNAME` 写一行实际域名，重新构建发布。检查首页、详情页、资源和 HTTPS。不要将私有证书或 DNS 账户凭据提交到仓库。

## 官方参考

本项目按 2026-10-21 可读取的官方说明配置：

- [GitHub Pages Quickstart](https://docs.github.com/en/pages/quickstart)
- [Publishing Source：自定义构建使用 Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Astro GitHub Pages 部署：workflow、site、base](https://docs.astro.build/en/guides/deploy/github/)
- [GitHub 自定义域名](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
