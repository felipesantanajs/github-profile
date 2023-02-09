import { Box, Divider, Flex, Image, Stack, Stat, StatGroup, StatLabel, StatNumber, Text } from "@chakra-ui/react";


import useGetDatas from "../../hook/useGetDatas"
import { BoxItemCounter } from "../../components/BoxItemCounter";

export function Profile(){
  const getDatas = useGetDatas((state) => state.getDatasApi)
  
  console.log();
  return(
    <Flex h="100vh" w="100vw" alignItems="center" justifyContent="center">
      <Flex bg="gray.800" p="8" maxW={600} w="100%" borderRadius={8} justifyContent="center" alignItems="center" flexDirection="column">
        <Image src={getDatas.avatar_url} alt='Dan Abramov' w="52" border="4px" borderColor="gray.400"  borderRadius="100%"/>
        <Text fontSize={22} mt={6}>{getDatas.name}</Text>
        <Text color="gray.500">{getDatas.login}</Text>

        <Flex mt={10} w="100%" justifyContent="space-between">  
          <BoxItemCounter title="Seguindo" value={getDatas.following} color="pink.500"/>
          <BoxItemCounter title="Seguidores" value={getDatas.followers} color="blue.700"/>
          <BoxItemCounter title="Repositórios" value={getDatas.public_repos} color="green.700"/>
        </Flex>

      </Flex>
    </Flex>
  )
}