import React, { useState } from "react"
import { Card } from "reactstrap"
import styles from "../../styles/styles.module.css"

const CardCP = props => {
  const [kontak] = useState(props)
  console.log(props)
  return (
    <Card className={`${styles.cardCP}`} style={{ border: "none" }}>
      <div className={`${styles.subheadline} ${styles.kontak}`}>
        <ul
          style={{
            listStyle: "none",
            margin: "0",
            padding: "0"
          }}
          className="text-center"
        >
          <li>{kontak.nama}</li>
          <li>
            <img className={`${styles.iconCP} `} src={kontak.bgwa} alt="" />
            {kontak.wa}
          </li>

          <li>
            <img className={`${styles.iconCP} `} src={kontak.bgig} alt="" />
            {kontak.ig}
          </li>

          <li>
            <img className={`${styles.iconCP} `} src={kontak.bgtele} alt="" />
            {kontak.telegram}
          </li>
        </ul>
      </div>
    </Card>
  )
}

export default CardCP
