import React from 'react'
import styled from '@emotion/styled'

const ContenedorContenido = styled.div`
margin-left:150px;
`

const Contenido = (props) => {
  return (
    <ContenedorContenido>
        {props.children}
    </ContenedorContenido>
  )
}

export default Contenido