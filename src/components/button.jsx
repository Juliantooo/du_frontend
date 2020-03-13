import styled from "styled-components"

export const MenuBtn = styled.button`
  width: 120px;
  height: 35px;
  font-size: 17px;
  color: white;
  box-sizing: border-box;
  border-radius: 35px;
  margin: 0 15px;
  border: none;
  background: inherit;
  &:hover {
    border: 4px solid #fff;
  }
`

export const DaftarBtn = styled.button`
  width: 250px;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  background: inherit;
  border-radius: 10px;
  color: #fff;
  border: none;
  border: 4px solid #fff;
  @media (max-width: 700px) {
    width: 150px;
    height: 40px;
    font-size: 14px;
  }
`
export const JadwalMenu = styled.button`
  width: 110px;
  height: 30px;
  font-size: 20px;
  color: #2676c3;
  background: inherit;
  border-radius: 10px;
  border: none;
  &:hover {
    background: #e1e5ff;
  }
  @media (max-width: 700px) {
    width: 80px;
    height: 25px;
    font-size: 12px;
  }
`
