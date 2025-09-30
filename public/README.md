# Public 静态资源文件夹

这是 Next.js 项目的静态资源文件夹。放在此文件夹中的文件可以通过根路径直接访问。

## 文件夹结构

```
public/
├── images/          # 图片资源
├── icons/           # 图标资源
├── videos/          # 视频资源
├── documents/       # 文档资源
└── assets/          # 其他静态资源
```

## 访问方式

文件可以通过以下方式访问：
- `public/images/logo.png` → `http://localhost:3000/images/logo.png`
- `public/icons/favicon.ico` → `http://localhost:3000/favicon.ico`
- `public/documents/guide.pdf` → `http://localhost:3000/documents/guide.pdf`

## 使用建议

1. **性能优化**：
   - 压缩图片和视频文件
   - 使用现代格式 (WebP, AVIF)
   - 提供多种尺寸的图片

2. **SEO优化**：
   - 使用描述性的文件名
   - 添加适当的alt属性
   - 优化图片尺寸

3. **安全性**：
   - 不要存放敏感信息
   - 定期清理不需要的文件
   - 检查文件权限

## 常用文件

建议在根目录添加以下常用文件：
- `favicon.ico` - 网站图标
- `robots.txt` - 搜索引擎爬虫指令
- `sitemap.xml` - 网站地图
- `manifest.json` - PWA应用清单

## 注意事项

- 此文件夹中的文件会被直接暴露给用户
- 文件名区分大小写
- 避免使用中文文件名
- 建议使用小写字母和连字符命名