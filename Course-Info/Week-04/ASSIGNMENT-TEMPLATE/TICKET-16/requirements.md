# TICKET-16: Study Helper with LocalStorage

**See full requirements in:**  
`WEEK-04/TICKETS/TICKET-16.md`

---

## 📍 QUICK START

1. **Read** the full ticket requirements (link above)
2. **Build your solution** in the `code/` folder
3. **Test data persistence** thoroughly
4. **Check** submission.md before submitting

---

## 🎯 OBJECTIVE

Build a study helper app with:
- Study card management (add/view/delete/master)
- Quiz mode (random cards, show answer, mark progress)
- Progress tracking (total, mastered, progress bar)
- **LocalStorage persistence** (data survives refresh!)

---

## 💡 KEY FEATURES

**1. Study Card Management:**
- Add cards (term + definition)
- View all cards
- Delete cards
- Mark cards as \"mastered\"

**2. Quiz Mode:**
- Start quiz button
- Display random card (term only)
- Show answer button
- Mark as \"Got it\" or \"Need review\"
- Only quiz non-mastered cards

**3. Progress Tracking:**
- Total cards count
- Mastered cards count
- Progress bar (% mastered)
- Review count per card

**4. Data Persistence:**
- Save to localStorage after every change
- Load on page load
- Handle null gracefully

---

## ✅ REQUIREMENTS CHECKLIST

- [ ] Can add/delete study cards
- [ ] Quiz mode works (random cards)
- [ ] Progress tracking displays
- [ ] Data persists after refresh
- [ ] Used JSON.stringify/parse
- [ ] No data loss

---

**For complete requirements and full code template, see the main ticket file!**
