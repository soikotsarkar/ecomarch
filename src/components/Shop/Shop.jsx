//import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb,getShoppingCart} from '../../utilities/fakedb';
//import { addToDb ,} from '../../utilities/fakedb';
//import { addToDb, getStoredCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
	const [products, setProducts] = useState([]);

const [cart,setCart] = useState([]);


	useEffect( () =>{
		//fetch('https://crud.teamrabbil.com/api/v1ReadProduct')
		fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
		//fetch ('products.json')
		.then(res => res.json())
		.then(data => setProducts(data))
	}, []);

useEffect(()=>{
	const getStoredCart = getShoppingCart();
	for(const id in getStoredCart){
		console.log(id)
		const addedProduct = products.find(product => product.id === id);
		console.log(addedProduct);
	}
},[])

const btnUseToCart= (product)=>{
	//console.log(product);
	//cart.push(product)
	const newCart = [...cart,product];
	setCart(newCart);
	addToDb(product.id)
}

	return (
		<div className='shop-container'>
			<div className='products-container'>
			{
				products.map(product =><Product 
				key={product.id} product={product}	
				btnUseToCart ={btnUseToCart}	
				>
				</Product>)
			}
			</div>
			<div className='cart-container'>
			<Cart cart={cart}></Cart>
			</div>nom 
		</div>
	);
};

export default Shop;