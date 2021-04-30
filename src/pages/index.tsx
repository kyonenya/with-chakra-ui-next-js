import { Box, useColorMode } from '@chakra-ui/react'
import GrayBox from '../components/GrayBox'
import SomeForm from '../components/SomeForm'
import DarkModeSwitch from '../components/DarkModeSwitch2'
import NavBarWithDropdown from '../components/NavBarWithDropdown'
import BlogArticleList from '../components/BlogArticleList'

const Home = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <DarkModeSwitch />
      <NavBarWithDropdown />
      <BlogArticleList />
    </>
  )
}

export default Home
