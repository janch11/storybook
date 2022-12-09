import { Grid } from "components/Grid";
import { GridItem } from "components/GridItem";
import { Row } from "components/Row";

import empty from "assets/empty.jpg";
import { columns } from "assets/constants";

export default {
  title: "Components/Grid",
  component: Grid,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "xSmall",
    },
  },
};

export const GridItemsTemplate = () => (
  <Grid columns={columns}>
    <Row>
      <GridItem>
        <img src={empty} />
      </GridItem>
      <GridItem>
        <img src={empty} />
      </GridItem>
      <GridItem>
        <img src={empty} />
      </GridItem>
      <GridItem>
        <img src={empty} />
      </GridItem>
    </Row>
    <Row>
      <GridItem>
        <img src={empty} />
      </GridItem>
      <GridItem>
        <img src={empty} />
      </GridItem>
      <GridItem>
        <img src={empty} />
      </GridItem>
    </Row>
    <Row>
      <GridItem>
        <img src={empty} />
      </GridItem>
      <GridItem>
        <img src={empty} />
      </GridItem>
    </Row>
  </Grid>
);
