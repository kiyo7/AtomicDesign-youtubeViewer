import webpack from 'webpack';
import path from 'path';

export default (env, args) => {
  const isProduction = args.mode === 'production';
  const devtool = !isProduction && 'inline-source-map';
  const rules = [
    {
      test: /\.jsx?$/,
      use: ['babel-loader'],
    },
  ];

  return {
    entry: './src/entries/app.jsx',
    output: {
      path: path.join(__dirname, './public/js/'),
      filename: 'app.js',
    },
    module: { rules },
    resolve: {
      modules: ['node_modules'],
      alias: {
        '~': path.join(__dirname, './src/'),
      },
      extensions: ['.js', '.jsx'],
    },
  };
};
//　*ここで定義していること*　//

//producitonモードでない場合はソースマップを出力する

// jsファイル、jsxファイルはbabel-loaderを使って変換する

// ./src/entries/sample.jsxを./output/sample.jsに出力する