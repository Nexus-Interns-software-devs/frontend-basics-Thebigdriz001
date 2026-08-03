# Week 3 - HTML5, CSS, Flexbox & Responsive Design

**Duration:** Monday-Thursday, Week 3  
**Total Points:** 50 points (4 labs × 12.5 pts + 4 tickets × 12.5 pts)  
**Due:** Friday Week 3, 5:00 PM

---

## 📚 OVERVIEW

This week you'll learn HTML5 semantic elements, CSS fundamentals, Flexbox layouts, and responsive design principles. You'll build professional web pages and components.

**Topics Covered:**
- HTML5 Semantic Elements (Monday)
- CSS Fundamentals & Box Model (Tuesday)
- Flexbox Layouts (Wednesday)
- Responsive Design & Media Queries (Thursday)

---

## 📁 ASSIGNMENT STRUCTURE

```
WEEK-03/
├── LAB-09/                    # Monday Lab - Semantic HTML Personal Bio
│   ├── instructions.md        # Lab requirements (READ THIS!)
│   ├── code/                  # 👈 PUT YOUR CODE HERE
│   │   └── .gitkeep
│   └── submission.md          # Checklist before submitting
│
├── LAB-10/                    # Tuesday Lab - CSS Styled About Me Page
│   ├── instructions.md
│   ├── code/
│   │   └── .gitkeep
│   └── submission.md
│
├── LAB-11/                    # Wednesday Lab - Flexbox Card Layout
│   ├── instructions.md
│   ├── code/
│   │   └── .gitkeep
│   └── submission.md
│
├── LAB-12/                    # Thursday Lab - Responsive Portfolio
│   ├── instructions.md
│   ├── code/
│   │   └── .gitkeep
│   └── submission.md
│
├── TICKET-09/                 # Monday Ticket - Semantic Portfolio Homepage
│   ├── requirements.md        # Ticket requirements
│   ├── code/
│   │   └── .gitkeep
│   └── submission.md
│
├── TICKET-10/                 # Tuesday Ticket - CSS Styling Challenge
│   ├── requirements.md
│   ├── code/
│   │   └── .gitkeep
│   └── submission.md
│
├── TICKET-11/                 # Wednesday Ticket - Flexbox Layout Challenge
│   ├── requirements.md
│   ├── code/
│   │   └── .gitkeep
│   └── submission.md
│
├── TICKET-12/                 # Thursday Ticket - Responsive Landing Page
│   ├── requirements.md
│   ├── code/
│   │   └── .gitkeep
│   └── submission.md
│
├── .gitignore                 # Files to ignore
└── README.md                  # This file
```

---

## 🚀 GETTING STARTED

### Step 1: Accept the Assignment
1. Click the GitHub Classroom invitation link (provided in Discord)
2. Accept the assignment
3. GitHub will create your personal repository: `week-03-labs-tickets-YOUR-USERNAME`

### Step 2: Clone Your Repository
```bash
# Navigate to where you want to store your projects
cd Desktop/Bootcamp

# Clone your personal repo (replace YOUR-USERNAME)
git clone https://github.com/3LOGY-Bootcamp-2026/week-03-labs-tickets-YOUR-USERNAME.git

# Navigate into the folder
cd week-03-labs-tickets-YOUR-USERNAME
```

### Step 3: Complete the Assignments
For each lab/ticket:
1. **Read the instructions:** Open `LAB-XX/instructions.md` or `TICKET-XX/requirements.md`
2. **Write your code:** Save your HTML/CSS files in the `code/` folder
3. **Test your work:** Open HTML files in browsers (Chrome, Firefox, Edge)
4. **Validate:** Use W3C validators for HTML and CSS
5. **Complete checklist:** Check off items in `submission.md`
6. **Commit and push:**
   ```bash
   git add .
   git commit -m "Complete LAB-XX: [brief description]"
   git push
   ```

---

## 📝 WEEKLY ASSIGNMENTS BREAKDOWN

### Labs (12.5 points each × 4 = 50 points)

| Lab | Topic | Due | Points |
|-----|-------|-----|--------|
| LAB-09 | Semantic HTML5 Personal Bio | Mon 5pm | 12.5 |
| LAB-10 | CSS Styled About Me Page | Tue 5pm | 12.5 |
| LAB-11 | Flexbox Card Layout | Wed 5pm | 12.5 |
| LAB-12 | Responsive Portfolio | Thu 5pm | 12.5 |

### Tickets (12.5 points each × 4 = 50 points)

| Ticket | Topic | Assigned | Due | Points |
|--------|-------|----------|-----|--------|
| TICKET-09 | Semantic Portfolio Homepage | Mon | Thu 9am | 12.5 |
| TICKET-10 | CSS Styling Challenge | Tue | Fri 5pm | 12.5 |
| TICKET-11 | Flexbox Layout Challenge | Wed | Mon (Week 4) 9am | 12.5 |
| TICKET-12 | Responsive Landing Page | Thu | Tue (Week 4) 5pm | 12.5 |

**Total Possible Points:** 100 points

---

## ✅ SUBMISSION CHECKLIST

Before submitting each assignment:

