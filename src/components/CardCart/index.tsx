import { Flex, Text, Image, HStack, VStack } from '@chakra-ui/react'
type Products = {
  id?: number
  title?: string
  price?: number
  description?: string
  category?: string
  image?: string
  quantity?: number
  pricelistPrice?: number
  disabledprice?: boolean
}
const CardCart = ({
  image,
  title,
  price,
  category,
  pricelistPrice,
  disabledprice
}: Products) => {
  return (
    <Flex
      rounded="md"
      bg="white"
      alignItems="center"
      w={['26rem', '27rem']}
      h="8rem"
      direction="row"
      shadow="base"
      p={2}
    >
      <Image objectFit="contain" src={image} w={['5rem', '8rem']} h="8rem" />

      <HStack w="full" p={8} ml={2}>
        <VStack alignItems="flex-start">
          <Text w="full" noOfLines={2} whiteSpace="break-spaces">
            {title}
          </Text>
          <HStack spacing={4}>
            <VStack alignItems="flex-start" spacing={-2}>
              {disabledprice ? (
                <Text fontSize="sm" color="gray.500">
                  R${price / 100}
                </Text>
              ) : (
                []
              )}

              <Text>R${pricelistPrice / 100}</Text>
            </VStack>
          </HStack>
          <Text opacity={0.5}>{category}</Text>
        </VStack>
      </HStack>
    </Flex>
  )
}

export default CardCart
