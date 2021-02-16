import styled from 'styled-components'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'

interface TextProps extends ColorProps, TypographyProps {}

// Paragraph
export const Text = styled.p<TextProps>`
	${color};
	${typography};

	margin: 0;
`

Text.defaultProps = {
	fontFamily: 'body',
	color: 'white',
}
