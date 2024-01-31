import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh_CN',
      description: '简体中文 Theme For Vitepress'
    },
    'en': {
      label: 'English',
      lang: 'en',
      description: 'English Theme For Vitepress'
    },
    'ko': {
      label: '한국어',
      lang: 'ko',
      description: '한국어 Theme For Vitepress'
    }
  },
  base: "/VitePressPages/",
  head: [["link", { rel: "icon", href: "/VitePressPages/logo.svg" }]],
  title: "DoliL in VitePress",
  // 用来做SEO
  description: "A VitePress Site",
  themeConfig: {
    locales: {
      root: {
        label: '简体中文',
        selectText: '多国语言'
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages'
      },
      '/ko/': {
        label: '한국어',
        selectText: '언어들'
      },
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在GitHub编辑本页'
    },
    lastUpdated: true, //此配置不会立即生效，需git提交后爬取时间戳，本地报错可以先注释
    themeConfig: {
      //上次更新时间
      lastUpdatedText: '上次更新',
    },
    outlineTitle: "文章目录",
    outline: [2, 6],
    logo: '/public/logo.svg',
    // siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南',
        items: [
          {
            // 分组标题1
            text: '介绍',
            items: [
              { text: '前言', link: '/preface' },
            ],
          },
          {
            // 分组标题2
            text: '基础设置',
            items: [
              { text: '快速上手', link: '/getting-started' },
              { text: '配置', link: '/configuration' },
              { text: '页面', link: '/page' },
              { text: 'Frontmatter', link: '/frontmatter' },
            ],
          },
          {
            // 分组标题3
            text: '进阶玩法',
            items: [
              { text: 'Markdown', link: '/Markdown' },
              { text: '静态部署', link: '/assets' },
            ],
          },
        ],
      },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'x', link: 'https://twitter.com/dolimence' },
      { icon: 'slack', link: 'https://app.slack.com/client/T03UCM34MCM/C03U13EH1B9' }
    ],
    // footer
    footer:
      { copyright: "Copyright@ 2024 Dolimence Wei" },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
          'en':{
            translations: {
              button: {
                buttonText: "Search document",
                buttonAriaLabel: "search document",
              },
              modal: {
                noResultsText: "no result found",
                resetButtonTitle: "clear query conditions",
                footer: {
                  selectText: "select",
                  navigateText: "switch",
                },
              },
            },
          },
          'ko':{
            translations: {
              button: {
                buttonText: "문서 검색",
                buttonAriaLabel: "문서 검색",
              },
              modal: {
                noResultsText: "관련 결과를 찾을 수 없습니다.",
                resetButtonTitle: "쿼리 조건 지우기",
                footer: {
                  selectText: "고르다",
                  navigateText: "전달",
                },
              },
            },
          },
        },
      },
    },

  },

})
