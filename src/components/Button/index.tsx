import { Button as ButtonChackra } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

interface ButtonProps{
  value: string;
  handleGetDatas?: () => void
  type?:string;
  
}

export function Button({value,handleGetDatas}:ButtonProps){
  
  return <ButtonChackra  colorScheme='pink' size="md" onClick={handleGetDatas}>{value}</ButtonChackra>
}