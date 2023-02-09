import { Box, Stack, Text } from "@chakra-ui/react";

interface BoxItemCounterProps{
  title:string;
  value:number;
  color?: string;
}
export function BoxItemCounter({title,value, color}:BoxItemCounterProps){
  return(
    <Box p={2} w={[16,20,28]} h={[16,20,24]} border="1px" borderColor="gray.700"  borderRadius={6}  transition="ease-out 0.25s" _hover={{background:color }}>
      <Stack alignItems="center" spacing={1}>
        <Text fontSize={[10,12,16]}>{title}</Text>
        <Text fontSize={[22,26,30]}>{value}</Text>
      </Stack>
    </Box>
  )
}