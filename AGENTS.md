# Codex 工作规则｜Beiming Xu Portfolio

> 本文件必须短。只在任务确实涉及相应领域时，按需读取 `docs/PROJECT_CONTEXT.md`、`docs/CONTENT_STATUS.md` 或仓库已有指南；不要每次完整读取所有文档。

## 优先级
1. 用户本次的明确要求。
2. 当前仓库实际源码、运行结果及已验证素材。
3. `docs/PROJECT_CONTEXT.md` 的稳定项目背景。
4. `docs/CONTENT_STATUS.md` 的内容状态和待确认事项。
5. `CONTENT_GUIDE_ZH.md`、`README.md`、`VALIDATION.md` 的相关章节（其中部分历史描述可能过时）。

如信息冲突，先查当前源文件，不要自行猜测事实；涉及日期、实习贡献、成果或身份的矛盾，标记需要本人确认，不擅自覆写。

## 工作范围和 Token 控制
- 先定位任务所涉文件，再读取必要片段；不为局部 UI 变化通读全部项目案例、历史日志或完整仓库。
- 小修改只改相关区域；不要顺手重构、重写文案或改动其他页面。
- 不重复运行等价命令；保留最近一次执行结果。在需要时进行检查，避免省略关键验证。
- 在同一任务中复用已读取的上下文。新任务只查增量信息；无需先总结整站。
- 优先使用现有 Astro、CSS 和 Markdown 结构；未经要求不引入 UI 框架、依赖或复杂构建配置。
- 不生成与已有指南重复的大段说明，不把临时思考过程写进文档。

## 内容与公开边界
- 网站展示英文；维护说明可使用中文。
- 明确区分已实现、正在制作、计划中、测试后观察和假设。
- 不编造玩家测试数据、成果、团队规模、设计过程、个人贡献或可玩链接。
- 米哈游相关信息仅使用已批准公开的文字和截图；不上传内部文件或含保密信息的资料。
- 保留现有项目、图片、视频、导航与部署方式，除非任务明确要求修改。

## 检查规则
- 修改 TypeScript、Astro、布局/样式等代码后，按影响范围执行 `npm run check` 和适当的预览或构建验证。
- 修改静态路径、媒体引用、页面路由或内容结构后，执行 `npm run build && npm run verify`。
- 仅修正文档时，通常不需要构建网站。
- 不声称测试通过，除非已实际执行；没有执行则准确说明。

## 按需定位
- 首页与栏目结构：`src/pages/index.astro`
- 个人资料、实习：`src/data/profile.ts`
- 案例文字/顺序：`src/content/projects/*.md`
- 案例字段校验：`src/content.config.ts`
- 全局视觉：`src/styles/global.css`；首页还有局部 `<style>`
- 公用布局、SEO、导航：`src/layouts/Layout.astro`
- 资源：`public/images/`、`public/videos/`、`public/resume/`
- 发布与验证：`.github/workflows/deploy.yml`、`scripts/verify-build.mjs`
