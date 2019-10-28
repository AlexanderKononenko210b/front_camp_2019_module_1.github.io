const path = require('path');

module.exports = {
    entry: {
        app: ["babel-polyfill", "./root/src/index.js"]
    },
    output: {
        path: path.resolve(__dirname, 'root/dist'),
        filename:'main.js',
        publicPath: 'http://localhost:8080/'
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
                            presets: ["@babel/preset-env"],
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