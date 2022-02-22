const path = require("path");

const rs = (p) => path.resolve(process.cwd(), ...p);

module.exports = {
   stories: ["../packages/ui/**/*.stories.mdx", "../packages/ui/**/*.stories.@(js|jsx|ts|tsx)"],
   addons: [
      "@storybook/addon-links",
      {
         name: "@storybook/addon-essentials",
         options: {
            docs: true,
         },
      },
      "@storybook/addon-a11y",
   ],
   staticDirs: [
      {
         from: rs(["packages/style/font/src/lib/static"]),
         to: "/static",
      },
   ],
   framework: "@storybook/react",
   core: {
      builder: "storybook-builder-vite",
   },
};
