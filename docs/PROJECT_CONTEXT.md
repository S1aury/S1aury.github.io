# Project Context｜作品集网站稳定背景

更新：2026-11-03。基于公开仓库与本人提供的 Portfolio Content Revision；本人已确认本轮修订并授权发布。实现状态以当前源码为准。

## 目标与定位
- 英文游戏设计作品集，面向美国游戏行业招聘者，也供项目负责人和申请评审阅读。
- 主定位为 **Systems & Gameplay Designer**；Level Design 是核心方向之一。Production / Scope Management 是差异化能力，不取代游戏设计身份。
- 通过具体设计问题、个人决定、实际贡献和交付内容证明能力。既说明规则，也说明玩家选择与体验。
- 不编造测试、效果、贡献或未完成系统，不用重复免责声明削弱已完成工作。

## 架构与定位文件
- 仓库：`https://github.com/S1aury/S1aury.github.io`；正式网站：`https://s1aury.github.io/`。
- Astro 7.4.2 静态构建、TypeScript 6.0.3、原生 CSS、Markdown 内容集合。无数据库和额外 UI 框架。
- Node >=22.12；工作流使用 Node 24、npm。`main` push 会触发 GitHub Pages 发布，未经明确授权不要推送到 `main`。
- `astro.config.mjs`：`site=https://S1aury.github.io`、`base=/`、`trailingSlash=always`。
- 首页及直接书写的文案：`src/pages/index.astro`；个人资料与实习：`src/data/profile.ts`。
- 项目：`src/content/projects/*.md`；schema：`src/content.config.ts`；共用详情：`src/pages/projects/[id].astro`。
- `tier` 区分 `main` / `supporting`，`order` 控制卡片、经历和下一项目顺序。
- 视觉：`src/styles/global.css`；布局、SEO、导航：`src/layouts/Layout.astro`。
- 素材：`public/images/`、`public/videos/`、`public/resume/`。
- 验证：`npm run check`、`npm run build`、`npm run verify`。纯文档修改通常无需构建。

## 页面与内容层级
保留首页 Hero → Internship → Selected Work → Design Thinking → Production & Leadership → Experience → About & Contact，以及五个案例路由。

| 层级 | 项目 | 本人确认的定位与事实 |
| --- | --- | --- |
| 职业主案例（首页实习模块） | miHoYo / Genshin Impact | 已上线弹幕活动的敌人移动、弹幕与交互设计；已上线 TCG 角色卡的设计、JSON/编辑器配置、内部测试与平衡调整；UGC 配置、验收与协作 |
| 主案例 | Hell or Sell | Producer / Lead Game Designer；12 人；已发布 itch.io；背包、经济、空间限制与范围管理；限时消除仅为后续探索 |
| 主案例 | RatO.oLight | Lead Game Designer / Level Designer；唯一 Game Designer；8 人、3 周、10 个亲自在 Unity 搭建的 rooms、约 15 分钟完整体验 |
| 辅助项目 | Waltz of Weights | Gameplay Designer / Level Designer；3 人、3 天；双角色、三重量、快速原型；已发布 itch.io |
| 辅助项目 | Which Witch Is Gonna Be Rich? | 唯一 Game Designer；十几人、约一个 academic quarter；经营循环、经济和三天竞争目标；仅部分系统与基础内容落地 |
| 辅助项目 | Humanize | Game Designer；提出核心创意，不声称唯一策划；约 6–7 人、48 小时；表情、时间与精力约束；已发布 itch.io |
| 未来主案例（简短预告） | Multiplayer Capstone | 开发中；networking、voice chat、基础 gameplay 已实现；完整怪物、地图生成、异变机制不得写成已完成 |

## 视觉与交互
- 暖白纸感、深色文字、低饱和赭橙、留白与结构化标题。
- CSS：`--paper: #f5f3ed`、`--ink: #252620`、`--muted: #686960`、`--line: #d5d5ca`、`--orange: #a33f24`、`--max: 1240px`。
- Arial / Helvetica / sans-serif，无外部字体。保留导航、响应式、焦点、减少动态效果、非自动播放视频和无 JS 阅读。
- 本轮仅允许更长主标题换行，并为新增 TCG 段落加局部文字样式；不改变整体视觉系统。
- 保留真实媒体、链接和有解释意义的游戏 UI，不将占位图伪装成游戏截图。

## 按需参考
`README.md` 为运行说明；`CONTENT_GUIDE_ZH.md` 为维护流程；`TODO_CONTENT.md` 和 `VALIDATION.md` 含历史状态。待补内容以 `docs/CONTENT_STATUS.md` 和当前源码为准，不通读所有日志。

## 创作动机（本人最新确认）
- 享受制作游戏的过程，认为制作有趣的游戏本身也有乐趣。
- 重视游戏带来的开心、欢乐、学习与感悟；希望成长为成熟的系统策划，并在自己的项目中担任 Game Director。这是发展目标，不作为已任职头衔。
