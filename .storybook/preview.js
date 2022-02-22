import "style-color/index.scss";
import "style-preflight/index.scss";
import "style-font/index.scss";

export const parameters = {
   actions: { argTypesRegex: "^on[A-Z].*" },
   controls: {
      matchers: {
         color: /(background|color)$/i,
         date: /Date$/,
      },
   },
};
