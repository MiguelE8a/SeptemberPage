import React from 'react'
import {ContainerItem, ImageItem, TitleItem, ContainerDescription, Description, ContaienrDescriptionList, DescriptionList, ContainerButton, ButtonMeInteresa} from './style'

const ServicioItem = () => (
  <>
    <ContainerItem>
      <ImageItem src="https://alacprint.pe/images/services/IMPRESIONES.jpg" />
      <TitleItem> Title Item</TitleItem>
      <ContainerDescription>
        <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
        </Description>
      <ContaienrDescriptionList>
        <DescriptionList>
          Fabricación con materiales como acrílico, aluminio y mdf
        </DescriptionList>
        <DescriptionList>
        Iluminación por sistema LED
        </DescriptionList>
      </ContaienrDescriptionList>
      </ContainerDescription>

      <ContainerButton>
        <ButtonMeInteresa>
          Me interesa este formato
        </ButtonMeInteresa>
      </ContainerButton>
    </ContainerItem>
  </>


)

export default ServicioItem