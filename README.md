# 準備

```
npm install
```

# 使い方

## ページリスト作成

pagelist.txtにテストしたいURLを入力

```txt
https://deep-space.blue/testing/for-playwright-test/01.html
https://deep-space.blue/testing/for-playwright-test/02.html
https://deep-space.blue/testing/for-playwright-test/03.html
https://deep-space.blue/testing/for-playwright-test/04.html
https://deep-space.blue/testing/for-playwright-test/05.html
```

## テスト実施

```
npm run test
```

### エラーまたはログがあるとき
コンソールにエラーまたはログ（Migrate is installed以外）が表示されているページが存在する場合以下のように表示され  
結果レポートページが自動で起動します。

```
3 failed
    [chromium] › example.spec.js:20:9 › multiple pages test › console test: 001: https://deep-space.blue/testing/for-playwright-test/01.html  
    [chromium] › example.spec.js:20:9 › multiple pages test › console test: 002: https://deep-space.blue/testing/for-playwright-test/02.html  
    [chromium] › example.spec.js:20:9 › multiple pages test › console test: 003: https://deep-space.blue/testing/for-playwright-test/03.html  
```

レポートページでは「Annotations」または「Errors」のセクションで、どのようなエラーが表示されたかを確認できます。


### エラーまたはログがなかった時
すべてのページが合格の場合、レポートページは起動しません。
```
5 passed (14.9s)
```

## 無視したいconsole.logがあるとき
- WordPressが出力する `JQMIGRATE: Migrate is installed` のlogは無視する設定にしてあります。
- 追加で無視したいconsole.logがあるときは tests/test.spec.jsの `const ignoredMessages = []` に追加してください。

# 備考
このテストでは、ページを開いた瞬間に表示されるconsole.logまたはconsole.errorのみ取得しています。
