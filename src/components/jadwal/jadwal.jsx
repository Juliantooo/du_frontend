import React, { useState, useEffect } from "react"
import styles from "../../styles/styles.module.css"
import { JadwalMenu } from "../button"
import CardJadwal from "./cardJadwal"
import { ShowEachElementJadwal } from "../../scriptJs/script"

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
  useEffect(() => {
    window.addEventListener("scroll", () => ShowEachElementJadwal())
  })
  return (
    <div className={`${styles.jadwalScreen} container`} id={4}>
      <div className={`${styles.headline} title justify-content-center `}>
        Jadwal
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
                className={`${styles.style_li} ${styles.hiddenJadwal} justify-content-center my-4`}
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
