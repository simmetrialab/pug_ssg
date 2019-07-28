// import fs from 'fs';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _ = require('lodash');
const {categories, addons} = require('../data');

const artifact_addons_category =  Object.keys(addons)
    .map(category =>
        new HtmlWebpackPlugin({
            filename: `${category}/add-on/index.html`,
            template: './src/templates/addon.pug',
            hash: true, // prevent cache
            templateParameters: {
                title: `${category}`,
                data: addons[category],
            }
        })
    )

const artifact_addons_category_product =  Object.keys(addons)
    .map(category =>
        addons[category].map(product => (
            new HtmlWebpackPlugin({
                filename: `${category}/${product.type}/${product.name}.html`,
                template: './src/templates/product.pug',
                hash: true, // prevent cache
                templateParameters: {
                    title: `${category} | ${product.name}`,
                    data: product,
                }
            })
        )))

const artifact_categories = Object.keys(categories)
    .map(category =>
        new HtmlWebpackPlugin({
            filename: `${category}/index.html`,
            template: './src/templates/category.pug',
            hash: true, // prevent cache
            templateParameters: {
                title: `${category}`,
                data: categories[category],
            }
        })
    )

const artifact_products = Object.keys(categories)
    .map(category =>
        categories[category].map(product => (
            new HtmlWebpackPlugin({
                filename: `${category}/${product.name}.html`,
                template: './src/templates/product.pug',
                hash: true, // prevent cache
                templateParameters: {
                    title: `${category} | ${product.name}`,
                    data: product,
                }
            })
        )))

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/templates/index.pug',
            hash: true, // prevent cache
            templateParameters: {
                title: 'foo',
                content: 'bar',
                data: require('../src/assets/translations/it_IT.json'),
              }
        }),
        ...artifact_categories,
        ...artifact_addons_category,
        ..._.flattenDeep(artifact_products),
        ..._.flattenDeep(artifact_addons_category_product),
    ],
}
