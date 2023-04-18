import React from 'react';
import { Button } from './Button/Button';
import { Icon } from './Icon/Icon';

export function Home () {
  return (
    <>
      <Button>
        <Icon type ="shield"/>  
      </Button>

      <Button>
        <Icon type ="lamp"/>  
      </Button>
    </>
  )
}; 
