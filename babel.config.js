module.exports = (api) => {
  const isProduction = api.env("production");
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "79",
          ie: "11",
          firefox: "72",
          safari: "13",
        },
        useBuiltIns: "entry",
        corejs: 3,
      },
    ],
    [
      "@babel/preset-react",
      {
        development: !isProduction,
      },
    ],
  ];
  //@babel/preset-envというパッケージは、トランスパイルする時にどの環境で動かすようにトランスパイルするかを設定するものです。ここでは、Chromeのバージョン79,IEのバージョン11,FireFoxのバージョン72, Safariのバージョン13で動作するようにトランスパイルするようにオプションを設定しています。

  const plugins = [
    [
      "babel-plugin-styled-components",
      isProduction
        ? {
            displayName: false,
            fileName: false,
            pure: true,
          }
        : {
            minify: false,
          },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
