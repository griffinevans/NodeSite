import Logo from './logo'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const Navbar = props => {
    
    return (
	<Box
		position="fixed"
		as="nav"
		w="100%"
		bg={useColorModeValue('yellow.50', 'gray.800')}
		css={{ backdropFilter: 'blur(10px)' }}
		zIndex={1}
		{...props}
	>
		<Container
			display="flex"
			p={2}
			maxW="container.md"
			wrap="wrap"
			align="center"
			justify="space-between"
		>
	        	<Stack direction='row' align='center'
	        	>
				<Heading size="2px" letterSpacing={'tighter'}>
					<Logo />
				</Heading>
				<Link color={useColorModeValue('gray.800', 'whiteAlpha.900')}
				    	href="../resume.pdf" isExternal>
				    Resume
	        		</Link>
	        		<Link color={useColorModeValue('gray.800', 'whiteAlpha.900')}				    	href="https://github.com/griffinevans" isExternal>
	        		    GitHub
	        		</Link>
	        	</Stack>
	        	<Box flex={1} align="right">
	        	    <ThemeToggleButton />
	        	    <Box ml={2} display={{base: 'inline-block', md: 'none' }}>
	        	        <Menu>
	        	            <MenuButton 
	        	                as={IconButton} 
	        	                icon={<HamburgerIcon />} 
	        	                variant="outline" 
	        	                aria-label="Options"
	        	            />
	        	            <MenuList>
					<Link color={useColorModeValue('gray200', 'whiteAlpha.900')}
							href="../resume.pdf" isExternal>
						<MenuItem as={Link}>Resume</MenuItem>
					</Link>
					<Link color={useColorModeValue('gray200', 'whiteAlpha.900')}
							href="https://github.com/griffinevans" isExternal>
						<MenuItem as={Link}>GitHub</MenuItem>
			            	 </Link>
	        	            </MenuList>
	        	        </Menu>
	        	    </Box>
			</Box>
		</Container>
        </Box>
    )
}

export default Navbar
