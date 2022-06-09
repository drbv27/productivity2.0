import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'

const IconLink = styled.div`
 display:flex;
`

const NavLink = ({href,icon,texto}) => {
  return (
    <li>
    <Link href={href}>
        <IconLink>
        <FontAwesomeIcon
            icon={icon}
            style={{width:"18px",cursor:"pointer"}}
        />
        <p style={{cursor:"pointer"}}>{texto}</p>
        </IconLink>
    </Link>
    </li>
  )
}

export default NavLink