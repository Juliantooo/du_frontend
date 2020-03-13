import React, { useState } from "react"
import styles from "../../styles/styles.module.css"
import Slider from "react-slick"
import CardTesti from "./cardTestimoni"

//Slider Setting
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Testimoni = () => {
  const [testimoni] = useState([
    {
      nama: "~ Safira, Peserta kelas Web DU 2018",
      testi:
        "“ Acaranya menyenangkan, pengajarnya asik- asik pelajaranya sangatmenarik. “"
    },
    {
      nama: "~ Danang, Peserta kelas Android DU 2018",
      testi:
        "“ Acaranya menyenangkan, pengajarnya asik- asik pelajaranya sangatmenarik. “"
    },
    {
      nama: "~ Dudung, Peserta kelas Python DU 2018",
      testi:
        "“ Acaranya menyenangkan, pengajarnya asik- asik pelajaranya sangatmenarik. “"
    },
    {
      nama: "~ Ricardo, Peserta kelas Blender DU 2018",
      testi:
        "“ Acaranya menyenangkan, pengajarnya asik- asik pelajaranya sangatmenarik. “"
    },
    {
      nama: "~ Jotaro, Peserta kelas DevOps DU 2018",
      testi:
        "“ Acaranya menyenangkan, pengajarnya asik- asik pelajaranya sangatmenarik. “"
    }
  ])
  return (
    <div className={`${styles.testiScreen} container`}>
      <div className="warper h-50 align-items-end d-flex justify-content-center">
        <div className="title justify-content-center">
          <p className={`${styles.headline} `}>Testimoni</p>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <Slider {...settings}>
          {testimoni.map((testi, key) => {
            return (
              <div key={key}>
                <CardTesti {...testi} />
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Testimoni
