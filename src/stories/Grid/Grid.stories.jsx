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
    <Row className="row__hidden row__hidden--to-large">
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
    <Row className="row__hidden row__hidden--to-small">
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
    <Row className="row__hidden row__hidden--from-xlarge">
      <GridItem>
        <img src={empty} />
      </GridItem>
    </Row>
  </Grid>
);
