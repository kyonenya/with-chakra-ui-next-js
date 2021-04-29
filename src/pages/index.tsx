import Head from 'next/head'
import { Text, Heading, Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import DarkModeSwitch from '../components/DarkModeSwitch2'
import theme from '../theme'

export default function Home() {
  const textColor = useColorModeValue('green.500', 'red.500')
  return (
    <Stack
      as="main"
      align="center"
    >
      <Flex
        flexDirection="column"
        maxWidth="700px"
      >
        <Flex
          flexDirection="row"
        width="70vw"
          pt={4}
          justify="space-between"
        >
          <Text color={textColor} mt={2}>Home</Text>
          <DarkModeSwitch />
        </Flex>
        <Heading
          as="h1"
          size="2xl"
          fontWeight="bold"
        >
          Hello world!
        </Heading>
        <Text mt={4} fontWeight="medium">Hello again.</Text>
      </Flex>
    </Stack>
  )
}
