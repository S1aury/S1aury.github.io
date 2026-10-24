# Beiming Xu — Game Design Portfolio

Astro 静态作品集。英文页面，中文维护说明，无服务器、数据库或前端框架依赖。正式目标仓库由本人确认为 `S1aury/S1aury.github.io`，网站已于 2026-10-23 发布到 [https://s1aury.github.io/](https://s1aury.github.io/)。

## 本地运行

安装 Node.js 24 LTS（包含 npm），在本目录打开终端：

```powershell
npm ci
npm run dev
```

打开终端输出的 Local 地址（通常为 `http://localhost:4321/`）。停止服务使用 Ctrl+C。

当前交付目录已安装依赖，在 Windows 中也可双击 `START_LOCAL.cmd` 启动；它优先使用已安装的 Node，并兼容本机 Codex 自带 Node。源码 ZIP 不含依赖，解压后仍需先 `npm ci`。

```powershell
npm run check
npm run build
npm run verify
npm run preview
```

`check` 检查 Astro 和 TypeScript；`build` 生成 `dist/`；`verify` 检查生成页面的内部链接、锚点、静态资源与案例结构；`preview` 浏览构建结果。`npm ci` 使用已锁定的依赖版本，不会自动升级。

## 结构

```text
src/content/projects/  四个 Markdown 案例；frontmatter 管理卡片信息
src/content.config.ts  内容字段与校验
src/data/profile.ts    已确认的个人信息、联系方式和其他项目名称
src/pages/             首页、案例动态静态生成路由、404
src/components/        项目卡片、媒体占位组件
src/layouts/           共享页面、导航、SEO、交互
src/styles/            响应式设计变量与样式
src/lib/paths.ts       所有本地资源和页面路径统一添加 base
public/images/         按项目分目录存放真实截图
public/resume/         经本人确认可公开的 PDF 简历
.github/workflows/     main 分支自动构建发布
scripts/               构建产物检查
```

## 页面与设计

首页：Hero → Selected Projects / Other Projects → Design Thinking → Production → Experience → About / Contact。四个案例分别位于 `/projects/hell-or-sell/`、`/projects/which-witch/`、`/projects/waltz-of-weights/`、`/projects/ratoolight/`。

暖白纸感、深色文字、橙色强调；不使用第三方字体或重型动画。CSS 几何占位与真实素材明确区分。菜单使用原生 details，关闭 JavaScript 仍能导航与阅读。支持键盘焦点、跳过导航和减少动态效果。

详细发布教程见 `GITHUB_GUIDE_ZH.md`；内容更新见 `CONTENT_GUIDE_ZH.md`；待补材料见 `TODO_CONTENT.md`。验证记录见 `VALIDATION.md`。

## 路径与域名

当前 `site=https://S1aury.github.io`、`base=/`。切换为项目网站时，使用 `SITE_URL` 和 `BASE_PATH` 环境变量，或修改 `astro.config.mjs` 默认值。

```powershell
$env:BASE_PATH='/portfolio-check'
npm run build
npm run verify
Remove-Item Env:BASE_PATH
npm run build
```

仅改变 base 不会改变 GitHub 的仓库或 Pages 设置。正式迁移时应同时更新部署配置和仓库。Actions 采用 Astro 官方文档当前示例中的 action 主版本，依赖精确版本见 `package-lock.json`。

## 资料范围

所有事实来自用户提供的 brief 和已确认的 GitHub 账户。素材、完整设计决策和测试数据尚未提供，因此初版是可运行的内容框架，不代表案例叙述已经完成。
