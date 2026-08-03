# Week 4 Friday - Sprint 02 Planning Session

**Date:** Week 4, Friday  
**Duration:** 2 hours (2:00 PM - 5:00 PM)  
**Format:** In-person workshop  
**Instructor:** Facilitate planning and wireframing

---

## 🎯 SESSION OBJECTIVES

- ✅ Understand Sprint 02 requirements (Professional Portfolio)
- ✅ Review grading rubric and success criteria
- ✅ Create wireframes for portfolio website
- ✅ Set up GitHub repository with proper structure
- ✅ Plan timeline and milestones
- ✅ Begin HTML structure (if time permits)

---

## ⏰ TIMING BREAKDOWN

| Time | Activity | Duration |
|------|----------|----------|
| 2:00-2:15 | Welcome & Sprint 02 Overview | 15 min |
| 2:15-2:45 | Requirements Deep Dive | 30 min |
| 2:45-3:00 | Break | 15 min |
| 3:00-3:45 | Wireframing Workshop | 45 min |
| 3:45-4:15 | Repository Setup & Planning | 30 min |
| 4:15-4:55 | Individual Work Time | 40 min |
| 4:55-5:00 | Wrap-up & Next Steps | 5 min |

---

## 📋 DETAILED AGENDA

### 1. Welcome & Sprint 02 Overview (2:00-2:15)

**Opening:**
> "Congratulations on completing 4 weeks of intensive training! You now have the skills to build professional websites. Sprint 02 is where you showcase everything you've learned by building a portfolio website that represents YOU as a developer."

**Why a Portfolio?**
- ✅ **Demonstrate skills** to potential employers
- ✅ **Showcase projects** from this bootcamp
- ✅ **Personal brand** - first impression for recruiters
- ✅ **Living document** - update throughout your career

**Show Examples:**
- Pull up 2-3 excellent portfolio websites
- Point out: clean design, clear navigation, project showcases, contact forms
- "These developers got jobs because of portfolios like this!"

**Sprint Timeline:**
- **Today:** Planning and wireframes
- **Week 5:** Building (HTML/CSS/JavaScript)
- **Week 6:** Polish, testing, deployment
- **Week 6 Friday:** Demo presentations (10 min each student)

---

### 2. Requirements Deep Dive (2:15-2:45)

**Project Requirements (Review Each):**

#### **A. Content Requirements**
- ✅ **4+ Pages:**
  1. **Home:** Hero section, brief intro, call-to-action
  2. **About:** Bio, skills, education, photo
  3. **Projects:** Showcase 3+ bootcamp projects
  4. **Contact:** Working contact form

- ✅ **Sections to Include:**
  - Navigation bar (responsive)
  - Hero/Banner section
  - About section
  - Skills section
  - Projects section (card layout)
  - Contact form
  - Footer (links, copyright)

#### **B. Technical Requirements**
- ✅ **Semantic HTML5:**
  - Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
  - Meaningful heading hierarchy (H1 → H6)
  - Accessible images (alt text)

- ✅ **CSS Styling:**
  - External stylesheet(s)
  - CSS variables for colors/fonts
  - Flexbox and/or Grid layouts
  - Smooth transitions/animations
  - Professional color scheme

- ✅ **Responsive Design:**
  - Mobile-first approach
  - Media queries for tablet and desktop
  - Works on screens 320px - 1920px wide
  - Hamburger menu on mobile (JavaScript)

- ✅ **JavaScript Interactivity (3+ features):**
  - Mobile navigation toggle
  - Smooth scrolling
  - Form validation
  - Modal/lightbox for project details
  - Dark mode toggle (bonus)
  - Scroll animations (bonus)

- ✅ **Form Handling:**
  - Contact form with validation
  - Required fields (name, email, message)
  - Email format validation
  - Success/error messages
  - Optional: Form submission (FormSpree or EmailJS)

#### **C. Deployment & Documentation**
- ✅ **Deployed:** GitHub Pages or Netlify (live URL)
- ✅ **GitHub Repository:**
  - Clean commit history
  - Professional README with screenshots
  - Organized folder structure
