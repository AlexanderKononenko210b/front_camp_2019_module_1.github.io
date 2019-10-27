const path = require('path');

module.exports = {
    entry: {
        app: ["babel-polyfill", "./root/index.js"]
    },
    output: {
        path: path.resolve(__dirname, 'root'),
        filename:'main.js',
        publicPath: 'http://localhost:3000/'
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
};