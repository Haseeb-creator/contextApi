import React, { useContext, useEffect, useState } from 'react'
import { CartItem } from '../context';
import SingleProduct from './SingleProduct';
import { Row, Col } from 'react-bootstrap';

const Cart = () => {

	const [total, setTotal] = useState();
	const { cart, setCart } = useContext(CartItem)

	useEffect(() => {
		setTotal(cart?.reduce((acc, curr) => acc + Number(curr.price), 0))

	}, [cart])

	console.log(cart);

	return (
		<div>
			<span>
				mycart
			</span>
			<span>Total : {total}</span>
			<Row className="g-4">
				{cart?.map((prod) => {
					return (
						<Col xs={2} md={3} lg={3} key={prod.id}>
							<SingleProduct key={prod.id} prod={prod} cart={cart} setCart={setCart} />
						</Col>
					)
				})}
			</Row>
		</div>
	)
}

export default Cart