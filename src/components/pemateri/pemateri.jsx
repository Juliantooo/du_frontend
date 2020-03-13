import React, { useState } from "react"
// import { Row, Col } from "reactstrap"
import styles from "../../styles/styles.module.css"
import CardPemateri from "../pemateri/cardPemateri"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

//slider setting

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        autoplay: true,
        slidesToShow: 1,
        className: "center",
        centerMode: true,
        centerPadding: "0",
        infinite: true
      }
    }
  ],
  centerPadding: "20",
  slidesToShow: 3,
  speed: 500,
  autoplay: true,
  useCSS: true
}

const Pemateri = () => {
  const [allPemateri] = useState([
    {
      nama: "WAHYU DWI RAMADHAN",
      kelas: "Kelas Web"
    },
    {
      nama: "NOVAN ADHAGARA KERISTIANTO",
      kelas: "Kelas Andorid"
    },
    {
      nama: "ARAVIKA PRAKUSIYA",
      kelas: "Kelas Blender"
    },
    {
      nama: "HUSIN SUFI",
      kelas: "Kelas Python"
    },
    {
      nama: "ILHAM ADI SETIAWAN",
      kelas: "Kelas DevOps"
    }
  ])

  return (
    <div
      className={`${styles.pemateriScreen} ${styles.bgPemateri} container-fluid`}
    >
      <div
        className="warper h-25 align-items-baseline d-flex justify-content-center"
        style={{ paddingTop: "50px" }}
      >
        <div className="title my-5 justify-content-center">
          <p className={`${styles.headline} mb-3`}>Pemateri</p>
        </div>
      </div>
      <div className="container-fluid my-4">
        <Slider {...settings}>
          {allPemateri.map((pemateri, key) => {
            return (
              <div key={key}>
                <CardPemateri {...pemateri} />
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Pemateri
