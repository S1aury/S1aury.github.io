# 验证与发布状态

验证日期：2026-10-21。环境：Windows，Node 24.19.0，Astro 7.4.2。

## 已通过

- Astro / TypeScript 检查：0 errors、0 warnings、0 hints。
- 静态构建：生成首页、四个详情页和 404，共 6 个 HTML 页面。
- `scripts/verify-build.mjs`：本地页面链接、锚点、引用资源、基础 metadata、四个案例的八段结构。
- 同一检查在 `/` 和 `/portfolio-check` 两种 base 下通过；最终 dist 已恢复 `/`。
- 本地开发服务器成功启动，首页 HTTP 200；浏览器实际打开首页和四个案例页。
- 浏览器以 320、768、1440 像素宽度访问首页与四个案例页，共 15 组，未发现横向溢出。
- 390 像素手机视口实际检查：首页、原生菜单展开、点击 Work 后收起、Hell or Sell 卡片跳转、案例目录跳转、设计表格阅读。
- 桌面视口实际查看首页与项目区域，点击 View projects 后地址变为 #work，Work 导航状态更新。
- 资料审查：未添加团队规模、测试人数、评价、完成率、发布成果或未确认的个人具体贡献。缺失资料使用 TODO。
- 本地 Git main 仓库已初始化，origin 指向本人确认的 `https://github.com/S1aury/S1aury.github.io.git`。

## 发布阻塞

- 未认证的 GitHub 仓库 API 返回 404。这无法区分仓库不存在与私有仓库不可见。
- `git ls-remote` 未成功：本机 Git Credential Manager 的调用受到运行环境限制，之后无法读取用户名，未取得远程访问。
- GitHub 插件已发现，但尚未确认安装或连接。
- 未读取远程已有内容，未创建远程仓库，未 push，未运行远程 Actions，未确认 Pages 发布，未把预期地址当作已上线网站。
- 已使用本机现有 Git 提交身份完成初版 commit；未修改全局身份，也未编造邮箱。当前提交以 `git log` 为准。

## 验证边界

响应式检查使用桌面浏览器模拟视口，不等同于真实 iOS/Android 设备测试。已检查语义结构、焦点样式与减少动态效果的实现，未进行完整屏幕阅读器或 Lighthouse 审计。分享图已有 PNG，但未在社交平台验证抓取。

当前案例是可维护的内容初稿；设计决策、迭代证据、图片、简历和联系方式待本人补充，不能视为完整的招聘案例内容。

首次发布剩余步骤见 `GITHUB_GUIDE_ZH.md`：确认远程内容 → 登录 → 设置真实提交身份 → commit / push → Pages Source 选 GitHub Actions → 核对 build / deploy → 实际访问。
