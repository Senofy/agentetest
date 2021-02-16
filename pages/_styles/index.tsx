import styled from 'styled-components'

export const SideNav = styled.div`
	display: flex;
	flex-direction: column;

	width: 295px;

	> h2 {
		margin-bottom: 20px;
	}

	> :not(:first-child) {
		margin-bottom: 10px;
	}
`

const HomeStylesDefault = () => null
export default HomeStylesDefault
