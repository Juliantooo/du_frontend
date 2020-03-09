import React, { useEffect } from "react"
import { Row, Col } from "reactstrap"
import { DaftarBtn } from "../button"
import styles from "../../styles/styles.module.css"
import ilustrasi from "../../assets/logo1.png"

const Hero = () => {
  useEffect(() => {
    if (window.innerWidth <= 700) {
      document
        .getElementsByClassName("row")[0]
        .appendChild(document.getElementsByClassName("ilu_hero")[0])
      document
        .getElementsByClassName("row")[0]
        .appendChild(document.getElementsByClassName("intro_hero")[0])
    }
  })

  return (
    <div
      className={`${styles.halfscreen} Hero align-items-center d-flex container-fluid mb-5 pb-5`}
    >
      <Row>
        <Col
          xs="12"
          sm="12"
          md="6"
          className="text-left justify-content-center intro_hero"
        >
          <div className=" w-75 mx-auto text-white mt-5 pt-5">
            <div className={`${styles.headline}`}>
              AYO KEMBANGKAN <span style={{ color: "lightgreen" }}>MINAT</span>{" "}
              &<span style={{ color: "lightgreen" }}>BAKATMU</span>
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
        <Col
          xs="12"
          sm="12"
          md="6"
          className="justify-content-center mb-5 ilu_hero"
        >
          <img src={ilustrasi} alt="" className={styles.ilustrasi} />
        </Col>
      </Row>
    </div>
  )
}

export default Hero
