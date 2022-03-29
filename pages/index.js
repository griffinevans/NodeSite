import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    Button,
    Link,
    useColorModeValue 
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Container m={2}>
		<Box display={{ md:'flex' }}> 
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Griffin Evans
                    </Heading>
                    <p>Android / Java / Linux</p>
                </Box>

                <Box 
                    flexShrink={0} 
                    mt={{ base: 4, md: 0 }} 
                    ml={{ md: 6 }} 
                    align="center"
                >
                    <Image 
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/profile.jpg"
                        alt="Profile Picture"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={< ChevronRightIcon />} colorScheme="red">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
        <Section delay={0.2}>
            <Heading as ="h3" variant="section-title" >
                Bio 
            </Heading>
            <BioSection>
                <BioYear>2001</BioYear>
                Born in Santa Cruz, California.
            </BioSection>
            <BioSection>
                <BioYear></BioYear>
            </BioSection>
        </Section>
        </Container>
    )
}

export default Page
