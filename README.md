<div align="center">
  <img src="assets/logo.svg" width="96" height="96" alt="Random Video Wallpaper logo">
  <h1>Random Video Wallpaper for macOS</h1>
  <p><strong>Turn a folder of local videos into a quiet, randomly looping desktop wallpaper with smooth crossfades.</strong></p>
  <p>
    <a href="README.md">English</a>
    ·
    <a href="README.ja.md">日本語</a>
    ·
    <a href="https://sunwood-ai-labs.github.io/random-video-wallpaper-macos/">Docs</a>
  </p>
  <p>
    <a href="https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos/actions/workflows/ci.yml"><img alt="CI" src="https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos/actions/workflows/ci.yml/badge.svg"></a>
    <a href="https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos/actions/workflows/deploy-docs.yml"><img alt="Docs" src="https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos/actions/workflows/deploy-docs.yml/badge.svg"></a>
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-2f6f6f.svg"></a>
    <img alt="macOS 13+" src="https://img.shields.io/badge/macOS-13%2B-5f6f89.svg">
    <img alt="Swift" src="https://img.shields.io/badge/Swift-5.9-f05138.svg">
  </p>
</div>

`random-video-wallpaper` is a tiny Swift/AppKit player that places borderless
AVFoundation windows at the macOS desktop window level. It supports multiple
displays, muted playback by default, recursive folder scans, glob patterns, and
two-layer crossfades between clips.

## ✨ Features

- Random infinite playback from local `mp4`, `mov`, `m4v`, and `webm` files
- Smooth crossfade transitions with configurable duration
- Menu bar mode with folder selection and start/stop controls
- Low power mode for one-display playback with shorter fades
- Runs behind normal app windows and ignores mouse input
- Supports all displays, or only the main display
- No network calls, no telemetry, and no persistent media index
- Plain Swift Package Manager project with small helper scripts

## 📦 Requirements

- macOS 13 or later
- Xcode Command Line Tools, including `swift`

Install the command line tools if needed:

```sh
xcode-select --install
```

## 🚀 Quick Start

Clone and run:

```sh
git clone https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos.git
cd random-video-wallpaper-macos
scripts/run-video-wallpaper
```

The app starts in the menu bar. Choose videos or a folder from the menu, then
stop or change display options without returning to the terminal.

You can also start directly with a folder:

```sh
scripts/run-video-wallpaper ~/Movies/wallpapers
```

Use files or globs:

```sh
scripts/run-video-wallpaper ~/Downloads/vending-stigmata-loop-*.mp4
```

Stop the wallpaper:

```sh
scripts/stop-video-wallpaper
```

## 🎛️ Options

```sh
scripts/run-video-wallpaper --fade 2.0 ~/Movies/wallpapers
scripts/run-video-wallpaper --low-power ~/Movies/wallpapers
scripts/run-video-wallpaper --fit ~/Movies/wallpapers
scripts/run-video-wallpaper --only-main ~/Movies/wallpapers
scripts/run-video-wallpaper --no-recursive ~/Movies/wallpapers
scripts/run-video-wallpaper --sound ~/Movies/wallpapers
scripts/run-video-wallpaper --level-offset 1 ~/Movies/wallpapers
```

| Option | Description |
| --- | --- |
| `--fade SECONDS` | Crossfade duration. Default: `1.2`. |
| `--low-power` | Prefer the main display and cap fades at `0.5` seconds. |
| `--fit` | Letterbox the video instead of cropping. |
| `--fill` | Crop to fill the screen. This is the default. |
| `--only-main` | Use only the main display. |
| `--no-recursive` | Do not scan subfolders. |
| `--sound` | Keep video audio on. Default is muted. |
| `--level-offset N` | Raise or lower the desktop window level if needed. |
| `--check` | Validate inputs and exit without starting playback. |

## 🧠 How It Works

The helper script builds the Swift executable, wraps it in a tiny local `.app`
bundle, and launches it with `open`. The app creates one borderless window per
screen at the desktop window level, then swaps between two `AVPlayerLayer`
instances to crossfade from the current clip into the next prepared clip.

macOS does not provide a public API for replacing the system wallpaper with an
arbitrary video. This project uses a lightweight desktop-level window instead,
which keeps the behavior simple and reversible.

## 📚 Documentation

The full guide is published with GitHub Pages:

- [Getting Started](https://sunwood-ai-labs.github.io/random-video-wallpaper-macos/guide/getting-started)
- [Usage](https://sunwood-ai-labs.github.io/random-video-wallpaper-macos/guide/usage)
- [Architecture](https://sunwood-ai-labs.github.io/random-video-wallpaper-macos/guide/architecture)
- [Troubleshooting](https://sunwood-ai-labs.github.io/random-video-wallpaper-macos/guide/troubleshooting)

## 🧰 Development

Build the release binary:

```sh
swift build -c release
```

Build a distributable app bundle, zip, and DMG:

```sh
VERSION=0.2.0 scripts/build-release-app
```

The local package is ad-hoc signed by default. For public distribution without
Gatekeeper friction, set `CODESIGN_IDENTITY` to a Developer ID Application
certificate and notarize the zip or DMG before publishing.

Validate a media folder without starting the wallpaper:

```sh
.build/release/random-video-wallpaper --check ~/Movies/wallpapers
```

Build the documentation locally:

```sh
npm ci --prefix docs
npm run docs:build --prefix docs
```

## 🔒 Privacy

The app only scans the paths you pass on the command line. It does not make
network requests, collect analytics, upload file names, or persist your video
paths outside the local `.video-wallpaper.pid` used by the stop script.

## 📄 License

MIT
