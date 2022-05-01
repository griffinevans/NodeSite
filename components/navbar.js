import Logo from './logo'
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
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
		<Container
		position="sticky"
		top={0}
		as="nav"
		bg={useColorModeValue('yellow.50', 'gray.800')}
		>
			<Box
			display="flex"
			p={1}
			>
				<Stack 
				flex={1}
				direction='row' 
				align='center'
				>
					<Heading 
					size="2px" 
					letterSpacing={'tighter'}
					>
						<Logo />
					</Heading>

					<Link 
					color={useColorModeValue('gray.800', 'whiteAlpha.900')}
					href="../resume.pdf" isExternal
					>
						Resume
					</Link>
					<Link	
					color={useColorModeValue('gray.800', 'whiteAlpha.900')}	
					href="https://github.com/griffinevans" isExternal>
						GitHub
					</Link>

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
									<Link 
									color={useColorModeValue('gray200', 'whiteAlpha.900')}
									href="../resume.pdf" isExternal
									>
										<MenuItem as={Link}>Resume</MenuItem>
									</Link>
									<Link 
									color={useColorModeValue('gray200', 'whiteAlpha.900')}
									href="https://github.com/griffinevans" isExternal
									>
										<MenuItem as={Link}>GitHub</MenuItem>
									</Link>
								</MenuList>
							</Menu>
						</Box>
					</Box>
				</Stack>
			</Box>
		</Container>
	)
}

export default Navbar
