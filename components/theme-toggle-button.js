import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<IconButton aria-label="Toggle theme"
		colorScheme={useColorModeValue('purple', 'red')}
		icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
		onClick={toggleColorMode}
		>
		</IconButton>
	)
}

export default ThemeToggleButton
