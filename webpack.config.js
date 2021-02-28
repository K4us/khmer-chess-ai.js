const path = require('path');

const ROOT = path.resolve(__dirname, 'src');

module.exports = {
    context: ROOT,

    entry: {
        'khmer-chess-ai': './KhmerChessAI.ts'
    },

    mode: 'production',
    devtool: 'source-map',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },

    module: {
        rules: [
            /****************
            * LOADERS
            *****************/
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.(jpe?g|png|ttf|eot|woff(2)?|mp3)(\?[a-z0-9=&.]+)?$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
};

