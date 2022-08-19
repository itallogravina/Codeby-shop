/* eslint-disable @typescript-eslint/no-explicit-any */

import { Flex, Text, Button, Grid } from '@chakra-ui/react'

export default function SideBar({ SidebarButton }: any) {
  function ClickButton(params: number) {
    SidebarButton(params)
  }
  return (
    <Flex
      bg="white"
      p={6}
      m={3}
      w="20rem"
      h="full"
      top={20}
      position="sticky"
      shadow="base"
      direction="column"
    >
      <Text fontWeight="bold" fontSize="30" mb={5}>
        Carrinhos
      </Text>
      <Grid templateRows="repeat(2, 1fr)" gap={6}>
        <Button onClick={() => ClickButton(1)}>Abaixo de R$10 </Button>
        <Button onClick={() => ClickButton(2)}>Acima de R$10 </Button>
      </Grid>
    </Flex>
  )
}
