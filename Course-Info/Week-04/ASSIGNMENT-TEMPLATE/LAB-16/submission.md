# LAB-16 Submission Checklist

**Before marking this lab as complete, verify:**

## ✅ Code Requirements
- [ ] Created JavaScript file in `code/` folder (script.js)
- [ ] Created HTML file with form and notes display
- [ ] Created CSS file for styling
- [ ] Can add notes (title + content)
- [ ] Can display all notes
- [ ] Can delete notes
- [ ] Data saved to localStorage
- [ ] Data loads on page load

## ✅ LocalStorage Integration
- [ ] Used `localStorage.setItem()` to save data
- [ ] Used `localStorage.getItem()` to load data
- [ ] Used `JSON.stringify()` before saving
- [ ] Used `JSON.parse()` after loading
- [ ] Handled null localStorage gracefully (no crashes)
- [ ] Save function called after every change

## ✅ Functionality Testing
- [ ] Can add multiple notes
- [ ] Each note displays title and content
- [ ] Each note has delete button
- [ ] Delete removes note from array AND localStorage
- [ ] Empty fields show validation error
- [ ] Form resets after adding note

## ✅ Data Persistence Testing (CRITICAL!)
- [ ] Added 3 notes
- [ ] **Refreshed page (F5)** - notes still there!
- [ ] **Closed browser completely** - notes still there!
- [ ] Deleted a note - change persisted after refresh
- [ ] Added another note - change persisted after refresh
- [ ] No data loss at any point

## ✅ Code Quality
- [ ] Notes stored as array of objects
- [ ] Each note object has id, title, content, date
- [ ] Used `let`/`const` (no `var`)
- [ ] Functions have clear names (addNote, loadNotes, displayNotes, deleteNote)
- [ ] Code is properly commented
- [ ] Proper error handling

## ✅ User Experience
- [ ] Form prevents page reload (e.preventDefault)
- [ ] Notes display in readable format
- [ ] Delete button clearly visible
- [ ] UI is clean and professional
- [ ] No console errors

## ✅ Browser Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox or Edge
- [ ] localStorage works in both browsers
- [ ] No layout issues in either browser
- [ ] No console errors (F12 → Console)

## ✅ Git Workflow
- [ ] All files in `LAB-16/code/` folder
- [ ] Changes committed with clear message
- [ ] Changes pushed to GitHub
- [ ] Code visible on GitHub repo

## 🧪 Test Your Code
```bash
# Critical persistence test:
1. ✅ Open your notes app
2. ✅ Add 3 different notes
3. ✅ Close browser completely
4. ✅ Reopen browser
5. ✅ Open notes app again
6. ✅ All 3 notes should still be there!
7. ✅ Delete one note
8. ✅ Refresh page (F5)
9. ✅ Deleted note should stay deleted
```

## 📤 Final Steps
- [ ] Verify code appears on GitHub
- [ ] Take screenshot showing notes persisting after refresh
- [ ] Add note in screenshot caption: "Tested: Data persists after page reload ✅"
- [ ] Mark this lab complete in your tracking
- [ ] Move on to TICKET-16!

---

**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Complete

**Score:** _____ / 12.5 points

---

**THIS IS THE MOST IMPORTANT LAB THIS WEEK!**  
Make sure localStorage persistence works 100% before submitting.
