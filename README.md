<div align="center">

# 🎭 Playwright Testing Project

### Automated UI Testing with Microsoft Playwright

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

<div align="center">

## 📖 Table of Contents

</div>

- [About](#-about)
- [Folder Structure](#-folder-structure)
- [Requirements](#-requirements)
- [Installation](#-installation)
- [Running Tests](#-running-tests)
- [Viewing Reports](#-viewing-reports)
- [Debugging](#-debugging)
- [Best Practices](#-best-practices)
- [Contributing](#-contributing)
- [Author](#-author)

---

<div align="center">

## 🎯 About

</div>

This repository contains automated UI tests built using **Microsoft Playwright** with **Node.js**. Playwright is a powerful end-to-end testing framework that allows you to write reliable tests across all modern browsers.

### Key Features

```
✅ Cross-browser testing (Chrome, Firefox, Safari)
✅ Fast and reliable test execution
✅ Auto-wait and retry mechanisms
✅ Screenshot and video recording
✅ Parallel test execution
✅ Detailed HTML reports
```

---

<div align="center">

## 📁 Folder Structure

</div>

```
Playwright/
│
├── tests/                    # All test files
│   ├── example.spec.js
│
├── test-results/             # Test reports, screenshots, traces
|
├── package.json              # Dependencies & scripts
├── package-lock.json
├── .gitignore
└── README.md
```

---

<div align="center">

## ✅ Requirements

</div>

<div align="center">

| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | v18+ | Runtime environment |
| npm | Latest | Package manager |
| Git | Latest | Version control |
| VS Code | Latest | Code editor (recommended) |

</div>

### Check Installed Versions

```bash
node -v
npm -v
git --version
```

---

<div align="center">

## ⚙️ Installation

</div>

### Step 1: Clone Repository

```bash
git clone https://github.com/Deshan-z/Playwright.git
```

### Step 2: Navigate to Project Directory

```bash
cd Playwright
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Install Playwright Browsers

```bash
npx playwright install
```

<div align="center">

**✨ Installation Complete! You're ready to run tests.**

</div>

---

<div align="center">

## ▶️ Running Tests

</div>

### Run All Tests

```bash
npx playwright test
```

### Run Tests in UI Mode

```bash
npx playwright test --ui
```

### Run Tests in Headed Mode (Browser Visible)

```bash
npx playwright test --headed
```

### Run Specific Test File

```bash
npx playwright test tests/login.spec.js
```

### Run Tests on Specific Browser

```bash
# Chrome/Chromium
npx playwright test --project=chromium

# Firefox
npx playwright test --project=firefox

# Safari/WebKit
npx playwright test --project=webkit
```

### Run Tests in Parallel

```bash
npx playwright test --workers=4
```

### Run Tests with Specific Tag

```bash
npx playwright test --grep @smoke
```

---

<div align="center">

## 📊 Viewing Reports

</div>

### HTML Report

After test execution, view the detailed HTML report:

```bash
npx playwright show-report
```

This will automatically open the report in your default browser.

### Report Features

```
📈 Test execution summary
📸 Screenshots on failure
🎥 Video recordings
🔍 Trace viewer
📝 Detailed logs
⏱️ Test duration metrics
```

---

<div align="center">


## 🐛 Debugging

</div>

### Debug Mode

Run tests with Playwright Inspector:

```bash
npx playwright test --debug
```

### Debug Specific Test

```bash
npx playwright test tests/login.spec.js --debug
```

### View Trace

```bash
npx playwright show-trace test-results/trace.zip
```

### Generate Code

Use Playwright's code generator:

```bash
npx playwright codegen https://example.com
```

### Console Output

Run with detailed console logs:

```bash
DEBUG=pw:api npx playwright test
```

---

<div align="center">



## 🛠 Technologies Used

</div>

<div align="center">

```
┌─────────────────────────────────────────┐
│  Playwright  │  Testing Framework       │
├─────────────────────────────────────────┤
│  Node.js     │  Runtime Environment     │
├─────────────────────────────────────────┤
│  JavaScript  │  Programming Language    │
├─────────────────────────────────────────┤
│  VS Code     │  Code Editor             │
└─────────────────────────────────────────┘
```

</div>

---

<div align="center">

## 📚 Useful Commands

</div>

<div align="center">

| Command | Description |
|---------|-------------|
| `npx playwright test` | Run all tests |
| `npx playwright test --ui` | Run in UI mode |
| `npx playwright test --headed` | Run with browser visible |
| `npx playwright test --debug` | Run in debug mode |
| `npx playwright show-report` | Show HTML report |
| `npx playwright codegen` | Launch code generator |
| `npx playwright install` | Install browsers |
| `npx playwright test --project=chromium` | Run on specific browser |
| `npx playwright test --grep @tag` | Run tests with specific tag |

</div>

---

<div align="center">

## 🎯 Best Practices

</div>

```diff
+ ✅ Use descriptive test names
+ ✅ Implement Page Object Model (POM)
+ ✅ Use proper assertions and waits
+ ✅ Keep tests independent and isolated
+ ✅ Use fixtures for setup and teardown
+ ✅ Enable screenshots and traces
+ ✅ Write maintainable and readable code
+ ✅ Use data-testid attributes for selectors
+ ✅ Implement proper error handling
+ ✅ Keep test data separate from test logic

- ❌ Don't hardcode test data
- ❌ Don't use brittle selectors (like XPath)
- ❌ Don't create dependent tests
- ❌ Don't skip proper waiting mechanisms
- ❌ Don't ignore test failures
```

---

<div align="center">

## 🤝 Contributing

</div>

Contributions are welcome! Please follow these steps:

### 1. Fork the Repository

Click the "Fork" button at the top right of this page.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/Playwright.git
```

### 3. Create a Branch

```bash
git checkout -b feature/amazing-feature
```

### 4. Make Your Changes

Write your code and tests.

### 5. Commit Your Changes

```bash
git commit -m "Add amazing feature"
```

### 6. Push to Your Branch

```bash
git push origin feature/amazing-feature
```

### 7. Open a Pull Request

Go to the original repository and click "New Pull Request".

---

<div align="center">

## 📝 License

</div>

<div align="center">

This project is licensed under the **MIT License**.

See [LICENSE](LICENSE) file for details.

</div>

---

<div align="center">

## 👨‍💻 Author

</div>

<div align="center">

**Deshan Swarnathilaka**

*Playwright Automation Testing*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Deshan-z)

</div>

---

<div align="center">

## 📞 Contact & Support

</div>

- 🐛 **Report Issues:** [GitHub Issues](https://github.com/Deshan-z/Playwright/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/Deshan-z/Playwright/discussions)
- 📧 **Email:** Open an issue for contact

---

<div align="center">

## 🎓 Learn More

</div>

<div align="center">

| Resource | Link |
|----------|------|
| Playwright Documentation | [playwright.dev](https://playwright.dev) |
| Playwright GitHub | [github.com/microsoft/playwright](https://github.com/microsoft/playwright) |
| Playwright Discord | [Join Community](https://discord.com/invite/playwright-807756831384403968) |
| Node.js Documentation | [nodejs.org](https://nodejs.org) |

</div>

---

<div align="center">

## ⚡ Quick Start

</div>

```bash
# Clone the repository
git clone https://github.com/Deshan-z/Playwright.git

# Navigate to project directory
cd Playwright

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run tests
npx playwright test

# View report
npx playwright show-report
```

---

<div align="center">

## 🌟 Features Showcase

</div>

```
🚀 Fast Execution        → Parallel test running
🔄 Auto-Retry           → Configurable retry mechanism
📱 Mobile Testing       → Device emulation support
🌐 Cross-Browser        → Chrome, Firefox, Safari
🎥 Video Recording      → Full test playback
📊 Rich Reporting       → Detailed HTML reports
🔍 Debugging Tools      → Inspector & trace viewer
⚙️ Easy Configuration   → Single config file
```

---

<div align="center">

## 📈 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Deshan-z/Playwright?style=social)
![GitHub forks](https://img.shields.io/github/forks/Deshan-z/Playwright?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Deshan-z/Playwright?style=social)

</div>

---

<div align="center">

### 🎉 Happy Testing! 🚀

*Built with ❤️ using Playwright*

---

**[⬆ Back to Top](#-playwright-testing-project)**

</div>
