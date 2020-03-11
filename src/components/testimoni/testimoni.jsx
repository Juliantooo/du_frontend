import React from "react"
import styles from "../../styles/styles.module.css"
import Slider from "react-slick"

//Slider Setting
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Testimoni = () => {
  return (
    <div className={`${styles.testiScreen} container`}>
      <div
        className="warper h-50 align-items-center my-5 d-flex justify-content-center"
        style={{ paddingTop: "25px" }}
      >
        <div className="title justify-content-center">
          <p className={`${styles.headline} `}>Testimoni</p>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Testimoni
