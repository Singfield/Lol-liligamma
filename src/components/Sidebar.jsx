import { useState } from 'react'

import profile from '/src/assets/profile.png'
import logo from '/src/assets/logo.png'

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaHome, FaPowerOff } from 'react-icons/fa'
import { HiBeaker } from 'react-icons/hi'

const Container = styled.div`
	position: fixed;
	.active {
		border-right: 4px solid var(--color-primary);
		img {
			filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%)
				contrast(103%);
		}
	}
`

const Button = styled.button`
	background-color: var(--color-secondary);
	border: none;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	margin: 0.5rem 0 0 0.5rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	&::before,
	&::after {
		content: '';
		background-color: var(--color-text);
		height: 2px;
		width: 1rem;
		position: absolute;
		transition: all 0.3s ease;
	}
	&::before {
		top: ${(props) => (props.clicked ? '1.5' : '1rem')};
		transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
	}
	&::after {
		top: ${(props) => (props.clicked ? '1.2' : '1.5rem')};
		transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
	}
`

const SidebarContainer = styled.div`
	background-color: var(--color-blurred-background);
	width: 3.5rem;
	height: 80vh;
	margin-top: 1rem;
	border-radius: 0 30px 30px 0;
	padding: 1rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	position: relative;
`

const Logo = styled.div`
	width: 2rem;
	img {
		width: 100%;
		height: auto;
	}
`

const SlickBar = styled.ul`
	color: var(--color-text);
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--color-blurred-background);
	padding: 2rem 0;
	position: absolute;
	top: 6rem;
	left: 0;
	width: ${(props) => (props.clicked ? '12rem' : '3.5rem')};
	transition: all 0.5s ease;
	border-radius: 0 30px 30px 0;
`

const Item = styled(NavLink)`
	text-decoration: none;
	color: var(--color-primary);
	width: 100%;
	padding: 1rem 0;
	cursor: pointer;
	display: flex;
	padding-left: 1rem;
	
	&:hover {
		border-right: 4px solid var(--color-secondary);
		svg {
			color: var(--color-secondary);
		}
	}
	svg {
		width: 1.8rem;
		height: auto;
	}
`

const Text = styled.span`
	width: ${(props) => (props.clicked ? '100%' : '0')};
	overflow: hidden;
	margin-left: ${(props) => (props.clicked ? '1.5rem' : '0')};
	transition: all 0.3s ease;
`

const Profile = styled.div`
	width: ${(props) => (props.clicked ? '14rem' : '3rem')};
	height: 3rem;
	padding: 0.5rem 1rem;
	/* border: 2px solid var(--color-primary); */
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: ${(props) => (props.clicked ? '9rem' : '0')};
	background-color: var(--color-blurred-background);
	color: var(--color-secondary);
	transition: all 0.3s ease;
	h4 {
		color: var(--color-primary);
	}
	img {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		cursor: pointer;
		&:hover {
			border: 2px solid var(--color-secondary);
			padding: 2px;
		}
	}
`

const Details = styled.div`
	display: ${(props) => (props.clicked ? 'flex' : 'none')};
	justify-content: space-between;
	align-items: center;
`

const Name = styled.div`
	padding: 0 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h4 {
		display: inline-block;
	}
	a {
		font-size: 0.8rem;
		text-decoration: none;
		color: var(--color-Tertiary);
		&:hover {
			text-decoration: underline;
		}
	}
`

const Logout = styled.button`
	border: none;
	width: 2rem;
	height: 2rem;
	background-color: transparent;
	img {
		width: 100%;
		height: auto;
		filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg) brightness(100%)
			contrast(126%);
		transition: all 0.3s ease;
		&:hover {
			border: none;
			padding: 0;
			opacity: 0.5;
		}
	}
`

const Sidebar = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)

	const [profileClick, setprofileClick] = useState(false)
	const handleProfileClick = () => setprofileClick(!profileClick)

	return (
		<Container>
			<Button clicked={click} onClick={() => handleClick()}>
				
			</Button>
			<SidebarContainer>
				<Logo>
					<img src={logo} alt="logo" />
				</Logo>
				<SlickBar clicked={click}>
					<Item onClick={() => setClick(false)} exact activeClassName="active" to="/">
						<FaHome />
						<Text clicked={click}>Home</Text>
					</Item>
					<Item onClick={() => setClick(false)} exact activeClassName="active" to="/MyProject">
						<HiBeaker />
						<Text clicked={click}>My Projects</Text>
					</Item>
				</SlickBar>

				<Profile clicked={profileClick}>
					<img onClick={() => handleProfileClick()} src={profile} alt="Profile" />
					<Details clicked={profileClick}>
						<Name>
							<h4>Liligamma</h4>
							<a href="https://github.com/Liligamma">view&nbsp;profile</a>
						</Name>

						<Logout>
							<FaPowerOff style={{ color: 'white' }} />
						</Logout>
					</Details>
				</Profile>
			</SidebarContainer>
		</Container>
	)
}

export default Sidebar
