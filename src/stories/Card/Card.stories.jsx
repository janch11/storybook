import { Card } from "components/Card";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "xSmall",
    },
  },
};

export const CardTemplate = () => <Card />;
