import { Grid } from "components/Grid";
import { Col } from "components/Col";
import { Row } from "components/Row";

import winter from "assets/winter.jpg";
import { Card } from "components/Card";

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
  <Grid>
    <Row className="row__hidden row__hidden--to-large">
      <Col className="col--3-12">
        <img src={winter} />
      </Col>
      <Col className="col--3-12">
        <img src={winter} />
      </Col>
      <Col className="col--3-12">
        <img src={winter} />
      </Col>
      <Col className="col--3-12">
        <img src={winter} />
      </Col>
    </Row>
    <Row className="row__hidden row__hidden--to-small">
      <Col className="col--4-12">
        <img src={winter} />
      </Col>
      <Col className="col--4-12">
        <img src={winter} />
      </Col>
      <Col className="col--4-12">
        <img src={winter} />
      </Col>
    </Row>
    <Row>
      <Col className="col--6-12">
        <img src={winter} />
      </Col>
      <Col className="col--6-12">
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

export const GridTemplateWithWhiteCards = () => (
  <Grid>
    <Row className="row__hidden row__hidden--to-large">
      <Col className="col--3-12">
        <Card withBackground />
      </Col>
      <Col className="col--3-12">
        <Card withBackground />
      </Col>
      <Col className="col--3-12">
        <Card withBackground />
      </Col>
      <Col className="col--3-12">
        <Card withBackground />
      </Col>
    </Row>
    <Row className="row__hidden row__hidden--to-small">
      <Col className="col--4-12">
        <Card withBackground />
      </Col>
      <Col className="col--4-12">
        <Card withBackground />
      </Col>
      <Col className="col--4-12">
        <Card withBackground />
      </Col>
    </Row>
    <Row>
      <Col className="col--6-12">
        <Card withBackground />
      </Col>
      <Col className="col--6-12">
        <Card withBackground />
      </Col>
    </Row>
    <Row className="row__hidden row__hidden--from-xlarge">
      <Col>
        <Card withBackground />
      </Col>
    </Row>
  </Grid>
);

export const GridTemplateWithCards = () => (
  <Grid>
    <Row className="row__hidden row__hidden--to-large">
      <Col className="col--3-12">
        <Card />
      </Col>
      <Col className="col--3-12">
        <Card />
      </Col>
      <Col className="col--3-12">
        <Card />
      </Col>
      <Col className="col--3-12">
        <Card />
      </Col>
    </Row>
    <Row className="row__hidden row__hidden--to-small">
      <Col className="col--4-12">
        <Card />
      </Col>
      <Col className="col--4-12">
        <Card />
      </Col>
      <Col className="col--4-12">
        <Card />
      </Col>
    </Row>
    <Row>
      <Col className="col--6-12">
        <Card />
      </Col>
      <Col className="col--6-12">
        <Card />
      </Col>
    </Row>
    <Row className="row__hidden row__hidden--from-xlarge">
      <Col>
        <Card />
      </Col>
    </Row>
  </Grid>
);
