// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();

    // Obtain configuration from: https://giscus.app/
    giscusTalk({
      repo: 'Dolimence/VitePressPages',
      repoId: 'R_kgDOHuqSOA',
      category: 'Announcements', // default: `General`
      categoryId: 'DIC_kwDOHuqSOM4Cc4oL',
      mapping: 'pathname', // default: `pathname`
      inputPosition: 'top', // default: `top`
      lang: 'zh-CN', // default: `zh-CN`
      lightTheme: 'light', // default: `light`
      darkTheme: 'transparent_dark', // default: `transparent_dark`
      // ...
    }, {
      frontmatter, route
    },
      // Whether to activate the comment area on all pages.
      // The default is true, which means enabled, this parameter can be ignored;
      // If it is false, it means it is not enabled.
      // You can use `comment: true` preface to enable it separately on the page.
      true
    );
  }
}
