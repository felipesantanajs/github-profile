import { Box, Flex, Image, Link as LinkChakra, Stack, Text } from "@chakra-ui/react";

import { RiStarSLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import {FiTwitter} from 'react-icons/fi'
import{ SiGmail } from 'react-icons/si'

import useGetDatas from "../../hook/useGetDatas"
import { BoxItemCounter } from "../../components/BoxItemCounter";
import { Button } from "../../components/Button";
interface GetReposProps{
  stargazers_count?: number

}
interface ProfileProps{
  getRepos: GetReposProps[];
}

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
  if (Object.keys(getDatas).length > 0) {
    return (
      <Flex p={10} alignItems="center" justifyContent="center">
        <Flex bg="gray.800" p="8" maxW={600} w="100%" borderRadius={8} justifyContent="center" alignItems="center" flexDirection="column">
          <Image src={getDatas.avatar_url} alt='Dan Abramov' w="52" border="4px" borderColor="gray.400" borderRadius="100%" />
          <Stack>
            <Text fontSize={22} mt={6}>{getDatas.name}</Text>
            <Flex alignItems="center" gap={3}>
              <AiOutlineUser size={16} color="white"/><Text color="gray.500">{getDatas.login}</Text>
            </Flex>
            <Flex alignItems="center" gap={3}>
              <CiLocationOn size={16} color="white"/><Text color="gray.500">{getDatas.location}</Text>
            </Flex>

            {getDatas.email !== null 
            ?(
              <Flex alignItems="center" gap={3}>
                <SiGmail size={16} color="white"/><Text color="gray.500">{getDatas.email}</Text>
              </Flex>
            ):(
              <></>
            )}

            {getDatas.twitter_username !== null 
            ?(
              <Flex alignItems="center" gap={3}>
                <FiTwitter size={16} color="white"/><LinkChakra href={`https://twitter.com/${getDatas.twitter_username}`}><Text color="gray.500">{getDatas.twitter_username}</Text></LinkChakra>
              </Flex>
            ):(
              <></>
            )}
          </Stack>

          <Text mt={10}>{getDatas.bio}</Text>
          
          
          <Flex flexDirection="column" w="100%" mt={4}>
            
          </Flex>
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