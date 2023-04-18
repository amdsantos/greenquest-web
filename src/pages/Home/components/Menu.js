import React from 'react';
import styled from "styled-components";
import { Button, Icon } from '../../../shared/';

const Container = styled.div`
display: grid;
grid-auto-flow: column;
align-items: center;
justify-content: start;
`

export const Menu = () =>{
  return (
    <Container>
      <Button color={"true"}>
        <Icon type ="shield"/>  
      </Button>

      <Button color={"true"}>
        <Icon type ="lamp"/>  
      </Button>
      
      <Button color={"true"}>
        <Icon type ="cap"/>  
      </Button>
      
      <Button color={"true"}>
        <Icon type ="forum" />
      </Button>
      
      <Button color={"true"}>
        <Icon type ="store" />
      </Button>
    </Container>
  )
}; 
