# Section Spacing Standards

## 📏 Standard Section Spacing

我们统一使用以下响应式间距模式为所有页面section：

```tsx
className="w-full py-20 md:py-32 lg:py-20"
```

### 🎯 间距说明：

- **移动端** (`py-20`) = 5rem = 80px 上下间距
- **平板端** (`md:py-32`) = 8rem = 128px 上下间距  
- **桌面端** (`lg:py-20`) = 5rem = 80px 上下间距

### 🎨 设计原理：

1. **移动端**：较小间距，节省宝贵的屏幕空间
2. **平板端**：增大间距，充分利用中等尺寸屏幕
3. **桌面端**：适中间距，避免内容过于分散，保持紧凑感

## 📋 已统一的页面：

### ✅ 首页 (`app/page.tsx`)
- Hero Section
- Logos Section  
- Features Section
- How It Works Section
- Testimonials Section
- Pricing Section
- FAQ Section
- CTA Section

### ✅ Academy页面 (`app/academy/`)
- Hero Section (`hero-section.tsx`)
- Platform Intro (`platform-intro.tsx`)
- AI Coach (`ai-coach.tsx`)
- Skill Agent (`skill-agent.tsx`)
- Quality Assurance (`quality-assurance.tsx`)
- Exam System (`exam-system.tsx`)
- Online IDE (`online-ide.tsx`)
- SBT Certificate (`sbt-certificate.tsx`)

## 🔧 实施细节：

### 标准Section结构：
```tsx
<section className="w-full py-20 md:py-32 lg:py-20 [其他样式类]">
  <div className="container px-4 md:px-6">
    {/* Section内容 */}
  </div>
</section>
```

### 特殊情况处理：
- **背景色/渐变**：可以在section上添加背景样式
- **边框**：可以添加 `border-y` 等边框样式
- **溢出处理**：需要时可添加 `overflow-hidden`
- **定位**：需要时可添加 `relative`

## 🚀 未来扩展：

当添加新页面时，请遵循相同的spacing标准：

```tsx
// 推荐的新section模板
<section className="w-full py-20 md:py-32 lg:py-20">
  <div className="container px-4 md:px-6">
    {/* 内容 */}
  </div>
</section>
```

## 📱 响应式验证：

请在以下断点验证效果：
- **移动端**: 375px - 767px  
- **平板端**: 768px - 1023px
- **桌面端**: 1024px+

---

*最后更新：2024年1月*
