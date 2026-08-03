# LAB 09 - Semantic About Me Page

**Duration:** 55 minutes  
**Points:** 12.5  
**Due:** End of class (Monday Week 3)

---

## 🎯 LEARNING OBJECTIVES

By completing this lab, you will:
- ✅ Build a well-structured HTML5 page using semantic elements
- ✅ Implement proper heading hierarchy
- ✅ Create accessible forms and images
- ✅ Validate HTML using W3C Validator
- ✅ Build your first portfolio component

---

## 📋 PROJECT DESCRIPTION

Create a professional "About Me" page that will be part of your Sprint 02 Portfolio Website. This page should tell your story as a developer and showcase what makes you unique.

**Your About Me page should:**
- Use semantic HTML5 structure
- Include 4+ content sections
- Be fully accessible (WCAG basics)
- Pass W3C HTML validation
- Contain YOUR authentic information (not placeholder text!)

---

## ✅ REQUIREMENTS

### Structural Requirements
- [ ] Valid HTML5 document structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- [ ] Proper metadata in `<head>` (charset, viewport, description, title)
- [ ] Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- [ ] Only ONE `<h1>` per page
- [ ] Logical heading hierarchy (H1 → H2 → H3, don't skip levels)

### Content Requirements
Include at LEAST these 4 sections:

1. **Bio Section**
   - Paragraph(s) about your background
   - Why you're learning to code
   - Your story (career change, passion project, etc.)
   - At least one image with descriptive alt text

2. **Skills Section**
   - List of technologies you're learning
   - Can be unordered list (`<ul>`) or grouped by category
   - Include both technical and soft skills

3. **Interests Section**
   - Hobbies outside of coding
   - What you're passionate about
   - Shows personality (employers want to know you as a person!)

4. **Goals Section**
   - Professional objectives
   - What you want to accomplish
   - Short-term and/or long-term goals
   - Consider using ordered list (`<ol>`) for goals

### Accessibility Requirements
- [ ] All images have descriptive alt text
- [ ] All form inputs have matching labels (if including a form)
- [ ] Proper use of semantic HTML (not div soup!)
- [ ] Meaningful link text (not "click here")

### Validation Requirement
- [ ] **MUST pass W3C HTML Validator** with no errors
- [ ] Take screenshot of validation results
- [ ] Include screenshot in submission

---

## 🚀 GETTING STARTED

### Step 1: Set Up Your Files
```
LAB-09/
├── index.html          (Your About Me page)
├── images/             (folder for images)
│   └── profile.jpg     (your photo)
└── validation.png      (screenshot of W3C validation)
```

### Step 2: Start from Starter Code
- Copy the provided `starter.html` file
- Rename to `index.html`
- Open in VS Code
- Open with Live Server to preview

### Step 3: Replace TODOs
The starter code has `<!-- TODO -->` comments showing where to add content. Replace each TODO with your actual content.

---

## 💡 TIPS & GUIDANCE

### Writing Your Bio
**Good Example:**
> "Hi! I'm Sarah, a career-changer passionate about solving problems with code. After 5 years in healthcare, I realized my love for technology and decided to pursue software development. I'm excited to build accessible, user-friendly applications that improve people's lives."

**Avoid:**
> "I'm a student. I like coding." ❌ Too generic!

### Listing Skills
**Example Structure:**
```html
<section id="skills">
  <h2>Skills & Technologies</h2>
  
  <h3>Currently Learning:</h3>
  <ul>
    <li>JavaScript (ES6+)</li>
    <li>HTML5 & Semantic Markup</li>
    <li>CSS3 & Responsive Design</li>
    <li>Git & GitHub</li>
  </ul>
  
  <h3>Soft Skills:</h3>
  <ul>
    <li>Problem-solving</li>
    <li>Team collaboration</li>
    <li>Communication</li>
  </ul>
</section>
```

### Alt Text Best Practices
**Bad:**
```html
<img src="me.jpg" alt="image">
<img src="me.jpg" alt="picture of me">
```

**Good:**
```html
<img src="me.jpg" alt="Jane Smith smiling at a coffee shop with laptop">
<img src="project.jpg" alt="Screenshot of weather app showing current temperature and 5-day forecast">
```

**Rule:** Describe what's IN the image, not just "image" or "picture"

---

## 🎨 EXAMPLE SECTIONS

### Bio Section Example
```html
<section id="bio">
  <h2>About Me</h2>
  <img src="images/profile.jpg" alt="John Doe wearing blue shirt in front of bookshelf">
  
  <p>
    Hi! I'm John, an aspiring full-stack developer currently enrolled in 
    the DevHub Bootcamp. My journey into tech began when I automated 
    repetitive tasks at my previous job and discovered my passion for coding.
  </p>
  
  <p>
    I love the creative and logical aspects of programming - it's like 
    solving puzzles that help real people. When I'm not coding, you'll 
    find me hiking or reading sci-fi novels.
  </p>
</section>
```

### Goals Section Example
```html
<section id="goals">
  <h2>Professional Goals</h2>
  
  <h3>Short-Term (2024)</h3>
  <ol>
    <li>Complete bootcamp with a strong portfolio</li>
    <li>Contribute to at least 2 open source projects</li>
    <li>Land my first junior developer role</li>
  </ol>
  
  <h3>Long-Term (2-5 years)</h3>
  <ol>
    <li>Specialize in frontend development (React/Next.js)</li>
    <li>Mentor other aspiring developers</li>
    <li>Build my own SaaS product</li>
  </ol>
</section>
```

---

## 🧪 TESTING YOUR PAGE

### Before You Submit - Checklist:

1. **Visual Test**
   - [ ] Open in browser with Live Server
   - [ ] All content displays correctly
   - [ ] Images load (no broken image icons)
   - [ ] Links work (click to test)

2. **Keyboard Navigation Test**
   - [ ] Tab through all interactive elements (links, buttons)
   - [ ] Logical tab order (top to bottom)
   - [ ] Focus indicators visible

3. **Code Quality**
   - [ ] Proper indentation (readable code)
   - [ ] Meaningful comments where helpful
   - [ ] All tags properly closed
   - [ ] Consistent naming (lowercase, hyphens)

4. **W3C Validation**
   - [ ] Go to https://validator.w3.org/
   - [ ] Upload your HTML file or paste code
   - [ ] Fix any errors shown
   - [ ] Re-validate until you get "Document checking completed. No errors or warnings to show."
   - [ ] **Take screenshot of successful validation**

---

## 📤 SUBMISSION REQUIREMENTS

### What to Submit:

1. **Your HTML File**
   - `index.html` with complete About Me page
   - Must pass W3C validation

2. **Images Folder**
   - Include any images used
   - At least one photo of yourself (or professional placeholder)

3. **Validation Screenshot**
   - Screenshot showing successful W3C validation
   - Name it `validation.png`

4. **Submission Method:**
   - **Push to GitHub:**
     ```bash
     cd LAB-09
     git add .
     git commit -m "Complete Lab 09 - About Me page"
     git push origin main
     ```
   - **Then submit:**
     - GitHub repository link in LMS
     - OR zip folder and upload to LMS

---

## 🎯 GRADING RUBRIC

| Category | Points | Criteria |
|----------|--------|----------|
| **HTML Structure** | 3 pts | Proper document structure, semantic elements, only one H1 |
| **Content** | 3 pts | All 4 sections present with meaningful content |
| **Accessibility** | 2.5 pts | Alt text on images, heading hierarchy, semantic markup |
| **Validation** | 2 pts | Passes W3C validator with screenshot provided |
| **Code Quality** | 2 pts | Proper indentation, clean code, meaningful names |
| **TOTAL** | **12.5 pts** | |

---

## ⚠️ COMMON MISTAKES TO AVOID

1. **Skipping heading levels**
   ```html
   ❌ <h1>Page</h1> <h3>Section</h3>  (skipped H2!)
   ✅ <h1>Page</h1> <h2>Section</h2>
   ```

2. **Missing label-input connection**
   ```html
   ❌ <label>Name</label> <input id="name">  (no 'for')
   ✅ <label for="name">Name</label> <input id="name">
   ```

3. **Generic alt text**
   ```html
   ❌ <img src="me.jpg" alt="image">
   ✅ <img src="me.jpg" alt="Sarah Chen smiling in office">
   ```

4. **Using Lorem Ipsum**
   ```html
   ❌ <p>Lorem ipsum dolor sit amet...</p>
   ✅ <p>I'm passionate about building accessible web applications...</p>
   ```

5. **Multiple H1 tags**
   ```html
   ❌ <h1>About Me</h1> ... <h1>Skills</h1>
   ✅ <h1>About Me</h1> ... <h2>Skills</h2>
   ```

---

## 🆘 NEED HELP?

### Stuck on Getting Started?
- Review the demo files shown in class
- Look at the starter code TODOs
- Start with just the header section, then add one section at a time

### Stuck on Content?
- Be authentic - write about YOUR experience
- It's okay if your experience is limited (you're learning!)
- Focus on your "why" - why are you learning to code?

