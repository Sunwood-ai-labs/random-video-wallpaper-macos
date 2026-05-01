<div align="center">
  <img src="assets/logo.svg" width="96" height="96" alt="Random Video Wallpaper のロゴ">
  <h1>Random Video Wallpaper for macOS</h1>
  <p><strong>ローカル動画フォルダを、静かにランダムループする macOS デスクトップ背景にします。</strong></p>
  <p>
    <a href="README.md">English</a>
    ·
    <a href="README.ja.md">日本語</a>
    ·
    <a href="https://sunwood-ai-labs.github.io/random-video-wallpaper-macos/ja/">Docs</a>
  </p>
  <p>
    <a href="https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos/actions/workflows/ci.yml/badge.svg"></a>
    <a href="https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos/actions/workflows/deploy-docs.yml"><img alt="Docs" src="https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos/actions/workflows/deploy-docs.yml/badge.svg"></a>
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-2f6f6f.svg"></a>
    <img alt="macOS 13+" src="https://img.shields.io/badge/macOS-13%2B-5f6f89.svg">
    <img alt="Swift" src="https://img.shields.io/badge/Swift-5.9-f05138.svg">
  </p>
</div>

`random-video-wallpaper` は Swift/AppKit 製の小さなプレイヤーです。
macOS のデスクトップ階層にボーダーレスな AVFoundation ウィンドウを置き、
動画をランダムに再生します。複数ディスプレイ、デフォルトミュート、
再帰的なフォルダ走査、glob パターン、2 レイヤーのクロスフェードに対応しています。

## ✨ 特長

- ローカルの `mp4`、`mov`、`m4v`、`webm` をランダムに無限再生
- 秒数を調整できるなめらかなクロスフェード
- 通常のアプリウィンドウの背後で動作し、マウス入力を奪わない
- 全ディスプレイ、またはメインディスプレイのみを選択可能
- ネットワーク通信、テレメトリ、永続的なメディア索引なし
- Swift Package Manager と小さな補助スクリプトだけの構成

## 📦 必要環境

- macOS 13 以降
- `swift` を含む Xcode Command Line Tools

必要な場合はコマンドラインツールをインストールします。

```sh
xcode-select --install
```

## 🚀 クイックスタート

クローンして起動します。

```sh
git clone https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos.git
cd random-video-wallpaper-macos
scripts/run-video-wallpaper ~/Movies/wallpapers
```

ファイルや glob も渡せます。

```sh
scripts/run-video-wallpaper ~/Downloads/vending-stigmata-loop-*.mp4
```

停止します。

```sh
scripts/stop-video-wallpaper
```

## 🎛️ オプション

```sh
scripts/run-video-wallpaper --fade 2.0 ~/Movies/wallpapers
scripts/run-video-wallpaper --fit ~/Movies/wallpapers
scripts/run-video-wallpaper --only-main ~/Movies/wallpapers
scripts/run-video-wallpaper --no-recursive ~/Movies/wallpapers
scripts/run-video-wallpaper --sound ~/Movies/wallpapers
scripts/run-video-wallpaper --level-offset 1 ~/Movies/wallpapers
```

| オプション | 説明 |
| --- | --- |
| `--fade SECONDS` | クロスフェード秒数。デフォルトは `1.2`。 |
| `--fit` | 画面に収める表示。余白が出る場合があります。 |
| `--fill` | 画面いっぱいに表示。デフォルトです。 |
| `--only-main` | メインディスプレイのみで再生。 |
| `--no-recursive` | サブフォルダを走査しない。 |
| `--sound` | 音声を有効化。デフォルトはミュートです。 |
| `--level-offset N` | 表示されない場合にデスクトップ階層を微調整。 |
| `--check` | 起動せずに入力だけ検証。 |

## 🧠 仕組み

補助スクリプトが Swift 実行ファイルをビルドし、小さなローカル `.app`
バンドルに包んで `open` で起動します。アプリはディスプレイごとに
デスクトップ階層のボーダーレスウィンドウを作成し、2 つの `AVPlayerLayer`
を交互に使って、現在のクリップから次のクリップへクロスフェードします。

macOS には任意の動画をシステム壁紙として直接設定する公開 API がありません。
このプロジェクトは軽量なデスクトップ階層ウィンドウで同じ体験を作り、
簡単に停止できる形にしています。

## 📚 ドキュメント

詳しいガイドは GitHub Pages で公開します。

- [はじめる](https://sunwood-ai-labs.github.io/random-video-wallpaper-macos/ja/guide/getting-started)
- [使い方](https://sunwood-ai-labs.github.io/random-video-wallpaper-macos/ja/guide/usage)
- [アーキテクチャ](https://sunwood-ai-labs.github.io/random-video-wallpaper-macos/ja/guide/architecture)
- [トラブルシューティング](https://sunwood-ai-labs.github.io/random-video-wallpaper-macos/ja/guide/troubleshooting)

## 🧰 開発

リリースビルドを作成します。

```sh
swift build -c release
```

壁紙を起動せずにメディアフォルダだけ検証します。

```sh
.build/release/random-video-wallpaper --check ~/Movies/wallpapers
```

ドキュメントをローカルでビルドします。

```sh
npm ci --prefix docs
npm run docs:build --prefix docs
```

## 🔒 プライバシー

アプリが走査するのは、コマンドラインで渡したパスだけです。
ネットワーク通信、分析情報の収集、ファイル名のアップロードは行いません。
停止スクリプト用のローカル `.video-wallpaper.pid` 以外に、動画パスを永続保存しません。

## 📄 ライセンス

MIT
