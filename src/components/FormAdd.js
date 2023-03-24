import { Component } from "react";
import { Card, Col, Container, Row, InputGroup, Form } from "react-bootstrap";

class FormAdd extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <Form.Control
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                            </InputGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FormAdd;