import {
  Container,
  Stack,
  useColorModeValue,
  Link,
  chakra,
  VisuallyHidden,
} from '@chakra-ui/react';
import {
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaLinkedin,
  FaDev,
} from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Social = ({ socials }) => {
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        rounded={'full'}
        w={20}
        h={20}
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
  return (
    <Container maxW={'80%'} height={{ base: '1vh', md: '8vh' }}>
      <Stack
        alignItems={'center'}
        justifyContent={'center'}
        direction={'row'}
        spacing={{ base: 4, md: 6 }}
      >
        <SocialButton label={'Twitter'} href={socials.twitter}>
          <FaTwitter
            color={useColorModeValue('gray.800', 'gray.100')}
            size={{ base: '3em', md: '3em' }}
          />
        </SocialButton>
        <SocialButton label={'Discord'} href={socials.discord}>
          <FaDiscord
            color={useColorModeValue('gray.800', 'gray.100')}
            size={{ base: '3em', md: '3em' }}
          />
        </SocialButton>
        <SocialButton
          color={useColorModeValue('gray.800', 'gray.100')}
          label={'Instagram'}
          href={socials.instagram}
        >
          <FaInstagram size={{ base: '3em', md: '3em' }} />
        </SocialButton>
        <SocialButton
          color={useColorModeValue('gray.800', 'gray.100')}
          label={'LinkedIn'}
          href={socials.linkedin}
        >
          <FaLinkedin size={{ base: '3em', md: '3em' }} />
        </SocialButton>
        <SocialButton
          color={useColorModeValue('gray.800', 'gray.100')}
          label={'Devpost'}
          href={socials.dev}
        >
          <FaDev size={{ base: '3em', md: '3em' }} />
        </SocialButton>
        <SocialButton
          color={useColorModeValue('gray.800', 'gray.100')}
          label={'Mail'}
          href={socials.email}
        >
          <GrMail size={{ base: '3em', md: '3em' }} />
        </SocialButton>
      </Stack>
    </Container>
  );
};

export default Social;