### For Labs:
- [ ] HTML file(s) created and saved in `code/` folder
- [ ] CSS file(s) created and saved in `code/` folder
- [ ] All requirements from `instructions.md` completed
- [ ] HTML validates at [W3C HTML Validator](https://validator.w3.org/)
- [ ] CSS validates at [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [ ] Tested in Chrome, Firefox, and Edge browsers
- [ ] Screenshots taken (if required)
- [ ] `submission.md` checklist completed
- [ ] Code committed and pushed to GitHub
- [ ] Submission posted in Discord #assignments channel

### For Tickets:
- [ ] HTML file(s) created and saved in `code/` folder
- [ ] CSS file(s) created and saved in `code/` folder
- [ ] All acceptance criteria from `requirements.md` met
- [ ] HTML validates at [W3C HTML Validator](https://validator.w3.org/)
- [ ] CSS validates at [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [ ] Tested in multiple browsers
- [ ] Responsive design tested (if applicable)
- [ ] Screenshots taken (mobile, tablet, desktop if responsive)
- [ ] `submission.md` checklist completed
- [ ] Code committed and pushed to GitHub
- [ ] Submission posted in Discord #assignments channel

---

## 🎯 SUCCESS TIPS

### HTML Best Practices:
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Always include `alt` text for images
- Use proper heading hierarchy (h1 → h2 → h3)
- Validate your HTML before submitting

### CSS Best Practices:
- Use external stylesheets (styles.css)
- Organize CSS with comments
- Use CSS custom properties (variables) for colors/spacing
- Use consistent naming conventions (kebab-case)
- Test on multiple browsers

### Flexbox Tips:
- Remember: `display: flex` on the parent/container
- Use `justify-content` for main axis alignment
- Use `align-items` for cross axis alignment
- Practice with [Flexbox Froggy](https://flexboxfroggy.com/)

### Responsive Design Tips:
- Design mobile-first (code mobile styles first)
- Use `min-width` media queries to scale up
- Test at common breakpoints: 320px, 768px, 1024px
- Use relative units (rem, em, %) instead of px where appropriate

---

## 🔧 DEVELOPMENT TOOLS

### Required Tools:
- **Code Editor:** VS Code (recommended)
- **Browser:** Chrome (with DevTools)
- **Version Control:** Git

### Helpful Extensions (VS Code):
- Live Server - Launch development server with hot reload
- HTML CSS Support - IntelliSense for CSS
- Auto Rename Tag - Rename paired HTML tags automatically
- Prettier - Code formatter

### Validation Tools:
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Learning Resources:
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Can I Use](https://caniuse.com/) - Browser compatibility

---

## 🐛 TROUBLESHOOTING

### Common Issues:

**Issue:** "My CSS isn't loading"
- ✅ Check the `<link>` tag in your HTML `<head>`
- ✅ Make sure the CSS file path is correct
- ✅ Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)
- ✅ Check browser DevTools Console for errors

**Issue:** "My layout looks different in different browsers"
- ✅ Add a CSS reset at the top of your stylesheet
- ✅ Use `box-sizing: border-box` on all elements
- ✅ Test in Chrome, Firefox, and Edge

**Issue:** "Flexbox isn't working"
- ✅ Make sure you applied `display: flex` to the **parent** element
- ✅ Check if you're using the right properties (justify-content vs align-items)
- ✅ Use Chrome DevTools to inspect flex containers

**Issue:** "Media queries aren't working"
- ✅ Include `<meta name="viewport" content="width=device-width, initial-scale=1.0">` in HTML
- ✅ Put media queries at the END of your CSS file
- ✅ Use `min-width` for mobile-first approach
- ✅ Test using browser DevTools device emulation

**Issue:** "Git push is rejected"
- ✅ Make sure you're on the correct branch
- ✅ Try `git pull` before pushing
- ✅ Check you have write permissions to the repo

---

## 💬 GETTING HELP

### In Order of Preference:

1. **Check the Resources**
   - Read the instructions/requirements carefully
   - Check the helpful tips sections
   - Review lecture notes and demos

2. **Use Browser DevTools**
   - Inspect elements
   - Check Console for errors
   - Use responsive design mode

3. **Search for Solutions**
   - Google the exact error message
   - Check MDN Web Docs
   - Browse Stack Overflow

4. **Ask in Discord**
   - Post in `#help` channel
   - Include:
     - What you're trying to do
     - What's happening instead
     - Code snippet (use code blocks)
     - Browser console errors (if any)

5. **Office Hours**
   - See bootcamp schedule for office hours
   - Come prepared with specific questions

---

## 🏆 GRADING RUBRIC

Each lab and ticket is graded on:

### Functionality (40%):
- All requirements completed
- Features work as expected
- No major bugs or errors

### Code Quality (30%):
- Valid HTML and CSS
- Clean, organized code
- Proper indentation
- Meaningful names

### Design (20%):
- Professional appearance
- Good use of color and typography
- Adequate white space
- Responsive (where required)

### Submission (10%):
- Submitted on time
- Correct format
- Checklist completed
- Proper naming conventions

**Late Policy:** -10% per day late (up to 3 days). After 3 days, assignment receives 0 points.

---

## 📅 WEEK 3 SCHEDULE REMINDER

| Day | Class Time | Format | Topic | Assignment Due |
|-----|------------|--------|-------|----------------|
| Monday | 2:00-5:00 PM | Physical | HTML5 Semantic Elements | - |
| Tuesday | 6:00-9:00 PM | Virtual | CSS Fundamentals | LAB-09 (5pm) |
| Wednesday | 6:00-9:00 PM | Virtual | Flexbox Layouts | LAB-10 (5pm) |
| Thursday | 2:00-5:00 PM | Physical | Responsive Design | LAB-11 (5pm), TICKET-09 (9am) |
| Friday | - | No Class | Sprint Work | LAB-12 (5pm), TICKET-10 (5pm) |

---

## 📧 QUESTIONS?

If you have questions about assignments:
- **Technical questions:** Discord `#help` channel
- **Grading questions:** Email instructor
- **Submission issues:** Discord `#support` channel

---

**Good luck! Build something amazing this week!** 🚀

**Remember:** These assignments build toward your Sprint 02 portfolio project. Put in your best effort!