- ✅ **Accessibility:**
  - Color contrast ratios (WCAG AA)
  - Keyboard navigation
  - Screen reader friendly

#### **D. Grading Rubric (200 points total)**

| Category | Points | Criteria |
|----------|--------|----------|
| **HTML Structure** | 30 | Semantic HTML5, accessibility, valid markup |
| **CSS Styling** | 40 | Professional design, layout, color scheme, typography |
| **Responsive Design** | 30 | Mobile-first, works on all screen sizes, smooth breakpoints |
| **JavaScript** | 40 | 3+ interactive features, form validation, clean code |
| **Content Quality** | 20 | Professional copy, project showcases, complete sections |
| **Deployment** | 20 | Live site, working links, fast load times |
| **Git Workflow** | 10 | Clean commits, branches, professional README |
| **Presentation** | 10 | Demo quality, ability to explain code |

**Questions on Requirements?**
- Open floor for clarification questions
- Address concerns about scope

---

### 3. Break (2:45-3:00)

- Stretch, grab water, bathroom break
- Keep it to 15 minutes

---

### 4. Wireframing Workshop (3:00-3:45)

**Introduction to Wireframing:**
> "Before you write a single line of code, you need a plan. Wireframes are low-fidelity sketches of your website layout. They help you organize content and plan user flow."

**Tools:**
- Paper and pencil (low-tech, fast)
- Figma or Excalidraw (digital)
- Whiteboard (collaborative)

**Wireframing Steps:**

**Step 1: Sketch Mobile Layout First (15 min)**
- Start with 320px width (mobile)
- Draw each page (Home, About, Projects, Contact)
- Focus on content hierarchy, NOT visuals
- Include:
  - Navigation (hamburger icon)
  - Hero section
  - Content sections
  - Footer

**Step 2: Sketch Desktop Layout (15 min)**
- Draw 1200px+ width version
- How does content rearrange?
- Multi-column layouts
- Expanded navigation
- Wider hero sections

**Step 3: Plan Interactions (10 min)**
- Where does JavaScript come in?
  - Mobile menu toggle
  - Smooth scrolling navigation
  - Form validation messages
  - Project modals/lightboxes
- Mark interactive elements on wireframes

