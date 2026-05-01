// swift-tools-version: 5.9

import PackageDescription

let package = Package(
    name: "RandomVideoWallpaper",
    platforms: [
        .macOS(.v13)
    ],
    products: [
        .executable(name: "random-video-wallpaper", targets: ["RandomVideoWallpaper"])
    ],
    targets: [
        .executableTarget(
            name: "RandomVideoWallpaper",
            path: "Sources/RandomVideoWallpaper"
        )
    ]
)
