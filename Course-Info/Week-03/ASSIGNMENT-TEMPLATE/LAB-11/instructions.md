# Lab 11 - Flexbox Layouts

**Week 3 Wednesday | Duration: 40 minutes | Points: 12.5**

## 🎯 Learning Objectives

By completing this lab, you will:
- Apply Flexbox properties to create professional layouts
- Build a responsive navigation bar with `justify-content: space-between`
- Create a photo gallery that wraps automatically using `flex-wrap`
- Construct a page layout using `flex-direction` and nested flex containers
- Use modern `gap` property for spacing (no margin hacks!)

---

## 📋 Requirements

You will build **3 separate layouts** in 3 different HTML files:

### Layout 1: Navigation Bar (4 points)
**File:** `nav-bar.html`

Create a navigation bar with:
- Logo on the left side
- Navigation links on the right side
- All items vertically centered
- Consistent spacing between nav links using `gap`
- Dark background with white text
- Responsive (works on different screen sizes)

**Required Flexbox properties:**
- `display: flex`
- `justify-content: space-between`
- `align-items: center`
- `gap` (for navigation links)

---

### Layout 2: Photo Gallery (4.5 points)
**File:** `photo-gallery.html`

Create a responsive photo gallery with:
- Minimum of 8 photos (can use placeholder images)
- Photos automatically wrap to new lines when screen narrows
- Consistent spacing between all photos using `gap`
- Each photo has hover effect (scale up slightly)
- Photos maintain aspect ratio
- Professional styling with borders/shadows

**Required Flexbox properties:**
- `display: flex`
- `flex-wrap: wrap`
- `gap`
- `flex: 1 1 250px` (or similar) on photo items

**Image sources you can use:**
- https://picsum.photos/300/200 (random photo)
- https://via.placeholder.com/300x200 (placeholder)
- Or use your own images

---

### Layout 3: Holy Grail Page Layout (4 points)
**File:** `page-layout.html`

Create a complete page layout with:
- **Header** at the top (full width)
- **Sidebar** on the left (fixed 200px width)
- **Main content** area (takes remaining space)
- **Footer** at the bottom (full width, always at bottom even with little content)
- Minimum height of 100vh (full viewport)

**Required Flexbox properties:**
- `display: flex` with `flex-direction: column` on body
- Nested flex container for sidebar + main
- `flex: 0 0 200px` on sidebar (fixed width)
- `flex: 1` on main content (flexible)
- `min-height: 100vh` on body

---

## 🚀 Getting Started

### Step 1: Setup Files
Create 3 new HTML files:
```
LAB-11/
  ├── nav-bar.html
  ├── photo-gallery.html
  └── page-layout.html
```

### Step 2: HTML Boilerplate
Each file should have:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Layout Name</title>
  <style>
    /* Your CSS here */
  </style>
</head>
<body>
  <!-- Your HTML here -->
</body>
</html>
```

### Step 3: Reference Demos
Use the demo files as reference:
- **Demo 02** for alignment properties
- **Demo 03** for wrapping and gap
- **Demo 04** for flex shorthand
- **Demo 05** for complete pattern examples

### Step 4: Use DevTools
- Inspect your flex containers
- Click the "flex" badge to see layout overlay
- Toggle properties to experiment
- Check alignment visually

---

## ✅ Grading Rubric (12.5 points total)

### Navigation Bar (4 points)
- ✅ 1.5 pts: Logo on left, links on right using `justify-content: space-between`
- ✅ 1 pt: Items vertically centered with `align-items: center`
- ✅ 1 pt: Navigation links use `gap` for spacing (no margins)
- ✅ 0.5 pts: Professional styling (colors, padding, fonts)

### Photo Gallery (4.5 points)
- ✅ 1.5 pts: 8+ photos that wrap correctly using `flex-wrap: wrap`
- ✅ 1.5 pts: Photos use `flex: 1 1 XXXpx` for responsive behavior
- ✅ 1 pt: Consistent spacing with `gap` property
- ✅ 0.5 pts: Hover effects and professional styling

### Page Layout (4 points)
- ✅ 1 pt: Body uses `flex-direction: column` and `min-height: 100vh`
- ✅ 1.5 pts: Sidebar fixed at 200px using `flex: 0 0 200px`
- ✅ 1 pt: Main content uses `flex: 1` to take remaining space
- ✅ 0.5 pts: Footer always at bottom (even with little content)

### Deductions:
- ❌ -1 pt: Using margins instead of `gap`
- ❌ -0.5 pt: Missing `display: flex` on container
- ❌ -1 pt: Not using required Flexbox properties (using floats/positioning instead)
- ❌ -0.5 pt: Code not properly indented/formatted

---

## 💡 Hints & Tips

### Navigation Bar Hints:
```css
nav {
  display: flex;
  justify-content: space-between;  /* This pushes logo ← → links */
  align-items: center;             /* Vertical centering */
  padding: 1rem 2rem;
  background-color: #2c3e50;
}

.nav-links {
  display: flex;
  gap: 2rem;  /* Spacing between links */
  list-style: none;
}
```

### Photo Gallery Hints:
```css
.gallery {
  display: flex;
  flex-wrap: wrap;  /* Allow wrapping */
  gap: 1rem;        /* Space between photos */
}

.photo {
  flex: 1 1 250px;  /* Grow, shrink, min 250px */
  height: 200px;
  object-fit: cover;
}
```

### Page Layout Hints:
```css
body {
  display: flex;
  flex-direction: column;  /* Stack header/content/footer */
  min-height: 100vh;       /* Full viewport height */
  margin: 0;
}

.content-wrapper {
  display: flex;  /* Sidebar + main side-by-side */
  flex: 1;        /* Takes remaining height */
}

