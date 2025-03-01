import 'styled-components'

interface Fonts {
	body: string
}

interface Colors {
	[index: string]: string
}

declare module 'styled-components' {
	export interface DefaultTheme {
		breakpoints: string[]
		colors: Colors
		fonts: Fonts
	}
}
