import React, { useContext, useState } from 'react'
import { faker } from '@faker-js/faker';
import { Col, Row } from 'react-bootstrap';
import SingleProduct from './SingleProduct';
import { CartItem } from '../context';


faker.seed(100)

const Home = () => {

	const { cart, setCart } = useContext(CartItem)

	const productArray = [...Array(20)].map(() => ({
		id: faker.datatype.uuid(),
		name: faker.commerce.productName(),
		price: faker.commerce.price(),
		image: faker.image.image(),

	}))

	const [products] = useState(productArray)
	return (
		<>
			<Row className="g-4">
				{products?.map((prod) => {
					return (
						<Col xs={2} md={3} lg={3} key={prod.id}>
							<SingleProduct key={prod.id} prod={prod} cart={cart} setCart={setCart} />
						</Col>
					)
				})}
			</Row>
		</>
	)
}

export default Home