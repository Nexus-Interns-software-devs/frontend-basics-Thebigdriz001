# TICKET-12: Responsive Design Challenge - Complete Landing Page

**Assigned:** Week 3 Thursday  
**Due:** Week 4 Tuesday, 5:00 PM  
**Points:** 12.5  
**Type:** Individual Task  
**Sprint:** Sprint 02 - Professional Portfolio Website

---

## 🎯 OBJECTIVE

Create a complete, fully responsive landing page from scratch using mobile-first methodology. Apply all Week 3 concepts: semantic HTML5, CSS fundamentals, Flexbox, and responsive design with media queries.

---

## 📋 REQUIREMENTS

### Project Scope:

Build **ONE** of the following landing pages:
1. **Personal Portfolio Landing Page** (recommended)
2. **Product Landing Page** (fictional product)
3. **Event Landing Page** (fictional tech conference)
4. **Service Landing Page** (fictional agency/business)

### Required Sections (Minimum 5):

- [ ] **Header/Navigation** - Logo + navigation menu
- [ ] **Hero Section** - Eye-catching banner with headline + CTA
- [ ] **Features/About Section** - 3+ cards/items
- [ ] **Gallery/Projects Section** - Grid of images or project cards
- [ ] **Contact/CTA Section** - Call-to-action or contact form
- [ ] **Footer** - Copyright, social links, secondary nav

### Technical Requirements:

#### 1. Mobile-First Approach:
- [ ] Design for mobile (320px) first
- [ ] Use min-width media queries to scale up
- [ ] Test at breakpoints: 320px, 768px, 1024px

#### 2. Responsive Elements:
- [ ] Navigation: Hamburger menu on mobile, horizontal on desktop
- [ ] Typography: Fluid font sizes (scale up on larger screens)
- [ ] Images: Responsive (max-width: 100%, height: auto)
- [ ] Grid: 1 column → 2 columns → 3+ columns
- [ ] Layout: Stack on mobile, side-by-side on desktop

#### 3. Flexbox Layouts:
- [ ] Use Flexbox for navigation
- [ ] Use Flexbox for card layouts
- [ ] Use Flexbox for hero section alignment
- [ ] Use Flexbox for footer layout

#### 4. CSS Organization:
- [ ] External stylesheet (styles.css)
- [ ] CSS custom properties for colors, spacing
- [ ] Organized with comments
- [ ] Mobile styles first, media queries at bottom

#### 5. Code Quality:
- [ ] Semantic HTML5 elements (header, nav, main, section, footer)
- [ ] Valid HTML (W3C validator)
- [ ] Valid CSS (W3C CSS validator)
- [ ] No inline styles
- [ ] Accessible (alt text, ARIA labels for nav toggle)

---

## 📱 BREAKPOINT REQUIREMENTS

### Mobile (320px - 767px):
- Single column layout
- Hamburger menu navigation
- Stacked content sections
- Touch-friendly buttons (min 44px)
- Font sizes: h1: 2rem, body: 1rem

### Tablet (768px - 1023px):
- Two column layouts where appropriate
- Horizontal navigation
- Larger font sizes: h1: 2.5rem
- Card grids: 2 columns

### Desktop (1024px+):
- Multi-column layouts (3+ columns)
- Maximum content width (1200px recommended)
- Largest font sizes: h1: 3rem
- Card grids: 3+ columns
- Enhanced spacing

---

## 🎨 DESIGN GUIDELINES

### Color Scheme:
Choose a professional color palette:
- 1 primary color
- 1-2 secondary colors
- 1 accent color for CTAs
- Neutral colors (white, grays, black)

### Typography:
- 1-2 font families maximum
- Minimum 16px body text
- Clear hierarchy (h1 > h2 > h3 > p)
- Line-height 1.5-1.8 for readability

### Spacing:
- Consistent spacing system (8px, 16px, 24px, 32px, 48px)
- Adequate white space (not cramped)
- Section padding: 3rem mobile, 4-6rem desktop

