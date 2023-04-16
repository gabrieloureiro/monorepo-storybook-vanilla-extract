const { mergeConfig } = require('vite')
const path = require('path')

module.exports = {
  "stories": [
    "../src/stories/tokens/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/design-system-test-gabrieloureiro/'
    }

    return mergeConfig(config, {
      ...config,
      plugins: [require("@vanilla-extract/vite-plugin").vanillaExtractPlugin()],
      resolve: {
        alias: [
          {
            find: '@loureiro/react',
            replacement: path.resolve(__dirname, '../../react'),
          },
          {
            find: '@loureiro/web',
            replacement: path.resolve(__dirname, '../../web'),
          },
        ],

      },
    });
  }
}
