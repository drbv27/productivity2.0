import React from 'react'
import Image from 'next/image'
import styled from "@emotion/styled"

const HeadContainer = styled.div`
  height: 80px;
  background-color: rgb(255, 255, 255);
  background-color:red;
  margin-left: 150px;
`


const Header = () => {
  return (
    <HeadContainer>
        <h2>Cabecera</h2>
    </HeadContainer>
  )
}

export default Header