# LAB 12 - Make Portfolio Page Fully Responsive

**Duration:** 55 minutes  
**Points:** 12.5  
**Due:** End of class (Thursday Week 3)

---

## 🎯 LEARNING OBJECTIVES

By completing this lab, you will:
- ✅ Implement mobile-first responsive design
- ✅ Use media queries effectively at strategic breakpoints
- ✅ Make images and typography responsive
- ✅ Create layouts that adapt from 1 to 3 columns
- ✅ Test responsive design in browser DevTools
- ✅ Build a professional portfolio page that works on all devices

---

## 📋 PROJECT DESCRIPTION

Take the "About Me" page you built in Lab 09 and styled in Lab 10-11, and make it FULLY responsive across all device sizes. Your page should look great and be usable on phones, tablets, and desktops.

**Responsive Features to Add:**
- Mobile-first CSS architecture
- Flexible layouts that adapt to screen size
- Responsive navigation (bonus: hamburger menu)
- Responsive images
- Responsive typography
- Testing at multiple breakpoints

---

## ✅ REQUIREMENTS

### 1. Mobile-First Approach (Required)
- [ ] Write base CSS for mobile (320px-767px) without media queries
- [ ] Stack content vertically on mobile
- [ ] Use `min-width` media queries for tablet and desktop
- [ ] Test on mobile-sized viewport first

### 2. Responsive Breakpoints (Required)
You must implement AT LEAST these two breakpoints:

#### Tablet (768px)
```css
@media (min-width: 768px) {
  /* Tablet styles here */
}
```
- [ ] Increase font sizes slightly
- [ ] 2-column layouts where appropriate
- [ ] Adjust padding/margins
- [ ] Navigation side-by-side (if applicable)

#### Desktop (1024px)
```css
@media (min-width: 1024px) {
  /* Desktop styles here */
}
```
- [ ] Larger font sizes
- [ ] 3-column layouts for cards/skills
- [ ] Max-width container (1200px recommended)
- [ ] More white space

### 3. Responsive Images (Required)
- [ ] All images use `width: 100%; height: auto;`
- [ ] Images never overflow their containers
- [ ] Consider using `max-width` to prevent over-stretching
- [ ] Test images at all breakpoints

### 4. Responsive Typography (Required)
- [ ] Font sizes increase from mobile → tablet → desktop
- [ ] Headings scale appropriately
- [ ] Line-height adjusted for readability
- [ ] Minimum 16px for body text

### 5. Flexible Layouts (Required)
- [ ] Use Flexbox or CSS Grid for main layout
- [ ] Content stacks vertically on mobile
- [ ] Content displays in columns on tablet/desktop
- [ ] No horizontal scrolling at any viewport size

### 6. Testing (Required)
- [ ] Test in Chrome DevTools Responsive Mode
- [ ] Check at: 375px, 768px, 1024px, 1440px
- [ ] No horizontal scrolling
- [ ] All content readable and accessible
- [ ] Take screenshots of all 3 breakpoints

---

## 🏗️ STARTER CODE

You'll be provided with a basic portfolio page. Your job is to add responsive CSS.

**Starter includes:**
- HTML structure (semantic, accessible)
- Basic CSS (colors, typography, no responsiveness)
- Placeholder images
- Your task: Make it responsive!

---

## 📊 GRADING RUBRIC

| Criteria | Points |
|----------|--------|
| Mobile-first approach used | 2 |
| Media queries at 768px and 1024px | 2.5 |
| Responsive images (all scale properly) | 2 |
| Responsive typography (scales at breakpoints) | 2 |
| Flexible layouts (Flexbox/Grid) | 2 |
| Testing (screenshots at 3 sizes) | 2 |
| **Total** | **12.5** |

---

## 💡 HINTS & TIPS

### Common Breakpoints
```css
/* Mobile: 0-767px (no media query needed) */

/* Tablet: 768px+ */
@media (min-width: 768px) {
  /* 2-column layouts */
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  /* 3-column layouts, max-width container */
}

/* Large Desktop: 1440px+ (optional) */
@media (min-width: 1440px) {
  /* Even more space */
}
```

### Responsive Layout Pattern
```css
/* Mobile: Stack vertically */
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .item {
    flex: 1 1 calc(50% - 10px);
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .item {
    flex: 1 1 calc(33.333% - 14px);
  }
}
```

### Responsive Images
```css
img {
  width: 100%;      /* Fill container */
  max-width: 100%;  /* Don't exceed original size */
  height: auto;     /* Maintain aspect ratio */
}
```

### Responsive Typography
```css
/* Mobile */
h1 { font-size: 2rem; }
p { font-size: 1rem; }

/* Tablet */
@media (min-width: 768px) {
  h1 { font-size: 2.5rem; }
  p { font-size: 1.1rem; }
}

/* Desktop */
@media (min-width: 1024px) {
  h1 { font-size: 3rem; }
  p { font-size: 1.2rem; }
}
```

---

## 🚀 BONUS CHALLENGES (+2 points each)

### Bonus 1: Hamburger Menu
- Implement mobile hamburger menu
- Show horizontal nav on desktop
- Use JavaScript to toggle menu

### Bonus 2: Advanced Grid
- Use CSS Grid for complex layouts
- Implement auto-fit or auto-fill
- Use grid-template-areas

### Bonus 3: Fluid Typography
- Use `clamp()` for font sizes
- Implement viewport units (vw)
- Smooth scaling between breakpoints

### Bonus 4: Multiple Devices Testing
- Test on actual phone/tablet
- Take photos of real device display
- Document any issues found

---

## 📱 TESTING CHECKLIST

Before submitting, verify:

### Mobile (375px):
- [ ] Content stacks vertically
- [ ] Text is readable (not too small)
- [ ] Images scale properly
- [ ] No horizontal scroll
- [ ] Navigation accessible

### Tablet (768px):
- [ ] Layout changes (2 columns?)
- [ ] Fonts larger than mobile
- [ ] Good use of space
- [ ] No horizontal scroll

### Desktop (1024px+):
- [ ] Full layout (3 columns?)
- [ ] Largest fonts
- [ ] Max-width container centered
- [ ] Plenty of white space
- [ ] Professional appearance

---

## 📸 SUBMISSION REQUIREMENTS

Submit to your GitHub repo:
1. **HTML file** (index.html or portfolio.html)
2. **CSS file** (styles.css with responsive code)
3. **Screenshots folder** with:
   - mobile-375px.png
   - tablet-768px.png
   - desktop-1024px.png
4. **README.md** with:
   - Your breakpoints used
   - Design decisions made
   - Challenges faced
   - Link to GitHub Pages (if deployed)

**Due:** End of class Thursday  
**Submit:** Link to GitHub repo in Discord

---

## 🎓 LEARNING RESOURCES

### Recommended Reading:
- [MDN: Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [MDN: Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

### Tools:
- Chrome DevTools Responsive Mode (Ctrl+Shift+M)
- [Responsive Design Checker](https://responsivedesignchecker.com/)
- [Am I Responsive?](https://ui.dev/amiresponsive)

---

## 🏁 SUCCESS CRITERIA

Your responsive portfolio page is **successful** when:
- ✓ It looks professional on phones, tablets, and desktops
- ✓ No horizontal scrolling at any size
- ✓ All images and text are readable
- ✓ Layout adapts intelligently to screen size
- ✓ Mobile-first approach is evident in code
- ✓ You can confidently share the link with anyone
- ✓ It validates at validator.w3.org

---

**Build something you're proud to show off!** 🌟

This is a key component of your Sprint 02 portfolio project!
