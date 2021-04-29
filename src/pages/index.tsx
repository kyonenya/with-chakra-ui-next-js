import { Box, useColorMode } from '@chakra-ui/react'
import GrayBox from '../components/GrayBox'
import SomeForm from '../components/SomeForm'
import DarkModeSwitch from '../components/DarkModeSwitch2'

const Home = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <DarkModeSwitch />
      <SomeForm />
    </>
  )
}

export default Home
