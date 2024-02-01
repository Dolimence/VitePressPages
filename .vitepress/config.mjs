import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/VitePressPages/",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "DoliL in VitePress",
  // 用来做SEO
  description: "A VitePress Site",
  lastUpdatedText: '上次更新',

  themeConfig: {
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      },
    },
    // locales: {
    //   '/': {
    //     label: '简体中文',
    //     selectText: '多国语言'
    //   },
    //   '/en/': {
    //     label: 'English',
    //     selectText: 'Languages'
    //   }
    // },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: true, //此配置不会立即生效，需git提交后爬取时间戳，本地报错可以先注释

    //上次更新时间

    outlineTitle: "Document Content",
    outline: [2, 6],
    logo: '/logo.svg',
    // siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Content', link: '/content/' },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
    ],

    sidebar: {
      '/content/': [
        {
          text: 'Front end Technology',
          collapsed: false,
          items: [
            {text: 'CSS', link: '/Front end Technology/CSS/'},
            {text: 'HTML5', link: '/Front end Technology/HTML5/'},
            {text: 'JavaScript', link: '/Front end Technology/JavaScript/'},
            {text: 'React', link: '/Front end Technology/React/'},
            {text: 'TypeScript', link: '/Front end Technology/TypeScript/'},
            {text: 'Vue', link: '/Front end Technology/Vue/'},
            {text: 'WeChat Applets', link: '/Front end Technology/WeChat Applets/'},
            {text: 'Node.js', link: '/Front end Technology/Node.js/'},
          ]
        },
        {
          text: 'Back end Technology',
          collapsed: true,
          items: [
            {text: 'Java', link: '/Back end Technology/Java/'},
            {text: 'SpringBoot', link: '/Back end Technology/SpringBoot/'},
            {text: 'Docker', link: '/Back end Technology/Docker/'},
            {text: 'Dubbo', link: '/Back end Technology/Dubbo/'},
            {text: 'ElasticSearch', link: '/Back end Technology/ElasticSearch/'},
            {text: 'PHP', link: '/Back end Technology/PHP/'},
            {text: 'Mybatis', link: '/Back end Technology/Mybatis/'},
            {text: 'Nginx', link: '/Back end Technology/Nginx/'},
            {text: 'MongoDB', link: '/Back end Technology/MongoDB/'},
            {text: 'Redis', link: '/Back end Technology/Redis/'},
            {text: 'RabbitMQ', link: '/Back end Technology/RabbitMQ/'},
          ]
        },
        {
          text: 'Design Development',
          collapsed: true,
          items: [{text: 'Blender', link: '/Design Development/Blender/'},
            {text: 'VitePress', link: '/Design Development/VitePress/'},
            {text: 'VuePress', link: '/Design Development/VuePress/'},]
        },
        {
          text: 'Others',
          collapsed: true,
          items: [
            {text: 'Git', link: '/Others/Git/'},
            {text: 'Linux', link: '/Others/Liunx/'},
            {text: 'Matlab', link: '/Others/Matlab/'},
            {text: 'Python', link: '/Others/Python/'},
            {text: 'R', link: '/Others/R/'},
            {text: 'TensorFlow', link: '/Others/TensorFlow/'},
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Dolimence/VitePressPages' },
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
          'en': {
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
          'ko': {
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
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'English Theme For Vitepress',
    },
    zh_CN: {
      label: '简体中文',
      lang: 'zh_CN',
      description: '简体中文 Theme For Vitepress',
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      description: '한국어 Theme For Vitepress'
    }
  },

})
