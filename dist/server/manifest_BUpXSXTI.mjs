import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D2h9UFrd.mjs';
import 'es-module-lexer';
import { o as decodeKey } from './chunks/astro/server_BQFqCUSd.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/boss/Desktop/COGNUO%20SITE/cognuo-webpage/","adapterName":"@astrojs/node","routes":[{"file":"contabilidade/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contabilidade","isIndex":false,"type":"page","pattern":"^\\/contabilidade\\/?$","segments":[[{"content":"contabilidade","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contabilidade.astro","pathname":"/contabilidade","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"ecommerce/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ecommerce","isIndex":false,"type":"page","pattern":"^\\/ecommerce\\/?$","segments":[[{"content":"ecommerce","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ecommerce.astro","pathname":"/ecommerce","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"imobiliarias/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/imobiliarias","isIndex":false,"type":"page","pattern":"^\\/imobiliarias\\/?$","segments":[[{"content":"imobiliarias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/imobiliarias.astro","pathname":"/imobiliarias","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"saude/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/saude","isIndex":false,"type":"page","pattern":"^\\/saude\\/?$","segments":[[{"content":"saude","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/saude.astro","pathname":"/saude","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/meta-event","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/meta-event\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"meta-event","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/meta-event.ts","pathname":"/api/meta-event","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://cognuo.com.br","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/boss/Desktop/COGNUO SITE/cognuo-webpage/src/pages/contabilidade.astro",{"propagation":"none","containsHead":true}],["/Users/boss/Desktop/COGNUO SITE/cognuo-webpage/src/pages/ecommerce.astro",{"propagation":"none","containsHead":true}],["/Users/boss/Desktop/COGNUO SITE/cognuo-webpage/src/pages/imobiliarias.astro",{"propagation":"none","containsHead":true}],["/Users/boss/Desktop/COGNUO SITE/cognuo-webpage/src/pages/saude.astro",{"propagation":"none","containsHead":true}],["/Users/boss/Desktop/COGNUO SITE/cognuo-webpage/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/meta-event@_@ts":"pages/api/meta-event.astro.mjs","\u0000@astro-page:src/pages/contabilidade@_@astro":"pages/contabilidade.astro.mjs","\u0000@astro-page:src/pages/ecommerce@_@astro":"pages/ecommerce.astro.mjs","\u0000@astro-page:src/pages/imobiliarias@_@astro":"pages/imobiliarias.astro.mjs","\u0000@astro-page:src/pages/saude@_@astro":"pages/saude.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/Users/boss/Desktop/COGNUO SITE/cognuo-webpage/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_BUpXSXTI.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Bvs1ySsK.js","/astro/hoisted.js?q=1":"_astro/hoisted.CXFxtJ05.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/contabilidade.BaPXBFzr.css","/_astro/contabilidade.CMZzZoOj.css","/_astro/hoisted.Bvs1ySsK.js","/_astro/hoisted.CXFxtJ05.js","/images/favicon.png","/images/logo_white.png","/images/logo_with_text_white.png","/fonts/instrument-sans-variable.woff2","/contabilidade/index.html","/ecommerce/index.html","/imobiliarias/index.html","/saude/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"ujE/beazKjOJMl9LSPd/UjSBkEaLDiDifO1C3ar1lUA=","experimentalEnvGetSecretEnabled":false});

export { manifest };