**Instructor Role:**
- Walk around, give feedback
- Show examples on screen
- Help students think through user flow
- Encourage simplicity (don't over-design)

**Deliverable:**
- Paper wireframes for 4 pages (mobile + desktop)
- Take photos and upload to GitHub repo (for documentation)

---

### 5. Repository Setup & Planning (3:45-4:15)

**GitHub Repository Setup (Live Demo):**

**Step 1: Create Repository**
```
Repository name: portfolio-website
Description: Professional portfolio showcasing my projects and skills
Public repository
✅ Add README
✅ Add .gitignore (choose Node or blank)
```

**Step 2: Clone to Local Machine**
```bash
git clone https://github.com/[username]/portfolio-website.git
cd portfolio-website
```

**Step 3: Create Folder Structure**
```
portfolio-website/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── [project screenshots]
├── wireframes/
│   └── [wireframe images]
└── README.md
```

**Step 4: Update README Template**
```markdown
# Portfolio Website

A professional portfolio showcasing my projects and skills.

## 🚀 Live Demo
[View Live Site](https://username.github.io/portfolio-website)

## 📸 Screenshots
[Add screenshots here]

## 🛠️ Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (Vanilla)

## ✨ Features
- Responsive design (mobile-first)
- Interactive navigation
- Form validation
- Smooth scrolling
- Dark mode toggle

## 📂 Project Structure
[Explain folder organization]

## 🎨 Design Choices
[Explain color scheme, fonts, layout decisions]

## 🚧 Challenges & Solutions
[Document problems you solved]

## 📝 License
MIT License
```

**Step 5: Initial Commit**
```bash
git add .
git commit -m "Initial commit: Project structure and wireframes"
git push origin main
```

**Planning Timeline (Individual):**

Each student creates a personal timeline:

| Day | Goal | Tasks |
|-----|------|-------|
| **Friday** | Wireframes & setup | ✅ Wireframes, ✅ Repo created |
| **Monday** | HTML structure | Build all 4 pages with semantic HTML |
| **Tuesday** | Basic CSS | Typography, colors, basic layout |
| **Wednesday** | Responsive layout | Flexbox/Grid, media queries |
| **Thursday** | JavaScript | Mobile menu, form validation |
| **Friday Week 5** | Polish & content | Final touches, content writing |
| **Monday Week 6** | Testing | Cross-browser, accessibility testing |
| **Tuesday Week 6** | Deployment | Deploy to GitHub Pages |
| **Wed-Thu Week 6** | Presentation prep | Practice demo, polish README |
| **Friday Week 6** | Demo day! | Present to class |

**Students:** Write this timeline in your README or a separate PLAN.md file.

---

### 6. Individual Work Time (4:15-4:55)

**Students Begin Building:**

**Priority Tasks (Choose Based on Skill Level):**

**Option A: Start HTML Structure**
- Create `index.html` with basic structure
- Add semantic elements (header, nav, main, footer)
- Create placeholder content

**Option B: Research Design Inspiration**
- Browse portfolio examples
- Choose color palette (Coolors.co)
- Select fonts (Google Fonts)
- Save inspiration to README

**Option C: Write Content**
- Draft About section bio
- List skills to showcase
- Write project descriptions
- Plan contact form fields

**Instructor Role:**
- Circulate and help students
- Answer questions
- Review wireframes
- Check GitHub repos are set up correctly
- Encourage progress (even small wins)

---

### 7. Wrap-up & Next Steps (4:55-5:00)

**Quick Check-in:**
> "Show of hands - who has wireframes done? Repo set up? Started coding?"

**Celebrate Progress:**
> "You've officially started your portfolio! This is the project you'll be proud to show employers."

**Weekend Work (Optional but Encouraged):**
- [ ] Finalize wireframes
- [ ] Start HTML structure for all 4 pages
- [ ] Research design inspiration
- [ ] Write content drafts

**Reminders:**
- ✅ **Monday:** Continue building (HTML focus)
- ✅ **Office Hours:** Sunday 6-7 PM (virtual) if you want help
- ✅ **Discord:** #sprint-02 channel for questions

**Closing:**
> "This is YOUR portfolio. Make it represent YOU. Be creative, be professional, and most importantly, have fun building it. See you Monday!"

---

## 📝 INSTRUCTOR PREP CHECKLIST

**Before Session:**
- [ ] Review Sprint 02 requirements document
- [ ] Prepare example portfolios to show
- [ ] Print wireframe templates (optional)
- [ ] Test screen sharing for live coding demos
- [ ] Prepare GitHub repo structure example

**During Session:**
- [ ] Keep energy high (this is exciting!)
- [ ] Encourage creativity within requirements
- [ ] Help students scope appropriately (not too ambitious)
- [ ] Ensure every student leaves with wireframes and repo

**After Session:**
- [ ] Check all students' GitHub repos
- [ ] Post resources to Discord (#sprint-02)
- [ ] Schedule Sunday office hours reminder
- [ ] Prepare for Monday's work session

---

## 🎨 DESIGN RESOURCES TO SHARE

**Color Palettes:**
- Coolors.co
- Adobe Color
- Material Design Color Tool

**Fonts:**
- Google Fonts (Roboto, Open Sans, Lato, Montserrat)
- Font pairing guides

**Inspiration:**
- Awwwards.com (for ideas, not to copy)
- Dribbble.com
- Other bootcamp students' portfolios

**Icons:**
- Font Awesome
- Heroicons
- Feather Icons

**Images:**
- Unsplash (free stock photos)
- Use your own photos!

---

## ✅ SUCCESS INDICATORS

By end of session, every student should have:
- ✅ Wireframes for 4 pages (mobile + desktop)
- ✅ GitHub repository created and cloned
- ✅ Folder structure set up
- ✅ README template started
- ✅ Timeline/plan documented
- ✅ Excitement and clarity about next steps

---

**Let's build something amazing! 🚀**
