import React from "react"
import { Row, Col } from "reactstrap"
import { DaftarBtn } from "../button"
import styles from "../../styles/styles.module.css"

const Hero = () => {
  const classHero =
    window.innerWidth <= 700
      ? `align-items-center h-75 d-flex`
      : `align-items-center h-75 d-flex`
  const classDU =
    window.innerWidth <= 700
      ? `w-75 mx-auto text-white text-center`
      : `w-75 mx-auto text-white text-left`

  return (
    <div className={`${styles.fullscreen} Hero container-fluid`}>
      <Row className={classHero}>
        <Col xs="12" sm="12" md="8" className="justify-content-center">
          <div className={classDU}>
            <div className={`${styles.hero_intro}`}>
              AYO KEMBANGKAN <span style={{ color: "lightgreen" }}>MINAT </span>{" "}
              &<span style={{ color: "lightgreen" }}> BAKATMU </span>
              BERSAMA DOSCOM
            </div>
            <div className={`${styles.subheadline}`}>
              <p>
                Training dengan metode yang memadukan beberapa kelas dan
                pengajar yang menyenangkan sesuai minat peserta
              </p>
              <DaftarBtn>Daftar Sekarang</DaftarBtn>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Hero
