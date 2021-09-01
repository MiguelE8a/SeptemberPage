import React from 'react'
import {ContainerItem, ImageItem, TitleItem, ContainerDescription, Description} from './style'

const ServicioItem = () => (
  <>
    <ContainerItem>
      <ImageItem src="https://alacprint.pe/images/services/IMPRESIONES.jpg" />
      <TitleItem> Title Item</TitleItem>
      <ContainerDescription>
        <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
        </Description>
      </ContainerDescription>
    </ContainerItem>
  </>


)

export default ServicioItem