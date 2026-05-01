# はじめる

Random Video Wallpaper は、通常の macOS ウィンドウの背後でローカル動画を再生します。
このページでは、クローンから壁紙起動までを案内します。

## 必要環境

- macOS 13 以降
- `swift` を含む Xcode Command Line Tools

必要な場合はコマンドラインツールをインストールします。

```sh
xcode-select --install
```

## クローン

```sh
git clone https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos.git
cd random-video-wallpaper-macos
```

## 起動

動画が入ったフォルダを渡します。

```sh
scripts/run-video-wallpaper ~/Movies/wallpapers
```

ファイルや glob も渡せます。

```sh
scripts/run-video-wallpaper ~/Downloads/vending-stigmata-loop-*.mp4
```

補助スクリプトはリリース実行ファイルをビルドし、小さなローカル `.app`
バンドルを作ってバックグラウンド起動します。

## 停止

```sh
scripts/stop-video-wallpaper
```

## 入力検証

壁紙を起動せず、対象ファイルが見つかるかだけ確認できます。

```sh
.build/release/random-video-wallpaper --check ~/Movies/wallpapers
```
