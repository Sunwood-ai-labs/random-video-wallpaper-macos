# Usage

The script accepts folders, individual files, or shell globs. Folders are scanned
recursively by default.

## Common Commands

```sh
scripts/run-video-wallpaper ~/Movies/wallpapers
scripts/run-video-wallpaper ~/Downloads/*.mp4
scripts/run-video-wallpaper --fade 2.0 ~/Movies/wallpapers
scripts/stop-video-wallpaper
```

## Options

| Option | Description |
| --- | --- |
| `--fade SECONDS` | Crossfade duration. Default: `1.2`. |
| `--fit` | Letterbox the video instead of cropping. |
| `--fill` | Crop to fill the screen. This is the default. |
| `--only-main` | Use only the main display. |
| `--no-recursive` | Do not scan subfolders. |
| `--sound` | Keep video audio on. Default is muted. |
| `--level-offset N` | Raise or lower the desktop window level if needed. |
| `--check` | Validate inputs and exit without starting playback. |

## Display Behavior

By default, the app creates one wallpaper window per connected display. Add
`--only-main` when you want to keep secondary displays untouched:

```sh
scripts/run-video-wallpaper --only-main ~/Movies/wallpapers
```

## Crop or Fit

Use `--fill` for a screen-filling crop. Use `--fit` when you prefer the full
video frame, even if that leaves letterboxing:

```sh
scripts/run-video-wallpaper --fit ~/Movies/wallpapers
```

## Sound

Playback is muted by default. Add `--sound` if you intentionally want audio:

```sh
scripts/run-video-wallpaper --sound ~/Movies/wallpapers
```
