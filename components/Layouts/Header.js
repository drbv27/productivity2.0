import React from 'react'
import Image from 'next/image'
import styled from "@emotion/styled"

const HeadContainer = styled.header`
  height: 80px;
  background-color: rgb(255, 255, 255);
  background-color:green;
  margin-left: 150px;
`


const Header = ({usuario}) => {
  return (
    <HeadContainer>
        {usuario ? (
            <h2>Bienvenido: Diego</h2>
            ):(
            <h2>Por Favor Logueate</h2>
        )}
    </HeadContainer>
  )
}

export default Header