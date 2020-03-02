import React, { useState } from "react"
import { Card, Media } from "reactstrap"
import dumyMedia from "../../assets/Android.png"
import styles from "../../styles/styles.module.css"

const CardInfo = props => {
  const [info] = useState(props)
  return (
    <Card
      className={`${styles.cardInfo} h-100 w-100 d-flex align-items-center py-3 px-2 my-3`}
      style={{ background: "#b3b6ca", borderRadius: "20px", border: "none" }}
    >
      <Media>
        <Media middle className="my-auto w-25">
          <img src={dumyMedia} width="65%" alt="" />
        </Media>
        <Media body>
          <Media style={{ fontWeight: "lighter", fontSize: "22px" }}>
            {info.head}
          </Media>
          <Media style={{ fontWeight: "bolder", fontSize: "22px" }}>
            {info.body}
          </Media>
          <Media style={{ fontWeight: "lighter", fontSize: "22px" }}>
            {info.footer}
          </Media>
        </Media>
      </Media>
    </Card>
  )
}

export default CardInfo
