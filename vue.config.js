module.exports = {
    baseUrl: '/',
    productionSourceMap: false,
    // globa scss
    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
            // @/ is an alias to src/
            // so this assumes you have a file named `src/variables.scss`
            data: `@import "@/styles/index.scss";`
            }
        }
    },
    // chainWebpack: config => {
    //     config.module
    //      .rule('css')
    //      .use('css-loader')
    //    }
}
