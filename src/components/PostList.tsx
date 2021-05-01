import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
    >
      {children}
    </Stack>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'left'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack
          direction={{ base: 'column'}}
          spacing={{ base: 4, md: 2, lg: 8 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>

          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}

//const TestimonialAvatar = ({
//  src,
//  name,
//  title,
//}: {
//  src: string;
//  name: string;
//  title: string;
//}) => {
//  return (
//    <Flex align={'center'} mt={8} direction={'column'}>
//      <Avatar src={src} alt={name} mb={2} />
//      <Stack spacing={-1} align={'center'}>
//        <Text fontWeight={600}>{name}</Text>
//        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
//          {title}
//        </Text>
//      </Stack>
//    </Flex>
//  );
//};

//const TestimonialHeading = ({ children }: { children: ReactNode }) => {
//  return (
//    <Heading as={'h3'} fontSize={'xl'}>
//      {children}
//    </Heading>
//  );
//};
