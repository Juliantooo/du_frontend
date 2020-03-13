import React, { useState } from "react"
import styles from "../../styles/styles.module.css"
import { Card } from "reactstrap"

const CardTesti = props => {
  const [testimoni] = useState(props)
  const testing =
    window.innerWidth >= 700
      ? `h-100 w-100 mx-auto d-flex flex-column`
      : `h-100 w-75 mx-auto d-flex flex-column`
  return (
    <Card className="mx-auto " id={`${styles.cardTesti}`}>
      <div className={testing}>
        <p
          className={`${styles.kata_testi} align-items-center h-75 w-100 d-flex`}
        >
          {testimoni.testi}
        </p>
        <p
          className={`${styles.tester} align-items-start h-25 justify-content-center d-flex`}
        >
          {testimoni.nama}
        </p>
      </div>
    </Card>
  )
}

export default CardTesti
