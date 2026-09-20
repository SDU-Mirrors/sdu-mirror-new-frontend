import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

//用于将单个SVG作为组件引入
import svgr from "vite-plugin-svgr";
//用于批量引入SVG来生成SVG精灵图
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap'
//用于提供多个静态目录
import generalAssets from './plugins/general_assets.js'
//提供旧版本浏览器支持
import legacy from '@vitejs/plugin-legacy'

const CADDY_HTTPS_REDIRECT_PLACEHOLDER =
  '/* __VITE_APP_ENABLE_HTTPS_REDIRECT__ */ false'

// public 目录中的文件不会经过 Vite 的 HTML 环境变量替换，
// 因此在写出构建产物后单独渲染 Caddy 的目录浏览模板。
function renderCaddyBrowseTemplate() {
  let outputDirectory
  let enableHttpsRedirect
  let renderPromise

  async function renderTemplate() {
    const templatePath = resolve(
      outputDirectory,
      'caddy_fileserver_browse_custom.html',
    )
    const template = await readFile(templatePath, 'utf8')
    const placeholderCount = template.split(
      CADDY_HTTPS_REDIRECT_PLACEHOLDER,
    ).length - 1

    if (placeholderCount !== 1) {
      throw new Error(
        `Expected exactly one HTTPS redirect placeholder in ${templatePath}, found ${placeholderCount}`,
      )
    }

    await writeFile(
      templatePath,
      template.replace(
        CADDY_HTTPS_REDIRECT_PLACEHOLDER,
        String(enableHttpsRedirect),
      ),
      'utf8',
    )
  }

  return {
    name: 'render-caddy-browse-template',
    apply: 'build',
    configResolved(config) {
      outputDirectory = resolve(config.root, config.build.outDir)
      enableHttpsRedirect =
        config.env.VITE_APP_ENABLE_HTTPS_REDIRECT === 'true'
    },
    buildStart() {
      renderPromise = undefined
    },
    writeBundle() {
      if (!renderPromise) {
        renderPromise = renderTemplate()
      }

      return renderPromise
    },
  }
}

function makeEntryAssetPathsAbsolute() {
  const relativeAssetAttribute = /(\s(?:src|href|data-src)=["'])\.\//g
  const unresolvedAssetAttribute = /\s(?:src|href|data-src)=["']\.\//

  return {
    name: 'make-entry-asset-paths-absolute',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const transformed = html.replace(relativeAssetAttribute, '$1/')

        if (unresolvedAssetAttribute.test(transformed)) {
          throw new Error('Failed to rewrite all relative entry asset paths')
        }

        return transformed
      },
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',

  plugins: [react(),
    generalAssets(),
    renderCaddyBrowseTemplate(),
    svgr(),
    VitePluginSvgSpritemap('./src/assets/mirror_icons_svg/*.svg'),
    legacy({
      targets: ['ie >= 11', 'chrome <= 79', 'firefox <= 78'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      renderLegacyChunks: true,
      polyfills: [
        'es.symbol',
        'es.promise',
        'es.promise.finally',
        'es.map',
        'es.set',
        'es.array.filter',
        'es.array.for-each',
        'es.array.flat-map',
        'es.object.define-properties',
        'es.object.define-property',
        'es.object.get-own-property-descriptor',
        'es.object.get-own-property-descriptors',
        'es.object.keys',
        'es.object.to-string',
        'web.dom-collections.for-each',
        'esnext.global-this',
        'esnext.string.match-all',
        'es.object.entries',
        'es.object.from-entries',
        'esnext.object.iterate-entries',
        'es.object.values',
        'esnext.map.map-values',
        'esnext.object.iterate-values',
        'es.object.has-own',
        'esnext.object.has-own',
        'esnext.reflect.has-own-metadata',
      ],
      modernPolyfills:[
        'esnext.global-this',
        'es.object.has-own',
        'esnext.object.has-own',
        'esnext.reflect.has-own-metadata',
      ]
    }),
    makeEntryAssetPathsAbsolute(),
  ],

  resolve: {
    alias: {
      src: "/src",
    },
  },
})
