import React, { useState } from 'react'
import { createContext } from 'react'



export const CartItem = createContext()


const Context = ({ children }) => {

	const [cart, setCart] = useState([])

	return (
		<CartItem.Provider value={{ cart, setCart }}>
			{children}
		</CartItem.Provider>
	)
}

export default Context