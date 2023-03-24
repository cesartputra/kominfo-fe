import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class Dashboard extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col lg={4}>
                        <Card>
                            <h3>Total Pelatihan</h3>
                            <h6></h6>
                        </Card>
                        
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <h3>Pelatihan Disetujui</h3>
                            <h6></h6>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <h3>Pelatihan Ditolak</h3>
                            <h6></h6>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Dashboard