# Node.js — Intermediate Tasks | 2501B1

All files are in this one folder. Open a terminal here and run:

```powershell
cd "C:\Users\asp\Documents\Default Project"
```

## Console tasks

| Task | Command |
|---|---|
| 3 | `node URLFilterGenerator.js` |
| 4 | `node StudentResultsModule.js` (uses `resultHelper.js`) |
| 5 | `node LibraryEvents.js` |
| 6 | `node AsyncResultChecker.js` |
| 9 | `node HelpDeskEvents.js` |
| 10 | `node CLIStudentReport.js Ali 75 82 68` (uses `reportHelper.js`) |
| 11 | `node ServerStatus.js` |
| 12 | `node InventoryQueryBuilder.js` |
| 13 | `node PaymentSimulation.js` |
| 14 | `node CourseEnrollment.js` (uses `enrollment.js`) |
| 16 | `node URLEncoding.js` |
| 17 | `node EventLogger.js` |
| 18 | `node GradeProcessing.js` (uses `gradeService.js`) |

## Server tasks (open links in browser, stop with Ctrl + C)

| Task | Command | Test URLs |
|---|---|---|
| 1 | `node CourseInfoServer.js` | `/`, `/schedule`, `/instructor`, `/abc` |
| 2 | `node EmployeeProfileQuery.js` | `/employee?id=105&department=IT`, `/employee?id=105` |
| 7 | `node ResponseUtilities.js` (uses `success.js`, `errors.js`) | `/`, `/about`, `/contact`, `/greet?name=Ali`, `/greet` |
| 8 | `node ProductAPI.js` | `/product?name=Keyboard&price=2500&stock=15`, `/product?name=Keyboard` |
| 15 | `node SearchServer.js` | `/search?keyword=node&level=intermediate&duration=4`, `/search?level=x` |
| 20 | `node HelpDeskServer.js` (uses `ticketService.js`) | `/`, `/ticket?name=Ali&issue=Login`, `/status?id=101` |

All URLs start with `http://localhost:3000`.

## Task 19 (email)

```powershell
$env:EMAIL_USER="youraddress@gmail.com"
$env:EMAIL_APP_PASSWORD="your16charapppassword"
$env:EMAIL_TO="receiver@example.com"
node EmailReport.js
```
Use a Gmail **App Password** (Google Account → Security → App passwords). Nodemailer is already installed in `node_modules`.
