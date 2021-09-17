const path = require( 'path' );

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    {
        name: "sticker",
        entry: [
            __dirname + '/src/sticker.scss',
        ],
        output: {
            path: path.resolve( __dirname, 'dist' ),
        },
        module: {
            rules: [
                {
                    test:/\.(s*)css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ]
                },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'sticker.css'
            }),
        ],
    },
    {
        name: "example",
        entry: [
            __dirname + '/src/example.scss',
        ],
        output: {
            path: path.resolve( __dirname, 'dist' ),
        },
        module: {
            rules: [
                {
                    test:/\.(s*)css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ]
                },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'example.css'
            }),
        ],
    }
];