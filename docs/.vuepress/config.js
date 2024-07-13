const global = require("./env");
module.exports = {
  title: global.APP_TITLE,
  description: "通用的编写文档的模版",
  base: global.APP_BASE,
  head: [
    ["link", { rel: "icon", href: "" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "通用的编写文档的模版",
      },
    ],
  ],
  themeConfig: {
    repo: global.APP_REPO,
    repoLabel: global.APP_REPOLABEL,
    docsRepo: global.APP_DOCSREPO,
    docsDir: global.APP_DOCSDIR,
    // docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: false,
    // 默认为 "Edit this page"
    editLinkText: "可以帮助我们改善这页面！",
    ignoreDeadLinks: true,
    sitemap: {
      hostname: global.APP_HOSTNAME,
      lastmodDateOnly: false,
    },
    // displayAllHeaders: true,
    sidebar: [
      {
        title: "Vue3系列",
        collapsable: true,
        children: [
          ["vue3/goal", "设计目标是什么？做了哪些优化?"],
          ["vue3/performance", "性能提升主要是通过哪几方面体现的？"]
        ],
      },
      {
        title: "Node系列",
        collapsable: true,
        children: [
          ["node/Buffer", "Buffer 的理解？应用场景？"],
          ["node/event_loop", "event_loop"],
          ["node/EventEmitter", "Node的EventEmitter"],
          ["node/file_upload", "file_upload"],
          ["node/fs", "file系统"],
        ],
      }
    ],
  },
  markdown: {
    lineNumbers: true,
  },
};
