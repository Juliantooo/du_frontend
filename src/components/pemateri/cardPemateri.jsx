import React from "react"
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import dumyfoto from "../../assets/Android.png"
import styles from "../../styles/styles.module.css"

const CardPemateri = () => {
  return (
    <Card id={styles.cardPemateri}>
      <div className="my-auto">
        <img
          src={`${dumyfoto}`}
          alt="img"
          className="mx-auto d-flex "
          id={styles.imgPemateri}
        />
        <CardBody>
          <CardTitle className={styles.subheadline}>
            Pemateri Kelas Android
          </CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </div>
    </Card>
  )
}

export default CardPemateri
