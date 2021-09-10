import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
const Layout = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;

`
const Aside = styled.aside`
	height: 100%;
	width: 5%;
`
const Main = styled.main`
	display: flex;

	justify-content: center;
	align-content: center;
	width: 95%;
`

const Default = ({ children }) => {
	return (
		<Layout>
			<Aside>

				<Sidebar />
			</Aside>
			<Main>
				{children}
			</Main>
		</Layout>
	)
}

export default Default
