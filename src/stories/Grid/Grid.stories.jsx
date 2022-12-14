import { Grid } from "components/Grid";
import { Col } from "components/Col";
import { Row } from "components/Row";

import winter from "assets/winter.jpg";
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

export const GridTemplate = () => (
  <Grid columns={columns}>
    <Row className="row__hidden row__hidden--to-large">
      <Col>
        <img src={winter} />
      </Col>
      <Col>
        <img src={winter} />
      </Col>
      <Col>
        <img src={winter} />
      </Col>
      <Col>
        <img src={winter} />
      </Col>
      
    </Row>
    <Row className="row__hidden row__hidden--to-small">
      <Col>
        <img src={winter} />
      </Col>
      <Col>
        <img src={winter} />
      </Col>
      <Col>
        <img src={winter} />
      </Col>
    </Row>
    <Row>
      <Col>
        <img src={winter} />
      </Col>
      <Col>
        <img src={winter} />
      </Col>
      
      
    </Row>
    <Row className="row__hidden row__hidden--from-xlarge">
      <Col>
        <img src={winter} />
      </Col>
    </Row>
  </Grid>
);
