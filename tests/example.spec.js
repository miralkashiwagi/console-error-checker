// example.spec.js
const {test, expect} = require('@playwright/test');
const p = require("../package.json");

var pagelist = p.pagelist;

test.use({
    viewport: {width: 1400, height: 800},
    deviceScaleFactor: 1,
    channel: 'chrome',
})


test.describe('multiple pages test', () => {
    pagelist.forEach((item, index) => {
        //連番生成
        let num = ('000' + (index + 1)).slice(-3);

        //テスト本体
        test(`console test: ${num}: ${item} `, async ({page}) => {
            const errors = [];
            const logs = [];

            //console.error と console.log を配列に入れる
            page.on('console',  msg => {
                if(msg.type()==="error"){
                    errors.push(msg);
                }
                if(msg.type()==="log"){
                    //console.logのうち[Migrate is installed] を含む行は無視
                    if(!msg.text().match(/Migrate is installed/)){
                        logs.push(msg);
                    }
                }
            });
            //pageerror もキャッチ
            page.on('pageerror', exception  => {
                    errors.push(exception);
            });

            //URLへ移動
            await page.goto(item);
            expect("エラー数："+errors.length).toBe("エラー数："+0);
            expect("console.log数:"+logs.length).toBe("console.log数:"+0);
            await page.waitForTimeout(1000); // 1秒待機
        });
    })
})
