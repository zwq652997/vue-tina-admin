/**
 * vite总配置文件
 */
const path = require('path');
import type { UserConfig } from 'vite';
//
const viteConfig: UserConfig = {
    // 端口号(默认3000)
    port: 3001,
    // 是否自动打开浏览器(默认false)
    open: true,
    // 是否开启 https
    // https: false,
    // 服务端渲染
    // ssr: false,
    // 引入第三方的配置
    // optimizeDeps: {
    //     include: ["moment", "echarts", "axios", "mockjs"]
    // },
    // 生产环境路径，类似webpack的assetsPath
    base: './',
    // 打包后目录,默认dist
    outDir: 'www',
    // 别名配置
    alias: {
        // 键必须以斜线开始和结束
        '/@/': path.resolve(__dirname, './src')
    },
    // 代理配置
    proxy: {
        // '/xx': 'http://10.192.195.96:8087',
    }
}

//
export default viteConfig;