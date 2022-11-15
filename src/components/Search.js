import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";

const Search = () => {
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Search images  here" />
          </Col>
          <Col>
            {" "}
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default Search;
