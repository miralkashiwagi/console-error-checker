// @ts-check
var devices = require('@playwright/test').devices;
/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */

var config = {
  testDir: './tests',  // テストファイルが格納されているディレクトリ
  timeout: 60000,  // テストがタイムアウトになるまでの時間(ミリ秒)
  expect: {
    timeout: 5 * 60 * 1000  // expectアサーションがタイムアウトになるまでの時間(ミリ秒)
  },
  fullyParallel: true,  // テストを並行に実行するか
  workers: 2,  // 並行実行するワーカーの数
  quiet: true,  // ログの詳細レベル
  use: {
    actionTimeout: 5000,  // テストアクションがタイムアウトするまでの時間(ミリ秒)
    trace: 'on-first-retry',
    locale: 'ja-JP',  // ブラウザのロケールを日本語に設定します
    launchOptions: {
      slowMo: 1000,  // ブラウザ操作を遅延させる時間(ミリ秒)
    },
  },
  projects: [
    {
      name: 'chromium',  // プロジェクト名
      use: Object.assign({}, devices['Desktop Chrome']),  // 使用するデバイス
    },
  ],
  outputDir: 'test-results/',  // テスト結果を出力するディレクトリ
  reporter: [['html'], ['list']],  // 使用するレポート
};
module.exports = config;  // configオブジェクトをモジュールとしてエクスポートします