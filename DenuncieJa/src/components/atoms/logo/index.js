import react from "react";
import {LogoImageStyle} from './styles'
import logoImage from '../../../../assets/AppLogoBranco-SEMFUNDO.png'

export const Logo = () =>{
    return (
        <LogoImageStyle source={logoImage} />
    )
}