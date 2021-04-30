import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
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
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
              >
                <TriangleDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          <Flex alignItems={'center'}>
            <IconButton
              size={'md'}
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
