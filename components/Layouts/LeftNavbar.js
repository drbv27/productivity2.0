import React from 'react'
import styled from "@emotion/styled/";
import Link from 'next/link';
import NavLink from '../UI/NavLink';

import { faCog,faPenToSquare,faChartLine,faSignOutAlt,faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const NavContainer = styled.nav`
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

const LeftNavbar = ({usuario}) => {
  return (
    <NavContainer>
      {usuario ? (
        <ul>
            <NavLink href={"/"} icon={faPenToSquare} texto={"registrar"}/>
            <NavLink href={"/"} icon={faChartLine} texto={"dashboard"}/>
            <NavLink href={"/nosotros"} icon={faCog} texto={"nosotros"}/>
            <NavLink href={"/"} icon={faSignOutAlt} texto={"salir"}/>
        </ul>
      ):(
        <ul>
          <NavLink href={"/"} icon={faSignInAlt} texto={"Ingresar"}/>
        </ul>
      )}

    </NavContainer>
  )
}

export default LeftNavbar
