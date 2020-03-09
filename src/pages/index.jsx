import React from "react"
import Menu from "../components/navbar/navbar"
import Hero from "../components/hero/hero"
import testiBg from "../assets/Group88.png"
import Kelas from "../components/kelas/listKelas"
import Pemateri from "../components/pemateri/pemateri"
import InfoRegis from "../components/info_regis/infoRegis"
import Jadwal from "../components/jadwal/jadwal"
import Kontak from "../components/kontak/kontak"
import Footer from "../components/footer/footer"
import Testimoni from "../components/testimoni/testimoni"
import styles from "../styles/styles.module.css"

const Home = () => {
  return (
    <div className={styles.bgindex}>
      <Menu />
      <Hero />
      <Kelas />
      <Pemateri />
      <InfoRegis />
      <Jadwal />
      <div
        style={{
          backgroundImage: `url(${testiBg})`,
          backgroundSize: "100% 65%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom"
        }}
      >
        <Kontak />
        <Testimoni />
        <Footer />
      </div>
    </div>
  )
}

export default Home
