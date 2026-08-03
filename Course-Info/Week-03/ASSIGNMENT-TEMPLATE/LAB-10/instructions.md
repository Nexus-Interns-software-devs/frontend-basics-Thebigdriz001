# Lab 10 - Style Your About Me Page with CSS

**Duration:** 40 minutes  
**Points:** 12.5  
**Due:** End of Tuesday class  

---

## 🎯 LEARNING OBJECTIVES

By completing this lab, you will:
- [ ] Create and link external CSS files
- [ ] Apply the Box Model to create spacing and structure
- [ ] Style typography for readability
- [ ] Build a cohesive color palette
- [ ] Use CSS selectors effectively

---

## 📋 PROJECT DESCRIPTION

Take your About Me page from Lab 09 (Monday) and transform it from plain HTML into a beautifully styled, professional-looking webpage using CSS!

**What you're building:**
- Professional color scheme (that's not just black and white!)
- Clean, readable typography
- Proper spacing using margin and padding
- Visual hierarchy with the Box Model
- A page you'd be proud to show anyone

---

## ✅ REQUIREMENTS

### 1. **External CSS File**
- [ ] Create `styles.css` file
- [ ] Link it in your HTML `<head>` section
- [ ] Include CSS reset at top

### 2. **Box Model Application**
- [ ] Use `box-sizing: border-box` on all elements
- [ ] Apply padding to sections (at least 2rem)
- [ ] Use margin for spacing between sections (at least 1.5rem)
- [ ] Add borders where appropriate (optional but encouraged)

### 3. **Color Scheme**
- [ ] Choose 3-5 colors that work together
- [ ] Define CSS variables for your colors
- [ ] Primary color for headers/important elements
- [ ] Secondary color for accents
- [ ] Background color (not pure white - use off-white like #f4f4f4)
- [ ] Text color (not pure black - use dark gray like #333)

### 4. **Typography**
- [ ] Set readable font family (Arial, Helvetica, or sans-serif)
- [ ] Font size: Minimum 16px for body text
- [ ] Line height: 1.5-1.6 for body text
- [ ] Style all headings (h1, h2, h3)
- [ ] Proper text hierarchy (h1 largest, h2 smaller, etc.)

### 5. **Required Styled Elements**
- [ ] Header section (background color, padding, text styling)
- [ ] Navigation (remove bullets, style links)
- [ ] At least 4 sections (Bio, Skills, Interests, Goals)
- [ ] Lists (styled with proper spacing)
- [ ] Footer (background color, centered text)
- [ ] Image (rounded corners with `border-radius`)

### 6. **Code Quality**
- [ ] At least 5 different class selectors used
- [ ] Consistent spacing system (multiples of 8: 8px, 16px, 24px, 32px)
- [ ] Comments explaining major sections of CSS
- [ ] No inline styles in HTML
- [ ] Clean, indented code

---

## 🚀 GETTING STARTED

### **Step 1: Create CSS File**

In the same folder as your `about-me.html` (or whatever you named it):
1. Create new file: `styles.css`
2. Link it in your HTML:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Me - Your Name</title>
  <link rel="stylesheet" href="styles.css">
</head>
```

### **Step 2: Start with CSS Reset**

Add this to the TOP of your `styles.css`:

```css
/* CSS RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### **Step 3: Define Your Color Palette**

Use coolors.co to generate colors, or choose your own:

```css
/* COLOR PALETTE */
:root {
  --primary-color: #2c3e50;     /* Dark blue-gray */ 
  --secondary-color: #3498db;   /* Bright blue */
  --accent-color: #e74c3c;      /* Red for highlights */
  --text-color: #333;           /* Dark gray */
  --background-color: #f4f4f4;  /* Light gray */
}
```

### **Step 4: Style Base Elements**

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}
```

---

## 💡 STYLING TIPS & EXAMPLES

## Header Styling

```css
header {
  background-color: var(--primary-color);
  color: white;
  padding: 2rem;
  text-align: center;
}

header h1 {
  margin-bottom: 0.5rem;
}
```

### Navigation Styling

```css
nav ul {
  list-style: none;        /* Remove bullets */
  display: flex;           /* Make horizontal */
  justify-content: center; /* Center items */
  gap: 2rem;              /* Space between items */
  padding: 1rem 0;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
  color: var(--secondary-color);
}
```

### Section Cards

```css
section {
  background-color: white;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

section h2 {
  color: var(--primary-color);
  border-bottom: 3px solid var(--secondary-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}
```

### Image Styling

```css
img {
  max-width: 100%;
  height: auto;
  border-radius: 50%;     /* Makes it circular */
  display: block;
  margin: 0 auto 1rem;    /* Center and add bottom margin */
  border: 4px solid var(--secondary-color);
}
```

### List Styling

```css
ul, ol {
  margin-left: 2rem;
  margin-bottom: 1rem;
}

ul li, ol li {
  margin-bottom: 0.5rem;
}
```

### Footer Styling

```css
footer {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 1.5rem;
  margin-top: 2rem;
}

footer a {
  color: var(--secondary-color);
  text-decoration: none;
}
```

---

## 🧪 TESTING CHECKLIST

Before submitting, verify:

**Visual Test:**
- [ ] Open in browser - does it look professional?
- [ ] Colors work well together (not too bright/harsh)
- [ ] Text is easy to read (good contrast)
- [ ] Sections have breathing room (not cramped)
- [ ] Image displays properly

**Code Test:**
- [ ] CSS file is linked (check <link> tag)
- [ ] No errors in browser console (F12)
- [ ] box-sizing: border-box is set
- [ ] CSS variables are defined and used
- [ ] Code is indented and readable

**Box Model Test:**
- [ ] Inspect any section element in DevTools
- [ ] See padding space inside sections
- [ ] See margin space between sections
- [ ] Box model diagram shows your values

---

## 📤 SUBMISSION REQUIREMENTS

**Submit:**
1. Your HTML file (about-me.html)
2. Your CSS file (styles.css)
3. Any images used (in images/ folder)
4. Screenshot of your styled page

**Method:**
- Commit to GitHub repository
- Submit link via learning platform
- OR submit files directly as ZIP

---

## 📊 GRADING RUBRIC (12.5 points)

| Category | Points | Criteria |
|----------|--------|----------|
| **CSS Setup** | 2 | External CSS linked, reset included, CSS variables |
| **Box Model** | 3 | Proper use of padding, margin, border-box |
| **Colors** | 2 | Cohesive 3-5 color palette, good contrast |
| **Typography** | 2 | Readable fonts, proper sizes, line-height |
| **Styling Coverage** | 2.5 | All required elements styled professionally |
| **Code Quality** | 1 | Clean, organized, commented CSS |

---

## ⚠️ COMMON MISTAKES TO AVOID

### 1. **CSS File Not Linked**
❌ **Bad:** Forgot `<link>` tag  
✅ **Good:**
```html
<link rel="stylesheet" href="styles.css">
```

### 2. **Forgetting box-sizing**
❌ **Bad:** Width calculations confusing  
✅ **Good:**
```css
* {
  box-sizing: border-box;
}
```

### 3. **Too Many Colors**
❌ **Bad:** 10 different colors (rainbow mess)  
✅ **Good:** 3-5 harmonious colors

### 4. **Pure Black/White**
❌ **Bad:** `color: #000; background: #fff;` (harsh)  
✅ **Good:** `color: #333; background: #f4f4f4;` (softer)

### 5. **No Spacing**
❌ **Bad:** Everything crammed together  
✅ **Good:** Generous padding and margin

---

## ❓ NEED HELP?

### **Stuck on getting started?**
1. Make sure CSS file is in same folder as HTML
2. Check file name spelling matches `<link>` href
3. Hard refresh (Ctrl+Shift+R) to clear cache

### **Colors look bad?**
- Visit coolors.co and generate palette
- Or use safe combinations:
  - Blue/Gray theme: #2c3e50, #3498db, #ecf0f1
  - Green theme: #27ae60, #2ecc71, #f4f4f4
  - Professional: #2c3e50, #16a085, #ecf0f1

### **Spacing seems off?**
- Use consistent spacing system: 8px, 16px, 24px, 32px
- Use DevTools to see box model live
- Remember: padding (inside), margin (outside)

### **Still stuck?**
- Ask in Discord #week-3-help
- Review demo-03-box-model.html
- Check solution.css for examples (don't copy!)

---

## 🌟 STRETCH GOALS (Optional)

Want to go further? Try these:

1. **Hover Effects:** Add `:hover` transitions on links/buttons
2. **Google Fonts:** Import and use custom font families
3. **Shadows:** Add subtle `box-shadow` to cards
4. **Rounded Corners:** Use `border-radius` creatively
5. **Container Width:** Add `max-width: 800px; margin: 0 auto;` to main

---

## 📚 RESOURCES

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Coolors.co](https://coolors.co) - Color palette generator
- [Google Fonts](https://fonts.google.com) - Free web fonts
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [CSS-Tricks Box Model](https://css-tricks.com/the-css-box-model/)

---

## 🎯  WHAT'S NEXT?

**Tomorrow (Wednesday 9-11am):** Flexbox layouts - no more layout struggles!

**Ticket #10 (Due Thursday):** Style your 3 pages from Ticket #09 with consistent design system

---

## 💪 REMEMBER

- CSS is learned by DOING, not reading
- Experiment! You can't break anything
- Use DevTools to see changes live
- If confused, inspect in DevTools
- Ask questions - we're here to help!

**You got this!** 🚀
