import React from 'react'
import { IconeTheme } from '../Components/UI'
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'

export default (type) => {
  const Images = {
    Restaurante: <IconeTheme src={alimentacao} alt="restaurante" />,
    Utilidades: <IconeTheme src={utilidades} alt="utilidades" />,
    Saude: <IconeTheme src={saude} alt="saude" />,
    Transporte: <IconeTheme src={transporte} alt="transporte" />,
    default: <IconeTheme src={outros} alt="outros" />,
  };

  return Images[type] || Images.default;
}