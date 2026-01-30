# 🎭 Playwright Testing Project

This repository contains automated UI tests built using Microsoft Playwright with Node.js.

---

## 📁 Folder Structure

Playwright/
│
├── tests/ # All test files
│
├── test-results/ # Test reports, screenshots, traces
│
├── package.json # Dependencies & scripts
├── package-lock.json
├── .gitignore


---

## ✅ Requirements

Install these first:

- Node.js (v18+)
- Git
- VS Code (recommended)

Check versions:

```bash
node -v
npm -v
⚙️ Installation Steps
1. Clone repository
git clone https://github.com/Deshan-z/Playwright.git
2. Go to project folder
cd Playwright
3. Install dependencies
npm install
4. Install Playwright browsers
npx playwright install
▶️ Run Tests
Run all tests
npx playwright test
Run with UI Mode
npx playwright test --ui
Run with browser visible (headed)
npx playwright test --headed
📊 View HTML Report
After tests:

npx playwright show-report
🧪 Test Files Location
All tests inside:

tests/
Example:

tests/login.spec.js
🛠 Technologies
Playwright

Node.js

JavaScript

VS Code

👨‍💻 Author
Deshan-z
Playwright Automation Testing

