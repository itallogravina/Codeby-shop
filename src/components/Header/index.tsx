/* eslint-disable @next/next/link-passhref */
import { HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'

const Header = () => (
  <HStack
    bg="#0090FF"
    color="white"
    shadow="base"
    h="4rem"
    w="full"
    flex="1"
    py={4}
    px={10}
    position="fixed"
    zIndex="tooltip"
    justifyContent="space-between"
  >
    <Link href="/">
      <HStack alignItems="flex-end" spacing={1}>
        <Text fontWeight="bold" fontSize={25} color="white">
          Codeby
        </Text>
        <Text>CartStore</Text>
      </HStack>
    </Link>
  </HStack>
)

export default Header
