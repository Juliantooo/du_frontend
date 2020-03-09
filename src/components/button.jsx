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
  width: 155px;
  height: 45px;
  font-size: 25px;
  font-weight: bold;
  border-radius: 65px;
  background: #fff;
  color: #2776c3;
  border: none;
  &:hover {
    border: 4px solid #2776c3;
  }
  @media (max-width: 700px) {
    width: 120px;
    height: 35px;
    font-size: 15px;
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
