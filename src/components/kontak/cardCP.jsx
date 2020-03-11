import React, { useState } from "react"
import { Card } from "reactstrap"
import styles from "../../styles/styles.module.css"
import ImageKontak from "./image_kontak"

const CardCP = props => {
  const [kontak] = useState(props)
  return (
    <Card className={`${styles.cardCP} mx-auto`} style={{ border: "none" }}>
      <ImageKontak />
      <div className={`${styles.subheadline} ${styles.kontak}`}>
        <ul
          style={{
            listStyle: "none",
            margin: "0",
            padding: "0"
          }}
          className="text-justify"
        >
          <li className="text-center">{kontak.nama}</li>
          <li>
            <img
              className={`${styles.iconCP} mr-5 `}
              src={kontak.bgwa}
              alt=""
            />
            {kontak.wa}
          </li>

          <li>
            <img
              className={`${styles.iconCP} mr-5 `}
              src={kontak.bgig}
              alt=""
            />
            {kontak.ig}
          </li>

          <li>
            <img
              className={`${styles.iconCP} mr-5 `}
              src={kontak.bgtele}
              alt=""
            />
            {kontak.telegram}
          </li>
        </ul>
      </div>
    </Card>
  )
}

export default CardCP
