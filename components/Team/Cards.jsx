import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  chakra,
  VisuallyHidden,
} from '@chakra-ui/react';
import {
  FaGithub,
  FaTwitter,
  FaExternalLinkAlt,
  FaLinkedin,
  FaDev,
} from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      w={6}
      h={6}
      isExternal
      cursor={'pointer'}
      as={Link}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
const Card = ({ member }) => {
  return (
    <Center mt={2}>
      <Box
        maxW={'80%'}
        w={{ base: '100%', sm: '100%', md: '60%' }}
        height={{ base: '264px', sm: '264px', md: '340px' }}
        bg={useColorModeValue('gray.200', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={{ base: 2, sm: 2, md: 8 }}
        textAlign={'center'}
      >
        <Avatar
          size="2xl"
          src={`${member.img}`}
          alt={`${member.name}'s img`}
          mb={{ base: 2, sm: 2, md: 8 }}
          pos={'relative'}
        />
        <Heading fontSize={'1xl'} fontWeight={600}>
          {`${member.name}`}
        </Heading>
        <Text
          fontWeight={600}
          color={'gray.500'}
          mb={{ base: 1, sm: 1, md: 4 }}
        >
          {`${member.role}`}
        </Text>

        <Stack
          mt={8}
          alignContent={'center'}
          justifyContent={'center'}
          direction={'row'}
          spacing={8}
        >
          <SocialButton label={'LinkedIn'} href={member.linkedin}>
            <FaLinkedin
              color={useColorModeValue('gray.800', 'gray.100')}
              size="sm"
            />
          </SocialButton>
          <SocialButton label={'Github'} href={member.github}>
            <FaGithub
              color={useColorModeValue('gray.800', 'gray.100')}
              size="sm"
            />
          </SocialButton>
          <SocialButton label={'Site'} href={member.site}>
            <FaExternalLinkAlt
              color={useColorModeValue('gray.800', 'gray.100')}
              size="sm"
            />
          </SocialButton>
        </Stack>
      </Box>
    </Center>
  );
};
export default Card;
