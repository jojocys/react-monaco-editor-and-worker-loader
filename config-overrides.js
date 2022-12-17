const webpack = require('webpack');
// const webpack = require('monaco-editor/webpack')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {
    config.plugins.push(
        new MonacoWebpackPlugin({
            languages: ['json']
        })
    );
    config.stats = {
        children: true
    }
    // do stuff with the webpack config...
    config.module.rules.push(
        {
            test: /\.worker\.js$/,
            use: {
                loader: 'worker-loader',
                options: {
                    inline: 'fallback',
                    filename: '[contenthash].worker.js',
                },
            },
        },
        {
            test: /\.worker\.ts$/,
            use: [
                {
                    loader: 'worker-loader',
                    options: {
                        inline: 'fallback',
                        filename: '[contenthash].worker.js',
                    },
                },
                'ts-loader',
            ],
        },
    );
    return config;
};
