import React from "react"
import { Row, Col } from "reactstrap"
import styles from "../../styles/styles.module.css"
import CardInfo from "./cardInfo"
import ilustrasi from "../../assets/logo1.png"
import { useState } from "react"

const InfoRegis = () => {
  const [infoRegis] = useState([
    {
      head: "Biaya Pendaftaran",
      body: "Rp.30000,-",
      footer: "Sertifikat & Merchendise"
    },
    {
      head: "Waktu Kegiatan",
      body: "XX month 2020 - xx month 2020",
      footer: "4X Pertemuan"
    },
    {
      head: "Tempat Kegiatan",
      body: "Kampus Udinus Semarang",
      footer: "Lihat di Google Maps"
    }
  ])

  return (
    <div className={`${styles.fullscreen} container-fluid`}>
      <div className={`${styles.headline} title justify-content-center pt-5`}>
        Biaya, Tempat & Waktu
        <hr className={styles.underline} />
      </div>
      <Row className="justify-content-center mt-5">
        <Col xs="6" sm="6" md="4">
          {infoRegis.map((info, key) => {
            return (
              <Row key={key}>
                <CardInfo {...info} />
              </Row>
            )
          })}
        </Col>
        <Col xs="6" sm="6" md="4">
          <img
            src={ilustrasi}
            alt=""
            className={styles.ilustrasi}
            style={{ transform: "translateY(70px)" }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default InfoRegis
