import React, { useState } from "react"
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
    <div className={`${styles.fullscreen} container my-5 py-5`}>
      <div className={`${styles.headline} title justify-content-center `}>
        Biaya, Tempat & Waktu
        <hr className={styles.underline} />
      </div>
      <div
        className=" d-flex flex-row container-fluid my-5 justify-content-center"
        style={{ margin: "0" }}
      >
        {jadwalButton.map((jadwal, key) => {
          return (
            <div className="justify-content-center" key={key}>
              <JadwalMenu>{jadwal.menu}</JadwalMenu>
            </div>
          )
        })}
      </div>
      <div className="warper w-100 ">
        <ul style={{ padding: "0" }}>
          {rundownWeb.map((rundown, key) => {
            return (
              <li
                className={`${styles.style_li} justify-content-center my-4`}
                key={key}
              >
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
