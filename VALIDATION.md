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

## 发布记录（2026-10-23）

- 已创建公开仓库：https://github.com/S1aury/S1aury.github.io 。
- 已通过本人登录的 GitHub 网页上传源码与资源，初次上传的 36 个文件与本地文件逐一核对，Git blob SHA 全部一致。
- Pages Source 已保存为 GitHub Actions；默认域名使用强制 HTTPS。
- 首次 Astro 工作流：https://github.com/S1aury/S1aury.github.io/actions/runs/40049147632 。build 与 deploy 均成功。
- 首页、四个项目详情页、social.png、favicon.svg 均通过 HTTPS 返回 HTTP 200，页面包含正确作品集内容。
- 正式网站：https://s1aury.github.io/ 。
- 本地 main 已跟踪 origin/main；原本地初版历史保留为 local-initial-20261021 分支。
- GitHub 插件能读取新仓库，但 create_blob 与 create_file 的写入返回 403；本次通过已登录网页完成发布，没有读取或创建凭据。此限制未阻断网页发布，后续命令行 push 仍可能需要正常登录。

## 验证边界

响应式检查使用桌面浏览器模拟视口，不等同于真实 iOS/Android 设备测试。已检查语义结构、焦点样式与减少动态效果的实现，未进行完整屏幕阅读器或 Lighthouse 审计。分享图已有 PNG，但未在社交平台验证抓取。

当前案例是可维护的内容初稿；设计决策、迭代证据、图片、简历和联系方式待本人补充，不能视为完整的招聘案例内容。

日常修改与发布步骤见 `GITHUB_GUIDE_ZH.md`。后续提交到 main 将自动构建和部署。


## 2026-10-26 素材与案例更新

- Astro / TypeScript 检查：0 errors、0 warnings、0 hints。
- 静态构建：6 页成功；内部链接、资源、锚点、元信息及四个案例结构检查通过。
- 浏览器确认现有版本 MP4 可解码、播放至结束：1920×1080，约 5.18 秒。原件未修改。
- 390px 手机预览：案例正文和完整截图无横向溢出；三张图片成功加载。
- 四张源截图有两张内容完全相同（SHA-256 一致），只接入三张独立 WebP，不裁切游戏 UI。
- 公开英文简历保留原 PDF；中文版不进入仓库或网站，居住区信息不写入页面。
- 项目时间按中文简历及用户最新确认修正。教育时间保留此前单独确认版本；两段实习按最新说明保留为 2025、2026 年各 6–9 月。
- Hell or Sell 新方向为待实现和待测试方案；当前截图与视频不作为重构完成证据。
