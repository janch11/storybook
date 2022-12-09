import { Grid } from "components/Grid";

export default {
  title: "Components/Grid",
  component: Grid,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "x-small",
    },
  },
};

export const GridItemsTemplate = () => <Grid></Grid>
