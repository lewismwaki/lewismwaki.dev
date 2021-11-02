// Common assets file types which are for `file-loader`
const reImage = /\.(ico|jpg|jpeg|png|gif|eot|otf|svg|webp|ttf|woff|woff2)$/;
// css files
const reScss = /\.(css|scss|sass|less)$/;

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    externals: [
      nodeExternals({
        allowlist: [reScss],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(s*)css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
  });
};
