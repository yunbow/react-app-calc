# 電卓アプリ (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたシンプルな電卓アプリケーションです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-app-calc/demo/

## 主要機能

### 計算機能
- 基本四則演算（加算、減算、乗算、除算）
- パーセント計算
- 小数点計算
- 数値の削除・全クリア
- カンマ区切り表示（3桁ごと）

### 操作方法
- **数字ボタン**: 0-9、00、小数点（.）
- **演算子ボタン**: +、-、×、÷、%
- **機能ボタン**: C（クリア）、DEL（削除）、=（計算実行）
- **キーボード操作**: 数字キー、演算子キー、Enter（=）、Escape（C）、Backspace（DEL）

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール・開発サーバー

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── calculator/             # 電卓機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── ButtonGrid/     # ボタン配置グリッド
│       │   └── DisplaySection/ # 表示セクション
│       ├── Calculator/         # 機能ルートコンポーネント
│       ├── useCalculator.ts    # 電卓ロジックフック
│       └── types.ts            # 機能固有の型定義
├── components/                 # 共通UIコンポーネント
│   ├── Button/                 # 操作ボタン
│   └── Display/                # 表示コンポーネント
├── types/                      # グローバル型定義
├── stories/                    # Storybook用ストーリー
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License