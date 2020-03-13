import React, { useState } from "react"
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import dumyfoto from "../../assets/Android.png"
import styles from "../../styles/styles.module.css"

const CardPemateri = props => {
  const [pemateri] = useState(props)

  return (
    <Card id={styles.cardPemateri} style={{ margin: "auto" }}>
      <div className="my-auto">
        <img
          src={`${dumyfoto}`}
          alt="img"
          className="mx-auto d-flex "
          id={styles.imgPemateri}
        />
        <CardBody className="mt-3">
          <CardTitle className={styles.nama_pemateri}>
            {pemateri.nama}
          </CardTitle>
          <CardSubtitle className={styles.p_kelas}>
            {pemateri.kelas}
          </CardSubtitle>
          {/* <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText> */}
        </CardBody>
      </div>
    </Card>
  )
}

export default CardPemateri
