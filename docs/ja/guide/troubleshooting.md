# トラブルシューティング

よくある原因は、表示階層、未対応コーデック、動画に一致しないパスです。

## 壁紙が表示されない

ウィンドウ階層を少し上げてみます。

```sh
scripts/run-video-wallpaper --level-offset 1 ~/Movies/wallpapers
```

それでも表示されない場合は、停止して再起動します。

```sh
scripts/stop-video-wallpaper
scripts/run-video-wallpaper ~/Movies/wallpapers
```

## ファイルが検出されない

壁紙を起動せずにパスを確認します。

```sh
.build/release/random-video-wallpaper --check ~/Movies/wallpapers
```

対応拡張子は `mp4`、`mov`、`m4v`、`webm` です。

## クリップが再生されない

QuickTime Player で開けるか確認します。AVFoundation は多くの一般的な形式に
対応していますが、コーデック対応は macOS に依存します。

## フルスクリーンアプリで見えない

このアプリはデスクトップ階層向けです。フルスクリーンアプリの Space では、
macOS の挙動によりデスクトップが隠れる場合があります。

## 停止スクリプトが何も止めない

補助スクリプトは最新のプロセス ID を `.video-wallpaper.pid` に保存します。
手動起動した場合は Activity Monitor、またはバイナリパスに対する `pkill` を使ってください。
