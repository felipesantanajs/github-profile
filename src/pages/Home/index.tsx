import { Flex, Input, Stack, Text, Spinner } from "@chakra-ui/react";
import React,{ useState } from "react";
import { AiFillGithub } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

import { Button } from '../../components/Button'
import { gitHubApi } from "../../services/api";
import useGetDatas from "../../hook/useGetDatas";


export function Home() {
  const [getValues, setGetValues] = useState('')
  const [isLoding, setIsLoding] = useState(false)
  const setDatas = useGetDatas((state) => state.setGetDatasApi)
  const setRepos = useGetDatas((state) => state.setGetDatasReposApi)
  const navigate = useNavigate();

  async function handleGetDatas() {

    if (getValues !== '') {
      setIsLoding(!isLoding);
      try {
        const datas = await gitHubApi.get(`/${getValues}`)
        const repos = await gitHubApi.get(`/${getValues}/repos`)
        setDatas(datas.data);
        setRepos(repos.data);

        navigate("/profile")

      } catch (err) {
        console.log(err)
        alert("Erro na busca tente novamente");
      } finally {
        setIsLoding(!isLoding);
      }
    }
    else {
      alert("Campo vazio, por favor digite um perfil !")
    }

  }
  return (
    <Flex flexDirection="column" gap="10" w="100vw" h="100vh" align="center" justify="center">
      <Flex w="100%" maxWidth={390} bg="gray.800" p="8" flexDirection="column" borderRadius={8} >
        <Stack spacing={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <AiFillGithub size={30} />
            <Text>Buscar Perfil Github</Text>
            {isLoding ? <Spinner color='red.500' /> : <></>}
          </Flex>
          <Flex gap="2">
            <Input type="text" placeholder='Buscar' size='md' backgroundColor='gray.200' color="gray.800" onChange={e => setGetValues(e.target.value)} />
            <Button type="ts" value="Buscar" handleGetDatas={handleGetDatas} />
          </Flex>
        </Stack>
      </Flex>
      <Button type="link" value="Perfil" linkTo="/profile" handleGetDatas={handleGetDatas} />
    </Flex>
  )
}