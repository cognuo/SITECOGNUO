import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B9jozqfI.mjs';
import { manifest } from './manifest_DFKwFmww.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/meta-event.astro.mjs');
const _page2 = () => import('./pages/contabilidade.astro.mjs');
const _page3 = () => import('./pages/ecommerce.astro.mjs');
const _page4 = () => import('./pages/imobiliarias.astro.mjs');
const _page5 = () => import('./pages/saude.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
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
    "middlewareSecret": "1419b370-8fee-4132-9f1e-3dd91bf9d6cc",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
