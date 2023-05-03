import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import { CartItem } from '../context';

const Header = () => {

	const { cart } = useContext(CartItem)

	return (
		<div>

			<Navbar bg="primary" variant="dark">
				<Container>
					<Nav>
						<Link to={'/'} style={{
							color: '#fff',
							fontSize: '1.5rem',
							margin: '1rem,',
							textDecoration: 'none',
							marginRight: '2rem'
						}} >Home</Link>

						<div>
							<span style={{
								display: 'flex',
								color: '#ff2',
								fontSize: '1.5rem',
								margin: '1rem,',
								textDecoration: 'none',
								marginRight: '2rem',
								float: 'center'
							}}>context api </span>
						</div>

					</Nav>		<Link to={'/cart'} style={{
						color: '#fff',
						fontSize: '1.5rem',
						margin: '1rem,',
						textDecoration: 'none',
						marginRight: '2rem'
					}} >Cart ({cart.length})</Link>
				</Container>
			</Navbar>
		</div>
	)
}

export default Header

