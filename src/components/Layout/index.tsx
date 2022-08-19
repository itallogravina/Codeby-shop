import { HStack } from '@chakra-ui/react'
import React from 'react'
import Header from 'components/Header'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <HStack pt="4rem" direction="column" alignItems="flex-start">
        {children}
      </HStack>
    </>
  )
}
