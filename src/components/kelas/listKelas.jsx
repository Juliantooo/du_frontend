import React from "react"
import { useState } from "react"
import styles from "../../styles/styles.module.css"
import webLogo from "../../assets/web.png"
import androidLogo from "../../assets/Android.png"
import pythonLogo from "../../assets/python.png"
import blenderLogo from "../../assets/blender.png"
import devOpsLogo from "../../assets/Android.png"
import CardKelas from "./cardKelas"

const Kelas = () => {
  const [daftarKelas] = useState([
    {
      kelas: "Web",
      deskripsi:
        "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Maecenas nec dui non massacursus ultricies id sed orci. Vivamus at",
      kuota: "10 / 30",
      logo: `${webLogo}`,
      reverse: false
    },
    {
      kelas: "Android",
      deskripsi:
        "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Maecenas nec dui non massacursus ultricies id sed orci. Vivamus at",
      kuota: "10 / 30",
      logo: `${androidLogo}`,
      reverse: true
    },
    {
      kelas: "Python",
      deskripsi:
        "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Maecenas nec dui non massacursus ultricies id sed orci. Vivamus at",
      kuota: "10 / 30",
      logo: `${pythonLogo}`,
      reverse: false
    },
    {
      kelas: "Blender",
      deskripsi:
        "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Maecenas nec dui non massacursus ultricies id sed orci. Vivamus at",
      kuota: "10 / 30",
      logo: `${blenderLogo}`,
      reverse: true
    },
    {
      kelas: "DevOps",
      deskripsi:
        "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Maecenas nec dui non massacursus ultricies id sed orci. Vivamus at",
      kuota: "10 / 30",
      logo: `${devOpsLogo}`,
      reverse: false
    }
  ])

  return (
    <div className={`${styles.list_kelasScreen} py-5`}>
      <div className="title py-5 ">
        <p className={`${styles.headline} text-center mt-5 `}>Kelas & Materi</p>
      </div>
      {daftarKelas.map((kelas, key) => {
        return (
          <div key={key}>
            <CardKelas {...kelas} />
          </div>
        )
      })}
    </div>
  )
}

export default Kelas
