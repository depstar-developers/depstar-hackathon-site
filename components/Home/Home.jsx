import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Link,
  keyframes,
  chakra,
} from '@chakra-ui/react';
import Typed from 'react-typed';

const Home = ({ info }) => {
  const mover = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-32px); }
`;

  const Animation = `${mover} infinite 1.5s alternate`;

  return (
    <Container maxW={'80%'} height={'100vh'}>
      <Stack
        align={'center'}
        spacing={{ base: 16, md: 24 }}
        py={{ base: 16, md: 40 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.4}
            fontWeight={600}
            color={useColorModeValue('gray.800', 'gray.100')}
            fontSize={{ base: '3xl', sm: '4xl', lg: '7xl' }}
          >
            <Text as={'span'} position={'relative'}>
              {`${info.TITLE}`}
            </Text>
            <br />
          </Heading>

          <chakra.p
            fontWeight={600}
            fontSize={{ base: '1xl', sm: '2xl', lg: '4xl' }}
            my={4}
          >
            <Typed strings={info.Typed_effect} typeSpeed={80} loop />
          </chakra.p>
          <Text
            fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}
            color={useColorModeValue('gray.700', 'gray.200')}
          >
            {`${info.SHORT_DESCRIPTION}`}
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={600}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}
            >
              <Link
                width={'max-content'}
                href={`${info.HACKERS_REGISTRATION_FORM_LINK}`}
                isExternal
                _hover={{
                  textDecoration: 'none',
                }}
              >
                Register
              </Link>
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Image
            alt={'Hero Image'}
            fit={'fill'}
            w={'50%'}
            h={'auto'}
            animation={Animation}
            src={'/react.png'}
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export default Home;
