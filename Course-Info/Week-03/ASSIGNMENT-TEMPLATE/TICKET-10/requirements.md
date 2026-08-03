# TICKET-10: Style Portfolio with CSS Fundamentals

**Assigned:** Week 3 Tuesday  
**Due:** Week 3 Friday, 5:00 PM  
**Points:** 12.5  
**Type:** Individual Task  
**Sprint:** Sprint 02 - Professional Portfolio Website

---

## 🎯 OBJECTIVE

Apply CSS fundamentals to your portfolio homepage (from TICKET-09) to create a professional, visually appealing design. Focus on typography, color, Box Model, and basic layout.

---

## 📋 REQUIREMENTS

### CSS Structure:

- [ ] External CSS file (styles.css) linked to HTML
- [ ] Organized with comments separating sections
- [ ] CSS reset or normalize at the top
- [ ] Proper selector usage (class, ID, element, descendant)

### Typography:

- [ ] Choose and apply 2 fonts maximum (1 for headings, 1 for body)
- [ ] Set appropriate font sizes (rem or em units preferred)
- [ ] Apply line-height for readability (1.5-1.8 for body text)
- [ ] Use font-weight and font-style for emphasis
- [ ] Ensure text is readable (good contrast)

### Color Scheme:

- [ ] Define a color palette (3-5 colors max)
- [ ] Use CSS custom properties (variables) for colors
- [ ] Apply colors consistently throughout
- [ ] Ensure WCAG AA contrast ratios (4.5:1 minimum for text)

### Box Model:

- [ ] Apply padding to create white space
- [ ] Use margin for spacing between elements
- [ ] Add borders where appropriate
- [ ] Demonstrate understanding of box-sizing: border-box

### Visual Enhancements:

- [ ] Add background colors or gradients
- [ ] Apply border-radius for modern look
- [ ] Add box-shadow for depth
- [ ] Use hover states on links and buttons
- [ ] Apply smooth transitions (0.3s recommended)

---

## 🎨 DESIGN REQUIREMENTS

### Color Palette:

Choose from these approaches:
1. **Monochromatic:** Shades of one color
2. **Complementary:** Opposite colors on color wheel
3. **Triadic:** Three evenly spaced colors

