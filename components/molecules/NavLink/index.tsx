import { FC } from 'react'
import { Text } from '../../atoms'

import { Wrapper } from './styles'

interface NavLinkProps {
	name: string
	active?: boolean
}

const NavLink: FC<NavLinkProps> = ({ name, active }) => {
	return (
		<Wrapper>
			<Text color={active ? 'white' : 'rgba(255, 255, 255, 0.48)'}>{name}</Text>
		</Wrapper>
	)
}

export default NavLink
