# 使い方

スクリプトにはフォルダ、個別ファイル、シェル glob を渡せます。
フォルダはデフォルトで再帰的に走査されます。

## よく使うコマンド

```sh
scripts/run-video-wallpaper ~/Movies/wallpapers
scripts/run-video-wallpaper ~/Downloads/*.mp4
scripts/run-video-wallpaper --fade 2.0 ~/Movies/wallpapers
scripts/stop-video-wallpaper
```

## オプション

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

## ディスプレイ

デフォルトでは、接続中のディスプレイごとに壁紙ウィンドウを作ります。
サブディスプレイを触りたくない場合は `--only-main` を使います。

```sh
scripts/run-video-wallpaper --only-main ~/Movies/wallpapers
```

## クロップまたはフィット

`--fill` は画面いっぱいにクロップします。動画全体を見せたい場合は
`--fit` を使います。

```sh
scripts/run-video-wallpaper --fit ~/Movies/wallpapers
```

## 音声

デフォルトはミュートです。音声が必要な場合だけ `--sound` を付けます。

```sh
scripts/run-video-wallpaper --sound ~/Movies/wallpapers
```
