import React from 'react'
import {HeaderMain, ContainerOne, ContainerTwo} from './styled'


const Header = () =>{


    return(
        <>
            <HeaderMain className="HeaderMain">
                <ContainerOne className="containOne">LOGO</ContainerOne>
                < ContainerTwo className="containTwo">
                    <nav className="navList">
                        <ul className="ul-Header">
                            <a href="/https://www.youtube.com/watch?v=f-E1zyTfA3Q">

                                <li className="item">HOME</li>
                                <li className="item">NOSOTROS</li>
                                <li className="item">SERVICIOS</li>
                                <li className="item">GALERIA</li>
                                <li className="item">COTACTOS</li>
                                <li className="item">ICONS</li>
                                <li className="item">ENZO</li>
                            </a>
                        </ul>
                    </nav>
                </ContainerTwo>
            </HeaderMain>
        </>
    )
}

export default Header