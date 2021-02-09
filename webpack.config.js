const HandlebarsPlugin = require('handlebars-webpack-plugin');
const path = require('path');
const Handlebars = require('handlebars');
const values = require(path.resolve(__dirname, 'data.js'));
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { from } = require('webpack-sources/lib/CompatSource');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: [
        path.resolve(__dirname, 'index.js'),
        // path.resolve(__dirname, 'index.js'),
    ],
    output: {
        globalObject: "this",
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
        filename: 'main.js',
    },
    optimization: {
        minimize: false
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,

    },
    plugins: [
        new CleanWebpackPlugin(),
        // new CopyPlugin({
        //     patterns: [{
        //         from: path.resolve(__dirname, 'index.js'),
        //         to: '[path]main.js'
        //     }]
        // }),
        new HtmlWebpackPlugin({
            template: 'index.hbs',
            publicPath: '.',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.hbs$/i,
                use:
                    [
                        // "file-loader?name=[name].html",
                        // "extract-loader",
                        {
                            loader: 'html-loader',
                            options: {
                                preprocessor: content => Handlebars.compile(content)(values),
                                attributes: {
                                    urlFilter: (attribute, value) => value != 'index.js',
                                    list: [
                                        // All default supported tags and attributes
                                        '...',
                                        {
                                            tag: 'a',
                                            attribute: 'data-src',
                                            type: 'src',
                                            filter: (tag, attribute, attributes, resourcePath) => {
                                                // console.log(attributes)
                                                if (!attributes.class) return false
                                                return (attributes.class.includes('image') || attributes.class.includes('doc'))
                                          }
                                        },
                                    ]
                                }
                            }
                        }
                    ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'file-loader?name=style.css',
                        options: {
                            publicPath: '.'
                        }
                    },
                    "extract-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'file-loader?name=style.css',
                        options: {
                            publicPath: '.'
                        }
                    },
                    "extract-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|webp|gif)$/i,
                use: [
                    {
                        loader: 'file-loader?name=[name].[ext]',
                        options: {
                            outputPath: 'images',
                            publicPath: './images/'
                        }
                    }
                ]
            },
            {
                test: /\.(svg)$/i,
                use: [
                    {
                        loader: 'file-loader?name=[name].[ext]',
                        options: {
                            outputPath: 'svg',
                            publicPath: './svg/'
                        }
                    }
                ]
            },
            {
                test: /\.[ot]tf$/i,
                use: [
                    {
                        loader: 'file-loader?name=[name].[ext]',
                        options: {
                            publicPath: './fonts/',
                            outputPath: 'fonts'
                        }
                    }
                ]
            }, {
                test: /\.(mp3|docx?|pdf|)$/i,
                use: [
                    {
                        loader: 'file-loader?name=[name].[ext]',
                        options: {
                            publicPath: './portfolio/',
                            outputPath: 'portfolio'
                        }
                    }
                ]
            }, {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'file-loader?name=[name].[ext]',
                        options: {
                            publicPath: './components/',
                            outputPath: 'components'
                        }
                    }
                ]
            }

            // {
            //     test: /\.js$/i,
            //     use: [
            //         {
            //             loader: 'file-loader?name=[path][name].[ext]',
            //             options: {
            //                 publicPath: '.',
            //                 esModule: false,
            //             }
            //         },
            //         // 'raw-loader'
            //     ]
            // },
        ],
    },

};