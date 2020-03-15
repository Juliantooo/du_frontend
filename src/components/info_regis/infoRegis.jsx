import React, { useEffect } from "react"
import { Row, Col } from "reactstrap"
import styles from "../../styles/styles.module.css"
import CardInfo from "./cardInfo"
import ilustrasi from "../../assets/logo1.png"
import { useState } from "react"
import { ShowEachElementInfoRegis } from "../../scriptJs/script"

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

  useEffect(() => {
    if (window.innerWidth <= 700) {
      document
        .getElementsByClassName("row_info")[0]
        .appendChild(document.getElementsByClassName("ilu_info")[0])
      document
        .getElementsByClassName("row_info")[0]
        .appendChild(document.getElementsByClassName("card_info")[0])
    }
    window.addEventListener("scroll", () => ShowEachElementInfoRegis())
  })

  return (
    <div
      className={`${styles.regisScreen} container-fluid  d-flex flex-column align-items-center`}
      id={3}
    >
      <div className={`${styles.headline} title justify-content-center  my-5`}>
        Biaya, Tempat & Waktu
      </div>
      <Row
        className="justify-content-center row_info container-fluid d-flex align-items-center h-75"
        style={{ margin: "0" }}
      >
        <Col xs="12" sm="12" md="4" className="card_info">
          {infoRegis.map((info, key) => {
            return (
              <Row key={key} className={`${styles.hiddenIllu} flagRegis`}>
                <CardInfo {...info} />
              </Row>
            )
          })}
        </Col>
        <Col
          xs="12"
          sm="12"
          md="4"
          className={`ilu_info my-4 ${styles.hiddenIllu}`}
        >
          <img src={ilustrasi} alt="" style={{ width: "100%" }} />
        </Col>
      </Row>
    </div>
  )
}

export default InfoRegis
