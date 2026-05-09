# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: launchhive.spec.ts >> LaunchHive E2E Audit >> Complete user journey: Landing -> Login -> Persona -> Chat -> Matches
- Location: tests/launchhive.spec.ts:10:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Matches Generated')
Expected: visible
Timeout: 60000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 60000ms
  - waiting for locator('text=Matches Generated')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - button "Open Next.js Dev Tools" [ref=e7] [cursor=pointer]:
    - img [ref=e8]
  - alert [ref=e11]
  - generic [ref=e12]:
    - banner [ref=e13]:
      - generic [ref=e14]:
        - heading "Select a Persona" [level=1] [ref=e15]
        - paragraph [ref=e16]: Choose a test persona to see how LaunchHive handles different commercialization backgrounds, or start with a blank slate.
      - button "Start Blank" [ref=e17] [cursor=pointer]:
        - img [ref=e18]
        - text: Start Blank
    - generic [ref=e19]:
      - generic [ref=e20]:
        - generic [ref=e21]:
          - img [ref=e23]
          - generic [ref=e26]: operator
        - heading "Dr. Maya Chen" [level=3] [ref=e27]
        - paragraph [ref=e28]: Former Medtech Executive
        - paragraph [ref=e29]: Former medtech commercialization executive with experience taking diagnostics products through FDA pathways, building early go-to-market teams, and advising university spinouts.
        - generic [ref=e30]:
          - generic [ref=e31]:
            - generic [ref=e32]: Biotech
            - generic [ref=e33]: diagnostics
          - button "Start as Dr." [ref=e34] [cursor=pointer]:
            - text: Start as Dr.
            - img [ref=e35]
      - generic [ref=e37]:
        - generic [ref=e38]:
          - img [ref=e40]
          - generic [ref=e43]: student
        - heading "Ethan Ramirez" [level=3] [ref=e44]
        - paragraph [ref=e45]: AI Student Intern
        - paragraph [ref=e46]: University student studying computer science with experience in Python, machine learning projects, data pipelines, and hackathon prototypes.
        - generic [ref=e47]:
          - generic [ref=e48]:
            - generic [ref=e49]: AI
            - generic [ref=e50]: software
          - button "Start as Ethan" [ref=e51] [cursor=pointer]:
            - text: Start as Ethan
            - img [ref=e52]
      - generic [ref=e54]:
        - generic [ref=e55]:
          - img [ref=e57]
          - generic [ref=e60]: operator
        - heading "Sarah Whitaker" [level=3] [ref=e61]
        - paragraph [ref=e62]: Operations Leader
        - paragraph [ref=e63]: Operations leader with experience scaling manufacturing and logistics teams from 10 to 80 employees. Has worked with hardware, advanced manufacturing, and energy companies.
        - generic [ref=e64]:
          - generic [ref=e65]:
            - generic [ref=e66]: Advanced manufacturing
            - generic [ref=e67]: energy
          - button "Start as Sarah" [ref=e68] [cursor=pointer]:
            - text: Start as Sarah
            - img [ref=e69]
      - generic [ref=e71]:
        - generic [ref=e72]:
          - img [ref=e74]
          - generic [ref=e78]: founder
        - heading "Dr. Aaron Patel" [level=3] [ref=e79]
        - paragraph [ref=e80]: University Researcher
        - paragraph [ref=e81]: University researcher developing advanced materials technology with potential applications in aerospace and defense. Has technical validation but limited business experience.
        - generic [ref=e82]:
          - generic [ref=e83]:
            - generic [ref=e84]: Advanced materials
            - generic [ref=e85]: aerospace
          - button "Start as Dr." [ref=e86] [cursor=pointer]:
            - text: Start as Dr.
            - img [ref=e87]
      - generic [ref=e89]:
        - generic [ref=e90]:
          - img [ref=e92]
          - generic [ref=e95]: advisor
        - heading "Jessica Morgan" [level=3] [ref=e96]
        - paragraph [ref=e97]: B2B SaaS Sales Leader
        - paragraph [ref=e98]: Former B2B SaaS sales leader with experience building first sales motions, customer discovery, and enterprise pilot programs.
        - generic [ref=e99]:
          - generic [ref=e100]:
            - generic [ref=e101]: Software
            - generic [ref=e102]: AI
          - button "Start as Jessica" [ref=e103] [cursor=pointer]:
            - text: Start as Jessica
            - img [ref=e104]
      - generic [ref=e106]:
        - generic [ref=e107]:
          - img [ref=e109]
          - generic [ref=e112]: operator
        - heading "Marcus Lee" [level=3] [ref=e113]
        - paragraph [ref=e114]: Cybersecurity Product Leader
        - paragraph [ref=e115]: Former cybersecurity product leader with experience in federal customers, compliance-heavy sales, and technical product strategy.
        - generic [ref=e116]:
          - generic [ref=e117]:
            - generic [ref=e118]: Cybersecurity
            - generic [ref=e119]: defense
          - button "Start as Marcus" [ref=e120] [cursor=pointer]:
            - text: Start as Marcus
            - img [ref=e121]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('LaunchHive E2E Audit', () => {
  4  |   
  5  |   test.beforeEach(async ({ page }) => {
  6  |     // Navigate to landing page
  7  |     await page.goto('/');
  8  |   });
  9  | 
  10 |   test('Complete user journey: Landing -> Login -> Persona -> Chat -> Matches', async ({ page }) => {
  11 |     page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  12 |     
  13 |     // 1. Landing Page
  14 |     await expect(page.locator('h1')).toContainText('Scale Your Impact');
  15 |     await page.click('text=Start Your Journey');
  16 | 
  17 |     // 2. Login
  18 |     await expect(page).toHaveURL('/login');
  19 |     await page.fill('input[placeholder="John Doe"]', 'Audit User');
  20 |     await page.fill('input[placeholder="john@example.com"]', 'audit@example.com');
  21 |     await page.click('button:has-text("Continue to Personas")');
  22 | 
  23 |     // 3. Persona Picker
  24 |     await expect(page).toHaveURL('/personas');
  25 |     await page.locator('button:has-text("Start as Dr.")').first().click();
  26 | 
  27 |     // 4. Chat Interface
  28 |     await expect(page).toHaveURL(/\/chat\?conversationId=.+/);
  29 |     // Wait for greeting (using regex to be safe with dashes/spaces)
  30 |     await expect(page.getByText(/Hi Dr\./i)).toBeVisible({ timeout: 15000 });
  31 |     
  32 |     // Send message
  33 |     await page.fill('input[placeholder="Type your response..."]', "I'm ready for matches. Please provide the profile summary and matches for CardioSignal Bio.");
  34 |     await page.click('button:has(svg)');
  35 | 
  36 |     // Wait for "Matches Generated" feedback
> 37 |     await expect(page.locator('text=Matches Generated')).toBeVisible({ timeout: 60000 });
     |                                                          ^ Error: expect(locator).toBeVisible() failed
  38 | 
  39 |     // 5. Matches Dashboard
  40 |     await page.click('text=View Matches');
  41 |     await expect(page).toHaveURL('/matches');
  42 |     await expect(page.locator('h3')).toContainText('CardioSignal Bio');
  43 |   });
  44 | 
  45 |   test('Demo Reset functionality', async ({ page }) => {
  46 |     // Perform login first to have a session
  47 |     await page.goto('/login');
  48 |     await page.fill('input[placeholder="John Doe"]', 'Reset User');
  49 |     await page.fill('input[placeholder="john@example.com"]', 'reset@example.com');
  50 |     await page.click('button:has-text("Continue to Personas")');
  51 |     await expect(page).toHaveURL('/personas');
  52 | 
  53 |     // Go back to landing and reset
  54 |     await page.goto('/');
  55 |     page.on('dialog', dialog => dialog.accept());
  56 |     await page.click('text=Reset Demo');
  57 |     
  58 |     // Verify we are redirected (or session is cleared)
  59 |     // After reload, if we go to /personas, it should redirect to /login
  60 |     await page.goto('/personas');
  61 |     await expect(page).toHaveURL('/login');
  62 |   });
  63 | 
  64 |   test('Offline Hermes error recovery', async ({ page }) => {
  65 |     // Note: This test assumes Hermes might be off. 
  66 |     // If Hermes IS running, we can't easily test the error message without stopping it.
  67 |     // However, we can check the UI for error handling.
  68 |     await page.goto('/login');
  69 |     await page.fill('input[placeholder="John Doe"]', 'Error User');
  70 |     await page.fill('input[placeholder="john@example.com"]', 'error@example.com');
  71 |     await page.click('button:has-text("Continue to Personas")');
  72 |     await page.locator('button:has-text("Start as Dr.")').first().click();
  73 | 
  74 |     // We can simulate an offline state if we could control the proxy, 
  75 |     // but for this audit, we'll verify the error message is correctly displayed IF it happens.
  76 |   });
  77 | });
  78 | 
```