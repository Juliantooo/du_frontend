import React, { useState } from "react"
import { Row, Col } from "reactstrap"
import styles from "../../styles/styles.module.css"
import { JadwalMenu } from "../button"
import CardJadwal from "./cardJadwal"

const Jadwal = () => {
  const [jadwalButton] = useState([
    {
      menu: "Web"
    },
    {
      menu: "Android"
    },
    {
      menu: "Blender"
    },
    {
      menu: "Python"
    },
    {
      menu: "DevOps"
    }
  ])
  const [rundownWeb] = useState([
    {
      todo: "Materi",
      pertemuan: "Pertemuan 1",
      materi: "HTML & CSS",
      tanggal: "xx-month-2020",
      tempat: "Kampus Udinus semarang",
      jam: "xx:xx-xx:xx"
    },
    {
      todo: "Materi",
      pertemuan: "Pertemuan 1",
      materi: "HTML & CSS",
      tanggal: "xx-month-2020",
      tempat: "Kampus Udinus semarang",
      jam: "xx:xx-xx:xx"
    },
    {
      todo: "Materi",
      pertemuan: "Pertemuan 1",
      materi: "HTML & CSS",
      tanggal: "xx-month-2020",
      tempat: "Kampus Udinus semarang",
      jam: "xx:xx-xx:xx"
    },
    {
      todo: "Materi",
      pertemuan: "Pertemuan 1",
      materi: "HTML & CSS",
      tanggal: "xx-month-2020",
      tempat: "Kampus Udinus semarang",
      jam: "xx:xx-xx:xx"
    }
  ])
  return (
    <div className={`${styles.fullscreen} container`}>
      <div
        className={`${styles.headline} title justify-content-center pt-5 mb-5`}
      >
        Biaya, Tempat & Waktu
        <hr className={styles.underline} />
      </div>
      <Row className="my-5 justify-content-center">
        {jadwalButton.map((jadwal, key) => {
          return (
            <Col xs="2" sm="2" md="2" key={key}>
              <JadwalMenu>{jadwal.menu}</JadwalMenu>
            </Col>
          )
        })}
      </Row>
      <div className="warper w-100 ">
        <ul style={{ padding: "0" }}>
          {rundownWeb.map((rundown, key) => {
            return (
              <li className={`${styles.style_li} `} key={key}>
                <CardJadwal {...rundown} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Jadwal
