import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
} from '@chakra-ui/react';

const QCard = (q) => {
  return (
    <AccordionItem
      borderRadius={8}
      bg={useColorModeValue('gray.200', 'gray.700')}
      key={q.label}
    >
      <AccordionButton>
        <Box
          flex="1"
          textAlign="left"
          fontWeight={'medium'}
          fontSize={{ base: '1xl', sm: '3xl', lg: '3xl' }}
        >
          {q.label}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Flex
          boxShadow={'lg'}
          direction={{ base: 'column-reverse', md: 'row' }}
          width={'full'}
          rounded={'xl'}
          p={10}
          justifyContent={'space-between'}
          position={'relative'}
          bg={useColorModeValue('gray.100', 'gray.600')}
        >
          <Flex
            direction={'column'}
            textAlign={'left'}
            justifyContent={'space-between'}
          >
            <chakra.p
              fontWeight={'medium'}
              fontSize={{ base: '1xl', sm: '2xl', lg: '2xl' }}
              pb={4}
            >
              {q.content}
            </chakra.p>
          </Flex>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
};

const Faq = (props) => {
  const { faqs } = props;
  return (
    <Container maxW={'100%'} pb={32} height={'-moz-max-content'}>
      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
      >
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
          <chakra.h1
            py={4}
            fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
            fontFamily={'Work Sans'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}
          >
            {`FAQs`}
          </chakra.h1>
        </Box>
        <Accordion allowMultiple allowToggle>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: '4', md: '20' }}
            mt={16}
            mx={{ base: 2, md: 16 }}
          >
            {faqs.map((q) => (
              <QCard {...q} key={q.label} />
            ))}
          </SimpleGrid>
        </Accordion>
      </Flex>
    </Container>
  );
};
export default Faq;
