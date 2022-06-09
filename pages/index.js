import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/Layouts/Layout'
import Contenido from '../components/Layouts/Contenido'

const Heading = styled.h1`
color:red;

`

const Home = () => {
  return (
      <Layout>
        <Contenido>
          <Heading>Bienvenido</Heading>
          <Heading>Inicia sesión</Heading>
        </Contenido>
      </Layout>
  )
}

export default Home
