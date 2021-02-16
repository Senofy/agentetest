import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 132.5px;
	min-height: 100vh;

	background-color: #121017;
`

export const Navigation = styled.nav`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
`

export const Content = styled.section`
	width: 100%;

	display: flex;
	flex-direction: column;

	margin-top: 20px;

	padding: 0 8.33%;
`
