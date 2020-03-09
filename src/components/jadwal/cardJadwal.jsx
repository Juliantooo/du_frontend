import React, { useState } from "react"
import { Card, Row, Col } from "reactstrap"
import styles from "../../styles/styles.module.css"

const CardJadwal = props => {
  const [rundown] = useState(props)
  return (
    <Card
      className={`${
        window.innerWidth <= 700
          ? `w-100 ${styles.cardJadwal}`
          : ` ${styles.cardJadwal} w-75  py-3 my-1 mx-auto`
      }`}
      style={{ border: "none" }}
    >
      <Row className={styles.cardJadwal_content}>
        <Col xs="6" sm="6" md="6" className="mt-2">
          <p>{rundown.todo}</p>
          <p style={{ fontWeight: "bold" }}>{rundown.pertemuan}</p>
          <p>{rundown.materi}</p>
        </Col>
        <Col xs="6" sm="6" md="6" className="mt-2">
          <p>{rundown.tanggal}</p>
          <p>{rundown.tempat}</p>
          <p>{rundown.jam}</p>
        </Col>
      </Row>
    </Card>
  )
}

export default CardJadwal
