import { Box, useColorMode } from '@chakra-ui/react'

const GrayBox = () => {
  const { colorMode } = useColorMode()
  return (
    <Box
      w="200px"
      h="15vh"
      bg={colorMode === 'light' ? 'gray.300' : 'gray.500'}
      boxShadow="lg"
      rounded="lg"
    />
  )
}

export default GrayBox
