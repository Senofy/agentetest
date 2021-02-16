import React, { FC, ReactNode } from 'react'

import { Wrapper, Navigation, Content } from './styles'

interface PageTemplateProps {
	navigation: ReactNode
}

const PageTemplate: FC<PageTemplateProps> = ({ navigation, children }) => {
	return (
		<Wrapper>
			<Navigation>{navigation}</Navigation>
			<Content>{children}</Content>
		</Wrapper>
	)
}

export default PageTemplate
