import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DZ-Ifd4R.mjs';
import { manifest } from './manifest_BUpXSXTI.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/meta-event.astro.mjs');
const _page2 = () => import('./pages/contabilidade.astro.mjs');
const _page3 = () => import('./pages/ecommerce.astro.mjs');
const _page4 = () => import('./pages/imobiliarias.astro.mjs');
const _page5 = () => import('./pages/saude.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/api/meta-event.ts", _page1],
    ["src/pages/contabilidade.astro", _page2],
    ["src/pages/ecommerce.astro", _page3],
    ["src/pages/imobiliarias.astro", _page4],
    ["src/pages/saude.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/boss/Desktop/COGNUO%20SITE/cognuo-webpage/dist/client/",
    "server": "file:///Users/boss/Desktop/COGNUO%20SITE/cognuo-webpage/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
{
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