.sidebar {
  flex: 0 0 200px;  /* Fixed 200px */
}

.main {
  flex: 1;  /* Takes remaining width */
}
```

---

## 🎨 Styling Requirements

**Minimum Styling (for full points):**

1. **Colors:**
   - At least 2 different background colors
   - Good contrast (light text on dark, or dark text on light)

2. **Spacing:**
   - Padding inside elements (1rem minimum)
   - Gap between flex items
   - No overcrowding

3. **Typography:**
   - Readable font size (minimum 16px)
   - Clear hierarchy (larger headers)

4. **Polish:**
   - Rounded corners on cards/photos (optional but nice)
   - Subtle shadows (optional but professional)
   - Hover effects on interactive elements

---

## 🚫 Common Mistakes to Avoid

### Mistake 1: Forgetting `display: flex`
```css
/* ❌ Won't work - no display: flex */
.container {
  justify-content: center;  /* Does nothing without display: flex */
}

/* ✅ Correct */
.container {
  display: flex;
  justify-content: center;
}
```

### Mistake 2: Using margins instead of gap
```css
/* ❌ Old way - messy */
.item {
  margin-right: 20px;
}
.item:last-child {
  margin-right: 0;
}

/* ✅ Modern way - clean */
.container {
  display: flex;
  gap: 20px;
}
```

### Mistake 3: Confusing container vs item properties
```css
/* ❌ Wrong - flex-grow goes on items, not container */
.container {
  display: flex;
  flex-grow: 1;
}

/* ✅ Correct */
.container {
  display: flex;
}
.item {
  flex-grow: 1;
}
```

### Mistake 4: Not using flex shorthand
```css
/* ❌ Verbose */
.sidebar {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 200px;
}

/* ✅ Better - use shorthand */
.sidebar {
  flex: 0 0 200px;
}
```

---

## 📸 Example Screenshots

### Navigation Bar Should Look Like:
```
┌─────────────────────────────────────────┐
│  MyLogo          Home About Services    │
└─────────────────────────────────────────┘
  ↑                           ↑
  Logo (left)                Links (right)
```

### Photo Gallery Should Look Like:
```
On Wide Screen:
┌────┐ ┌────┐ ┌────┐ ┌────┐
│    │ │    │ │    │ │    │
└────┘ └────┘ └────┘ └────┘
┌────┐ ┌────┐ ┌────┐ ┌────┐
│    │ │    │ │    │ │    │
└────┘ └────┘ └────┘ └────┘

On Narrow Screen:
┌────┐ ┌────┐
│    │ │    │
└────┘ └────┘
┌────┐ ┌────┐
│    │ │    │
└────┘ └────┘
```

### Page Layout Should Look Like:
```
┌─────────────────────────┐
│        HEADER           │
├──────┬──────────────────┤
│      │                  │
│ SIDE │   MAIN CONTENT   │
│ BAR  │                  │
│200px │   (flex: 1)      │
│      │                  │
├──────┴──────────────────┤
│        FOOTER           │
└─────────────────────────┘
```

---

## ⏱️ Time Management

**Total: 40 minutes**

- **10 min:** Navigation Bar
- **15 min:** Photo Gallery (most complex)
- **15 min:** Page Layout

**If you finish early:**
- Add more styling (gradients, shadows, animations)
- Add hover effects
- Make it mobile-friendly (test by resizing browser)
- Add more content (actual text, more photos)

**If you're running out of time:**
- Focus on getting the Flexbox properties correct first
- Styling can be basic (just ensure it's readable)
- Complete all 3 layouts even if styling is minimal

---

## 🎓 What You'll Learn

This lab teaches you the **3 most common Flexbox patterns** used in professional web development:

1. **Navigation Bar** → Used on nearly every website's header
2. **Photo/Card Grid** → Used on e-commerce, portfolios, galleries
3. **Sidebar + Main** → Used on dashboards, blogs, documentation sites

**After this lab, you'll see these patterns EVERYWHERE on the web!**

---

## 📤 Submission Requirements

1. **Create 3 HTML files:**
   - `nav-bar.html`
   - `photo-gallery.html`
   - `page-layout.html`

2. **Test your code:**
   - Open each file in browser
   - Resize browser to test responsiveness
   - Check DevTools for any errors

3. **Ensure all requirements met:**
   - ✅ All required Flexbox properties used
   - ✅ No margins used for spacing (use `gap`)
   - ✅ Professional styling
   - ✅ Code properly formatted

4. **Submit:**
   - Add files to your repository
   - Commit with message: "Complete Lab 11 - Flexbox Layouts"
   - Push to GitHub
   - Submit link in Discord

---

## 🆘 Getting Help

**If you're stuck:**

1. **Review the demos** - They contain complete examples
2. **Use DevTools** - Inspect containers, click "flex" badge
3. **Check common mistakes** - See section above
4. **Ask classmates** - Pair programming encouraged!
5. **Ask instructor** - I'll be walking around during class
6. **Discord #help channel** - Post code snippet + screenshot

**When asking for help, provide:**
- Which layout you're working on
- What you expected vs what's happening
- Screenshot if possible
- Code snippet (just the flex container CSS)

---

## 🌟 Bonus Challenges (+2 points each)

### Bonus 1: Responsive Navigation (+2 pts)
Make nav links stack vertically on narrow screens using `flex-direction: column`

### Bonus 2: Photo Gallery with Descriptions (+2 pts)
Add text captions below each photo using flexbox within each photo container

### Bonus 3: Three-Column Layout (+2 pts)
Extend page layout to have TWO sidebars (left and right) + main content in middle

---

**Good luck! Remember: `display: flex` is the magic line. Everything else just controls how the items arrange.** 🎉
