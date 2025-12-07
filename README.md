# 作品集网站 - Active Theory 风格

## 如何更新内容

### 🖼️ 更新图片
1. 进入 `assets/images/` 目录
2. 替换对应文件（保持文件名不变）：
   - `theme-a/a1.jpg` ~ `a8.jpg`（3:4 竖图）
   - `theme-b/b1.jpg` ~ `b8.jpg`（1:1 方图）
   - `theme-c/c1.jpg` ~ `c8.jpg`（16:9 横图）

### ✍️ 更新文字
1. 打开 HTML 文件（如 `theme-a.html`）
2. 搜索 `<!-- ✏️ EDIT ME` 注释
3. 修改 `data-zh="..."` 和 `data-en="..."` 中的文字
4. 保存即可

### 🌐 部署到 GitHub Pages
1. 仓库名任意（如 `my-portfolio`）
2. 上传所有文件到 **根目录**
3. Settings → Pages → Branch: `main`, Folder: `/ (root)`
4. 访问 `https://mumubb21.github.io/my-portfolio/`