import React from "react"
import { Row, Col } from "reactstrap"
import SideForm from "../components/form/sideForm"

const Registrasi = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Row style={{ margin: "0", padding: "0" }}>
        <Col xs="6" sm="6" md="3" style={{ padding: "0" }}>
          <SideForm />
        </Col>
        <Col xs="6" sm="6" md="9" style={{ padding: "0" }}></Col>
      </Row>
    </div>
  )
}

export default Registrasi
