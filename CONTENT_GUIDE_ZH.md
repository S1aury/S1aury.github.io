# 内容维护

## 修改首页与个人信息

`src/data/profile.ts` 保存姓名、介绍、教育、GitHub、Email、LinkedIn 和简历路径。未确认的联系方式留空，页面显示待补，不会生成假地址。简历放入 `public/resume/`，将 `resume` 改为 `resume/Beiming-Xu-Resume.pdf`。它是公开文件，先确认内容可公开。

首页主体在 `src/pages/index.astro`；若新增经历，修改 Experience 对应行。不要把目标、工作框架写成所有项目均已发生的事实。删除 TODO 前补上对应证据。

## 修改项目

每个项目使用 `src/content/projects/` 内的 Markdown 文件。文件名决定 URL，如 `hell-or-sell.md` → `/projects/hell-or-sell/`。

文件开头 `---` 之间是卡片信息：

```yaml
title: Hell or Sell
order: 1
genre: Inventory & economy
role: Lead Designer / Project Manager
summary: 用真实资料写的一句话英文简介。
focus: [System Design, Game Economy]
accent: rust
# 有资料后取消下列行的注释：
# year: '2024'
# image: images/hell-or-sell/cover.webp
# imageAlt: 描述真实画面及其设计信息的英文替代文字
# links:
#   - label: Playable build
#     url: 已确认的完整 HTTPS 地址
```

`order` 数字越小越靠前；可用 `rust`、`violet`、`olive`、`blue` 四种占位配色。不要在 `links` 中填入未确认的示例地址；留空就不展示按钮。角色尚未确认时继续标明 TODO。

## 替换截图

1. 把实际截图放入 `public/images/项目文件名/`。
2. frontmatter 添加 `image` 和 `imageAlt`，路径不带开头 `/`，不包含 `public/`。
3. 建议封面宽 1440px 左右，使用 WebP，控制文件大小；封面按约 3:2 裁切，详情页宽幅封面裁切不同，必要时调整组件。
4. 运行构建和 `verify`，错误路径会让检查失败。删除 image 字段会恢复明确标注的占位区域。

占位几何图形不是游戏素材，不应改成足以误认为游戏画面的装饰。首次上线前应优先补主项目真实截图。

正文图片的 base 兼容写法：从案例 `/projects/项目名/` 使用 `../../images/项目名/截图.webp`。例如：

```markdown
![Describe the actual rule or level shown](../../images/hell-or-sell/decision.webp)
```

## 编辑案例正文

`---` 后为 Markdown。八个二级标题作为基础结构，自动生成侧栏目录。可以增加新的 `##` 部分，也可以使用 `###` 子标题。修改正文无需编辑页面组件。

设计决策尽量写：问题 → 比较过的方案 → 决定 → 原因 → 代价。把本人贡献和团队贡献分开；把目标、假设、实际观察和结果分开。不要把文档收集问题变成已发生的设计过程。

支持普通段落、列表、表格、图片和 `<details><summary>…</summary><p>…</p></details>` 折叠材料。正文不直接提供视频文件字段；可在 `links` 中加入真实 Gameplay Video 地址，或在正文添加经过确认的链接。不要自动播放视频。

## 添加新项目

复制一份已有 Markdown 到同一目录，使用英文小写连字符文件名，更新所有 frontmatter 和正文，避免残留其他项目事实。设置不同的 order。首页卡片、独立详情页和下一项目链接自动生成。

Other Projects 只是资料待整理的名称列表，位于 `profile.ts` 的 `otherProjects`。新增完整项目后可从这里移除。不要给未完成的项目添加完成年份或成果。

## 分享信息

页面标题和描述自动来自项目内容。默认分享图为 `public/social.png`，其可编辑源文件为 `public/social.svg`。修改 SVG 后需重新导出 PNG，或用新的真实 PNG 替换。图标位于 `public/favicon.svg`。更改色彩与间距集中编辑 `src/styles/global.css` 的变量和样式。

## 每次更新后

运行 `npm run check`、`npm run build`、`npm run verify`。在桌面和手机宽度检查长标题、图片裁切和目录，确认 TODO、角色与证据准确，再 commit 和 push。不要把 node_modules、dist、凭据或不宜公开的实习文件加入仓库。

## Internship 栏位

首页顺序为姓名介绍 → Internship → Selected Projects。导航包含 Internship。实习内容集中在 `src/data/profile.ts` 的 `internship` 对象，字段包括公司、参与项目、职位、日期、职责数组和活动数组。

`responsibilities` 每项写一条本人实际负责的工作；`activities` 每项包含 `title`、`summary`、`contribution`，分别说明活动名称、活动内容与本人贡献。空数组会显示 TODO；未提供的时间不推测。添加活动不需要修改组件。

优先提供 1–2 个可以公开的具体活动，每个活动说明目标、本人工作、关键取舍及已知结果。有可公开截图或链接时再接入，未公开或保密资料不上传。目前已确认公司为 MiHoyo（米哈游），参与项目为 Genshin Impact，职位为 Game Systems Design Intern；具体活动、职责和时间待补。
