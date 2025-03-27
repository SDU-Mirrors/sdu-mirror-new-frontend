import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

//用于将单个SVG作为组件引入
import svgr from "vite-plugin-svgr";
//用于批量引入SVG来生成SVG精灵图
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap'
//用于提供多个静态目录
import generalAssets from './plugins/general_assets.js'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    generalAssets(),
    svgr(),
    VitePluginSvgSpritemap('./src/assets/mirror_icons_svg/*.svg'),
    VitePWA({ registerType: "prompt" ,manifest: false,selfDestroying: true})
  ],

  resolve: {
    alias: {
      src: "/src",
    },
  },
})
