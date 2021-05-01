import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  InputGroup,
  Input,
  InputRightElement,
  InputLeftElement,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import {
  ArrowBackIcon,
  CheckIcon,
  CloseIcon,
  CheckCircleIcon,
  SearchIcon,
  TriangleUpIcon,
  TriangleDownIcon,
} from '@chakra-ui/icons';

const Links = ['Dashboard', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={<ArrowBackIcon />}
          aria-label={'Back to Top'}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>

    <InputGroup size="md">
      <InputLeftElement>
        <SearchIcon
          color={useColorModeValue('gray.500', 'gray.500')}
        >
        </SearchIcon>
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Enter Search Word"
        aria-label="Serach Form"
        borderColor={useColorModeValue('gray.300', 'gray.700')}
      />
    </InputGroup>
    
          </HStack>

          <Flex alignItems={'center'}>
            <IconButton
              size={'sm'}
              w={10}
              h={10}
              icon={<CheckIcon />}
              aria-label={'Submit'}
            />
          </Flex>          
        </Flex>
      </Box>
    </>
  );
}

/**
 * @url https://chakra-templates.dev/navigation/navbar
 */
