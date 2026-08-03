# TICKET-11: Flexbox Layout Challenge

**Assigned:** Week 3 Wednesday  
**Due:** Week 4 Monday, 9:00 AM  
**Points:** 12.5  
**Type:** Individual Task  
**Sprint:** Sprint 02 - Professional Portfolio Website

---

## 🎯 OBJECTIVE

Enhance your portfolio with Flexbox layouts to create professional, flexible page structures. Build at least 3 common layout patterns using Flexbox: navigation bar, card grid, and page layout with sidebar.

---

## 📋 REQUIREMENTS

### Three Required Layouts:

#### 1. **Flexbox Navigation Bar**
- [ ] Horizontal navigation menu
- [ ] Logo on left, nav links on right
- [ ] Evenly spaced nav items
- [ ] Responsive to content (grows/shrinks gracefully)

#### 2. **Flexbox Card Grid**
- [ ] Display skills, projects, or services in card format
- [ ] Cards arranged in rows with flex-wrap
- [ ] Equal-width cards with flex properties
- [ ] Gaps between cards using gap property

#### 3. **Flexbox Page Layout**
- [ ] Main content area + sidebar
- [ ] Sidebar fixed width, main content flexible
- [ ] Or: Bio section with image + text side-by-side
- [ ] Proper use of flex-direction and justify-content

### Technical Requirements:

- [ ] Use Flexbox (display: flex) for all three layouts
- [ ] Demonstrate understanding of flex container properties:
  - justify-content
  - align-items
  - flex-direction
  - flex-wrap
  - gap
- [ ] Demonstrate understanding of flex item properties:
  - flex-grow
  - flex-shrink
  - flex-basis
  - flex shorthand
- [ ] No floats or old layout techniques
- [ ] Clean, commented CSS

---

## 🎨 LAYOUT PATTERNS TO BUILD

### Pattern 1: Flexbox Navigation

```css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #2c3e50;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
```

**Visual Goal:**
```
[Logo]                    [Home] [About] [Projects] [Contact]
```

### Pattern 2: Flexbox Card Grid

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.card {
  flex: 1 1 300px;  /* grow, shrink, base-width */
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
}
```

**Visual Goal (desktop):**
```
[Card 1]  [Card 2]  [Card 3]
[Card 4]  [Card 5]  [Card 6]
```

### Pattern 3: Content + Sidebar Layout

```css
.page-layout {
  display: flex;
  gap: 2rem;
}

.main-content {
  flex: 1;  /* Take remaining space */
}

.sidebar {
  flex: 0 0 300px;  /* Fixed 300px width */
}
```

**Visual Goal:**
```
[Main Content (flexible)]  | [Sidebar (300px)]
```

---

## ✅ ACCEPTANCE CRITERIA

Your submission is complete when:

1. **Flexbox Navigation:**
   - [ ] Logo and nav items in same row
   - [ ] Proper spacing and alignment
   - [ ] Adapts to different screen widths

2. **Flexbox Card Grid:**
   - [ ] Minimum 6 cards displayed
   - [ ] Cards wrap to new rows automatically
   - [ ] Cards are equal size (or intentionally different)
   - [ ] Proper gaps between cards

3. **Flexbox Page Layout:**
   - [ ] Two-column layout working
   - [ ] Sidebar maintains fixed width
   - [ ] Main content area is flexible
   - [ ] Or alternative: image + text side-by-side

4. **Code Quality:**
   - [ ] CSS is organized and commented
   - [ ] Flexbox properties used correctly
   - [ ] No layout bugs or overlaps
   - [ ] Works in Chrome, Firefox, Edge

5. **GitHub:**
   - [ ] Pushed to portfolio repository
   - [ ] Clear commit messages
   - [ ] README updated with progress

---

## 💡 FLEXBOX PROPERTY GUIDE

### Flex Container Properties:

```css
.container {
  display: flex;  /* or inline-flex */
  
  /* Main axis direction */
  flex-direction: row | column;
  
  /* Wrap behavior */
  flex-wrap: nowrap | wrap | wrap-reverse;
  
  /* Main axis alignment */
  justify-content: flex-start | center | space-between | space-around | space-evenly;
  
  /* Cross axis alignment */
  align-items: stretch | flex-start | center | flex-end;
  
  /* Multi-line alignment */
  align-content: flex-start | center | space-between;
  
  /* Gap between items (modern) */
  gap: 1rem;  /* or row-gap, column-gap */
}
```

### Flex Item Properties:

```css
.item {
  /* Shorthand: grow shrink basis */
  flex: 1 1 auto;
  
  /* Individual properties */
  flex-grow: 1;     /* Take extra space (default: 0) */
  flex-shrink: 1;   /* Shrink if needed (default: 1) */
  flex-basis: auto; /* Starting size (default: auto) */
  
  /* Override container alignment */
  align-self: auto | flex-start | center | flex-end;
  
  /* Order */
  order: 0;  /* Change visual order */
}
```

---

## 📝 COMMON FLEXBOX PATTERNS

### Center Content (Holy Grail):
```css
.center-container {
  display: flex;
  justify-content: center;  /* Horizontal */
  align-items: center;      /* Vertical */
  min-height: 100vh;
}
```

### Equal Width Columns:
```css
.column {
  flex: 1;  /* All columns take equal space */
}
```

### Fixed + Flexible:
```css
.sidebar {
  flex: 0 0 250px;  /* Don't grow, don't shrink, 250px */
}
.main {
  flex: 1;  /* Take remaining space */
}
```

### Card Grid (Auto-Wrap):
```css
.card {
  flex: 1 1 300px;  /* Min 300px, wrap to new row if needed */
}
```

---

## 📤 SUBMISSION

**Submit to Discord #assignments channel:**

1. **GitHub Repository Link**
   - Updated portfolio with Flexbox layouts

2. **Screenshots**
   - Navigation bar screenshot
   - Card grid screenshot
   - Page layout screenshot

3. **Code Snippet**
   - Share your favorite Flexbox code snippet

**Submission Message Format:**
```
TICKET-11 Submission
Name: [Your Name]  
GitHub Repo: [URL]
Screenshots: [Attach 3 images]
Layouts Implemented: ✅ Nav ✅ Card Grid ✅ Page Layout
```

---

## 🏆 BONUS CHALLENGES (+1 point each)

**Bonus 1: Sticky Footer**
- Create footer that sticks to bottom of page
- Even when content is short
- Uses Flexbox (not position: fixed)

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;  /* Push footer down */
}
```

