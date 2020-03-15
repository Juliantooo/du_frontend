//Kelas component
import styles from '../styles/styles.module.css'


export const ShowEachElementKelas = () => {
    const wScroll = document.documentElement.scrollTop
    const kelas = document.getElementById(1)
    const flag = document.querySelectorAll(".flag")
    if (wScroll > kelas.offsetTop - 100) {
        flag.forEach((i, key) => {
            setInterval(() => {
                flag[key].classList.replace(
                    `${styles.hiddenCardKelas}`,
                    `${styles.showUp}`
                )
            }, 500 * (key + 1))
        })
    }
}

//InfoRegis Component

export const ShowEachElementInfoRegis = () => {
    const wScroll = document.documentElement.scrollTop
    const infoRegis = document.getElementById(3)
    const ilustasi = document.getElementsByClassName("ilu_info")[0]
    const cardInfo = document.querySelectorAll(".flagRegis")
    if (wScroll > infoRegis.offsetTop - 200) {
        setTimeout(() => {
            ilustasi.classList.replace(`${styles.hiddenIllu}`, `${styles.showUp}`)
        }, 700)
        setTimeout(() => {
            cardInfo.forEach((i, key) => {
                setInterval(() => {
                    cardInfo[key].classList.replace(
                        `${styles.hiddenIllu}`,
                        `${styles.showUp}`
                    )
                }, 450 * (key + 1))
            })
        }, 1100)
    }
}

//Jadwal Component
export const ShowEachElementJadwal = () => {
    const wScroll = document.documentElement.scrollTop
    const jadwal = document.getElementById(4)
    const cardJadwal = document.querySelectorAll(`.${styles.style_li}`)
    if (wScroll > jadwal.offsetTop - 150) {
        cardJadwal.forEach((i, key) => {
            setInterval(() => {
                cardJadwal[key].classList.replace(`${styles.hiddenJadwal}`, `${styles.showUpJadwal}`)
            }, 400 * (key + 1));
        })
    }
}

//Kontak component

export const ShowEachElementKontak = () => {
    const wScroll = document.documentElement.scrollTop
    const kontak = document.getElementById(5)
    const cardKontak = document.querySelectorAll('.flagKontak')
    if (wScroll > kontak.offsetTop - 200) {
        cardKontak.forEach((i, key) => {
            setInterval(() => {
                (cardKontak[key].classList.contains(`${styles.hiddenKontak}`)) ? cardKontak[key].classList.replace(`${styles.hiddenKontak}`, `${styles.showUp}`): cardKontak[key].classList.replace(`${styles.hiddenKontak1}`, `${styles.showUp}`)
            }, 500 * (key + 1));
        })
    }
}