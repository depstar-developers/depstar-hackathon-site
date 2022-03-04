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
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import Card from './Cards';

const Team = ({ team }) => {
  return (
    <Container maxW={'100%'} pb={32} height={'-moz-max-content'}>
      <Flex
        textAlign={'center'}
        mt={2}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
      >
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
          <chakra.h1
            py={4}
            fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
            fontFamily={'Work Sans'}
            fontWeight={500}
            color={useColorModeValue('gray.700', 'gray.50')}
          >
            {`Team`}
          </chakra.h1>
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: '4', md: '20' }}
          mt={16}
          mx={{ base: 2, md: 16 }}
        >
          {team.map((m) => (
            <Card key={m.name} member={m} />
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default Team;
