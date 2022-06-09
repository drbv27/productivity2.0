import React,{useState} from 'react'
import Contenido from '../components/Layouts/Contenido'
import Layout from '../components/Layouts/Layout'
import Link from "next/link"

const LoginRegister = () => {

    const [estaRegistrandose,setEstaRegistrandose] = useState(false)
    
    return (
    <Layout>
        <Contenido>
            <h1>aqui va el formulario</h1>
            <form>
                <label htmlFor='usuario'>Usuario</label>
                <input type="text" placeholder="ingrese usuario" id="userName"/>
                <label htmlFor='usuario'>Contraseña</label>
                <input type="password" placeholder="ingrese contraseña" id="password"/>
                <button type="submit">
                    {estaRegistrandose ? "Registrate" : "Ingresa"}
                </button>
                <Link href="#">
                    Olvido su contraseña?
                </Link>
            </form>
            <button onClick={()=>setEstaRegistrandose(!estaRegistrandose)}>
                {estaRegistrandose ? "Ya tienes cuenta? Inicia sesión" : "No tienes cuenta? Registrate"}
            </button>
        </Contenido>
    </Layout>
  )
}

export default LoginRegister