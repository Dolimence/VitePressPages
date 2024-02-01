
export default function getNavs(){
  console.log("8888888888");
  // console.log(window.location.pathname)
  if (typeof window !== 'undefined') {
    const pathName = window.location.pathname;
    if (pathName.includes('/en/')) return [
      { text: '首页A', link: '/' },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
    ];
    else if (pathName.includes('/ko/')) return [
      { text: '首页B', link: '/' },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
    ];
    else return [
      { text: '首页C', link: '/' },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
    ];
  }
}
