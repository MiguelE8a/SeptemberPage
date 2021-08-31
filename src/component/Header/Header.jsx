import React from 'react'
import {HeaderMain, ContainerOne, ContainerTwo, UlHeader,LiHeader} from './styled'


const Header = () =>{


    return(
        <>
            <HeaderMain className="HeaderMain">
                <ContainerOne className="containOne">LOGO</ContainerOne>
                < ContainerTwo className="containTwo">
                    <nav className="navList">
                        <UlHeader className="ul-Header">

                                <LiHeader className="item">HOME</LiHeader>
                                <LiHeader className="item">NOSOTROS</LiHeader>
                                <LiHeader className="item">SERVICIOS</LiHeader>
                                <LiHeader className="item">GALERIA</LiHeader>
                                <LiHeader className="item">COTACTOS</LiHeader>
                                <LiHeader className="item">ICONS</LiHeader>
                        </UlHeader>
                    </nav>
                </ContainerTwo>
            </HeaderMain>
        </>
    )
}

export default Header