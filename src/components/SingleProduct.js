import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const SingleProduct = ({ prod, cart, setCart }) => {
	return (
		<>
			<Card >
				<Card.Img variant="top" src={prod?.image} />
				<Card.Body>
					<Card.Text>
						{prod?.name}
					</Card.Text>
					<Card.Text>
						${prod?.price}
					</Card.Text>
					{cart?.includes(prod) ? (
						<Button style={{
							width: '100%'
						}} size='sm' variant="primary" onClick={() => (
							setCart(cart.filter((c) => c.id !== prod.id))
						)}>remove from Cart</Button>
					) : (
						<Button style={{
							width: '100%'
						}} size='sm' variant="primary" onClick={() => (
							setCart([...cart, prod])
						)}>Add to Cart</Button>
					)}
				</Card.Body>
			</Card>
		</>
	)
}

export default SingleProduct