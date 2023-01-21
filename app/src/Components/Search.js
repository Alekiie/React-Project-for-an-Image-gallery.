import React from "react";
import { Container, Row, Col, Button,Form } from "react-bootstrap";

const Search = ({word,setWord,handleSubmit}) => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col xs ={12} md = {8}>
          <Form onClick={handleSubmit}>
            <Form.Row>
              <Col xs = {9}>
                <Form.Control
                type="text"
                value={word}
                onChange = {(e)=>setWord(e.target.value)}
                 placeholder="Type to search..."

                />
              </Col>
              <Col>
                <Button type="Submit" variant="primary" >Search</Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Search;
