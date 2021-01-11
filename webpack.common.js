const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports= {
    entry: './src/index.js',    
    plugins: [
        new CleanWebpackPlugin(),
    ],    
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}