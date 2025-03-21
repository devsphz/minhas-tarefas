import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  text-decoration: none;
  background-color: #44db32;
  color: #fff;
  font-size: 40px;
  position: fixed;
  bottom: 40px;
  right: 40px;
`
