import { Box, useColorMode } from '@chakra-ui/react'
import GrayBox from '../components/GrayBox'
import SomeForm from '../components/SomeForm'
import DarkModeSwitch from '../components/DarkModeSwitch2'
import NavBarWithDropdown from '../components/NavBarWithDropdown'
import NavBarWithSearchForm from '../components/NavBarWithSearchForm'
import BlogArticleList from '../components/BlogArticleList'
import PostList from '../components/PostList'
import TagCard from '../components/TagCard'

const Home = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <DarkModeSwitch />
      <NavBarWithSearchForm />
      <PostList />
    </>
  )
}

export default Home
