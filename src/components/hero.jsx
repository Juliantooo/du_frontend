import React from "react"
import { Row, Col } from "reactstrap"
import { DaftarBtn } from "./button"
import styles from "../styles/styles.module.css"
import ilustrasi from "../assets/logo1.png"

const Hero = () => {
  return (
    <div
      className={`${styles.halfscreen} Hero align-items-center d-flex container-fluid `}
    >
      <Row>
        <Col xs="6" sm="6" md="6" className="text-left">
          <div className="content w-75 mx-auto text-white">
            <div className={`${styles.headline}`}>
              AYO KEMBANGKAN <span style={{ color: "lightgreen" }}>MINAT</span>
              <br /> & <span style={{ color: "lightgreen" }}>BAKATMU</span>
              BERSAMA DOSCOM
            </div>
            <div className={`${styles.subheadline}`}>
              <p>
                Training dengan metode yang memadukan beberapa kelas dan
                pengajar yang menyenangkan sesuai minat peserta
              </p>
              <DaftarBtn>Daftar</DaftarBtn>
            </div>
          </div>
        </Col>
        <Col xs="6" sm="6" md="6">
          <img src={ilustrasi} alt="" className={styles.ilustrasi} />
        </Col>
      </Row>
    </div>
  )
}

export default Hero
