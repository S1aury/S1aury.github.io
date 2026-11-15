# Project Context｜作品集网站稳定背景

更新：2026-11-03。基于公开仓库与本人提供的 Portfolio Content Revision；本人已确认本轮修订并授权发布。实现状态以当前源码为准。

## 目标与定位
- 英文游戏设计作品集，面向美国游戏行业招聘者，也供项目负责人和申请评审阅读。
- 主定位为 **Systems & Gameplay Designer**；Level Design 是核心方向之一。Game Direction 是发展方向；历史 Production / Scope Management 经历保留在具体项目中，不作为主要职业兴趣。
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
保留首页 Hero → Internship → Selected Work → Design Thinking → Game Direction → Experience → About & Contact，以及五个案例路由。

| 层级 | 项目 | 本人确认的定位与事实 |
| --- | --- | --- |
| 职业主案例（首页实习模块） | miHoYo / Genshin Impact | 已上线弹幕活动的敌人移动、弹幕与交互设计；已上线 TCG 角色卡的设计、JSON/编辑器配置、内部测试与平衡调整；UGC 配置、验收与协作 |
| 主案例 | Hell or Sell | Game Director / Systems Designer / Producer；12 人；已发布 itch.io；背包、经济、空间限制与范围管理；限时消除仅为后续探索 |
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

- 04 已按本人要求改为 Game Direction：关注游戏的表现、整体体验与核心乐趣；不再以 Producer、排期或落地管理为栏目主线。Game Director 是职业方向；Hell or Sell 角色按本人最新确认加入 Game Director。不得将此延伸为公司实习职位。

## 当前本地预览改版（未发布）
- 用户要求先完成可预览版，禁止公开发布；本轮不得 push 或网页提交 main。
- 首屏提高姓名辨识度，突出 Systems Design / Game Direction / Level Design，加入真实 RatO.oLight 视频。主作品提前到实习之前。
- Hell or Sell 按本人最新确认加入 Game Director，保留 Producer 实际经历；不改 PDF 简历。
- 实习按弹幕、TCG、UGC顺序；采用画面、个人贡献和已知判断/验证标准。标注不能代表具体卡牌归属或整套系统所有权。
- 案例统一四段叙事，提前放视频；背包图为明确标注的概念示意，未当作历史版本、有效解法或测试结果。

## 2026-11-14 最新阅读结构（本地未发布）
首页为 Hero → 实习摘要 → Selected Work（HOS、Rat 并列主案例；Waltz、Humanize、Which Witch 辅助）→ 两个 Design in Practice 入口 → About / Contact（含教育）。完整实习内容在 /internship/，取消首页重复履历与 Direction。项目开头统一玩法、实际画面、贡献/团队/时间/平台状态和真实资源入口；目录按内容区分，不扩展统一八节。图片放大使用原生 dialog，原图链接保留无 JS 回退；多视频互斥播放。旧 production / experience 锚点作为兼容别名保留。

## 2026-11-15 最新项目主次
RatO.oLight 为第一代表作，原 Multiplayer Capstone 正式命名 We’ll Be Right Back 并列为第二主案例，Hell or Sell 第三。原首页开发中预告移除；新案例的原型、集成中和未来计划分别标明。新项目具体角色与事实以本人这次表格为准，待补见 CONTENT_STATUS。继续仅本地预览。

最新 build 更新：We’ll Be Right Back 为十月初至今、10 人、Unity / PC，Steam 联机/数据同步/局内语音/主副任务/部分异变已可游玩，仍在制作优化。首页使用实机封面，案例按本人顺序列五张真实开发截图。图片不等同于本人美术/程序署名。首页实习摘要同时显示 TCG / UGC 小图；栏目名称按本人要求改为 Personal Project。动效只用原生 Web Animations 与 CSS，无新依赖，支持减少动态效果。

封面更新：Rat 与 We’ll Be Right Back 使用本人指定的 coverImage/coverAlt，独立于案例实机 image；完整显示，不裁掉标题。Astro dev 曾在 schema 新增字段后读取旧内容缓存；停止服务、移除可再生的 .astro/data-store.json 再启动可解决，build 已包含正确内容。

阅读节奏最新偏好：恢复原版 1240px max / 桌面 112px 总边距、较大文字与留白，项目逐项横排（移动端上下排），不再用主项目双列/辅助项目三列密集网格。原 05 Experience 改为首屏与实习之间的导航概览，避免重复履历；完整经历仍在实习详情、About 和 Resume。首页实习继续摘要+小图，不恢复长职责。其他栏目与已确认内容保留，仅本地。

首页实习预览最新要求：TCG/UGC 逐行大图，桌面图宽与 Rat 项目图片列一致（1.35fr / 1fr、64px gap），详情入口独立一行；禁止恢复小缩略图。实习暖灰底、Design in Practice 浅灰绿底、About 浅暖灰底作为全宽板块区分。

最新首页纠正：按本人参考图恢复 HEAD 的纯文字首屏，不再首屏放视频；概览菜单移回 Design in Practice 后、About 前。首页实习两张大图为 TCG 与 Released 2D Bullet-Dodging Gameplay，UGC 仅保留独立实习详情。We’ll Be Right Back itch 页面为 https://moonchaserlu.itch.io/well-be-right-back 。保持大图、较大正文、板块浅底色；继续仅本地，待本人明确要求才更新线上。

最新局部视觉调整：Design in Practice 改用本人指定的 Rat 成品灯光截图与 HoS 售卖阶段截图，不再用早期原型缩图；miHoYo logo 改为横幅大图列，移动端整行展示。正文/导航/说明文字在当前宽松布局上小幅增加，不缩回小字。

最新修正：miHoYo logo 在上一版基础上缩小一半（桌面上限450px、窄屏50%宽）。网站英文简历原样替换为本人新提供的 Desktop/USC研究生申请/Beiming Xu Resume.pdf；仅更新本地下载文件，不按简历改写其他文案，未发布。

首页实习展示以最新要求为准：logo 桌面上限340px，TCG 与弹幕图在桌面并排两列、标题和详情链接位于各自图片下方；移动端单列。保持现有大字号及浅底色，缩短首页实习篇幅。取代此前逐行图文横排要求。

滚动动效：使用原生 IntersectionObserver + Web Animations，一次性 24px 上移淡入、700ms；选择器匹配恢复后的文字首屏、实习两卡及项目/菜单/联系模块。prefers-reduced-motion 禁用，并在触发时再次检查。没有将未触发内容预先隐藏。
