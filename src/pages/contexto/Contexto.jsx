import React, {useContext} from 'react'
import { Ctx } from '../../context/Context'

const Contexto = () => {
  const {color, texto} = useContext(Ctx)
  return (
    <h2 style={{color}}>{texto}</h2>
  )
}

export default Contexto