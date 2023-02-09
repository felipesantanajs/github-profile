import { Button as ButtonChackra } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

interface ButtonProps{
  value: string;
  handleGetDatas: () => void
  type?:string;
}

export function Button({value,handleGetDatas, type}:ButtonProps){
  if(type === "link") return <ButtonChackra as={Link} to="/profile" maxW="320" w="100%" bg="gray.400">{value}</ButtonChackra>
  
  return <ButtonChackra  colorScheme='pink' size='md' onClick={handleGetDatas}>{value}</ButtonChackra>
}