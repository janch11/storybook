import { Card } from "components/Card";
import { Col } from "components/Col";
import { Row } from "components/Row";
import "./ColumnsStories.scss";

export default {
  title: "Components/Column",
  component: Col,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "xSmall",
    },
  },
};

export const ColumnTemplate = () => (
  <div>
    <h2 className="column-heading">Some columns examples</h2>
    <h3 className="column-heading">Col 1/12</h3>
    <Row>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
    </Row>
    <h3 className="column-heading">2x Col 1/12</h3>
    <Row>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
    </Row>
    <h3 className="column-heading">Col 3/12 Col 9/12</h3>
    <Row>
      <Col className="col col--3-12">
        <div className="box"></div>
      </Col>
      <Col className="col col--9-12">
        <div className="box"></div>
      </Col>
    </Row>
    <h3 className="column-heading">13x Col 1/12</h3>
    <Row>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
      <Col className="col col--1-12">
        <div className="box"></div>
      </Col>
    </Row>
  </div>
);
