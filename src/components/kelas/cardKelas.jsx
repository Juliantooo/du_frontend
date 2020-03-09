import React from "react"
import { Col, Row } from "reactstrap"
import styles from "../../styles/styles.module.css"
import { useState } from "react"

const CardKelas = props => {
  const [kelas] = useState(props)
  return (
    <Row
      className={
        kelas.reverse
          ? `justify-content-center my-4 d-flex flex-row-reverse bd-highlight`
          : `justify-content-center my-4 d-flex`
      }
      style={{ margin: "0" }}
    >
      <Col
        xs="4"
        sm="3"
        md="2"
        className={`${styles.sideline} my-5`}
        style={
          kelas.reverse
            ? { borderLeft: "7px solid" }
            : { borderRight: "7px solid " }
        }
      >
        <img
          src={kelas.logo}
          alt=""
          id={styles.kelas_logo}
          className="h-100 align-item-center"
        />
      </Col>
      <Col xs="8" sm="5" md="5" className="d-flex align-items-center">
        <div className={`${styles.deskripsi_kelas}  text-left mx-3`}>
          <div className={styles.subheadline}>{kelas.kelas}</div>
          <p>{kelas.deskripsi}</p>
          <p>Kuota Tersisa : {kelas.kuota}</p>
        </div>
      </Col>
    </Row>
  )
}

export default CardKelas
