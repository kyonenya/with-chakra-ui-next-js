import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="toggle icon button"
      icon={
        colorMode === 'dark'
          ? <SunIcon />
          : <MoonIcon />
      }
      onClick={toggleColorMode}
    />
  )
}

export default DarkModeSwitch
