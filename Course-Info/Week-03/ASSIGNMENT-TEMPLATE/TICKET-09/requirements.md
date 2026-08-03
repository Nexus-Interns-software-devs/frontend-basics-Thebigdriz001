# TICKET-09: Semantic Portfolio Homepage

**Assigned:** Week 3 Monday  
**Due:** Week 3 Thursday, 9:00 AM  
**Points:** 12.5  
**Type:** Individual Task  
**Sprint:** Sprint 02 - Professional Portfolio Website

---

## 🎯 OBJECTIVE

Create a semantic HTML homepage for your portfolio website that will serve as the landing page for visitors. This page should introduce you professionally and encourage visitors to explore your work.

---

## 📋 REQUIREMENTS

### Content Sections (Minimum 4):

1. **Hero Section**
   - Eye-catching headline with your name
   - Brief tagline/subtitle (your role or value proposition)
   - Call-to-action button linking to contact or about section

2. **About Preview**
   - 2-3 sentences about who you are
   - What you're passionate about
   - Link to full About page

3. **Featured Projects Preview**
   - Showcase 2-3 of your best projects
   - Project name, brief description, tech stack
   - Link to full Projects page

4. **Call-to-Action Section**
   - Encourage visitors to get in touch
   - Link to contact form or email
   - Optional: Social media links

### Technical Requirements:

- [ ] Valid HTML5 document structure
- [ ] Semantic HTML elements used throughout:
  - `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [ ] Proper heading hierarchy (one `<h1>`, logical `<h2>`, `<h3>` structure)
- [ ] Navigation with links to other portfolio pages
- [ ] Meta tags in `<head>`:
  - charset
  - viewport (for responsive design)
  - description (SEO)
  - title tag with your name
- [ ] All images have descriptive `alt` text
- [ ] External links open in new tab (`target="_blank" rel="noopener"`)
- [ ] Passes W3C HTML Validator with no errors

---

## 🎨 DESIGN GUIDELINES

**Note:** This ticket focuses on HTML structure only. Styling will come in later tickets.

### Content Tips:
- **Be authentic** - Write in your own voice
- **Be concise** - Homepage is a preview, not your life story
- **Be professional** - You're building a portfolio to get hired
- **Be specific** - "Full-stack developer passionate about accessibility" beats "I like coding"

### Structure Tips:
- Use semantic elements that describe your content
- Organize with clear sections
- Think about the user journey (what should they see first?)
- Include clear next steps (CTAs)

---

## 📝 STARTER CODE

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[Your name] - [Your role] portfolio">
  <title>[Your Name] - Web Developer Portfolio</title>
</head>
<body>
  
  <!-- TODO: Add header with navigation -->
  
  <!-- TODO: Add hero section -->
  
  <!-- TODO: Add about preview section -->
  
  <!-- TODO: Add featured projects section -->
  
  <!-- TODO: Add call-to-action section -->
  
  <!-- TODO: Add footer -->

</body>
</html>
```

---

## ✅ ACCEPTANCE CRITERIA

Your submission is complete when:

1. **HTML Structure:**
   - [ ] Valid HTML5 with proper DOCTYPE
   - [ ] All required meta tags present
   - [ ] Semantic elements used appropriately
   - [ ] Heading hierarchy is logical

2. **Content:**
   - [ ] Contains all 4 required sections minimum
   - [ ] Content is YOUR authentic information (not Lorem Ipsum)
   - [ ] All text is professionally written
   - [ ] Navigation links to other portfolio pages

3. **Accessibility:**
   - [ ] All images have alt text
   - [ ] All links have descriptive text (not "click here")
   - [ ] Proper use of semantic HTML
   - [ ] Keyboard navigable

4. **Validation:**
   - [ ] Passes W3C HTML Validator (validator.w3.org)
   - [ ] No errors, warnings are acceptable

5. **GitHub:**
   - [ ] Pushed to your portfolio GitHub repository
   - [ ] Repository named appropriately (e.g., "portfolio" or "your-name-portfolio")
   - [ ] README.md includes project description

---

## 📤 SUBMISSION

**Submit to Discord #assignments channel:**

1. **GitHub Repository Link**
   - URL to your portfolio repo
   - Ensure repo is public

2. **Screenshot**
   - Full-page screenshot of your homepage
   - Can use browser extension or manual scroll capture

3. **W3C Validation**
   - Screenshot showing "Document checking completed. No errors found."

**Submission Message Format:**
```
TICKET-09 Submission
Name: [Your Name]
GitHub Repo: [URL]
Screenshots: [Attach 2 images]
Validator: Passed ✅
```

---

## 💡 TIPS & HINTS

### Stuck on content?

**Hero Section Example:**
```html
<section class="hero">
  <h1>Hi, I'm [Your Name]</h1>
  <p>Full-Stack Developer | Problem Solver | Coffee Enthusiast</p>
  <a href="#contact">Get In Touch</a>
</section>
```

**About Preview Example:**
```html
<section id="about-preview">
  <h2>About Me</h2>
  <p>I'm a passionate developer currently in a software development bootcamp, 
     learning to build modern web applications. I love solving problems through 
     code and creating user-friendly digital experiences.</p>
  <a href="about.html">Learn More About Me →</a>
</section>
```

### SEO Tips:
- Write a compelling meta description (150-160 characters)
- Use descriptive title (shows in search results)
- Use semantic HTML (helps search engines understand your content)

### Common Mistakes:
- ❌ Using too many `<div>` elements instead of semantic tags
- ❌ Skipping heading levels (h1 → h3, missing h2)
- ❌ Forgetting viewport meta tag
- ❌ Using placeholder text instead of real content
- ❌ Not validating before submitting

---

## 📚 RESOURCES

- [MDN: HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [W3C Markup Validation Service](https://validator.w3.org/)
- [Google: SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [WebAIM: Semantic Structure](https://webaim.org/techniques/semanticstructure/)

---

## 🏆 BONUS CHALLENGES (+1 point each)

**Bonus 1: Advanced SEO**
- Add Open Graph meta tags for social media sharing
- Add favicon
- Include structured data (JSON-LD)

**Bonus 2: Multiple Pages**
- Create skeleton for About, Projects, and Contact pages
- All linked from navigation
- Consistent header/footer across pages

**Bonus 3: Accessibility Audit**
- Run Lighthouse accessibility audit (80+ score)
- Include screenshot in submission

---

## ❓ FREQUENTLY ASKED QUESTIONS

**Q: How much content do I need?**  
A: Quality over quantity. 2-3 sentences per section is fine. Focus on making it authentic and professional.

**Q: Can I use Lorem Ipsum text?**  
A: No. Use your actual information. This is YOUR portfolio.

**Q: Do I need to add CSS styling?**  
A: No, this ticket is HTML structure only. Styling comes in TICKET-10.

**Q: What if I don't have projects yet?**  
A: Use placeholder projects from the bootcamp (Lab assignments, practice projects). You'll add real projects as you build them.

**Q: How do I take a full-page screenshot?**  
A: Use browser extensions like "Full Page Screen Capture" or DevTools screenshot feature (Ctrl+Shift+P → "Capture full size screenshot").

---

**Good luck! Build something you're proud to share!** 🚀
