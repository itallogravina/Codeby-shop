/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Text,
  Button,
  Divider,
  SimpleGrid,
  Grid,
  Spacer,
  Center
} from '@chakra-ui/react'
import CardCart from 'components/CardCart'
import { Key, useEffect, useState } from 'react'

const LayoutCart = ({ data }: any) => {
  const [toValue, setToValue] = useState(false)
  const totalvalue = data.totalizers[0].value
  useEffect(() => {
    totalvalue >= 1000 ? setToValue(true) : setToValue(false)
  }, [totalvalue])

  return (
    <Box
      paddingTop={10}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="base"
    >
      <Box paddingLeft={10} paddingRight={10}>
        <SimpleGrid columns={1} spacing={1}>
          {data
            ? data.items.map(
                (
                  item: {
                    name: string | undefined
                    price: number | undefined
                    imageUrl: string | undefined
                    sellingPrice: number | undefined
                  },
                  index: Key | null | undefined
                ) => (
                  <CardCart
                    key={index}
                    title={item.name}
                    price={item.price}
                    image={item.imageUrl}
                    pricelistPrice={item.sellingPrice}
                    disabledprice={toValue}
                  />
                )
              )
            : []}
        </SimpleGrid>
      </Box>
      <Divider marginTop={2} bg="black" orientation="horizontal" />
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        paddingTop={5}
        paddingRight={2}
        paddingLeft={2}
        paddingBottom={5}
        fontWeight={800}
        fontSize="2rem"
      >
        Total
        <Spacer />
        <Text>{data.totalizers[0].value / 100}</Text>
      </Grid>
      {toValue ? (
        <Center>
          <Box
            w={300}
            bg="#9EFFA1"
            color="#29802C"
            fontWeight={500}
            fontSize="sm"
            borderWidth="1px"
            borderRadius="lg"
            shadow="base"
          >
            <Center>Parab??ns, sua compra tem frete gr??tis !</Center>
          </Box>
        </Center>
      ) : (
        []
      )}

      <Divider marginTop={2} bg="black" orientation="horizontal" />
      <Box p={3}>
        <Button
          w="100%"
          h="60px"
          bg="#0090FF"
          color="#fFF"
          fontSize="lg"
          fontWeight={700}
          _hover={{
            bg: '#0099ff'
          }}
        >
          Finalizar compra  
        </Button>
      </Box>
    </Box>
  )
}

export default LayoutCart
