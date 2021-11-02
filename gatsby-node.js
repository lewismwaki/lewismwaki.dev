exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
      module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ]
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