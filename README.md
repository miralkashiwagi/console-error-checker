# 準備

```
npm install
```

# 使い方

## ページリスト作成

package.jsonのpagelistにテストしたいURLを記入

```json
"pagelist": [
    "https://deep-space.blue/testing/for-playwright-test/01.html",
    "https://deep-space.blue/testing/for-playwright-test/02.html",
    "https://deep-space.blue/testing/for-playwright-test/03.html",
    "https://deep-space.blue/testing/for-playwright-test/04.html",
    "https://deep-space.blue/testing/for-playwright-test/05.html"
],
```

## テスト実施

```
npm run test
```

コンソールにエラーまたはログ（Migrate is installed以外）が表示されているページが存在する場合以下のように表示され  
結果レポートページが自動で起動します。

```
3 failed
    [chromium] › example.spec.js:20:9 › multiple pages test › console test: 001: https://deep-space.blue/testing/for-playwright-test/01.html  
    [chromium] › example.spec.js:20:9 › multiple pages test › console test: 002: https://deep-space.blue/testing/for-playwright-test/02.html  
    [chromium] › example.spec.js:20:9 › multiple pages test › console test: 003: https://deep-space.blue/testing/for-playwright-test/03.html  
```

合格したページについては以下のように表示されます。  
すべてのページが合格の場合、レポートページは起動しません。
```
2 passed (9s)
```
