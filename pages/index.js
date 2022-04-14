import NextLink from 'next/link'
import { 
	Container, 
    Center,
	Link,
	Box, 
	Heading, 
	Image, 
	Button,
	IconButton,
    HStack,
	useColorModeValue 
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { FaTwitter,FaLinkedin } from 'react-icons/fa'
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
					<p>Computer Programming</p>
				</Box>

				<Box 
					> 
						<Box
						bg={useColorModeValue('purple.100','red.200')}
						>
								<Image 
								m={3}
								maxWidth="100px"
								display="inline-block"
								borderRadius="full"
								src="/images/headshot.jpg"
								alt="Profile Picture"
								/>

								<Center
								bg={useColorModeValue('purple.200','red.100')}
								>
										
										<HStack
										>
											<Link href="https://twitter.com/grfwings" isExternal>
											<IconButton icon={<FaTwitter />}
											colorScheme="transparent"
											>
											</IconButton>	
											</Link>

											<Link href="https://linkedin.com/in/griffinrevans/" isExternal>
											<IconButton icon={<FaLinkedin />}
											colorScheme='transparent'	
											>
											</IconButton>
											</Link>

										</HStack>	
								</Center>
						</Box>
					</Box>
				</Box>

			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					About
				</Heading>
				<Paragraph>
				  Hi! I&apos;m Griffin, a computer science student, and programmer based in Santa Cruz, California.
				</Paragraph>
				<br/>
				<Paragraph>
				  I’m familiar with a variety of programming languages including Java, C/C++, Python, Swift & JavaScript, and technologies like Node.js, React, HTML/CSS, JSON, and Git. My personal projects include Android app development, full-stack website development, and hackathons like CruzHack 2022. I’m passionate about open-source software and I use Linux for my day-to-day work. 
				</Paragraph>
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
								Transferred schools to Cabrillo College
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
