import { defineConfig } from 'vitepress'

const repoUrl = 'https://github.com/Sunwood-ai-labs/random-video-wallpaper-macos'

export default defineConfig({
  base: '/random-video-wallpaper-macos/',
  cleanUrls: true,
  title: 'Random Video Wallpaper',
  description: 'Random looping video wallpaper for macOS with smooth crossfades.',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/random-video-wallpaper-macos/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Random Video Wallpaper for macOS' }],
    ['meta', { property: 'og:description', content: 'Turn local videos into a quiet, randomly looping macOS desktop wallpaper.' }],
    ['meta', { property: 'og:image', content: 'https://sunwood-ai-labs.github.io/random-video-wallpaper-macos/og.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: repoUrl }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Maki'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Random Video Wallpaper',
      description: 'Random looping video wallpaper for macOS with smooth crossfades.',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/getting-started' },
          { text: 'GitHub', link: repoUrl }
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Getting Started', link: '/guide/getting-started' },
              { text: 'Usage', link: '/guide/usage' },
              { text: 'Architecture', link: '/guide/architecture' },
              { text: 'Troubleshooting', link: '/guide/troubleshooting' }
            ]
          }
        ]
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      title: 'Random Video Wallpaper',
      description: 'クロスフェード付きの macOS ランダム動画壁紙。',
      themeConfig: {
        nav: [
          { text: 'ガイド', link: '/ja/guide/getting-started' },
          { text: 'GitHub', link: repoUrl }
        ],
        sidebar: [
          {
            text: 'ガイド',
            items: [
              { text: 'はじめる', link: '/ja/guide/getting-started' },
              { text: '使い方', link: '/ja/guide/usage' },
              { text: 'アーキテクチャ', link: '/ja/guide/architecture' },
              { text: 'トラブルシューティング', link: '/ja/guide/troubleshooting' }
            ]
          }
        ]
      }
    }
  }
})
