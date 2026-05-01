# Architecture

Random Video Wallpaper is intentionally small. It relies on AppKit for the
desktop-level windows and AVFoundation for playback.

## Components

- `scripts/run-video-wallpaper` builds the executable, creates a local `.app`,
  validates the inputs, and launches the app with `open`.
- `scripts/stop-video-wallpaper` stops the app process recorded in
  `.video-wallpaper.pid`.
- `Sources/RandomVideoWallpaper/main.swift` contains the CLI parsing, playlist
  scanning, window creation, and playback logic.

## Window Model

The app creates borderless windows at the macOS desktop window level. Each
window ignores mouse input, joins all Spaces, and follows display changes.

This is a reversible approximation of a video wallpaper. macOS does not provide
a public API for setting arbitrary videos as the system wallpaper.

## Playback Model

Each screen owns a `WallpaperPlayer` with two `AVPlayerLayer` slots. The next
clip is prepared on the inactive slot. When the active clip ends, the app starts
the prepared clip and animates layer opacity to crossfade between them.

## Privacy Model

The app only reads local paths that you pass on the command line. It does not
make network requests, upload file names, or keep a database of your media.
