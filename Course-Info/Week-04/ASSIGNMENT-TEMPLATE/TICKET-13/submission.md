# TICKET-13 Submission Checklist

**Before submitting this ticket, verify:**

## ✅ Component Structure
- [ ] Product card with image, title, description, price
- [ ] \"Add to Cart\" button included
- [ ] Favorite/like icon (heart or star)
- [ ] Icon positioned absolutely (top-right corner)
- [ ] Card container uses relative positioning
- [ ] Z-index creates proper layering

## ✅ Transitions (Hover Effects)
- [ ] Card lifts on hover (translateY)
- [ ] Box shadow increases on hover
- [ ] Image scales slightly on card hover (1.05x)
- [ ] Button changes color on hover
- [ ] All transitions are smooth (0.2s - 0.4s duration)
- [ ] Transitions use ease or ease-in-out timing

## ✅ Animations (Keyframes)
- [ ] Card fades in when page loads (@keyframes fadeIn)
- [ ] Price badge has continuous pulse animation
- [ ] Animations are subtle and professional
- [ ] Animation timing feels natural
- [ ] No choppy or janky animations

## ✅ Technical Implementation
- [ ] External CSS file (styles.css)
- [ ] Valid HTML5 structure
- [ ] Semantic HTML elements
- [ ] Proper use of position: absolute and relative
- [ ] Z-index used correctly for layering
- [ ] Transform used for smooth animations

## ✅ Responsive Design
- [ ] Card width adapts to screen size
- [ ] Works on mobile (320px width)
- [ ] Works on tablet (768px width)
- [ ] Works on desktop (1200px+ width)
- [ ] No horizontal scrolling
- [ ] Touch-friendly on mobile

## ✅ Visual Quality
- [ ] Professional color scheme
- [ ] Readable typography
- [ ] Good contrast ratios
- [ ] Rounded corners (border-radius)
- [ ] Polished, production-ready appearance
- [ ] Looks like a real product card

## ✅ Code Quality
- [ ] CSS is organized and commented
- [ ] Proper indentation and formatting
- [ ] Consistent naming conventions
- [ ] No duplicate code
- [ ] Follows best practices

## ✅ Browser Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox or Edge
- [ ] All animations work in both browsers
- [ ] All transitions work smoothly
- [ ] No console errors

## ✅ Git Workflow
- [ ] All files in `TICKET-13/code/` folder
- [ ] Changes committed with clear message
- [ ] Changes pushed to GitHub
- [ ] Code visible on GitHub repo

## 🧪 Test Your Code
```bash
# Manual testing checklist:
1. ✅ Open page - card fades in smoothly
2. ✅ Hover over card - lifts up with shadow
3. ✅ Hover over button - color changes smoothly
4. ✅ Watch price badge - pulse animation runs continuously
5. ✅ Resize browser - card remains responsive
6. ✅ Check mobile view (DevTools responsive mode)
7. ✅ Check console (F12) - no errors
```

## 📤 Discord Submission

**Post in #assignments channel:**

```
TICKET-13 Submission
Name: [Your Name]
GitHub: [Repository URL]
Screenshot: [Attach showing hover state]
Features:
  ✅ Positioning (absolute favorite icon, relative card)
  ✅ Transitions (card lift, image scale, button hover)
  ✅ Animations (fadeIn on load, pulse on price)
  ✅ Responsive (tested mobile/tablet/desktop)
Testing: ✅ Chrome ✅ Firefox ✅ No errors
```

---

**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Complete

**Score:** _____ / 12.5 points
