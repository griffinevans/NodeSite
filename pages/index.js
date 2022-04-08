import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    Button,
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
                        src="/images/headshot.jpg"
                        alt="Profile Picture"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About
                </Heading>
                <Paragraph>
			Hi! I&apos;m Griffin, a computer science student and programmer based in Santa Cruz, California.
		</Paragraph>
                <Paragraph>
	    Currently, I’m in my final year at Cabrillo College and will be transferring to SFSU to complete my B.S. in Computer Science this fall, with an expected graduation of Spring 2024. I’ve excelled in classes across the computer science field, including linear algebra, data structures & algorithms, and computer organization, and assembly language. 
		</Paragraph>
                <Paragraph>
	    I’m familiar with a variety of programming languages including Java, C/C++, Python, Swift & JavaScript, and technologies like Node.js, React, HTML/CSS, JSON, and Git. My personal projects include Android app development, full-stack website development, and hackathons like CruzHack 2022. I’m passionate about open-source software and I use Linux for my day-to-day work. 
		</Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/resume.pdf">
                        <Button rightIcon={< ChevronRightIcon />} 
				colorScheme={useColorModeValue('purple','red')}>
                            More information
                        </Button>
                    </NextLink>
                </Box>
            </Section>
        <Section delay={0.2}>
            <Heading as ="h3" variant="section-title" >
                Bio 
            </Heading>
	    <BioSection>
		<BioYear>2022</BioYear>
		Admitted into San Francisco State University, class of 2024
	    </BioSection>
	    <BioSection>
		<BioYear>2019</BioYear>
		Completed GED and began studying Computer Science
	    </BioSection>
	    <BioSection>
		<BioYear>2017</BioYear>
		Dropped out of high school to attend Cabrillo College
	    </BioSection>
	    <BioSection>
		<BioYear>2015</BioYear>
		Started attending Santa Cruz High School
	    </BioSection>
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