### Images:
- Placeholder images okay ([Unsplash](https://unsplash.com/), [Pexels](https://pexels.com/))
- Optimized sizes (< 500KB each)
- Proper aspect ratios
- Alt text for all images

---

## 📝 STARTER CODE STRUCTURE

### HTML Structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Landing Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Header/Navigation -->
  <header>
    <nav>
      <div class="logo">YourBrand</div>
      <button class="nav-toggle" aria-label="Toggle navigation">
        ☰
      </button>
      <ul class="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main Content -->
  <main>
    <!-- Hero Section -->
    <section class="hero" id="home">
      <h1>Your Compelling Headline</h1>
      <p>Brief description of what you offer</p>
      <a href="#contact" class="cta-button">Get Started</a>
    </section>

    <!-- Features Section -->
    <section class="features" id="about">
      <h2>What We Offer</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>Feature 1</h3>
          <p>Description</p>
        </div>
        <!-- More cards... -->
      </div>
    </section>

    <!-- Add more sections... -->
  </main>

  <!-- Footer -->
  <footer>
    <p>&copy; 2024 YourBrand. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

### CSS Structure:

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
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-accent: #f093fb;
  --color-text: #333;
  --color-background: #fff;
  
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  
  --font-heading: 'Georgia', serif;
  --font-body: 'Helvetica', sans-serif;
}

/* ===================================
   BASE STYLES (MOBILE FIRST)
   =================================== */
body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* ===================================
   NAVIGATION (MOBILE)
   =================================== */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-menu {
  display: none;  /* Hidden on mobile */
  flex-direction: column;
}

.nav-menu.active {
  display: flex;
}

/* ===================================
   MEDIA QUERIES
   =================================== */

/* Tablet */
@media (min-width: 768px) {
  .nav-toggle {
    display: none;
  }
  
  .nav-menu {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  
  .feature-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .feature-card {
    flex: 1 1 45%;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .feature-card {
    flex: 1 1 30%;
  }
  
  /* Add desktop-specific styles */
}
```

### JavaScript (Hamburger Menu):

```javascript
// script.js
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
```

---

## ✅ ACCEPTANCE CRITERIA

Your landing page is complete when:

1. **Responsive Design:**
   - [ ] Works on mobile (320px), tablet (768px), desktop (1024px+)
   - [ ] Mobile-first approach (mobile styles first)
   - [ ] Media queries at 768px and 1024px minimum
   - [ ] No horizontal scroll at any breakpoint

2. **Layout:**
   - [ ] Minimum 5 sections
   - [ ] Semantic HTML5 structure
   - [ ] Flexbox used for layouts
   - [ ] Content is well-organized

3. **Navigation:**
   - [ ] Hamburger menu on mobile
   - [ ] Horizontal nav on tablet/desktop
   - [ ] Working toggle (JavaScript)
   - [ ] Navigation links work (scroll to sections)

4. **Visual Design:**
   - [ ] Professional appearance
   - [ ] Consistent color scheme
   - [ ] Good typography hierarchy
   - [ ] Adequate white space
   - [ ] Responsive images

5. **Code Quality:**
   - [ ] HTML validates (W3C)
   - [ ] CSS validates (W3C)
   - [ ] Clean, commented code
   - [ ] Organized file structure

6. **Accessibility:**
   - [ ] All images have alt text
   - [ ] Proper heading hierarchy (h1 → h2 → h3)
   - [ ] ARIA labels on interactive elements
   - [ ] Good color contrast

---

## 📤 SUBMISSION

**Submit to Discord #assignments channel:**

1. **GitHub Repository Link**
   - New repo named "responsive-landing-page"
   - README with project description

2. **Live Demo** (choose one):
   - GitHub Pages deployment
   - Or Netlify/Vercel deployment
   - Or CodePen/JSFiddle link

3. **Screenshots** (3 required):
   - Mobile view (375px)
   - Tablet view (768px)
   - Desktop view (1440px)

4. **Screen Recording** (optional):
   - GIF or video showing responsive behavior
   - Use browser DevTools device toggle

**Submission Message Format:**
```
TICKET-12 Submission
Name: [Your Name]
Landing Page Type: Portfolio / Product / Event / Service
GitHub Repo: [URL]
Live Demo: [URL]
Screenshots: [Attach 3 images]
Validation: HTML ✅ CSS ✅
```

---

## 🏆 BONUS CHALLENGES (+1 point each)

**Bonus 1: Smooth Scroll Navigation**
- Clicking nav links smoothly scrolls to sections
- Use CSS `scroll-behavior: smooth;`
- Or JavaScript smooth scroll

**Bonus 2: Animated Hero Section**
- Fade-in or slide-in animation on page load
- Use CSS keyframes
- Subtle, professional (not distracting)

**Bonus 3: Contact Form Validation**
- Create working contact form
- Client-side validation (required fields, email format)
- Visual feedback on errors
- Accessible error messages

**Bonus 4: Advanced Responsive Images**
- Use `<picture>` element for art direction
- Or `srcset` for different image sizes
- Optimized images for each breakpoint

**Bonus 5: Dark Mode**
- Toggle between light/dark themes
- Use CSS custom properties
- Save preference in localStorage

**Bonus 6: Accessibility Audit**
- Run Lighthouse accessibility test
- Score 90+ on accessibility
- Fix all issues found

---

## 📚 RESOURCES

### Learning:
- [MDN: Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [FreeCodeCamp: Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design/)
- [Web.dev: Responsive images](https://web.dev/responsive-images/)

### Tools:
- [Chrome DevTools Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)
- [Responsively App](https://responsively.app/) - Test multiple screens
- [Am I Responsive?](https://ui.dev/amiresponsive) - Screenshot multiple devices
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Inspiration:
- [Land-book](https://land-book.com/) - Landing page gallery
- [Lapa Ninja](https://www.lapa.ninja/) - Design inspiration
- [One Page Love](https://onepagelove.com/) - Single-page examples

### Images:
- [Unsplash](https://unsplash.com/) - Free stock photos
- [Pexels](https://www.pexels.com/) - Free stock photos
- [Undraw](https://undraw.co/) - Free illustrations

---

## ❓ FREQUENTLY ASKED QUESTIONS

**Q: Do I need to build all 4 landing page types?**  
A: No, choose ONE. Portfolio is recommended since it contributes to Sprint 02.

**Q: Can I use a CSS framework like Bootstrap?**  
A: No, this is a challenge to demonstrate your understanding of responsive design from scratch.

**Q: How many breakpoints do I need?**  
A: Minimum 2 breakpoints (768px, 1024px). You can add more if design needs it (e.g., 1440px).

**Q: Does the contact form need to work (submit data)?**  
A: No backend required. Just HTML/CSS for now. JavaScript validation is a bonus.

**Q: Can I use JavaScript?**  
A: Yes! Required for hamburger menu toggle. Additional JS (smooth scroll, form validation) is bonus.

**Q: How do I deploy to GitHub Pages?**  
A: Settings → Pages → Source: main branch. Your site will be at `username.github.io/repo-name`

**Q: What if my design doesn't look "professional"?**  
A: Focus on clean, simple design. Good typography, consistent spacing, and working responsiveness > fancy graphics.

**Q: Can I use CSS Grid?**  
A: Yes, but Flexbox is required. You can combine both (Grid for overall layout, Flexbox for components).

**Q: How do I test on real mobile devices?**  
A: Use your phone! Open your GitHub Pages site on mobile. Or use DevTools device emulation.

---

## 🎯 SUCCESS CRITERIA

Your landing page is **successful** when:
- ✓ Looks good and works on phone, tablet, laptop
- ✓ Navigation adapts correctly (hamburger → horizontal)
- ✓ Content reflows without breaking (no overlaps, no horizontal scroll)
- ✓ Typography scales appropriately
- ✓ Images are responsive (no distortion, no overflow)
- ✓ Passes HTML & CSS validation
- ✓ You're proud to show it in your portfolio

---

## 🧪 TESTING CHECKLIST

Before submitting, test:
- [ ] Resize browser from 320px → 1920px → no layout breaks
- [ ] Hamburger menu toggles on mobile
- [ ] Navigation links scroll to correct sections
- [ ] All images load and look good
- [ ] Text is readable at all sizes
- [ ] Test in Chrome, Firefox, Safari
- [ ] Test on real mobile device
- [ ] Run W3C validators (HTML & CSS)
- [ ] Check Lighthouse scores (aim for 90+)

---

**This is your moment to shine! Build something you're proud of.** 🚀

**Good luck, and make it responsive!** 📱💻🖥️
