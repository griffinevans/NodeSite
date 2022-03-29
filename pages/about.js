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
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                </Paragraph>
        </Container>
    )
}

export default Page

