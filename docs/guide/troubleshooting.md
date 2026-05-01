# Troubleshooting

Most issues come down to display layering, unsupported codecs, or paths that do
not match any video files.

## The wallpaper does not appear

Try raising the window level slightly:

```sh
scripts/run-video-wallpaper --level-offset 1 ~/Movies/wallpapers
```

If that still does not work, stop and restart:

```sh
scripts/stop-video-wallpaper
scripts/run-video-wallpaper ~/Movies/wallpapers
```

## Files are not detected

Check the path without starting the wallpaper:

```sh
.build/release/random-video-wallpaper --check ~/Movies/wallpapers
```

Supported extensions are `mp4`, `mov`, `m4v`, and `webm`.

## A clip does not play

Confirm the file opens in QuickTime Player. AVFoundation supports many common
formats, but codec support still depends on macOS.

## Full-screen apps cover the wallpaper

The wallpaper is meant for the desktop layer. Full-screen app Spaces may cover
or replace the visible desktop depending on macOS behavior.

## Stop script says nothing is running

The helper script stores the latest process ID in `.video-wallpaper.pid`. If the
app was started manually, use Activity Monitor or `pkill` with the binary path.