Use tools like [Coolors.co](https://coolors.co) or [Adobe Color](https://color.adobe.com)

### Typography Scale:

```css
/* Example scale */
h1: 2.5rem - 3rem
h2: 2rem - 2.5rem
h3: 1.5rem - 1.8rem
body: 1rem (16px minimum)
small: 0.875rem
```

### Spacing System:

Use consistent spacing (multiples of 4 or 8):
```css
:root {
  --spacing-xs: 0.5rem;    /* 8px */
  --spacing-sm: 1rem;      /* 16px */
  --spacing-md: 1.5rem;    /* 24px */
  --spacing-lg: 2rem;      /* 32px */
  --spacing-xl: 3rem;      /* 48px */
}
```

---

## ✅ ACCEPTANCE CRITERIA

Your submission is complete when:

1. **CSS Organization:**
   - [ ] External stylesheet linked properly
   - [ ] Code is well-organized with comment sections
   - [ ] CSS custom properties used for colors/repeated values
   - [ ] No inline styles in HTML

2. **Visual Design:**
   - [ ] Professional appearance
   - [ ] Consistent color scheme
   - [ ] Good typography (readable, hierarchical)
   - [ ] Adequate white space (not cramped)

3. **Technical Implementation:**
   - [ ] Box Model applied correctly
   - [ ] Selectors used appropriately
   - [ ] Transitions/hover effects on interactive elements
   - [ ] Cross-browser compatible (Chrome, Firefox, Edge)

4. **Accessibility:**
   - [ ] Text meets WCAG AA contrast ratios
   - [ ] Font size minimum 16px for body
   - [ ] Focus states visible on interactive elements
   - [ ] Color not the only means of conveying information

5. **Validation:**
   - [ ] CSS validates at W3C CSS Validator (validator.w3.org/css)
   - [ ] No critical errors (warnings acceptable)

---

## 📝 STARTER CSS STRUCTURE

```css
/* ===================================
   CSS RESET
   =================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ===================================
   CSS CUSTOM PROPERTIES
   =================================== */
:root {
  /* Colors */
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-accent: #f093fb;
  --color-text: #333;
  --color-background: #fff;
  --color-gray-light: #f8f9fa;
  
  /* Typography */
  --font-heading: 'Georgia', serif;
  --font-body: 'Helvetica', Arial, sans-serif;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
}

/* ===================================
   BASE STYLES
   =================================== */
body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-background);
}

h1, h2, h3 {
  font-family: var(--font-heading);
  line-height: 1.2;
  margin-bottom: var(--spacing-sm);
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--color-secondary);
}

/* ===================================
   LAYOUT COMPONENTS
   =================================== */

/* Header */
header {
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-lg);
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  text-align: center;
  padding: var(--spacing-xl) var(--spacing-lg);
}

/* Add more sections... */
```

---

## 💡 DESIGN TIPS

### Professional Color Combinations:

**Option 1: Modern Purple/Blue**
```css
--color-primary: #667eea;
--color-secondary: #764ba2;
--color-accent: #f093fb;
```

**Option 2: Corporate Blue**
```css
--color-primary: #2c3e50;
--color-secondary: #3498db;
--color-accent: #e74c3c;
```

**Option 3: Fresh Green**
```css
--color-primary: #27ae60;
--color-secondary: #2ecc71;
--color-accent: #f39c12;
```

### Typography Pairing Resources:
- [Google Fonts](https://fonts.google.com/)
- [Font Pair](https://fontpair.co/)
- Popular pairings:
  - Roboto + Open Sans
  - Montserrat + Lato
  - Playfair Display + Source Sans Pro

### Box Shadow Examples:
```css
/* Subtle elevation */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

/* Medium elevation */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

/* High elevation */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
```

---

## 📤 SUBMISSION

**Submit to Discord #assignments channel:**

1. **GitHub Repository Link**
   - Updated portfolio repo with new CSS file

2. **Screenshots**
   - Full homepage screenshot showing your styling

3. **Color Palette**
   - Screenshot from Coolors.co or list of hex codes used

4. **CSS Validation**
   - Screenshot of W3C CSS Validator results

**Submission Message Format:**
```
TICKET-10 Submission
Name: [Your Name]
GitHub Repo: [URL]
Screenshots: [Attach images]
Color Palette: #667eea, #764ba2, #f093fb
CSS Validator: Passed ✅
```

---

## 🏆 BONUS CHALLENGES (+1 point each)

**Bonus 1: Custom Animations**
- Add keyframe animations (fade-in, slide-in, etc.)
- Apply to hero section or other elements
- Smooth, subtle (not distracting)

**Bonus 2: Dark Mode Toggle**
- Create alternate dark color scheme
- Use CSS custom properties
- Toggle with JavaScript (or just CSS :root selector)

**Bonus 3: Advanced Selectors**
- Use pseudo-classes (:nth-child, :first-of-type, etc.)
- Use pseudo-elements (::before, ::after)
- Demonstrate advanced selector techniques

**Bonus 4: Print Stylesheet**
- Create @media print styles
- Hide navigation, optimize for printing
- Test with browser print preview

---

## 📚 RESOURCES

### Learning:
- [MDN: CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [CSS-Tricks: Box Model]( https://css-tricks.com/the-css-box-model/)
- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

### Tools:
- [Coolors.co](https://coolors.co/) - Color palette generator
- [Google Fonts](https://fonts.google.com/) - Free web fonts
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Inspiration:
- [Awwwards](https://www.awwwards.com/) - Award-winning designs
- [Dribbble](https://dribbble.com/) - Design inspiration
- [CodePen](https://codepen.io/) - CSS experiments

---

## ❓ FREQUENTLY ASKED QUESTIONS

**Q: Can I use a CSS framework like Bootstrap?**  
A: No, this ticket requires writing CSS from scratch to demonstrate fundamentals.

**Q: How do I choose good colors?**  
A: Use color palette tools like Coolors.co. Start with one primary color, add complementary colors. Keep it simple (3-5 colors max).

**Q: Should I make it responsive?**  
A: Not yet - TICKET-12 will cover responsive design. Focus on making it look good on desktop for now.

**Q: Can I use CSS Grid or Flexbox for layout?**  
A: Yes! TICKET-11 focuses on Flexbox, but you can use it here too. Keep it simple for now.

**Q: How do I link Google Fonts?**  
A: Add `<link>` in your HTML `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

**Q: What if my CSS doesn't validate?**  
A: Most warnings are okay. Fix errors. Common issues: typos, missing semicolons, invalid property values.

---

## 🎯 SUCCESS CRITERIA

Your CSS is **successful** when:
- ✓ A stranger would think "This looks professional"
- ✓ Colors are harmonious, not jarring
- ✓ Text is easy to read
- ✓ There's adequate white space (not cramped)
- ✓ Interactive elements have visual feedback (hover states)
- ✓ It passes W3C validation

---

**Make it beautiful! This is YOUR portfolio.** 🎨
