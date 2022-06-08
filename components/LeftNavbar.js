import React from 'react'
import styled from "@emotion/styled/";
import Link from 'next/link';

const NavContainer = styled.div`
  position: fixed;
  width: 150px;
  height: 100%;
  background-color: #fff;
  background-color: red;
  box-shadow: 3px 0px 6px 0px rgba(246, 246, 246, 0.75);
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */

    width: 70px;
  }
`

const LeftNavbar = () => {
  return (
    <NavContainer>
        <ul>
            <li>
            <Link href="/">
                Home
            </Link>
            </li>
            <li>
            <Link href="nosotros">
                nosotros
            </Link>
            </li>
        </ul>
    </NavContainer>
  )
}

export default LeftNavbar
