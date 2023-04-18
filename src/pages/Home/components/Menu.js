import React from 'react';
import styled from "styled-components";
import { Button, Icon } from '../../../components';

const Container = styled.div`
display: grid;
grid-auto-flow: column;
align-items: center;
justify-content: start;
`

export const Menu = () =>{
  return (
    <Container>
      <Button>
        <Icon type ="shield"/>  
      </Button>

      <Button>
        <Icon type ="lamp"/>  
      </Button>
      
      <Button>
        <Icon type ="cap"/>  
      </Button>
      
      <Button>
        <Icon type ="forum" />
      </Button>
      
      <Button>
        <Icon type ="store" />
      </Button>
    </Container>
  )
}; 