**Bonus 2: Flexbox Form Layout**
- Create contact form with Flexbox
- Label + input side-by-side on desktop
- Stacked on mobile
- Proper alignment

**Bonus 3: Auto-Fit Card Grid**
- Cards automatically fit available space
- No media queries
- Use advanced flex properties

**Bonus 4: Navbar with Dropdown**
- Add dropdown menu to navigation
- Position with Flexbox
- Smooth transitions

---

## 📚 RESOURCES

### Learning:
- [CSS-Tricks: Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy](https://flexboxfroggy.com/) - Interactive game
- [MDN: Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [Flexbox Defense](http://www.flexboxdefense.com/) - Tower defense game

### Tools:
- [Flexbox Playground](https://flexbox.tech/)
- [Flexulator](https://www.flexulator.com/) - Calculate flex properties
- Chrome DevTools Flexbox Inspector

### Examples:
- [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/)
- [CodePen Flexbox Examples](https://codepen.io/tag/flexbox)

---

## ❓ FREQUENTLY ASKED QUESTIONS

**Q: Flexbox or CSS Grid?**  
A: This ticket requires Flexbox. Grid is coming in TICKET-12. Both are useful - Flexbox for 1-dimensional layouts (rows OR columns), Grid for 2-dimensional (rows AND columns).

**Q: What's the difference between justify-content and align-items?**  
A: `justify-content` aligns along the main axis (horizontal if flex-direction: row). `align-items` aligns along the cross axis (vertical if flex-direction: row).

**Q: When should I use flex: 1 vs flex: 1 1 auto?**  
A: `flex: 1` is shorthand for `flex: 1 1 0`. `flex: 1 1 auto` preserves content size. For equal columns, use `flex: 1`.

**Q: Why aren't my cards the same height?**  
A: By default, flex items stretch to match tallest item. If using nested divs, you may need `align-items: stretch` or set explicit height.

**Q: Can I use Flexbox with Grid?**  
A: Yes! They work great together. Use Grid for overall page layout, Flexbox for components within grid cells.

**Q: How do I create gaps between flex items?**  
A: Use the `gap` property (modern): `gap: 1rem`. Or use margins on items: `.item { margin: 0.5rem; }`

**Q: Why is flex-wrap not working?**  
A: Check if container has fixed width constraining items. Items need combined width > container width to wrap.

---

## 🎯 SUCCESS CRITERIA

Your Flexbox layouts are **successful** when:
- ✓ Layouts adapt gracefully to different content sizes
- ✓ No items overlap or overflow containers
- ✓ Spacing is consistent and intentional
- ✓ Alignment looks professional (not haphazard)
- ✓ You can explain why you used each Flexbox property
- ✓ Could easily modify layouts (add/remove items)

---

## 🧪 TESTING CHECKLIST

Before submitting:
- [ ] Add/remove nav items → layout adapts
- [ ] Add/remove cards → grid wraps correctly
- [ ] Change content length → sidebar stays fixed width
- [ ] Resize browser → layouts remain intact
- [ ] Check in Chrome, Firefox, Edge
- [ ] Inspect with DevTools Flexbox overlay

---

**Flex your skills! Master Flexbox, master layouts.** 💪
