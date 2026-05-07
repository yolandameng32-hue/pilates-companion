# 普拉提备课台 · Pilates Companion PWA

口袋里的普拉提教练助手 —— 动作库、体态方案、备课工具，可装到 iPhone/Android 主屏当 App 用。

## 📦 这个文件夹里有什么

```
pilates-pwa/
├── index.html          ← 主页面
├── app.js              ← 应用逻辑 + 数据库
├── manifest.json       ← PWA 配置
├── sw.js               ← 离线支持
├── icons/              ← App 图标（多尺寸）
│   ├── icon-180.png    ← iOS
│   ├── icon-192.png    ← Android
│   ├── icon-512.png    ← 通用大图
│   └── ...
└── README.md           ← 这个文件
```

---

## 🚀 部署到 GitHub Pages（详细步骤）

### 第一次操作（约 10 分钟）

#### 1. 注册 GitHub 账号
访问 https://github.com 注册一个账号（免费）。

#### 2. 创建仓库
- 登录后点右上角 `+` → **New repository**
- Repository name 填：`pilates-companion`（或你喜欢的名字）
- 选 **Public**（公开，免费版必须公开才能用 Pages）
- 勾选 **Add a README file**
- 点 **Create repository**

#### 3. 上传文件
- 进入新建的仓库页面
- 点 **Add file** → **Upload files**
- 把 `pilates-pwa` 文件夹里**所有文件和子文件夹**拖进去（包括 `icons` 目录）
- 滚到下面，点绿色 **Commit changes** 按钮

> ⚠️ 注意：拖文件夹时，确保文件结构是 `index.html` 在根目录，而不是嵌套在另一个文件夹里。

#### 4. 启用 GitHub Pages
- 仓库页面顶部点 **Settings**
- 左侧菜单找到 **Pages**
- 在 **Build and deployment** 下：
  - Source 选 **Deploy from a branch**
  - Branch 选 **main**，文件夹选 **/ (root)**
  - 点 **Save**

#### 5. 等待部署 + 拿到网址
- 约 1-2 分钟后，页面顶部会显示绿色提示：
  > Your site is live at `https://你的用户名.github.io/pilates-companion/`
- 复制这个网址

---

## 📱 装到手机（变成 App）

### iPhone（必须用 Safari 浏览器）

1. 用 Safari 打开你的 GitHub Pages 网址
2. 点底部 **分享按钮**（中间那个方框带向上箭头）
3. 滑动找 **添加到主屏幕**
4. 点 **添加** → 桌面就有图标了
5. 点图标打开就是全屏模式，没有浏览器地址栏，跟原生 App 一样

### Android（用 Chrome）

1. 用 Chrome 打开网址
2. 网页顶部会自动弹出 **"添加到主屏幕"** 提示，点 **安装**
3. 如果没弹出：右上角菜单 ⋮ → **添加到主屏幕** / **安装应用**

---

## 🔄 之后怎么更新内容

每次想改东西（比如让 AI 加新动作、改口令）：

1. 让 Claude 给你新的 `app.js`（数据都在这个文件里）
2. 在 GitHub 仓库点开 `app.js`
3. 点右上角铅笔图标 ✏️ 编辑
4. 全选删除原内容，粘贴新内容
5. 滚到底，点 **Commit changes**
6. 等 1-2 分钟 → 手机上的 App 自动更新

> 💡 数据完全本地存储，更新代码不会丢你保存的课表

---

## 🛠 本地测试（不部署也能试）

如果想不上传 GitHub 就先在电脑试一下：

**Mac**：
```bash
cd pilates-pwa
python3 -m http.server 8000
```
浏览器打开 http://localhost:8000

**Windows**：
- 装一个 [VS Code](https://code.visualstudio.com/)
- 装 Live Server 插件
- 右键 `index.html` → Open with Live Server

> ⚠️ 直接双击 `index.html` 用 `file://` 协议打开会导致 Service Worker 无法注册，离线功能用不了。本地测试一定要用 http 服务器。

---

## ✨ 当前功能

- ✅ 4 个 Tab：动作库 / 体态方案 / 备课台 / 我的课表
- ✅ 25 个动作（核心/上肢/下肢/脊柱/全身）
- ✅ 6 个体态方案（圆肩驼背、骨盆前倾、脊柱侧弯、扁平足、产后、颈前引）
- ✅ 三种风格口令（简洁 / 意象 / 解剖）
- ✅ 中英双语切换
- ✅ 课表搭建、保存、复制导出
- ✅ 离线可用
- ✅ 适配 iPhone 安全区域（刘海屏/灵动岛）

---

## 🔮 后续可以加的

跟 Claude 说就行：

- "再加 X 个产后动作"
- "把 Hundred 的口令改得更有诗意一点"
- "加个【器械方案】Tab，按器械组合常用编排"
- "加个搜索目标肌群的功能"
- "导出 PDF 而不是只复制文本"
- "加学员档案管理"

---

## 💡 小贴士

- **数据备份**：所有保存的课表都在浏览器的 localStorage 里。换手机会丢。如果想备份，可以让 AI 加个"导出全部数据"功能。
- **离线**：第一次访问后，断网也能用全部功能（除了字体可能加载不出来，但不影响使用）。
- **隐私**：所有数据都只在你的手机上，不会上传到任何服务器。
