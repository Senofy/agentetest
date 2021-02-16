import { Fragment } from 'react'
import { Text } from '../components/atoms'
import Head from '../components/Head'
import { NavLink } from '../components/molecules'
import { NavigationBar } from '../components/organisms'

import { PageTemplate } from '../components/templates'
import { SideNav } from './_styles'

const Home = () => {
	return (
		<Fragment>
			<Head title={'Home'} />
			<PageTemplate navigation={<NavigationBar />}>
				<SideNav>
					<Text as={'h2'}>User Settings</Text>
					<NavLink name={'Account'} active />
					<NavLink name={'Privacy & Safety'} />
					<NavLink name={'Log Out'} />
				</SideNav>
			</PageTemplate>
		</Fragment>
	)
}

export default Home
