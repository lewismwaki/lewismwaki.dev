exports.onCreateWebpackConfig = ({
    stage,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.css$/,
              use: [
                'style-loader',
                'css-loader',
            ],
          },
        ],
      },
      plugins: [
        plugins.define({
          __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
        }),
      ],
    })
  }