const runEnv = process.env.VUE_APP_ENV || "dev";
const buildFolder = process.env.VUE_APP_ENV || "dist"
module.exports = {
    publicPath: './',
    // outputDir: buildFolder,
    // lintOnSave: false,
    // productionSourceMap: runEnv == 'test',
    // devServer: {
    //     open: true,
    //     host: '0.0.0.0',
    //     port: 8999,
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:3000',
    //             changeOrigin: true,
    //             secure: false,
    //             pathRewrite: {
    //                 "^/api/": "/"
    //             }
    //         }
    //     },
    //     before: app => {}
    // }
}