### Stuck on Validation Errors?
- Read the error message carefully (it tells you the line number!)
- Common issues: unclosed tags, duplicate IDs, missing required attributes
- Ask in Discord #lab-help channel

### Still Stuck?
- Check Discord #lab-help channel
- Raise your hand (in-class)
- Review lecture notes and demos
- Ask instructor or TA

---

## 🌟 STRETCH GOALS (Optional)

Already finished? Try these enhancements:

1. **Add More Semantic Elements:**
   - Use `<figure>` and `<figcaption>` for images
   - Add `<details>` and `<summary>` for expandable FAQ
   - Use `<time>` element with datetime attribute

2. **Enhance Accessibility:**
   - Add `aria-label` to social media links
   - Use `<abbr>` for abbreviations
   - Add skip-to-content link

3. **Extra Sections:**
   - Education/certifications
   - Timeline of your journey
   - Favorite projects (preview)
   - Contact form

4. **Advanced HTML Elements:**
   - Use `<mark>` to highlight important text
   - Add `<blockquote>` with a favorite quote
   - Use `<cite>` for attributions

---

## 📚 RESOURCES

**Reference Materials:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [W3C HTML Validator](https://validator.w3.org/)
- [WebAIM Accessibility Checklist](https://webaim.org/standards/wcag/checklist)

**Inspiration:**
- Look at professional portfolio sites for ideas
- Don't copy code, but note structure and content types
- Your page doesn't need CSS yet - focus on structure!

---

## ✨ WHAT'S NEXT?

**Tuesday (Week 3):**
- Learn CSS fundamentals
- Style this About Me page beautifully
- Make it look professional with colors, fonts, and spacing

**This About Me page will become a key component of your Sprint 02 Portfolio Website!**

---

## 🎉 YOU GOT THIS!

Remember:
- This is YOUR page - make it authentic
- Accessibility is not optional - it's essential
- Validation ensures your code is solid
- Ask for help if you're stuck

**Start coding and have fun building your developer story! 🚀**

---

**Questions?** Ask in Discord #week-03-questions or raise your hand!
