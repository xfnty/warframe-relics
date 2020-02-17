module.exports = {
    publicPath: "",
    outputDir: "../docs/RelicFinder",
    chainWebpack: (config) => {
        config
            .plugin("html")
            .tap((args) => {
                args[0].title = "Warframe Relic Finder";
                return args;
            });
    },
}
