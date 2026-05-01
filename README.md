# Random Video Wallpaper for macOS

[![CI](https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos/actions/workflows/ci.yml/badge.svg)](https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos/actions/workflows/ci.yml)

Turn a folder of local videos into a quiet, randomly looping desktop wallpaper.

`random-video-wallpaper` is a tiny Swift/AppKit player that places borderless
AVFoundation windows at the macOS desktop window level. It supports multiple
displays, muted playback by default, recursive folder scans, glob patterns, and
smooth crossfades between clips.

## Features

- Random infinite playback from local `mp4`, `mov`, `m4v`, and `webm` files
- Smooth crossfade transitions between clips
- Runs behind normal app windows and ignores mouse input
- Supports all displays, or only the main display
- No network calls and no telemetry
- Plain Swift Package Manager project with small helper scripts

## Requirements

- macOS 13 or later
- Xcode Command Line Tools, including `swift`

Install the command line tools if needed:

```sh
xcode-select --install
```

## Quick Start

Clone and run:

```sh
git clone https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos.git
cd random-video-wallpaper-macos
scripts/run-video-wallpaper ~/Movies/wallpapers
```

You can also pass files or globs:

```sh
scripts/run-video-wallpaper ~/Downloads/vending-stigmata-loop-*.mp4
```

Stop the wallpaper:

```sh
scripts/stop-video-wallpaper
```

## Options

```sh
scripts/run-video-wallpaper --fade 2.0 ~/Movies/wallpapers
scripts/run-video-wallpaper --fit ~/Movies/wallpapers
scripts/run-video-wallpaper --only-main ~/Movies/wallpapers
scripts/run-video-wallpaper --no-recursive ~/Movies/wallpapers
scripts/run-video-wallpaper --sound ~/Movies/wallpapers
scripts/run-video-wallpaper --level-offset 1 ~/Movies/wallpapers
```

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

## How It Works

The helper script builds the Swift executable, wraps it in a tiny local `.app`
bundle, and launches it with `open`. The app creates one borderless window per
screen at the desktop window level, then swaps between two `AVPlayerLayer`
instances to crossfade from the current clip into the next prepared clip.

macOS does not provide a public API for replacing the system wallpaper with an
arbitrary video. This project uses a lightweight desktop-level window instead,
which keeps the behavior simple and reversible.

## Troubleshooting

If the wallpaper does not appear, try raising the window level slightly:

```sh
scripts/run-video-wallpaper --level-offset 1 ~/Movies/wallpapers
```

If a file is not picked up, check the extension and path:

```sh
.build/release/random-video-wallpaper --check ~/Movies/wallpapers
```

If a clip does not play, confirm QuickTime can play it. AVFoundation supports
many common formats, but codec support still depends on macOS.

## Privacy

The app only scans the paths you pass on the command line. It does not make
network requests, collect analytics, or persist your video paths outside the
local `.video-wallpaper.pid` used by the stop script.

## License

MIT
