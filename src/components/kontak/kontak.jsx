import React, { useState } from "react"
import { Row, Col } from "reactstrap"
import CardCP from "./cardCP"
import styles from "../../styles/styles.module.css"
import tele from "../../assets/telegram.png"
import instagram from "../../assets/instagram.png"

const Kontak = () => {
  const [kontakCP] = useState([
    {
      nama: "Tenesia",
      wa: "081 111 442 452",
      ig: "@tene",
      telegram: "@tene",
      bgwa: `${tele}`,
      bgtele: `${tele}`,
      bgig: `${instagram}`
    },
    {
      nama: "Chist",
      wa: "081 111 442 452",
      ig: "@christ",
      telegram: "@christ",
      bgwa: `${tele}`,
      bgtele: `${tele}`,
      bgig: `${instagram}`
    }
  ])
  return (
    <div className={`${styles.kontakScreen} container`}>
      <div className={`${styles.headline} title py-5`}>Kontak</div>
      <Row className="mt-5 d-flex flex-row align-items-center h-100">
        {kontakCP.map((kontak, key) => {
          return (
            <Col xs="12" sm="12" md="6" key={key}>
              <CardCP {...kontak} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Kontak
