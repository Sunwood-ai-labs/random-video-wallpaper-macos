# Getting Started

Random Video Wallpaper runs local videos behind your normal macOS windows. This
guide gets you from a fresh clone to a running wallpaper.

## Requirements

- macOS 13 or later
- Xcode Command Line Tools with `swift`

Install the command line tools if needed:

```sh
xcode-select --install
```

## Clone

```sh
git clone https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos.git
cd random-video-wallpaper-macos
```

## Start

Start the menu bar app:

```sh
scripts/run-video-wallpaper
```

Choose videos or a folder from the status menu. You can also pass a folder
containing videos:

```sh
scripts/run-video-wallpaper ~/Movies/wallpapers
```

Pass files or globs:

```sh
scripts/run-video-wallpaper ~/Downloads/vending-stigmata-loop-*.mp4
```

The helper script builds the release executable, creates a tiny local `.app`
bundle, and launches it in the background.

## Stop

```sh
scripts/stop-video-wallpaper
```

## Verify Inputs

Use `--check` when you want to confirm that files are found without starting the
desktop wallpaper:

```sh
.build/release/random-video-wallpaper --check ~/Movies/wallpapers
```
