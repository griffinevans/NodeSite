import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
	global: props => ({
		body: {
			bg: mode('yellow.50', 'gray.800')(props)
		}
	})
}

const components = {
	Heading: {
		variants: {
			'section-title': {
				textDecoration: 'underline',
				fontSize: 20,
				textUnderlineOffset: 6,
				textDecorationColor: mode('#6667AB','#525252'),
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4
			}
		}
	},
	Link: {
		baseStyle: props => ({
			color: mode('#B08AFF', '#F594B5')(props),
			textUnderlineOffset: 3
		})
	}
}

const fonts = {
	heading: 'Outfit, sans-serif',
	body: 'Outfit, sans-serif',
}

const colors = {

    "purple": {
      "50": "#FFFFFF",
      "100": "#CFB8FF",
      "200": "#B08AFF",
      "300": "#915CFF",
      "400": "#732EFF",
      "500": "#6667AB",
      "600": "#4300CC",
      "700": "#320099",
      "800": "#210066",
      "900": "#110033"
    },
    "yellow": {
      "50": "#FFFFFA",
      "100": "#FFE6B3",
      "200": "#FFD88A",
      "300": "#FFC95C",
      "400": "#FFBA2E",
      "500": "#FFAB00",
      "600": "#CC8900",
      "700": "#996700",
      "800": "#664400",
      "900": "#332200"
    },
    "red": {
      "50": "#FDE8EF",
      "100": "#F9BED2",
      "200": "#F594B5",
      "300": "#F06A98",
      "400": "#EC417A",
      "500": "#E8175D",
      "600": "#EA124B",
      "700": "#8B0E38",
      "800": "#5D0925",
      "900": "#2E0513"
    },
    "green": {
      "50": "#E9FBF5",
      "100": "#C2F5E2",
      "200": "#9BEED0",
      "300": "#74E7BE",
      "400": "#4CE1AB",
      "500": "#25DA99",
      "600": "#1EAE7A",
      "700": "#16835C",
      "800": "#0F573D",
      "900": "#072C1F"
    },
    "blue": {
      "50": "#E5F7FF",
      "100": "#B8E9FF",
      "200": "#8ADBFF",
      "300": "#5CCDFF",
      "400": "#2EBEFF",
      "500": "#00B0FF",
      "600": "#008DCC",
      "700": "#006A99",
      "800": "#004666",
      "900": "#002333"
    },
    "cyan": {
      "50": "#E9F9FB",
      "100": "#C2EFF5",
      "200": "#9AE4EE",
      "300": "#73DAE8",
      "400": "#4CCFE1",
      "500": "#24C5DB",
      "600": "#1D9DAF",
      "700": "#167683",
      "800": "#0F4F57",
      "900": "#07272C"
    },
    "pink": {
      "50": "#FDE8EF",
      "100": "#F9BED2",
      "200": "#F594B5",
      "300": "#F06A98",
      "400": "#EC417A",
      "500": "#E8175D",
      "600": "#BA124B",
      "700": "#8B0E38",
      "800": "#5D0925",
      "900": "#2E0513"
    },
    "gray": {
      "50": "#EFEFF6",
      "100": "#D3D2E5",
      "200": "#B7B4D4",
      "300": "#9B97C4",
      "400": "#7F7AB3",
      "500": "#635DA2",
      "600": "#4F4A82",
      "700": "#3C3861",
      "800": "#282541",
      "900": "#141320"
    }
}
const config = {
	initialColorMode: 'light',
	useSystemColorMode: true
}
const theme = extendTheme({
	config,
	styles,
	components,
	colors,
	fonts
})

export default theme
