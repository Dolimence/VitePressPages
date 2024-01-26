import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/VitePressPages/",
  head: [["link", { rel: "icon", href: "/VitePressPages/logo.svg" }]],
  title: "DoliL in VitePress",
  // 用来做SEO
  description: "A VitePress Site",
  themeConfig: {
    editLink: { 
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path', 
      text: '在GitHub编辑本页'
    },
    lastUpdated: true, //此配置不会立即生效，需git提交后爬取时间戳，本地报错可以先注释
    themeConfig: {
      //上次更新时间
      lastUpdatedText:'上次更新', 
    },
    outlineTitle: "文章目录",
    outline: [2,6],
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
      { icon: 'x', link: 'https://github.com/vuejs/vitepress' }
    ],
    // footer
    footer: 
      { copyright: "Copyright@ 2024 Dolimence Wei" },
         // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
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
    },
    
  },
  
})
