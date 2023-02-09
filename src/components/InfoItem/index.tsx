
import { AiOutlineUser } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import {FiTwitter} from 'react-icons/fi'
import{ SiGmail } from 'react-icons/si'
import {BiLink} from 'react-icons/bi'
import { Flex, Text, Link } from '@chakra-ui/react'

interface InfoItemProps{
  type:string;
  production:string | undefined;
}
export function InfoItem({type,production}:InfoItemProps){
  
  return (
    <Flex alignItems="center" gap={3}>
      
      {  
        type === "user" ?<><AiOutlineUser size={16} color="white"/><Text color="gray.500">{production}</Text> </>
        :type === "location" ? <><CiLocationOn size={16} color="white"/><Text color="gray.500">{production}</Text></>
        :type === "email" ? <><SiGmail size={16} color="white"/><Text color="gray.500">{production}</Text></> 
        :type === "blog"?
          (
            <>
              <BiLink size={16} color="white"/>
              <Link href={production}>
                <Text color="gray.500">{production}</Text>
              </Link>
            </>
          )
        :type === "twitter"?
          (
            <>
              <FiTwitter size={16} color="white"/>
              <Link href={`https://twitter.com/${production}`}>
                <Text color="gray.500">{production}</Text>
              </Link>
            </>
          )

        : <></>
      }
    </Flex>
  )
}