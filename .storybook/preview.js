import "../src/styles/index.scss";

import { customViewports } from "./customViewports";

export const parameters = {
  viewport: {
    viewports: {
      ...customViewports,
    },
  },
};
