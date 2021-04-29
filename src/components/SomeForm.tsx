import { Button, Divider, FormControl, Text, Input, InputGroup, InputLeftAddon, InputLeftElement, Icon, Stack } from '@chakra-ui/react'
import { InfoIcon, EmailIcon, LockIcon } from '@chakra-ui/icons'

const SomeForm = () => {
  return (
    <form action="submit">
      <Stack spacing={4}>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<InfoIcon />} />
            <Input type="name" placeholder="Name" aria-label="Name" />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement children={<EmailIcon />} />
            <Input type="email" placeholder="Email" aria-label="Email" />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement children={<LockIcon />} />
            <Input type="password" placeholder="Password" aria-label="Password" />
          </InputGroup>
        </FormControl>
        <Divider />
        <Button
          type="submit"
          variant="solid"
          colorScheme="teal"
        >
          Submit!
        </Button>
        <Text color="gray" align="center">
          We will never share your email!
        </Text>
      </Stack>
    </form>
  )
}

export default SomeForm
