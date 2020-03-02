import React from "react"
import Menu from "../components/navbar"
import Hero from "../components/hero"
import heroBg from "../assets/Group90.png"
import Kelas from "../components/listKelas"
import Pemateri from "../components/pemateri/pemateri"
import InfoRegis from "../components/info_regis/infoRegis"
import Jadwal from "../components/jadwal/jadwal"
import Kontak from "../components/kontak/kontak"

const Home = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "100% 1000px",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Menu />
      <Hero />
      <Kelas />
      <Pemateri />
      <InfoRegis />
      <Jadwal />
      <Kontak />
    </div>
  )
}

export default Home
