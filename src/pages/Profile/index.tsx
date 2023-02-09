import { Box, Flex, Image, Link as LinkChakra, Stack, Text } from "@chakra-ui/react";
import { RiStarSLine } from 'react-icons/ri'

import useGetDatas from "../../hook/useGetDatas"
import { BoxItemCounter } from "../../components/BoxItemCounter";
import { Button } from "../../components/Button";
import { InfoItem } from "../../components/InfoItem";

export function Profile() {
  const getDatas = useGetDatas((state) => state.getDatasApi)
  const getRepos = useGetDatas((state) => state.getDatasReposApi)

  // Sort Repos
   getRepos.sort((a, b) => {
    return b.stargazers_count- a.stargazers_count
  })

  console.log('datas->', getDatas);

  console.log('repos->', getRepos);
  // console.log(reposSorted)
  if (getDatas.login !== "") {
    return (
      <Flex p={10} alignItems="center" justifyContent="center" flexDirection="column">

        <Button to="/" type="link" value="Voltar" />
        
        <Flex bg="gray.800" mt={4} p="8" maxW={600} w="100%" borderRadius={8} justifyContent="center" alignItems="center" flexDirection="column">
          <Image src={getDatas.avatar_url} alt='Dan Abramov' w="52" border="4px" borderColor="gray.400" borderRadius="100%" />
          <Stack>
            <Text fontSize={22} mt={6}>{getDatas.name}</Text>
            
            <InfoItem type="user" production={getDatas.login}/>
            <InfoItem type="location" production={getDatas.location}/>
            {getDatas.email !== null ? <InfoItem type="email" production={getDatas.email} /> : <></>}
            {getDatas.blog !== null ?<InfoItem type="blog" production={getDatas.blog}/> :<></>}
            {getDatas.twitter_username !== null ?<InfoItem type="twitter" production={getDatas.twitter_username}/> :<></>}
          </Stack>

          <Text mt={10}>{getDatas.bio}</Text>

          <Flex mt={10} w="100%" justifyContent="space-between">
            <BoxItemCounter title="Seguindo" value={getDatas.following} color="pink.500" />
            <BoxItemCounter title="Seguidores" value={getDatas.followers} color="blue.700" />
            <BoxItemCounter title="Repositórios" value={getDatas.public_repos} color="green.700" />
          </Flex>

          <Flex mt={10} w="100%" justifyContent="space-between" flexDirection="column">
            <Text fontSize={22}>Repositórios</Text>
            <Box mt={4}>
              {getRepos.map(res => {
                return (
                  <Flex gap={5} alignItems="center" justifyContent="space-between" key={res.id}>
                    <LinkChakra href={res.html_url} isExternal >{res.name}</LinkChakra>
                    <Flex justifyContent="center" alignItems="center" gap={2}>
                      <Text>{res.stargazers_count}</Text>
                      <RiStarSLine size="24" style={{ color: "orange" }} />
                    </Flex>
                  </Flex>
                )
              })}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    )
  } else {
    return (
      <Flex justifyContent="center" alignItems="center" h="100vh" flexDirection="column" gap={6}>
        <Text>Selecione um perfil do GitHub</Text>
        <Button to="/" type="link" value="Voltar" />
      </Flex>
    )
  }

}