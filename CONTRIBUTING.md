# Contributing

Thanks for helping improve Random Video Wallpaper.

## Development Setup

```sh
git clone https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos.git
cd random-video-wallpaper-macos
swift build -c release
npm ci --prefix docs
```

## Checks

Run these before opening a pull request:

```sh
swift build -c release
.build/release/random-video-wallpaper --help
npm run docs:build --prefix docs
```

## Pull Requests

- Keep changes focused and easy to review.
- Do not commit `.build/`, `node_modules/`, generated docs output, videos, or other large binaries.
- Update English and Japanese docs together when changing user-facing behavior.
- Include the macOS version and a short reproduction note for behavior fixes.
