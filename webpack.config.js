const path = require('path');

module.exports = {
    entry: {
        app: ["whatwg-fetch", "@babel/polyfill", "proxy-polyfill", "./root/src/index.js"]
    },
    output: {
        path: path.resolve(__dirname, 'root/dist'),
        filename:'main.js',
        publicPath: 'https://github.com/AlexanderKononenko210b/front_camp_2019_module_1.github.io/'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { 
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        useBuiltIns: "entry",
                                        corejs: 3,
                                        targets: { browsers: ["last 2 versions", "ie >= 11"] }
                                    }
                                ]
                            ],
                            plugins: [
                                [
                                    "@babel/plugin-syntax-dynamic-import"
                                ]
                            ],
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'root/dist'),
        compress: true,
        port: 8080
    },
};