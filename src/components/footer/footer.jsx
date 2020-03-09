import React from "react"
import { Col, Row } from "reactstrap"
import doscomLogo from "../../assets/doscom.png"
import styles from "../../styles/styles.module.css"
import teleLogo from "../../assets/telegram.png"
import twitLogo from "../../assets/twitter.png"
import igLogo from "../../assets/instagram.png"

const Footer = () => {
  return (
    <div className={`${styles.footerScreen} container-fluid `}>
      <Row className="justify-content-center">
        <Col xs="6" sm="6" md="5">
          <div className="about_doscom">
            <img
              className={`${styles.doscom_logo} d-flex flex-column mb-2`}
              src={doscomLogo}
              alt=""
            />
            <div className={styles.about_doscom}>
              <p className={styles.subheadline} style={{ fontWeight: "bold" }}>
                Tentang DOSCOM
              </p>
              <p className={styles.about}>
                Kami adalah komunitas open source di bidang perangkat lunak yang
                memilik visi untuk Memasyarakatkan Open Source dan Meng Open
                Source-kan Masyrakat melalui berbagai kegitan seperti workshop,
                seminar dan sharing session, Kami juga meracik sebuah sistem
                operasi bernama TeaLinuxOS.
              </p>
            </div>
          </div>
        </Col>
        <Col xs="6" sm="6" md="5">
          <div
            className={
              window.innerWidth <= 700
                ? `${styles.sosmed} text-right mt-4 pt-3`
                : `${styles.sosmed} text-right`
            }
          >
            <p className={styles.subheadline} style={{ fontWeight: "bold" }}>
              Social Media
            </p>
            <span>
              <img
                className={`${styles.sosmed_logo} mx-1`}
                src={teleLogo}
                alt=""
              />
              <img
                className={`${styles.sosmed_logo} mx-1`}
                src={twitLogo}
                alt=""
              />
              <img
                className={`${styles.sosmed_logo} mx-1`}
                src={igLogo}
                alt=""
              />
            </span>
            <div className={`my-3 ${styles.sosmed_text}`}>
              <p>doscomedia@gmail.com</p>
              <p>www.doscom.org</p>
              <p>Copyright doscom 2020</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
