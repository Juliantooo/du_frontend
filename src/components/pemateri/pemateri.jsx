import React from "react"
import { Row, Col } from "reactstrap"
import styles from "../../styles/styles.module.css"
import bgPermateri from "../../assets/Group91.png"
import CardPemateri from "../pemateri/cardPemateri"

const Pemateri = () => {
  return (
    <div
      className={`${styles.fullscreen}`}
      style={{
        backgroundImage: `url(${bgPermateri})`,
        backgroundSize: "100% 100vh",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div
        className="warper h-25 align-items-baseline d-flex justify-content-center"
        style={{ paddingTop: "50px" }}
      >
        <div className="title my-5 justify-content-center">
          <p className={`${styles.headline} mb-3`}>Pemateri</p>
          <hr className={styles.underline_kelas}></hr>
        </div>
      </div>
      <Row className="justify-content-center" style={{ margin: "0" }}>
        <Col md="3" className="align-items-center">
          <CardPemateri />
        </Col>
      </Row>
    </div>
  )
}

export default Pemateri
