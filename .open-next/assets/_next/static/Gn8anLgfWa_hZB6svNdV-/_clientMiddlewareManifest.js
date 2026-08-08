self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/static|_next\\/image|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml|manifest.webmanifest|.*\\.(?:avif|css|gif|ico|jpe?g|js|json|map|mp4|png|svg|webm|webp|woff2?)$).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml|manifest.webmanifest|.*\\.(?:avif|css|gif|ico|jpe?g|js|json|map|mp4|png|svg|webm|webp|woff2?)$).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()