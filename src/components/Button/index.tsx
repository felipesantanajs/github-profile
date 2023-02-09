import { Button as ButtonChackra } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

interface ButtonProps{
  value: string;
  handleGetDatas?: () => void
  type?:string;
  linkTo?: string | undefined;
}

export function Button({value,handleGetDatas, type, link}:ButtonProps){
  if(type === "link") return (<ButtonChackra as={Link} variant='outline' to={linkTo} maxW="320" w="100%" >{value}</ButtonChackra>)
  
  return <ButtonChackra  colorScheme='pink' size="md" onClick={handleGetDatas}>{value}</ButtonChackra>
}