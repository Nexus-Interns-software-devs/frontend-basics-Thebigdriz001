# TICKET-14 Submission Checklist

**Before submitting this ticket, verify:**

## ✅ New Operations
- [ ] `power(base, exponent)` function works correctly
- [ ] `modulus(a, b)` function works correctly
- [ ] `squareRoot(num)` function works correctly
- [ ] `percentage(num, percent)` function works correctly
- [ ] Tested: power(2, 3) returns 8
- [ ] Tested: modulus(10, 3) returns 1
- [ ] Tested: squareRoot(16) returns 4
- [ ] Tested: percentage(50, 20) returns 10

## ✅ Input Validation
- [ ] Non-numeric inputs return error message
- [ ] Division by zero returns error message (not crash)
- [ ] Negative square root returns error message
- [ ] Empty inputs handled gracefully
- [ ] Error messages are user-friendly (not \"NaN\" or \"undefined\")
- [ ] Validation helper function created (isValidNumber)

## ✅ Calculation History
- [ ] History array stores calculations
- [ ] Last 5 calculations kept (older ones removed)
- [ ] History displays in proper format (\"5 + 3 = 8\")
- [ ] History updates after each calculation
- [ ] History list displays on page (not just in console)
- [ ] Clear history button empties array
- [ ] Clear history button updates display

## ✅ Technical Implementation
- [ ] Used `let` or `const` (no `var`)
- [ ] Arrow functions used where appropriate
- [ ] Array methods used (push, slice, forEach)
- [ ] Functions are pure (no side effects)
- [ ] Code follows DRY principle
- [ ] No global variables except necessary state

## ✅ Code Quality
- [ ] Functions have clear, descriptive names
- [ ] Code is properly commented
- [ ] Explains complex logic
- [ ] Proper indentation and formatting
- [ ] No unnecessary console.log() in production
- [ ] Professional code organization

## ✅ Functionality Testing
- [ ] All original functions (add, subtract, multiply, divide) still work
- [ ] All 4 new functions work correctly
- [ ] All validation prevents errors
- [ ] History adds new calculations
- [ ] History keeps only last 5
- [ ] Clear history empties the list

## ✅ Browser Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox or Edge
- [ ] All features work in both browsers
- [ ] No console errors (F12 → Console)
- [ ] History displays correctly

## ✅ Git Workflow
- [ ] All files in `TICKET-14/code/` folder
- [ ] Changes committed with clear message
- [ ] Changes pushed to GitHub
- [ ] Code visible on GitHub repo

## 🧪 Test Your Code
```javascript
// Test all new operations:
console.log(power(2, 3));           // Should: 8
console.log(modulus(10, 3));        // Should: 1
console.log(squareRoot(16));        // Should: 4
console.log(percentage(50, 20));    // Should: 10

// Test validation:
console.log(divide(10, 0));         // Should: Error message
console.log(squareRoot(-4));        // Should: Error message
console.log(add('abc', 5));         // Should: Error message

// Test history:
// 1. Perform 7 calculations
// 2. Check that only last 5 are shown
// 3. Click clear history
// 4. Verify history is empty
```

## 📤 Discord Submission

**Post in #assignments channel:**

```
TICKET-14 Submission
Name: [Your Name]
GitHub: [Repository URL]
Screenshot: [Show calculator with history]
Features:
  ✅ 4 new operations (power, modulus, sqrt, percentage)
  ✅ Input validation (prevents errors)
  ✅ Calculation history (last 5)
  ✅ Error handling (division by zero, negative sqrt)
Testing:
  ✅ All functions tested and working
  ✅ No console errors
```

---

**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Complete

**Score:** _____ / 12.5 points
