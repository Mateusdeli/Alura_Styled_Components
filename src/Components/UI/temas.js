import { 
    corClara, 
    fundoClaro, 
    textoFundoClaro,
    corEscura,
    fundoEscuro,
    textoFundoEscuro
} from './variaveis'

export const temaClaro = {
    body: fundoClaro,
    inside: corClara,
    text: textoFundoClaro,
    filter: ''
}

export const temaEscuro = {
    body: fundoEscuro,
    inside: corEscura,
    text: textoFundoEscuro,
    filter: "invert(100%)"
}