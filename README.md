# Active Theory 风格作品集（SPA）

## 特性
- 伪单页应用（URL 变化如多页，体验如单页）
- 全屏 Three.js 加载动画
- 径向渐变 + 噪点纹理 + 自定义光标
- 制作笔记支持多段落
- 中英双语切换（状态记忆）

## 如何更新

### 🖼️ 更新图片
1. 生成图片（使用下方提示词）
2. 保存至：
   - `assets/images/theme-a/a1.jpg` ~ `a8.jpg`
   - `assets/images/theme-b/b1.jpg` ~ `b8.jpg`
   - `assets/images/theme-c/c1.jpg` ~ `c8.jpg`

### ✍️ 更新文字
1. 打开 `index.html`
2. 搜索 `data-zh=` 和 `data-en=`
3. 修改引号内文字（支持换行 `\n`）

## 部署到 GitHub Pages
1. 仓库名任意（如 `portfolio`）
2. 上传 `index.html` 和 `assets/` 到 **根目录**
3. Settings → Pages → Branch: `main`, Folder: `/ (root)`
4. 访问 `https://mumubb21.github.io/portfolio/`