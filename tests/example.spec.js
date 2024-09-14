const { test, expect } = require('@playwright/test');
const p = require("../package.json");

var pagelist = p.pagelist;

test.use({
    viewport: { width: 1400, height: 800 },
    deviceScaleFactor: 1,
    channel: 'chrome',
});

test.describe('multiple pages test', () => {
    pagelist.forEach((item, index) => {
        let num = ('000' + (index + 1)).slice(-3);

        test(`console test: ${num}: ${item}`, async ({ page }) => {
            const errors = [];
            const logs = [];

            page.on('console', msg => {
                if (msg.type() === "error") {
                    errors.push(msg.text());
                }
                if (msg.type() === "log") {
                    if (!msg.text().match(/Migrate is installed/)) {
                        logs.push(msg.text());
                    }
                }
            });

            page.on('pageerror', exception => {
                errors.push(exception.message);
            });

            await page.goto(item);

            // エラーと警告のチェックと詳細なレポート
            if (errors.length > 0) {
                const errorReport = `
Errors (${errors.length}):
${errors.map(e => `  - ${e}`).join('\n')}
`.trim();

                test.info().annotations.push({
                    type: 'error', // エラー用のアノテーション
                    description: errorReport
                });
            }

            if (logs.length > 0) {
                const logReport = `
Logs (${logs.length}):
${logs.map(l => `  - ${l}`).join('\n')}
`.trim();

                test.info().annotations.push({
                    type: 'log', // ログ用のアノテーション
                    description: logReport
                });
            }

            const errorMessage = errors.length > 0 ?
                `エラー数が0ではありません: ${errors.length}\n${errors.map(e => `  - ${e}`).join('\n')}` : '';
            const logMessage = logs.length > 0 ?
                `console.log数が0ではありません: ${logs.length}\n${logs.map(l => `  - ${l}`).join('\n')}` : '';

            expect(errors.length, errorMessage).toBe(0);
            expect(logs.length, logMessage).toBe(0);

            await page.waitForTimeout(1000);
        });
    });
});
